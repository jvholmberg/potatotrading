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
  GET_JWT,
  VALIDATE_JWT,
  REFRESH_JWT,
  DESTROY_JWT,
} from '../constants';


describe('sagas/auth/reducer.js', () => {
  it('returns initial state', () => {
    const actual = reducer(undefined, undefined);
    const expected = { ...getInitialState() };
    expect(actual).toEqual(expected);
  });

  describe('GET_JWT', () => {
    it('returns pending state', () => {
      const action = { type: createAction(GET_JWT, PENDING) };
      const actual = reducer(undefined, action);
      const expected = { ...getInitialState() };
      _.set(expected, `requests.${GET_JWT}`, updateRequest(PENDING, null));
      expect(actual).toEqual(expected);
    });

    it('returns success state', () => {
      const mockResponse = require('../__mocks__/getJwt.json');
      const action = { type: createAction(GET_JWT, SUCCESS), payload: mockResponse };
      const actual = reducer(undefined, action);
      const expected = { ...getInitialState() };
      _.set(expected, 'token', mockResponse);
      _.set(expected, `requests.${GET_JWT}`, updateRequest(SUCCESS, null));
      expect(actual).toEqual(expected);
    });

    it('returns failed state', () => {
      const error = 'error';
      const action = { type: createAction(GET_JWT, FAILED), error };
      const actual = reducer(undefined, action);
      const expected = { ...getInitialState() };
      _.set(expected, `requests.${GET_JWT}`, updateRequest(FAILED, error));
      expect(actual).toEqual(expected);
    });

    it('aborted request is ignored', () => {
      const action = { type: createAction(GET_JWT, ABORTED) };
      const actual = reducer(undefined, action);
      const expected = { ...getInitialState() };
      expect(actual).toEqual(expected);
    });
  });

  describe('VALIDATE_JWT', () => {
    it('returns pending state', () => {
      const action = { type: createAction(VALIDATE_JWT, PENDING) };
      const actual = reducer(undefined, action);
      const expected = { ...getInitialState() };
      _.set(expected, `requests.${VALIDATE_JWT}`, updateRequest(PENDING, null));
      expect(actual).toEqual(expected);
    });

    it('returns success state', () => {
      const mockResponse = require('../__mocks__/validateJwt.json');
      const action = { type: createAction(VALIDATE_JWT, SUCCESS), payload: mockResponse };
      const actual = reducer(undefined, action);
      const expected = { ...getInitialState() };
      _.set(expected, 'token.validUntil', mockResponse.validUntil);
      _.set(expected, 'token.expiresIn', mockResponse.expiresIn);
      _.set(expected, `requests.${VALIDATE_JWT}`, updateRequest(SUCCESS, null));
      expect(actual).toEqual(expected);
    });

    it('returns failed state', () => {
      const error = 'error';
      const action = { type: createAction(VALIDATE_JWT, FAILED), error };
      const actual = reducer(undefined, action);
      const expected = { ...getInitialState() };
      _.set(expected, `requests.${VALIDATE_JWT}`, updateRequest(FAILED, error));
      expect(actual).toEqual(expected);
    });

    it('aborted request is ignored', () => {
      const action = { type: createAction(VALIDATE_JWT, ABORTED) };
      const actual = reducer(undefined, action);
      const expected = { ...getInitialState() };
      expect(actual).toEqual(expected);
    });
  });

  describe('REFRESH_JWT', () => {
    it('returns pending state', () => {
      const action = { type: createAction(REFRESH_JWT, PENDING) };
      const actual = reducer(undefined, action);
      const expected = { ...getInitialState() };
      _.set(expected, `requests.${REFRESH_JWT}`, updateRequest(PENDING, null));
      expect(actual).toEqual(expected);
    });

    it('returns success state', () => {
      const mockResponse = require('../__mocks__/refreshJwt.json');
      const action = { type: createAction(REFRESH_JWT, SUCCESS), payload: mockResponse };
      const actual = reducer(undefined, action);
      const expected = { ...getInitialState() };
      _.set(expected, 'token', mockResponse);
      _.set(expected, `requests.${REFRESH_JWT}`, updateRequest(SUCCESS, null));
      expect(actual).toEqual(expected);
    });

    it('returns failed state', () => {
      const error = 'error';
      const action = { type: createAction(REFRESH_JWT, FAILED), error };
      const actual = reducer(undefined, action);
      const expected = { ...getInitialState() };
      _.set(expected, `requests.${REFRESH_JWT}`, updateRequest(FAILED, error));
      expect(actual).toEqual(expected);
    });

    it('aborted request is ignored', () => {
      const action = { type: createAction(REFRESH_JWT, ABORTED) };
      const actual = reducer(undefined, action);
      const expected = { ...getInitialState() };
      _.set(expected, `requests.${REFRESH_JWT}`, updateRequest(ABORTED, null));
      expect(actual).toEqual(expected);
    });
  });

  describe('DESTROY_JWT', () => {
    const initialRequest = require('../__mocks__/getJwt.json');
    let mockState;

    beforeEach(() => {
      const action = { type: createAction(GET_JWT, SUCCESS), payload: initialRequest };
      mockState = reducer(undefined, action);
    });

    it('returns pending state', () => {
      const action = { type: createAction(DESTROY_JWT, PENDING) };
      const actual = reducer(mockState, action);
      const expected = produce(mockState, draftState => {
        _.set(draftState, `requests.${DESTROY_JWT}`, updateRequest(PENDING, null));
      });
      expect(actual).toEqual(expected);
    });

    it('returns success state', () => {
      const mockResponse = require('../__mocks__/destroyJwt.json');
      const action = { type: createAction(DESTROY_JWT, SUCCESS), payload: mockResponse };
      const actual = reducer(mockState, action);
      const expected = produce(mockState, draftState => {
        _.set(draftState, 'token', getInitialState().token);
        _.set(draftState, 'requests', getInitialState().requests);
        _.set(draftState, `requests.${DESTROY_JWT}`, updateRequest(SUCCESS, null));
      });
      expect(actual).toEqual(expected);
    });

    it('returns failed state', () => {
      const error = 'error';
      const action = { type: createAction(DESTROY_JWT, FAILED), error };
      const actual = reducer(mockState, action);
      const expected = produce(mockState, draftState => {
        _.set(draftState, `requests.${DESTROY_JWT}`, updateRequest(FAILED, error));
      });
      expect(actual).toEqual(expected);
    });

    it('aborted request is ignored', () => {
      const action = { type: createAction(DESTROY_JWT, ABORTED) };
      const actual = reducer(mockState, action);
      const expected = { ...mockState };
      expect(actual).toEqual(expected);
    });
  });
});
