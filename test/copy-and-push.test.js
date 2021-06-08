import { copyAndPush } from './copy-and-push';

describe('returns a new array with all the items in the original array and a new item pushed to the end', () => {
  it('return original array with number pushed to the end', () => {
    const input = [1, 2, 3];
    const output = copyAndPush(input, 4);
    expect(output).toEqual([1, 2, 3, 4]);
  });

  it('returns the original array', () => {
    const input = [1, 2, 3];
    const output = copyAndPush(input, 4);
    expect(input).toEqual([1, 2, 3]);
    expect(output).toEqual([1, 2, 3, 4]);
  });
});
