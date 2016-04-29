import axios from 'axios';
import * as ActionTypes from '../constants/action_types';
import * as Api from '../constants/api_routes';

export function registerEmail(props){
  const url = `${Api.ROOT_URL}/${Api.NEWSLETTER}`;

  return function(dispatch){
    axios.post(url, props)
      .then((response) => {
        dispatch(registerEmailSuccess(response));
      })
      .catch((error) => {
        dispatch(registerEmailError(error));
      });
  };
}

function registerEmailSuccess(response) {
  return {
    type: ActionTypes.SUBMIT_FORM_SUCCESS,
    payload: response,
  };
}

function registerEmailError(response) {
  return {
    type: ActionTypes.SUBMIT_FORM_FAIL,
    error: response,
  };
}
