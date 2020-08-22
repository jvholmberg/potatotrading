/* eslint-disable global-require */
/* eslint-disable no-undefined */
/* eslint-disable max-lines-per-function */
import produce from 'immer';
import _ from 'lodash';
import {
  createAction,
  updateRequest,
} from '../../sagaHelpers';

import {
  SUCCESS,
  PENDING,
  FAILED,
  ABORTED,
} from '../../constants';
import reducer, { getInitialState } from '../reducer';
import {
  GET_TOKEN,
  VALIDATE_TOKEN,
  REFRESH_TOKEN,
  DESTROY_TOKEN,
} from '../constants';


describe('sagas/auth/reducer.js', () => {
  it('returns initial state', () => {
    const actual = reducer(undefined, undefined);
    const expected = { ...getInitialState() };
    expect(actual).toEqual(expected);
  });

  describe('GET_TOKEN', () => {
    it('returns pending state', () => {
      const action = { type: createAction(GET_TOKEN, PENDING) };
      const actual = reducer(undefined, action);
      const expected = { ...getInitialState() };
      _.set(expected, `requests.${GET_TOKEN}`, updateRequest(PENDING, null));
      expect(actual).toEqual(expected);
    });

    it('returns success state', () => {
      const mockResponse = require('../__mocks__/getToken.json');
      const action = { type: createAction(GET_TOKEN, SUCCESS), payload: mockResponse };
      const actual = reducer(undefined, action);
      const expected = { ...getInitialState() };
      _.set(expected, 'token', mockResponse);
      _.set(expected, `requests.${GET_TOKEN}`, updateRequest(SUCCESS, null));
      expect(actual).toEqual(expected);
    });

    it('returns failed state', () => {
      const error = 'error';
      const action = { type: createAction(GET_TOKEN, FAILED), error };
      const actual = reducer(undefined, action);
      const expected = { ...getInitialState() };
      _.set(expected, `requests.${GET_TOKEN}`, updateRequest(FAILED, error));
      expect(actual).toEqual(expected);
    });

    it('aborted request is ignored', () => {
      const action = { type: createAction(GET_TOKEN, ABORTED) };
      const actual = reducer(undefined, action);
      const expected = { ...getInitialState() };
      expect(actual).toEqual(expected);
    });
  });

  describe('VALIDATE_TOKEN', () => {
    it('returns pending state', () => {
      const action = { type: createAction(VALIDATE_TOKEN, PENDING) };
      const actual = reducer(undefined, action);
      const expected = { ...getInitialState() };
      _.set(expected, `requests.${VALIDATE_TOKEN}`, updateRequest(PENDING, null));
      expect(actual).toEqual(expected);
    });

    it('returns success state', () => {
      const mockResponse = require('../__mocks__/validateToken.json');
      const action = { type: createAction(VALIDATE_TOKEN, SUCCESS), payload: mockResponse };
      const actual = reducer(undefined, action);
      const expected = { ...getInitialState() };
      _.set(expected, 'token.validUntil', mockResponse.validUntil);
      _.set(expected, 'token.expiresIn', mockResponse.expiresIn);
      _.set(expected, `requests.${VALIDATE_TOKEN}`, updateRequest(SUCCESS, null));
      expect(actual).toEqual(expected);
    });

    it('returns failed state', () => {
      const error = 'error';
      const action = { type: createAction(VALIDATE_TOKEN, FAILED), error };
      const actual = reducer(undefined, action);
      const expected = { ...getInitialState() };
      _.set(expected, `requests.${VALIDATE_TOKEN}`, updateRequest(FAILED, error));
      expect(actual).toEqual(expected);
    });

    it('aborted request is ignored', () => {
      const action = { type: createAction(VALIDATE_TOKEN, ABORTED) };
      const actual = reducer(undefined, action);
      const expected = { ...getInitialState() };
      expect(actual).toEqual(expected);
    });
  });

  describe('REFRESH_TOKEN', () => {
    it('returns pending state', () => {
      const action = { type: createAction(REFRESH_TOKEN, PENDING) };
      const actual = reducer(undefined, action);
      const expected = { ...getInitialState() };
      _.set(expected, `requests.${REFRESH_TOKEN}`, updateRequest(PENDING, null));
      expect(actual).toEqual(expected);
    });

    it('returns success state', () => {
      const mockResponse = require('../__mocks__/refreshToken.json');
      const action = { type: createAction(REFRESH_TOKEN, SUCCESS), payload: mockResponse };
      const actual = reducer(undefined, action);
      const expected = { ...getInitialState() };
      _.set(expected, 'token', mockResponse);
      _.set(expected, `requests.${REFRESH_TOKEN}`, updateRequest(SUCCESS, null));
      expect(actual).toEqual(expected);
    });

    it('returns failed state', () => {
      const error = 'error';
      const action = { type: createAction(REFRESH_TOKEN, FAILED), error };
      const actual = reducer(undefined, action);
      const expected = { ...getInitialState() };
      _.set(expected, `requests.${REFRESH_TOKEN}`, updateRequest(FAILED, error));
      expect(actual).toEqual(expected);
    });

    it('aborted request is ignored', () => {
      const action = { type: createAction(REFRESH_TOKEN, ABORTED) };
      const actual = reducer(undefined, action);
      const expected = { ...getInitialState() };
      _.set(expected, `requests.${REFRESH_TOKEN}`, updateRequest(ABORTED, null));
      expect(actual).toEqual(expected);
    });
  });

  describe('DESTROY_TOKEN', () => {
    const initialRequest = require('../__mocks__/getToken.json');
    let mockState;

    beforeEach(() => {
      const action = { type: createAction(GET_TOKEN, SUCCESS), payload: initialRequest };
      mockState = reducer(undefined, action);
    });

    it('returns pending state', () => {
      const action = { type: createAction(DESTROY_TOKEN, PENDING) };
      const actual = reducer(mockState, action);
      const expected = produce(mockState, draftState => {
        _.set(draftState, `requests.${DESTROY_TOKEN}`, updateRequest(PENDING, null));
      });
      expect(actual).toEqual(expected);
    });

    it('returns success state', () => {
      const mockResponse = require('../__mocks__/destroyToken.json');
      const action = { type: createAction(DESTROY_TOKEN, SUCCESS), payload: mockResponse };
      const actual = reducer(mockState, action);
      const expected = produce(mockState, draftState => {
        _.set(draftState, 'token', getInitialState().token);
        _.set(draftState, 'requests', getInitialState().requests);
        _.set(draftState, `requests.${DESTROY_TOKEN}`, updateRequest(SUCCESS, null));
      });
      expect(actual).toEqual(expected);
    });

    it('returns failed state', () => {
      const error = 'error';
      const action = { type: createAction(DESTROY_TOKEN, FAILED), error };
      const actual = reducer(mockState, action);
      const expected = produce(mockState, draftState => {
        _.set(draftState, `requests.${DESTROY_TOKEN}`, updateRequest(FAILED, error));
      });
      expect(actual).toEqual(expected);
    });

    it('aborted request is ignored', () => {
      const action = { type: createAction(DESTROY_TOKEN, ABORTED) };
      const actual = reducer(mockState, action);
      const expected = { ...mockState };
      expect(actual).toEqual(expected);
    });
  });
});
