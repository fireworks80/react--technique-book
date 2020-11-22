# Todo app 

node-sass 5.0.0 버전 오류
````
Failed to compile.

./src/components/TodoTemplate.scss (./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!./node_modules/postcss-loader/src??postcss!./node_modules/resolve-url-loader??ref--5-oneOf-6-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./src/components/TodoTemplate.scss)
Error: Node Sass version 5.0.0 is incompatible with ^4.0.0.
````
stack overflow 

: don't install node-sass 5.0.0 yet (major version was just bumped).

- node-sass를 4 버전대로 설치
- dart sass를 이용 (이 방법 사용)

eject를 안해도 sass를 사용할 수 있다.