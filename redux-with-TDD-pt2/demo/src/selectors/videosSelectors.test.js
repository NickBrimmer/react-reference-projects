import { getVideos, getVideoImages } from './videosSelectors';

describe('videos selectors', () => {
  it('selects videos from state', () => {
    const state = {
      videos: ['rks2_ctHuDQ']
    };

    const videos = getVideos(state);

    expect(videos).toEqual(['rks2_ctHuDQ']);
  });

  it('selects video image urls', () => {
    const state = {
      videos: ['rks2_ctHuDQ']
    };

    const videoImages = getVideoImages(state);

    expect(videoImages).toEqual([
      {
        id: 'rks2_ctHuDQ',
        url: 'https://img.youtube.com/vi/rks2_ctHuDQ/hqdefault.jpg'
      }
    ]);
  });
});
