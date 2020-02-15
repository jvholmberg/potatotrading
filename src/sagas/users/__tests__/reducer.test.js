/* eslint-disable max-lines-per-function */
import { fromJS } from 'immutable';
import {
  createRequestAction, SUCCESS, PENDING, FAILED, ABORTED,
} from '../../actionCreator';
import { updateRequest } from '../../reducerCreator';
import reducer, { defaultState } from '../reducer';
import * as actions from '../actions';


describe('sagas/auth/reducer.js', () => {
  it('returns initial state', () => {
    // eslint-disable-next-line no-undefined
    const actual = reducer(undefined, undefined);
    const expected = defaultState;
    expect(actual).toEqual(expected);
  });

  describe('GET_JWT', () => {
    it('returns pending state', () => {
      const action = { type: createRequestAction(actions.GET_JWT, PENDING) };
      // eslint-disable-next-line no-undefined
      const actual = reducer(undefined, action);
      const expected = defaultState.setIn(['requests', actions.GET_JWT], updateRequest(PENDING, null));
      expect(actual).toEqual(expected);
    });

    it('returns success state', () => {
      // eslint-disable-next-line global-require
      const mockResponse = require('../__mocks__/getJwt.json');
      const action = { type: createRequestAction(actions.GET_JWT, SUCCESS), payload: mockResponse };
      // eslint-disable-next-line no-undefined
      const actual = reducer(undefined, action);
      const expected = defaultState.withMutations(s => s
        .set('token', fromJS(mockResponse))
        .setIn(['requests', actions.GET_JWT], updateRequest(SUCCESS, null)));
      expect(actual).toEqual(expected);
    });

    it('returns failed state', () => {
      const error = 'error';
      const action = { type: createRequestAction(actions.GET_JWT, FAILED), error };
      // eslint-disable-next-line no-undefined
      const actual = reducer(undefined, action);
      const expected = defaultState.setIn(['requests', actions.GET_JWT], updateRequest(FAILED, error));
      expect(actual).toEqual(expected);
    });

    it('returns aborted state', () => {
      const action = { type: createRequestAction(actions.GET_JWT, ABORTED) };
      // eslint-disable-next-line no-undefined
      const actual = reducer(undefined, action);
      const expected = defaultState.setIn(['requests', actions.GET_JWT], updateRequest(ABORTED, null));
      expect(actual).toEqual(expected);
    });
  });

  describe('VALIDATE_JWT', () => {
    it('returns pending state', () => {
      const action = { type: createRequestAction(actions.VALIDATE_JWT, PENDING) };
      // eslint-disable-next-line no-undefined
      const actual = reducer(undefined, action);
      const expected = defaultState.setIn(['requests', actions.VALIDATE_JWT], updateRequest(PENDING, null));
      expect(actual).toEqual(expected);
    });

    it('returns success state', () => {
      // eslint-disable-next-line global-require
      const mockResponse = require('../__mocks__/validateJwt.json');
      const action = { type: createRequestAction(actions.VALIDATE_JWT, SUCCESS), payload: mockResponse };
      // eslint-disable-next-line no-undefined
      const actual = reducer(undefined, action);
      const expected = defaultState.withMutations(s => s
        .setIn(['token', 'validUntil'], fromJS(mockResponse.validUntil))
        .setIn(['token', 'expiresIn'], fromJS(mockResponse.expiresIn))
        .setIn(['requests', actions.VALIDATE_JWT], updateRequest(SUCCESS, null)));
      expect(actual).toEqual(expected);
    });

    it('returns failed state', () => {
      const error = 'error';
      const action = { type: createRequestAction(actions.VALIDATE_JWT, FAILED), error };
      // eslint-disable-next-line no-undefined
      const actual = reducer(undefined, action);
      const expected = defaultState.setIn(['requests', actions.VALIDATE_JWT], updateRequest(FAILED, error));
      expect(actual).toEqual(expected);
    });

    it('returns aborted state', () => {
      const action = { type: createRequestAction(actions.VALIDATE_JWT, ABORTED) };
      // eslint-disable-next-line no-undefined
      const actual = reducer(undefined, action);
      const expected = defaultState.setIn(['requests', actions.VALIDATE_JWT], updateRequest(ABORTED, null));
      expect(actual).toEqual(expected);
    });
  });

  describe('REFRESH_JWT', () => {
    it('returns pending state', () => {
      const action = { type: createRequestAction(actions.REFRESH_JWT, PENDING) };
      // eslint-disable-next-line no-undefined
      const actual = reducer(undefined, action);
      const expected = defaultState.setIn(['requests', actions.REFRESH_JWT], updateRequest(PENDING, null));
      expect(actual).toEqual(expected);
    });

    it('returns success state', () => {
      // eslint-disable-next-line global-require
      const mockResponse = require('../__mocks__/refreshJwt.json');
      const action = { type: createRequestAction(actions.REFRESH_JWT, SUCCESS), payload: mockResponse };
      // eslint-disable-next-line no-undefined
      const actual = reducer(undefined, action);
      const expected = defaultState.withMutations(s => s
        .set('token', fromJS(mockResponse))
        .setIn(['requests', actions.REFRESH_JWT], updateRequest(SUCCESS, null)));
      expect(actual).toEqual(expected);
    });

    it('returns failed state', () => {
      const error = 'error';
      const action = { type: createRequestAction(actions.REFRESH_JWT, FAILED), error };
      // eslint-disable-next-line no-undefined
      const actual = reducer(undefined, action);
      const expected = defaultState.setIn(['requests', actions.REFRESH_JWT], updateRequest(FAILED, error));
      expect(actual).toEqual(expected);
    });

    it('returns aborted state', () => {
      const action = { type: createRequestAction(actions.REFRESH_JWT, ABORTED) };
      // eslint-disable-next-line no-undefined
      const actual = reducer(undefined, action);
      const expected = defaultState.setIn(['requests', actions.REFRESH_JWT], updateRequest(ABORTED, null));
      expect(actual).toEqual(expected);
    });
  });

  describe('DESTROY_JWT', () => {
    let mockState;

    beforeAll(() => {
      // eslint-disable-next-line global-require
      const mockResponse = require('../__mocks__/getJwt.json');
      const action = { type: createRequestAction(actions.GET_JWT, SUCCESS), payload: mockResponse };
      // eslint-disable-next-line no-undefined
      mockState = reducer(undefined, action);
    });

    it('returns pending state', () => {
      const action = { type: createRequestAction(actions.DESTROY_JWT, PENDING) };
      // eslint-disable-next-line no-undefined
      const actual = reducer(undefined, action);
      const expected = defaultState.setIn(['requests', actions.DESTROY_JWT], updateRequest(PENDING, null));
      expect(actual).toEqual(expected);
    });

    it('returns success state', () => {
      // eslint-disable-next-line global-require
      const mockResponse = require('../__mocks__/destroyJwt.json');
      const action = { type: createRequestAction(actions.DESTROY_JWT, SUCCESS), payload: mockResponse };
      // eslint-disable-next-line no-undefined
      const actual = reducer(mockState, action);
      const expected = defaultState.setIn(['requests', actions.DESTROY_JWT], updateRequest(SUCCESS, null));
      expect(actual).toEqual(expected);
    });

    it('returns failed state', () => {
      const error = 'error';
      const action = { type: createRequestAction(actions.DESTROY_JWT, FAILED), error };
      // eslint-disable-next-line no-undefined
      const actual = reducer(undefined, action);
      const expected = defaultState.setIn(['requests', actions.DESTROY_JWT], updateRequest(FAILED, error));
      expect(actual).toEqual(expected);
    });

    it('returns aborted state', () => {
      const action = { type: createRequestAction(actions.DESTROY_JWT, ABORTED) };
      // eslint-disable-next-line no-undefined
      const actual = reducer(undefined, action);
      const expected = defaultState.setIn(['requests', actions.DESTROY_JWT], updateRequest(ABORTED, null));
      expect(actual).toEqual(expected);
    });
  });
});
