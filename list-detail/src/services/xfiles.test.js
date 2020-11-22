import { fetchCharacters } from './xfiles';

describe('xfiles api', () => {
  it('can fetch a list of characters', () => {
    // like window
    // eslint-disable-next-line no-undef
    global.fetch = () => Promise.resolve({
      json: () => Promise.resolve({
        results: [
          {
            name: 'test character 1',
            description: 'my description',
            image: 'https://my-image.png'
          },
          {
            name: 'test character 2',
            description: 'my character',
            image: 'https://vignette.wikia.nocookie.net/x-files/images/e/e5/Maxresdefault.jpg/revision/latest/scale-to-width-down/180?cb=20180322223652'
          }
        ]
      })
    });


    return fetchCharacters()
      .then(characters => {
        expect(characters).toEqual([
          {
            name: 'test character 1',
            description: 'my description',
            image: 'https://my-image.png'
          },
          {
            name: 'test character 2',
            description: 'my character',
            image: 'http://www.placecage.com/c/200/300'
          }
        ]);
      });
  });
});
