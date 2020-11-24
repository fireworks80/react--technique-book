# Router
## 라우터 적용하기

src/index.js 파일에서 react-router-dom에 내장된 BrowerRouter 컴포넌트를 사용해서 감싸면 된다.

````
import {BrowserRouter} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    // BrowserRouter로 App 컴포넌트를 감싼다
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

````
이 컴포넌트는 웹 어플리케이션에 HTML5 History API를 사용해 페이지를 새로고침하지 않고도 주소를 변경, 현재 주소에 관련된 정보를 props로 쉽게 조회, 사용할 수 있도록 해준다.

## 라우터 사용예시

Route 컴포넌트도 react-router-dom에 내장되어 있음

````
<Route path="주소규칙" component={보여 줄 컴포넌트} />

// App.js
import { Route } from 'react-router-dom';
import Home from './Home';
import About from './About';

function App() {
  return (
    <div>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
    </div>
  );
}

export default App;

````

localhost:3000/about 할 경우 두개의 컴포넌트가 다 나타난다.
/about 경로가 /규칙도 일치하기 때문에 발생 이를 수정하려면 Home을 위한 Route 컴포넌트를 사용할때 **** exact **** props를 true로 설정

### Link 컴포넌트를 이용하여 다른 주소로 이동
Link 컴포넌트를 사용하면 페이지를 새로고침 하지 않고 애플리케이션은 그대로 유지한 상태에서 HTML5 History API를 이용해 페이지 주소만 변경해준다. (react-router-dom에 내장되어 있다)

````
<Link to="주소">내용</Link>
````

### Route 하나로 여러개의 path설정
````
<Route to={['/about', '/info']} component={About} />

// /about, /info 경로에서 About 컴포넌트를 보여준다
````

### URL 파라미터와 쿼리
- 파라미터: /profile/유동적인 값
- 쿼리: /about?details=true

#### 파라미터
````
function App() {
  return (
    <div>
      <ul>
        <li><Link to="/">홈</Link></li>
        <li><Link to="/about">About</Link></li>
        // /velopert라는 파라미터 값을 사용
        <li><Link to="/profile/velopert">velopert 프로파일</Link></li>
      </ul>
      <Route path="/" component={Home} exact={true} />
      <Route path={['/about', '/info']} component={About} />

      // Route 컴포넌트에서 path의 :username 이라는 속성값으로 받는다.
      <Route path="/profile/:username" component={Profile} />
    </div>
  );
}
````

````
const data = {
  velopert: {
    name: '김민준',
    description: '리액트를 좋아하는 개발자'
  },
  gildong: {
    name: '홍길동',
    description: '고전 소설 홍길동 주인공'
  }
};

// props의 match 객체의 params 객체로 받는다.
const Profile = ({match}) => {
  console.log(match);
  const { username } = match.params;
  const profile = data[username];

  if (!profile) {
    return <div>존재하지 않는 사용자</div>
  }

  return (
    <div>
      <h3>{username} ({profile.name})</h3>
    </div>
  );
};

````
#### 쿼리
location 객체에 들어있는 search값에서 조회 할 수 있다.

```` 
// location 객체
// localhost:3000/about?detail=true
{
  "pathname" : "/about",
  "search" : "?detail=true",
  "hash": ""
}
````

쿼리 문자열을 객체로 변활할 때는 qs라는 라이브러리를 사용한다.
**** 쿼리를 사용할 때 쿼리 문자열을 객체로 파싱하는 과정에서 결과 값은 언제나 문자열이다 ****

````
// About.js

import qs from 'qs';

const About = ({location}) => {
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true // 이 설정은 문자열 맨 앞의 ?를 생략합니다.
  });

  const showDetail = query.detail === 'true';

  return (
    <div>
      <h1>소개</h1>
      <p>이 프로젝트는 리액트 라우터 기초를 실습해 보는 예제 프로젝트임.</p>
      {showDetail && <p>detail 값을 true로 설정 하셨군요</p>}
    </div>
  );
 };

export default About;

````