import React, { Component } from 'react';

class WordList extends Component {

  render() {
    const { props } = this;
    const { names, handleRemoveItem } = props;

    const nameList = names.map((name, idx) => (
      <li key={name.id} onDoubleClick={() => handleRemoveItem(name.id)}>{name.text}</li>
    ));

    return (
      <ul>{nameList}</ul>
    );
  };
}

export default WordList;