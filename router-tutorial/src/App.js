import React from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Home from './Home';
import About from './About';

function App() {
  return (
    <div className='App'>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>
      <Route path='/' component={Home} exact={true} />
      <Route path='/about' component={About} />
    </div>
  );
}

export default App;
