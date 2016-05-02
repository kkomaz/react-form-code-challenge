import { expect } from '../test_helper';
import registrationFormReducer from '../../src/reducers/registration_form_reducer';
import * as ActionTypes from '../../src/constants/action_types';

describe('registration form reducer', () => {
  it('should return the initial state', () => {
    expect(registrationFormReducer(undefined, {})).to.eql({ response: {} });
  });

  it('SUBMIT_FORM_SUCCESS', () => {
    const payloadResponse = { data: { message: 'Success! Thanks for signing up!' }, status: 201, statusText: 'Created' };
    const action = { type: ActionTypes.SUBMIT_FORM_SUCCESS, payload: payloadResponse };
    expect(registrationFormReducer({}, action)).to.eql({ response: payloadResponse });
  });

  it('SUBMIT_FORM_FAIL', () => {
    const errorResponse = { data: { errors: ['Invalid email.'] }, status: 422, statusText: 'Unprocessable Entity' };
    const action = { type: ActionTypes.SUBMIT_FORM_FAIL, error: errorResponse };
    expect(registrationFormReducer({}, action)).to.eql({ response: errorResponse });
  });
});
