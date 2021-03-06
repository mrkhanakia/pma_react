export const FETCH_TAGS = 'FETCH_TAGS';
export const FILTER_TAGS = 'FILTER_TAGS';

// export const SELECT_TAG = 'SELECT_TAG';

import { TagHelper } from '../helpers'


export function fetchTags(data) {
  var request = TagHelper.index();
  return {
    type: FETCH_TAGS,
    payload: request
  };
}


export function filterTags(data) {
  return {
    type: FILTER_TAGS,
    payload: data
  };
}


// export function selectTag(tag) {
//   return {
//     type: SELECT_TAG,
//     payload: tag
//   };
// }
