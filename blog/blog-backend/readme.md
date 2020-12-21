# Koa

express 팀이 만든 프레임워크
express는 미들웨어, 라우팅, 템플릿, 피일 호스팅 등과 같은 다양한 기능이 자체적으로 내장되어 있는 반면
Koa는 미들웨어 기능만 갖추고 있고 나머지는 다른 라이브러릴를 적용하여 사용한다.

Koa는 async/await 문법을 정식으로 지원 한다.

app.use는 미들웨어 함수를 애플리케이션에 등록한다.

````
(ctx, next) => {}
````
이와 같은 구조로 되어 있다.

ctx: 웹 요청과 응답에 관한 정보를 지닌다.
next: 현재 처리중인 미들웨어의 다음 미들웨어를 호출하는 함수.(미들웨어를 등록하고 next 함수를 호출 하지 않으면 그 다음 미들웨어를 처리하지 않는다.)
      next 함수는 Promise를 반환한다. next함수가 반환하는 Primise는 다음에 처리해야 할 미들웨어가 끝나야 완료 된다.

````
const Koa = require('koa');

const app = new Koa();

app.use((ctx,  next) => {
  console.log(ctx.url);
  console.log(1);
  
  if (ctx.query.authorized !== '1') {
    ctx.status = 401;
    return;
  }
  next().then(() => {
    console.log('END');  
  });

});

// async / await 으로 변경

app.use(async (ctx,  next) => {
  console.log(ctx.url);
  console.log(1);
  
  if (ctx.query.authorized !== '1') {
    ctx.status = 401;
    return;
  }
  <!-- next().then(() => {
    console.log('END');  
  }); -->

  await next();
  console.log('END');

});

app.use((ctx,  next) => {
  console.log(2);
  next();
});

app.use((ctx) => {
  ctx.body = 'hello world';
});

app.listen(4000, () => {
  console.log('listening to port 4000');
});

// 결과: 

/?authorized=1
1
2
END // 두번째 미들웨어의 2가 호출 된 뒤 첫번째 미들웨어의 next가 반환한 Primise가 실행 된다

```