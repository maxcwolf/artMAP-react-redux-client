import axios from 'axios';
import { authHeader } from '../_helpers';
import axios from 'axios';
import { actionTypes } from './actionTypes';
import {
  getAuthToken,
  getPostsNextPage,
  getPaginationByTagName,
} from '../../store/rootReducer';
import API_URL from '../_constants/apiUrl';

export const fetchPosts = () => (dispatch, getState) => {
  dispatch({type: FETCH_POSTS_START});

  const authToken = getAuthToken(getState());
  const nextPage = getPostsNextPage(getState());
  const url = `${API_URL}/posts`

  return axios({
    method: 'GET',
    url,
    headers: authHeader()
  })
  .then(({data}) => {
    console.log('successfully fetched posts', data);
    dispatch({
      type: FETCH_POSTS_SUCCESS,
      payload: data.posts,
    })
  })
  .catch(response => {
    console.log('fetch posts failed', response);
    dispatch({
      type: FETCH_POSTS_FAILURE,
    })
  });
}
