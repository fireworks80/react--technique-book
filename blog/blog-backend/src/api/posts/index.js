const Router = require("koa-router");
const posts = new Router();
const postsCtrl = require("./posts.ctrl");

const printInfo = (ctx) => {
  ctx.body = {
    method: ctx.method,
    path: ctx.path,
    params: ctx.params,
  };
};

// posts.get("/", postsCtrl.checkObjectId, postsCtrl.list);
// posts.post("/", postsCtrl.checkObjectId, postsCtrl.write);
// posts.get("/:id", postsCtrl.checkObjectId, postsCtrl.read);
// posts.delete("/:id", postsCtrl.checkObjectId, postsCtrl.remove);
// // posts.put("/:id", postsCtrl.replace);
// posts.patch("/:id", postsCtrl.checkObjectId, postsCtrl.update);

posts.get("/", postsCtrl.list);
posts.post("/", postsCtrl.write);

const post = new Router();
post.get("/", postsCtrl.read);
post.delete("/", postsCtrl.remove);
post.patch("/", postsCtrl.update);

posts.use("/:id", postsCtrl.checkObjectId, post.routes());

module.exports = posts;
