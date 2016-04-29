import * as ActionTypes from '../constants/action_types';

const INITIAL_STATE = { response: {} };

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case ActionTypes.SUBMIT_FORM_SUCCESS:
      return { ...state, response: action.payload };
    case ActionTypes.SUBMIT_FORM_FAIL:
      return { ...state, response: action.error };
    default:
      return state;
  }
}
