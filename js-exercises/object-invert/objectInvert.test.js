import { objectInvert } from './objectInvert';

describe('objectInvert', () => {
  it('should return an object', () => {
    const obj = {
      hi: 'hi',
    };
    const result = objectInvert(obj);
    expect(Array.isArray(result)).toBe(false);
    expect(typeof result).toBe('object');
  });
  it('should return an object where the keys and values have been switched', () => {
    const obj = {
      x: 'hi',
      y: 'sup',
      z: 'yo',
    };
    const result = objectInvert(obj);
    expect(result).toEqual({ hi: 'x', sup: 'y', yo: 'z' });

    const newObj = {
      a:2, 
      b:4, 
      c: 77, 
      d: 'check', 
      e: {
        p:22, 
        q:33, 
        r: 44
      }
    } 

    const invertedObj = objectInvert(newObj); 
    expect(invertedObj).toEqual({
      '2': 'a',
      '4': 'b',
      '77': 'c',
      check: 'd',
      e: { '22': 'p', '33': 'q', '44': 'r' }
    })

  });
});
