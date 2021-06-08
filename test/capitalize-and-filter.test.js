import { capitalizeAndFilter } from './capitalize-and-filter';

describe('takes an array of strings capitalize all strings and filter out any string that starts with the letter F/f', () => {
  it('', () => {
    const input = ['lizard', 'frog', 'bee', 'snail'];
    const output = capitalizeAndFilter(input);
    expect(output).toEqual(['Lizard', 'Bee', 'Snail']);
  });
});
