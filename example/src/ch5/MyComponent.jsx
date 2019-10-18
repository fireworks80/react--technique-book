import React, { Component } from 'react';

class MyComponent extends Component {
  
  scrollToBottom = () => {
    const { scrollHeight, clientHeight } = this.box;
    this.box.scrollTop = scrollHeight - clientHeight;
  };

  setRef = ref => this.box = ref; 

  render() {
    const style = {
      border: '1px solid black',
      height: '300px',
      width: '300px',
      overflow: 'auto',
      position: 'relative'
    };

    const innerStyle = {
      width: '100%',
      height: '650px',
      background: 'linear-gradient(white, black)'
    };

    const { setRef } = this;

    return (
      <div
      style={style}
      ref={setRef}
      >
        <div style={innerStyle}></div>
      </div>
    )
  }
}

export default MyComponent;