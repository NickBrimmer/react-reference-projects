# YouTube Clone

## Steps

* create an action creator
* create a handler in our reducer
* create any selector we may need

## What we did

* setup redux
  * create a `store.js` in src
  * create your first reducer folder and file
  * use `createStore` in store.js to create a store
  * export your created store
  * use `Provider` in `index.js` and pass it your store
* setup router
* `Home` page
* `VideoForm`
  * `ADD_VIDEO` action
  * `getVideos` selector
* Videos List
  * `Video` and `Videos`
  * `getVideoThumbnails` selector (https://img.youtube.com/vi/ID_HERE/hqdefault.jpg)
  * getVideoUrls selector
* `VideoDetail` page
* `VideoPlayer`
  * `getVideoUrl` selector (https://www.youtube.com/embed/rks2_ctHuDQ)
  * `DELETE_VIDEO` action
* `CommentForm`
  * comments reducer and combine reducer
  * `ADD_COMMENT` ({ body, videoId })
  * `getCommentsByVideoId` selector
* `VideoComments` (maybe mapStateToProps)
  * `Comment` and `Comments`
* `LatestComments`
  * `getLatestComments` selector
  * add to home page
