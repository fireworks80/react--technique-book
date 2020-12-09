import { Route, Switch } from 'react-router-dom';
import PostListPage from './pages/PostListPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import WritePage from './pages/WritePage';
import PostPage from './pages/PostPage';

function App() {
  return (
    <Switch>
      <Route exact component={PostListPage} path={['/@:username', '/']} />
      <Route exact component={LoginPage} path="/login" />
      <Route exact component={RegisterPage} path="/register" />
      <Route exact component={WritePage} path="/write" />
      <Route exact component={PostPage} path="/@:username/:postId" />
    </Switch>
  );
}

export default App;
