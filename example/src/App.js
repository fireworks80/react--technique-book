import React, {
  Component
} from 'react';
// import IterationApplyClass from './ch6/IterationApplyClass';
import LifeCycle from './ch7/LifeCycle';
import ErrorBoundary from './ch7/ErrorBoundary';

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
        <button onClick={this.handleClick}>random color</button>
        <ErrorBoundary>
          <LifeCycle color={this.state.color}></LifeCycle>
        </ErrorBoundary> 
      </div>
    );
  }
}

export default App;