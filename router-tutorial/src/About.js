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