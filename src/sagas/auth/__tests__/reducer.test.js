/* eslint-disable global-require */
/* eslint-disable no-undefined */
/* eslint-disable max-lines-per-function */
import produce from 'immer';
import _ from 'lodash';
import {
  createRequestAction, SUCCESS, PENDING, FAILED, ABORTED,
} from '../../actionCreator';
import { updateRequest } from '../../reducerCreator';
import reducer, { getInitialState } from '../reducer';
import * as actions from '../actions';


describe('sagas/auth/reducer.js', () => {
  it('returns initial state', () => {
    const actual = reducer(undefined, undefined);
    const expected = { ...getInitialState() };
    expect(actual).toEqual(expected);
  });

  describe('GET_JWT', () => {
    it('returns pending state', () => {
      const action = { type: createRequestAction(actions.GET_JWT, PENDING) };
      const actual = reducer(undefined, action);
      const expected = { ...getInitialState() };
      _.set(expected, `requests.${actions.GET_JWT}`, updateRequest(PENDING, null));
      expect(actual).toEqual(expected);
    });

    it('returns success state', () => {
      const mockResponse = require('../__mocks__/getJwt.json');
      const action = { type: createRequestAction(actions.GET_JWT, SUCCESS), payload: mockResponse };
      const actual = reducer(undefined, action);
      const expected = { ...getInitialState() };
      _.set(expected, 'token', mockResponse);
      _.set(expected, `requests.${actions.GET_JWT}`, updateRequest(SUCCESS, null));
      expect(actual).toEqual(expected);
    });

    it('returns failed state', () => {
      const error = 'error';
      const action = { type: createRequestAction(actions.GET_JWT, FAILED), error };
      const actual = reducer(undefined, action);
      const expected = { ...getInitialState() };
      _.set(expected, `requests.${actions.GET_JWT}`, updateRequest(FAILED, error));
      expect(actual).toEqual(expected);
    });

    it('aborted request is ignored', () => {
      const action = { type: createRequestAction(actions.GET_JWT, ABORTED) };
      const actual = reducer(undefined, action);
      const expected = { ...getInitialState() };
      expect(actual).toEqual(expected);
    });
  });

  describe('VALIDATE_JWT', () => {
    it('returns pending state', () => {
      const action = { type: createRequestAction(actions.VALIDATE_JWT, PENDING) };
      const actual = reducer(undefined, action);
      const expected = { ...getInitialState() };
      _.set(expected, `requests.${actions.VALIDATE_JWT}`, updateRequest(PENDING, null));
      expect(actual).toEqual(expected);
    });

    it('returns success state', () => {
      const mockResponse = require('../__mocks__/validateJwt.json');
      const action = { type: createRequestAction(actions.VALIDATE_JWT, SUCCESS), payload: mockResponse };
      const actual = reducer(undefined, action);
      const expected = { ...getInitialState() };
      _.set(expected, 'token.validUntil', mockResponse.validUntil);
      _.set(expected, 'token.expiresIn', mockResponse.expiresIn);
      _.set(expected, `requests.${actions.VALIDATE_JWT}`, updateRequest(SUCCESS, null));
      expect(actual).toEqual(expected);
    });

    it('returns failed state', () => {
      const error = 'error';
      const action = { type: createRequestAction(actions.VALIDATE_JWT, FAILED), error };
      const actual = reducer(undefined, action);
      const expected = { ...getInitialState() };
      _.set(expected, `requests.${actions.VALIDATE_JWT}`, updateRequest(FAILED, error));
      expect(actual).toEqual(expected);
    });

    it('aborted request is ignored', () => {
      const action = { type: createRequestAction(actions.VALIDATE_JWT, ABORTED) };
      const actual = reducer(undefined, action);
      const expected = { ...getInitialState() };
      expect(actual).toEqual(expected);
    });
  });

  describe('REFRESH_JWT', () => {
    it('returns pending state', () => {
      const action = { type: createRequestAction(actions.REFRESH_JWT, PENDING) };
      const actual = reducer(undefined, action);
      const expected = { ...getInitialState() };
      _.set(expected, `requests.${actions.REFRESH_JWT}`, updateRequest(PENDING, null));
      expect(actual).toEqual(expected);
    });

    it('returns success state', () => {
      const mockResponse = require('../__mocks__/refreshJwt.json');
      const action = { type: createRequestAction(actions.REFRESH_JWT, SUCCESS), payload: mockResponse };
      const actual = reducer(undefined, action);
      const expected = { ...getInitialState() };
      _.set(expected, 'token', mockResponse);
      _.set(expected, `requests.${actions.REFRESH_JWT}`, updateRequest(SUCCESS, null));
      expect(actual).toEqual(expected);
    });

    it('returns failed state', () => {
      const error = 'error';
      const action = { type: createRequestAction(actions.REFRESH_JWT, FAILED), error };
      const actual = reducer(undefined, action);
      const expected = { ...getInitialState() };
      _.set(expected, `requests.${actions.REFRESH_JWT}`, updateRequest(FAILED, error));
      expect(actual).toEqual(expected);
    });

    it('aborted request is ignored', () => {
      const action = { type: createRequestAction(actions.REFRESH_JWT, ABORTED) };
      const actual = reducer(undefined, action);
      const expected = { ...getInitialState() };
      _.set(expected, `requests.${actions.REFRESH_JWT}`, updateRequest(ABORTED, null));
      expect(actual).toEqual(expected);
    });
  });

  describe('DESTROY_JWT', () => {
    const initialRequest = require('../__mocks__/getJwt.json');
    let mockState;

    beforeEach(() => {
      const action = { type: createRequestAction(actions.GET_JWT, SUCCESS), payload: initialRequest };
      mockState = reducer(undefined, action);
    });

    it('returns pending state', () => {
      const action = { type: createRequestAction(actions.DESTROY_JWT, PENDING) };
      const actual = reducer(mockState, action);
      const expected = produce(mockState, draftState => {
        _.set(draftState, `requests.${actions.DESTROY_JWT}`, updateRequest(PENDING, null));
      });
      expect(actual).toEqual(expected);
    });

    it('returns success state', () => {
      const mockResponse = require('../__mocks__/destroyJwt.json');
      const action = { type: createRequestAction(actions.DESTROY_JWT, SUCCESS), payload: mockResponse };
      const actual = reducer(mockState, action);
      const expected = produce(mockState, draftState => {
        _.set(draftState, `requests.${actions.DESTROY_JWT}`, updateRequest(SUCCESS, null));
      });
      expect(actual).toEqual(expected);
    });

    it('returns failed state', () => {
      const error = 'error';
      const action = { type: createRequestAction(actions.DESTROY_JWT, FAILED), error };
      const actual = reducer(mockState, action);
      const expected = produce(mockState, draftState => {
        _.set(draftState, `requests.${actions.DESTROY_JWT}`, updateRequest(FAILED, error));
      });
      expect(actual).toEqual(expected);
    });

    it('aborted request is ignored', () => {
      const action = { type: createRequestAction(actions.DESTROY_JWT, ABORTED) };
      const actual = reducer(mockState, action);
      const expected = { ...mockState };
      expect(actual).toEqual(expected);
    });
  });
});
