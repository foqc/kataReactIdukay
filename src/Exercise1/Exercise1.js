import React, { Component } from 'react';

export class Exercise1 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  calculo = (mat) => {
    let matriz = mat.map(arr => {
      return [...arr];
    });

    let i, j;
    for (i = 0; i < matriz.length; i++) {
      for (j = 0; j < matriz.length; j++) {
        if (matriz[i][j] === 'S' || matriz[i][j] === 'I' || matriz[i][j] === 0) {
          matriz[i][j] = 'x';
        }
      }
    }

    return matriz;
  }

  makeSquares(array) {
    return array.map((item, i) => {
      return (
        <button key={i} className="square" style={{ color: item === 'x' ? 'red' : '' }}>{item}</button>
      );
    });
  }

  render() {
    const input = [
      ['I', 0, 1],
      [1, 0, 1],
      [1, 0, 'S']
    ];

    const matrixSolution = this.calculo(input);

    return (
      <div className="container">
        <div className="matrix-container">
          <div className="square-container">
            <div className="element-container">
              <h1>Entrada</h1>
              {input.map((item, i) => <div key={i} className="board-row">{this.makeSquares(item)}</div>)}
            </div>
          </div>
          <div className="square-container">
            <div className="element-container">
              <h1>Salida</h1>
              {matrixSolution.map((item, i) => <div key={i} className="board-row">{this.makeSquares(item)}</div>)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Exercise1;
