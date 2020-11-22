const { default: randomCharacter } = require('./randomCharacter');

describe('randomCharacter function', () => {
  it('returns a random character', () => {
    const character = randomCharacter();

    expect(character).toEqual(expect.objectContaining({
      image: expect.any(String),
      health: expect.any(Number),
      attack: expect.any(Number),
      experience: expect.any(Number)
    }));
  });
});
