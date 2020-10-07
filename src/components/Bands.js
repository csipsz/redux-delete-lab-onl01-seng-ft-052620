import React, { Component } from 'react';
import Band from './Band'

class Bands extends Component {

    renderBands = () => this.props.bands.map((band) => <Band id={band.id} name={band.name} delete={this.props.delete}/>)

  render() {
    return(
      <div>
          <ul>
            {this.renderBands()}
          </ul>
      </div>
    );
  }
};

export default Bands;