/* eslint-disable max-lines-per-function */
import { fromJS } from 'immutable';
import {
  createRequestAction, SUCCESS, PENDING, FAILED, ABORTED,
} from '../../actionCreator';
import { updateRequest } from '../../reducerCreator';
import reducer, { defaultState } from '../reducer';
import * as actions from '../actions';


describe('sagas/users/reducer.js', () => {
  it('returns initial state', () => {
    // eslint-disable-next-line no-undefined
    const actual = reducer(undefined, undefined);
    const expected = defaultState;
    expect(actual).toEqual(expected);
  });

  describe('CREATE_USER', () => {
    it('returns pending state', () => {
      const action = { type: createRequestAction(actions.CREATE_USER, PENDING) };
      // eslint-disable-next-line no-undefined
      const actual = reducer(undefined, action);
      const expected = defaultState.setIn(['requests', actions.CREATE_USER], updateRequest(PENDING, null));
      expect(actual).toEqual(expected);
    });

    it('returns success state', () => {
      // eslint-disable-next-line global-require
      const mockResponse = require('../__mocks__/createUser.json');
      const action = { type: createRequestAction(actions.CREATE_USER, SUCCESS), payload: mockResponse };
      // eslint-disable-next-line no-undefined
      const actual = reducer(undefined, action);
      const expected = defaultState
        .setIn(['requests', actions.CREATE_USER], updateRequest(SUCCESS, null));
      expect(actual).toEqual(expected);
    });

    it('returns failed state', () => {
      const error = 'error';
      const action = { type: createRequestAction(actions.CREATE_USER, FAILED), error };
      // eslint-disable-next-line no-undefined
      const actual = reducer(undefined, action);
      const expected = defaultState.setIn(['requests', actions.CREATE_USER], updateRequest(FAILED, error));
      expect(actual).toEqual(expected);
    });

    it('returns aborted state', () => {
      const action = { type: createRequestAction(actions.CREATE_USER, ABORTED) };
      // eslint-disable-next-line no-undefined
      const actual = reducer(undefined, action);
      const expected = defaultState.setIn(['requests', actions.CREATE_USER], updateRequest(ABORTED, null));
      expect(actual).toEqual(expected);
    });
  });

  describe('GET_MY_USER', () => {
    it('returns pending state', () => {
      const action = { type: createRequestAction(actions.GET_MY_USER, PENDING) };
      // eslint-disable-next-line no-undefined
      const actual = reducer(undefined, action);
      const expected = defaultState.setIn(['requests', actions.GET_MY_USER], updateRequest(PENDING, null));
      expect(actual).toEqual(expected);
    });

    it('returns success state', () => {
      // eslint-disable-next-line global-require
      const mockResponse = require('../__mocks__/getMyUser.json');
      const action = { type: createRequestAction(actions.GET_MY_USER, SUCCESS), payload: mockResponse };
      // eslint-disable-next-line no-undefined
      const actual = reducer(undefined, action);
      const expected = defaultState.withMutations(s => s
        .set('my', fromJS(mockResponse))
        .setIn(['requests', actions.GET_MY_USER], updateRequest(SUCCESS, null)));
      expect(actual).toEqual(expected);
    });

    it('returns failed state', () => {
      const error = 'error';
      const action = { type: createRequestAction(actions.GET_MY_USER, FAILED), error };
      // eslint-disable-next-line no-undefined
      const actual = reducer(undefined, action);
      const expected = defaultState.setIn(['requests', actions.GET_MY_USER], updateRequest(FAILED, error));
      expect(actual).toEqual(expected);
    });

    it('returns aborted state', () => {
      const action = { type: createRequestAction(actions.GET_MY_USER, ABORTED) };
      // eslint-disable-next-line no-undefined
      const actual = reducer(undefined, action);
      const expected = defaultState.setIn(['requests', actions.GET_MY_USER], updateRequest(ABORTED, null));
      expect(actual).toEqual(expected);
    });
  });

  describe('GET_USERS', () => {
    it('returns pending state', () => {
      const action = { type: createRequestAction(actions.GET_USERS, PENDING) };
      // eslint-disable-next-line no-undefined
      const actual = reducer(undefined, action);
      const expected = defaultState.setIn(['requests', actions.GET_USERS], updateRequest(PENDING, null));
      expect(actual).toEqual(expected);
    });

    it('returns success state', () => {
      // eslint-disable-next-line global-require
      const mockResponse = require('../__mocks__/getUsers.json');
      const action = { type: createRequestAction(actions.GET_USERS, SUCCESS), payload: mockResponse };
      // eslint-disable-next-line no-undefined
      const actual = reducer(undefined, action);
      const expected = defaultState.withMutations(s => s
        .set('others', fromJS(mockResponse))
        .setIn(['requests', actions.GET_USERS], updateRequest(SUCCESS, null)));
      expect(actual).toEqual(expected);
    });

    it('returns failed state', () => {
      const error = 'error';
      const action = { type: createRequestAction(actions.GET_USERS, FAILED), error };
      // eslint-disable-next-line no-undefined
      const actual = reducer(undefined, action);
      const expected = defaultState.setIn(['requests', actions.GET_USERS], updateRequest(FAILED, error));
      expect(actual).toEqual(expected);
    });

    it('returns aborted state', () => {
      const action = { type: createRequestAction(actions.GET_USERS, ABORTED) };
      // eslint-disable-next-line no-undefined
      const actual = reducer(undefined, action);
      const expected = defaultState.setIn(['requests', actions.GET_USERS], updateRequest(ABORTED, null));
      expect(actual).toEqual(expected);
    });
  });

  describe('UPDATE_USER', () => {
    it('returns pending state', () => {
      const action = { type: createRequestAction(actions.UPDATE_USER, PENDING) };
      // eslint-disable-next-line no-undefined
      const actual = reducer(undefined, action);
      const expected = defaultState.setIn(['requests', actions.UPDATE_USER], updateRequest(PENDING, null));
      expect(actual).toEqual(expected);
    });

    it('returns success state', () => {
      // eslint-disable-next-line global-require
      const mockResponse = require('../__mocks__/updateUser.json');
      const action = { type: createRequestAction(actions.UPDATE_USER, SUCCESS), payload: mockResponse };
      // eslint-disable-next-line no-undefined
      const actual = reducer(undefined, action);
      const expected = defaultState.withMutations(s => s
        .set('others', fromJS(mockResponse))
        .setIn(['requests', actions.UPDATE_USER], updateRequest(SUCCESS, null)));
      expect(actual).toEqual(expected);
    });

    it('returns failed state', () => {
      const error = 'error';
      const action = { type: createRequestAction(actions.UPDATE_USER, FAILED), error };
      // eslint-disable-next-line no-undefined
      const actual = reducer(undefined, action);
      const expected = defaultState.setIn(['requests', actions.UPDATE_USER], updateRequest(FAILED, error));
      expect(actual).toEqual(expected);
    });

    it('returns aborted state', () => {
      const action = { type: createRequestAction(actions.UPDATE_USER, ABORTED) };
      // eslint-disable-next-line no-undefined
      const actual = reducer(undefined, action);
      const expected = defaultState.setIn(['requests', actions.UPDATE_USER], updateRequest(ABORTED, null));
      expect(actual).toEqual(expected);
    });
  });

  describe('DELETE_USER', () => {
    it('returns pending state', () => {
      const action = { type: createRequestAction(actions.DELETE_USER, PENDING) };
      // eslint-disable-next-line no-undefined
      const actual = reducer(undefined, action);
      const expected = defaultState.setIn(['requests', actions.DELETE_USER], updateRequest(PENDING, null));
      expect(actual).toEqual(expected);
    });

    it('returns success state', () => {
      // eslint-disable-next-line global-require
      const mockResponse = require('../__mocks__/deleteUser.json');
      const action = { type: createRequestAction(actions.DELETE_USER, SUCCESS), payload: mockResponse };
      // eslint-disable-next-line no-undefined
      const actual = reducer(undefined, action);
      const expected = defaultState.setIn(['requests', actions.DELETE_USER], updateRequest(SUCCESS, null));
      expect(actual).toEqual(expected);
    });

    it('returns failed state', () => {
      const error = 'error';
      const action = { type: createRequestAction(actions.DELETE_USER, FAILED), error };
      // eslint-disable-next-line no-undefined
      const actual = reducer(undefined, action);
      const expected = defaultState.setIn(['requests', actions.DELETE_USER], updateRequest(FAILED, error));
      expect(actual).toEqual(expected);
    });

    it('returns aborted state', () => {
      const action = { type: createRequestAction(actions.DELETE_USER, ABORTED) };
      // eslint-disable-next-line no-undefined
      const actual = reducer(undefined, action);
      const expected = defaultState.setIn(['requests', actions.DELETE_USER], updateRequest(ABORTED, null));
      expect(actual).toEqual(expected);
    });
  });
});
