import React from 'react';
import MyComponent from './MyComponent';

class App extends React.Component {

  goToBottom = () => {
    // this.scrollBox 는 MyComponent이므로
    // MyComponent가 갖는 scrollToBottom 메서드를 호출 가능 하다.
    this.scrollBox.scrollToBottom();
  };

  // scrollBox라는 프로퍼티에 MyComponent ref 달기
  setRef = ref => this.scrollBox = ref;

  render() {
    const { goToBottom, setRef } = this;
    return ( 
      <div className = "App">
        <MyComponent ref={this.setRef} />
        <button onClick={goToBottom}>go to bottom</button>
      </div>
    );
  }
}

export default App;