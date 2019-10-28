import React, { Component } from 'react';
import Input from './InputComponent';
import WordList from './WordList';

class IterationApplyClass extends Component {
  state = {
    names: [
      { id: 1, text: '눈사람' },
      { id: 2, text: '얼음' },
      { id: 3, text: '눈' }
    ],
    value: ''
  };

  inputComp;
  listComp;

  handleChange = e => {
    this.setState({
      value: e.target.value
    });
  };

  handleAddWord = () => {
    const { state } = this;
    const { names } = state;

    const newData = {
      id: names.length + 1,
      text: state.value
    };
    this.setState(beforeState => {
      return {
        names: [...beforeState.names, newData],
        value: ''
      };
    });
  };

  handleRemoveListItem = (id) => {
    // console.log('here');
    console.log(id);
    //stateㅇㅔ서 해당 id 가 있는 아이를 제외한 나머지를 찾는다
    // 찾은 요소들을 다시 state에 넣는다.
    const { names } = this.state;
    
    // console.log(this.listComp.id);

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

  setRef = ref => {
    this.inputComp = ref;
    // console.log(this.inputComp);
  }

  setListRef = ref => {
    this.listComp = ref;
    console.log(this.listComp);
  }

  render() {
    const { state, handleChange, handleKeyDown, handleAddWord, handleRemoveListItem, setRef,setListRef } = this;
    const { names, value } = state;

    return (
      <>
        <p>
          <Input 
            ref={setRef} 
            handleKeyDown={handleKeyDown} 
            value={value} 
            handleChange={handleChange} />
          <button onClick={handleAddWord}>add</button>
        </p>
        <WordList ref={setListRef} handleRemoveItem={handleRemoveListItem} names={names} />
      </>
    );
  }
}

export default IterationApplyClass;
