import { actionTypes } from '../_actions/actionTypes';

export function users(state = {}, action) {
  switch (action.type) {
    case actionTypes.GETALL_REQUEST:
      return {
        loading: true
      };
    case actionTypes.GETALL_SUCCESS:
      return {
        items: action.users
      };
    case actionTypes.GETALL_FAILURE:
      return {
        error: action.error
      };
    default:
      return state
  }
}