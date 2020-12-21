let postId = 1;

const posts = [
  {
    id: 1,
    title: "ㅈㅔ목",
    body: "내용",
  },
];

// 포스트 작성
// POST /api/posts
// {title, body}

exports.write = (ctx) => {
  // REST API의 request body는 ctx.request.body로 조회 가능
  const { title, body } = ctx.request.body;
  postId += 1;
  const post = { id: postId, title, body };
  posts.push(post);
  ctx.body = post;
};

// 포스트 조회
// GET /api/posts
exports.list = (ctx) => {
  ctx.body = posts;
};

// 특정 포트스 조회
// GET /api/posts/:id
exports.read = (ctx) => {
  const { id } = ctx.params;
  const post = posts.find((p) => p.id.toString() === id);
  if (!post) {
    ctx.status = 404;
    ctx.body = {
      message: "포스트가 존재 하지 않음",
    };
    return;
  }

  ctx.body = post;
};

// 특정 포스트 제거
// DELETE /api/posts/:id
exports.remove = (ctx) => {
  const { id } = ctx.params;
  const index = posts.findIndex((p) => p.id.toString() === id);

  if (index === -1) {
    ctx.status = 404;
    ctx.body = {
      message: "포스트가 존재 하지 않습니다",
    };
    return;
  }
  posts.splice(index, 1);
  ctx.status = 204; // No Content
};

// 포스트 수정(교체)
// PUT /api/posts/:id
// {title, body}
