require("dotenv").config();
const Koa = require("koa");
const Router = require("koa-router");
const bodyParser = require("koa-bodyparser");
const api = require("./api");
const mongoose = require("mongoose");

const { PORT, MONGO_URI } = process.env;
const app = new Koa();
const router = new Router();
// const createFakeData = require('./createFakeData');

mongoose
  .connect(MONGO_URI, { useNewUrLParser: true, useFindAndModify: false })
  .then(() => {
    console.log("Connected to MongoDB");
    // createFakeData();
  })
  .catch((e) => {
    console.error(e);
  });


router.use("/api", api.routes());



app.use(bodyParser());
app.use(router.routes()).use(router.allowedMethods());

router.get("/", (ctx) => {
  ctx.body = "home";
});

router.get("/about/:name?", (ctx) => {
  const { name } = ctx.params;
  ctx.body = name ? `${name}의 소개` : "소개";
});

router.get("/posts", (ctx) => {
  const { id } = ctx.query;
  ctx.body = id ? `포스트 #${id}` : "포스트 아이디가 없습니다";
});

const port = PORT || 4000;
app.listen(port, () => {
  console.log("listening to port " + port);
});
