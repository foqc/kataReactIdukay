import React from 'react';
import { shallow } from 'enzyme';
import Exercise2 from '../Exercise2';

describe('Exercise2', () => {
  let component;
  let instance;

  beforeEach(() => {
    component = shallow(<Exercise2 />);
    instance = component.instance();
  });

  describe('on instance', () => {
    it('should defined state', () => {
      expect(instance.state).toEqual({});
    });
  });

  describe('Example 2', () => {
    fit('deberia retornarme una matriz con el camino ', () => {
      const matrix_5_5 = [
        ['I', 0, 0, 1, 'S'],
        [1, 0, 1, 1, 0],
        [1, 0, 0, 1, 0],
        [0, 0, 1, 0, 0],
        [1, 0, 0, 0, 0]
      ];

      const salida = instance.solucion(matrix_5_5);

      expect(salida[0]).toEqual(['x', 'x', 0, 1, 'x']);
      expect(salida[1]).toEqual([1, 'x', 1, 1, 'x']);
      expect(salida[2]).toEqual([1, 'x', 0, 1, 'x']);
      expect(salida[3]).toEqual([0, 'x', 1, 0, 'x']);
      expect(salida[4]).toEqual([1, 'x', 'x', 'x', 'x']);

    });
  });

});
