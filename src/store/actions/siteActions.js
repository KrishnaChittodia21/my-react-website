import API from '../../utils/api';

export const getPosts = (skip) => {
  return dispatch => {
    API.getSitePost(skip, res => {
      dispatch({
        type: 'GOT_SITE_POSTS',
        payload: res.data,
        skip: skip
      })
    })
  }
}