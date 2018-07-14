import React, { Component } from 'react';

export class Exercise1 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  calculo = (matriz) => {
    //console.log("MATRIZW", matriz)
    let i, j;
    for (i = 0; i < matriz.length; i++) {
      for (j = 0; j < matriz.length; j++) {
        if (matriz[i][j] == 'S' || matriz[i][j] == 'I' || matriz[i][j] == 0) {
          matriz[i][j] = 'x';
        }
      }
    }
    console.log("MATRIZW", matriz)

    return matriz;
  }

  render() {
    return (
      <div className="container">
        Exercise1 page
      </div>
    );
  }
}

export default Exercise1;
