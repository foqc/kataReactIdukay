import React from 'react';
import { shallow } from 'enzyme';
import Exercise1 from '../Exercise1';

describe('Exercise1', () => {
  let component;
  let instance;

  beforeEach(() => {
    component = shallow(<Exercise1 />);
    instance = component.instance();
  });

  describe('on instance', () => {
    it('should defined state', () => {
      expect(instance.state).toEqual({});
    });
  });

  describe('Example 1', () => {
    fit('deberia retornarme una matriz con el camino ', () => {
      const matrix_3_3 = [
        ['I', 0, 1],
        [1, 0, 1],
        [1, 0, 'S']
      ];

      const salida = instance.calculo(matrix_3_3);

      expect(salida[0]).toEqual(['x', 'x', 1]);
      expect(salida[1]).toEqual([1, 'x', 1]);
      expect(salida[2]).toEqual([1, 'x', 'x']);

    });
  });
});
