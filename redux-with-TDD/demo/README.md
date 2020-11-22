# Redux

* install babel-node and redux
* redux in isolation
  * createStore
  * getState
  * dispatch
  * subscribe
* configure redux
  * create store
  * devtools
  * Provider in index
* count state
  * `INCREMENT` and `DECREMENT`
  * `getCount`
* dogs state
  * `ADD_DOG`, `UPDATE_DOG`, `DELETE_DOG`
  * `getDogs`, `getDogByName`, `getDogsByAge`, `getAverageDogAge`
* words
  * create store with array of words
    * `ADD_WORD` action
    * `getWords` selector
    * `DELETE_WORD` action
  * include search in state
    * `UPDATE_SEARCH` action
    * `getDefinition` selector
  * include searchDefinition in state
    * `UPDATE_SEARCH_DEFINITION` action
    * `getWordByDefinition` selector
  * updating data
    * `UPDATE_DEFINITION` action
  * derive data
    * `getAverageWordLength` selector
    * `getAverageDefinitionLength` selector
    * `getMostCommonDefinitionWord` selector
