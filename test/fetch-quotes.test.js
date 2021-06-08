import { fetchQuotes } from './fetch-quotes';

describe('use the futurama quote api to return a single quote with the format', () => {
  it('uses the furturama api to return a quote', async () => {
    const expected = {
      name: expect.any(String),
      text: expect.any(String),
      image: expect.any(String)
    };
    const actual = await fetchQuotes();
    expect(actual).toEqual(expected);
  });
});

  

  
