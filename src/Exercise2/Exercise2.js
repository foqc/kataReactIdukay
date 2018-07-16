import React, { Component } from 'react';

class Exercise2 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  sePuedeMover = (matriz, i, j) => {
    if (i >= 0 && i < matriz.length && j >= 0 && j < matriz.length
      && (matriz[i][j] === 0 || matriz[i][j] === 'I' || matriz[i][j] === 'S')) {
      return true;
    }
    return false;
  };

  mover = (matriz, solucion, i, j) => {
    if (i >= 0 && i < matriz.length && j >= 0 && j < matriz.length
      && matriz[i][j] === 'S') {
      solucion[i][j] = 'x';
      return true;
    }


    if (this.sePuedeMover(matriz, i, j)) {
      solucion[i][j] = 'x';

      if (this.mover(matriz, solucion, i + 1, j)) {
        return true;
      }
      if (this.mover(matriz, solucion, i, j + 1)) {
        return true;
      }
      if (this.mover(matriz, solucion, i - 1, j)) {
        return true;
      }
      if (this.mover(matriz, solucion, i, j - 1)) {
        return true;
      }

      solucion[i][j] = matriz[i][j] === 0 ? 0 : 1;
      return false;
    }

    return false;
  }

  solucion = (matriz) => {
    this.mover(matriz, matriz, 0, 0);
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
      ['I', 0, 0, 1, 'S'],
      [1, 0, 1, 1, 0],
      [1, 0, 0, 1, 0],
      [0, 0, 1, 0, 0],
      [1, 0, 0, 0, 0]
    ];
    let inputOriginal = input.map(arr => {
      return [...arr];
    });

    const matrixSolution = this.solucion(input);

    return (
      <div className="container">
        <div className="matrix-container">
          <div className="square-container">
            <div className="element-container">
              <h1>Entrada</h1>
              {inputOriginal.map((item, i) => <div key={i} className="board-row">{this.makeSquares(item)}</div>)}
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

export default Exercise2;
