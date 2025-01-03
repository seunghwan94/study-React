import React, { Component } from 'react';

class PropsInClassPractice extends Component {
  
  render() {
    return (
      <>
        <h1>{`${this.props.name}`}</h1>
        <h2>{`${this.props.name} ${this.props.target} `}</h2>
      </>
    );
  }
}

export default PropsInClassPractice;
