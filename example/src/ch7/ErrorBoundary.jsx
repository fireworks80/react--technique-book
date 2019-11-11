import React, { Component } from 'react';

class ErrorBoundary extends Component {
  state = {
    error: false
  };

  componentDidCatch(error, info) {
    this.setState({
      error: true
    });
    console.log({ error, info });
  }

  render() {
    const {state} = this;
    return (
      <>
      {state.error ? (
        <p><em>에러 발생</em></p>
      ) : (this.props.children)}
      </>
    );
  }
}

export default ErrorBoundary;