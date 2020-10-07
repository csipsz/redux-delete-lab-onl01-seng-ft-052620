import React, { Component } from 'react';

class Band extends Component {

  render() {
    return(
      <div>
        <li>{this.props.name}</li>
        <button onClick={() => {this.props.delete(this.props.id)}}>X</button>
      </div>
    );
  }
};


export default Band;
