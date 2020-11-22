const { getVideoIds, getVideoThumbnails } = require('./videoSelectors');

describe('video selectors', () => {
  it('returns a list of videos from state', () => {
    const state = {
      videoIds: ['1234', '3456', '5678']
    };

    const videoIds = getVideoIds(state);

    expect(videoIds).toEqual([
      '1234',
      '3456',
      '5678'
    ]);
  });

  it('returns a list of video thumbnail urls', () => {
    const state = {
      videoIds: ['1234', '2345', '3456']
    };

    const thumbnailUrls = getVideoThumbnails(state);

    expect(thumbnailUrls).toEqual([
      { url: 'https://img.youtube.com/vi/1234/default.jpg', id: '1234' },
      { url: 'https://img.youtube.com/vi/2345/default.jpg', id: '2345' },
      { url: 'https://img.youtube.com/vi/3456/default.jpg', id: '3456' }
    ]);
  });
});
