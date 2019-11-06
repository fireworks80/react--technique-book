import React, {
  Component
} from 'react';
// import IterationApplyClass from './ch6/IterationApplyClass';
import LifeCycle from './ch7/LifeCycle';

function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

class App extends Component {
  state = {
    color: '#000'
  }

  handleClick = () => {
    this.setState({
      color: getRandomColor()
    });
  };

  render() {
    return ( 
      <div>
      <button onClick = {this.handleClick}>random color</button><LifeCycle color = {this.state.color}></LifeCycle>
      </div>
    );
  }
}

export default App;