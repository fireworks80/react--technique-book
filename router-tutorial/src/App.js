import { Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Profile from './Profile';

function App() {
  return (
    <div>
      <ul>
        <li><Link to="/">홈</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/profile/velopert">velopert 프로파일</Link></li>
        <li><Link to="/profile/gildong">gildong 프로파일</Link></li>
      </ul>
      <Route path="/" component={Home} exact={true} />
      <Route path={['/about', '/info']} component={About} />
      <Route path="/profile/:username" component={Profile} />
    </div>
  );
}

export default App;
