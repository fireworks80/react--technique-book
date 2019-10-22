import React, { Component } from 'react';

class IterationApplyClass extends Component {
  state = {
    names: [
      { id: 1, text: '눈사람' },
      { id: 2, text: '얼음' },
      { id: 3, text: '눈' }
    ],
    inputValue: ''
  };

  handleChange = e => {
    // console.log(e.target.value);
    this.setState({ inputValue: e.target.value });
  };

  handleAddWord = () => {
    const { names, inputValue } = this.state;

    const newData = {
      id: names.length + 1,
      text: inputValue
    };
    this.setState(beforeState => {
      return {
        names: [...beforeState.names, newData],
        inputValue: ''
      };
    });
  };

  handleRemoveListItem = (id) => {
    // console.log(id);
    //stateㅇㅔ서 해당 id 가 있는 아이를 제외한 나머지를 찾는다
    // 찾은 요소들을 다시 state에 넣는다.
    const { names } = this.state;

    const filterdArr = names.filter((name, idx) => name.id !== id);
    
    this.setState({
      names: filterdArr
    });
  };

  handleKeyDown = (e) => {
    // console.log(e.keyCode);
    const ENTER = 13;

    e.keyCode === ENTER && this.handleAddWord();
  };

  render() {
    const { state, handleChange, handleAddWord, handleRemoveListItem, handleKeyDown } = this;
    const { names, inputValue } = state;

    const namesList = names.map((name, idx) => (
      <li key={name.id} onDoubleClick={() => handleRemoveListItem(name.id)}>{name.text}</li>
    ));

    return (
      <>
        <p>
          <input onChange={handleChange} value={inputValue} onKeyDown={handleKeyDown} type='text' />
          <button onClick={handleAddWord}>add</button>
        </p>
        <ul>{namesList}</ul>
      </>
    );
  }
}

export default IterationApplyClass;
