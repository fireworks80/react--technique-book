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

  render() {
    const { state, handleChange, handleAddWord } = this;
    const { names, inputValue } = state;

    const namesList = names.map((name, idx) => (
      <li key={name.id}>{name.text}</li>
    ));

    return (
      <>
        <p>
          <input onChange={handleChange} value={inputValue} type='text' />
          <button onClick={handleAddWord}>add</button>
        </p>
        <ul>{namesList}</ul>
      </>
    );
  }
}

export default IterationApplyClass;
