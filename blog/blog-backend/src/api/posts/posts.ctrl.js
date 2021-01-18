const Post = require("../../models/post");
const mongoose = require("mongoose");
// 포스트 작성
// POST /api/posts
// {
//    title: '제목',
//    body: '내용',
//    tags: ['tag1', 'tag2'],
// }

const { ObjectId } = mongoose.Types;

exports.checkObjectId = (ctx, next) => {
  const { id } = ctx.params;
  if (!ObjectId.isValid(id)) {
    ctx.status = 400;
    return;
  }
  return next();
};

exports.write = async (ctx) => {
  // REST API의 request body는 ctx.request.body로 조회 가능
  const { title, body, tags } = ctx.request.body;
  const post = new Post({ title, body, tags });

  try {
    await post.save();
    ctx.body = post;
  } catch (e) {
    ctx.throw(500, e);
  }
};

// 포스트 조회
// GET /api/posts
exports.list = async (ctx) => {
  const page = parseInt(ctx.query.page || '1', 10);

  if (page < 1) {
    ctx.status = 400;
    return;
  }

  try {
    const posts = await Post.find()
                            .sort({_id: -1})
                            .limit(10)
                            .skip((page - 1) * 10)
                            .exec();

    const postCount = await Post.countDocuments().exec();                            
    ctx.set('Last-Post', Math.ceil(postCount / 10));
    ctx.body = posts.map(post => post.toJSON())
                    .map(post => ({
                      ...post,
                      body: post.body.length < 200 ? post.body : `${post.body.slice(0, 200)}...`
                    }));
  } catch (e) {
    ctx.throw(500, e);
  }
};

// 특정 포트스 조회
// GET /api/posts/:id
exports.read = async (ctx) => {
  const { id } = ctx.params;
  try {
    const post = await Post.findById(id).exec();

    if (!post) {
      ctx.status = 404;
      return;
    }

    ctx.body = post;
  } catch (e) {
    ctx.throw(500, e);
  }
};

// 특정 포스트 제거
// DELETE /api/posts/:id
exports.remove = async (ctx) => {
  const { id } = ctx.params;
  try {
    await Post.findByIdAndRemove(id).exec();
    ctx.status = 204; // No Content 성공은 했지만 응답할 데이터 없음
  } catch (e) {
    ctx.throw(500, e);
  }
};

// 포스트 수정(교체)
// PUT /api/posts/:id
// {title, body}

exports.replace = (ctx) => {};

// 포스트 수정(특정 필드 변경)
// PATCH /api/posts/:id
// {title, body}

exports.update = async (ctx) => {
  const { id } = ctx.params;

  try {
    const post = await Post.findByIdAndUpdate(id, ctx.request.body, {
      new: true, //이 값을 설정하면 업데이트된 데이터를 반환
    }).exec();

    if (!post) {
      ctx.status = 404;
      return;
    }
    ctx.body = post;
  } catch (e) {
    ctx.throw(500, e);
  }
};
