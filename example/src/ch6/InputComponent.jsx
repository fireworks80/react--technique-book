import React, { Component } from 'react';

class Input extends Component {

  render() {    
    // console.log(this.props);
    return (
      <input value={this.props.value} onKeyDown={(e) => this.props.handleKeyDown(e)} onChange={e => this.props.handleChange(e)} type="text" />
    );
  };
}



export default Input;