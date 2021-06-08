import { getName } from './name-property';

describe('returns the name property of an object', () => {
  it('returns the name spot from name property', () => {
    const input = { name: 'spot', age: 5, weight: '20 lbs' };
    const output = getName(input);
    expect(output).toEqual('spot');
  });

  it('returns the name Aang from name property', () => {
    const input = { _id: '5cf5679a915ecad153ab68c9', name: 'Aang' };
    const output = getName(input);
    expect(output).toEqual('Aang');
  });
});
