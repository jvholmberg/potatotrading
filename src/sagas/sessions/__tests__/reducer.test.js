/* eslint-disable global-require */
/* eslint-disable no-undefined */
/* eslint-disable max-lines-per-function */
import _ from 'lodash';
import {
  createRequestAction, SUCCESS, PENDING, FAILED, ABORTED,
} from '../../actionCreator';
import { updateRequest } from '../../reducerCreator';
import reducer, { getInitialState } from '../reducer';
import * as actions from '../actions';


describe('sagas/sessions/reducer.js', () => {
  it('returns initial state', () => {
    const actual = reducer(undefined, undefined);
    const expected = { ...getInitialState() };
    expect(actual).toEqual(expected);
  });

  describe('CREATE_SESSION', () => {
    it('returns pending state', () => {
      const action = { type: createRequestAction(actions.CREATE_SESSION, PENDING) };
      const actual = reducer(undefined, action);
      const expected = { ...getInitialState() };
      _.set(expected, `requests.${actions.CREATE_SESSION}`, updateRequest(PENDING, null));
      expect(actual).toEqual(expected);
    });

    it('returns success state', () => {
      const mockResponse = require('../__mocks__/createSession.json');
      const action = { type: createRequestAction(actions.CREATE_SESSION, SUCCESS), payload: mockResponse };
      const actual = reducer(undefined, action);
      const expected = { ...getInitialState() };
      _.set(expected, 'data', mockResponse);
      _.set(expected, `requests.${actions.CREATE_SESSION}`, updateRequest(SUCCESS, null));
      expect(actual).toEqual(expected);
    });

    it('returns failed state', () => {
      const error = 'error';
      const action = { type: createRequestAction(actions.CREATE_SESSION, FAILED), error };
      const actual = reducer(undefined, action);
      const expected = { ...getInitialState() };
      _.set(expected, `requests.${actions.CREATE_SESSION}`, updateRequest(FAILED, error));
      expect(actual).toEqual(expected);
    });

    it('returns aborted state', () => {
      const action = { type: createRequestAction(actions.CREATE_SESSION, ABORTED) };
      const actual = reducer(undefined, action);
      const expected = { ...getInitialState() };
      _.set(expected, `requests.${actions.CREATE_SESSION}`, updateRequest(ABORTED, null));
      expect(actual).toEqual(expected);
    });
  });

  describe('GET_SESSIONS', () => {
    it('returns pending state', () => {
      const action = { type: createRequestAction(actions.GET_SESSIONS, PENDING) };
      const actual = reducer(undefined, action);
      const expected = { ...getInitialState() };
      _.set(expected, `requests.${actions.GET_SESSIONS}`, updateRequest(PENDING, null));
      expect(actual).toEqual(expected);
    });

    it('returns success state', () => {
      const mockResponse = require('../__mocks__/getSessions.json');
      const action = { type: createRequestAction(actions.GET_SESSIONS, SUCCESS), payload: mockResponse };
      const actual = reducer(undefined, action);
      const expected = { ...getInitialState() };
      _.set(expected, 'data', mockResponse);
      _.set(expected, `requests.${actions.GET_SESSIONS}`, updateRequest(SUCCESS, null));
      expect(actual).toEqual(expected);
    });

    it('returns failed state', () => {
      const error = 'error';
      const action = { type: createRequestAction(actions.GET_SESSIONS, FAILED), error };
      const actual = reducer(undefined, action);
      const expected = { ...getInitialState() };
      _.set(expected, `requests.${actions.GET_SESSIONS}`, updateRequest(FAILED, error));
      expect(actual).toEqual(expected);
    });

    it('returns aborted state', () => {
      const action = { type: createRequestAction(actions.GET_SESSIONS, ABORTED) };
      const actual = reducer(undefined, action);
      const expected = { ...getInitialState() };
      _.set(expected, `requests.${actions.GET_SESSIONS}`, updateRequest(ABORTED, null));
      expect(actual).toEqual(expected);
    });
  });

  describe('GET_SESSION_TYPES', () => {
    it('returns pending state', () => {
      const action = { type: createRequestAction(actions.GET_SESSION_TYPES, PENDING) };
      const actual = reducer(undefined, action);
      const expected = { ...getInitialState() };
      _.set(expected, `requests.${actions.GET_SESSION_TYPES}`, updateRequest(PENDING, null));
      expect(actual).toEqual(expected);
    });

    it('returns success state', () => {
      const mockResponse = require('../__mocks__/getSessionTypes.json');
      const action = { type: createRequestAction(actions.GET_SESSION_TYPES, SUCCESS), payload: mockResponse };
      const actual = reducer(undefined, action);
      const expected = { ...getInitialState() };
      _.set(expected, 'types', mockResponse);
      _.set(expected, `requests.${actions.GET_SESSION_TYPES}`, updateRequest(SUCCESS, null));
      expect(actual).toEqual(expected);
    });

    it('returns failed state', () => {
      const error = 'error';
      const action = { type: createRequestAction(actions.GET_SESSION_TYPES, FAILED), error };
      const actual = reducer(undefined, action);
      const expected = { ...getInitialState() };
      _.set(expected, `requests.${actions.GET_SESSION_TYPES}`, updateRequest(FAILED, error));
      expect(actual).toEqual(expected);
    });

    it('returns aborted state', () => {
      const action = { type: createRequestAction(actions.GET_SESSION_TYPES, ABORTED) };
      const actual = reducer(undefined, action);
      const expected = { ...getInitialState() };
      _.set(expected, `requests.${actions.GET_SESSION_TYPES}`, updateRequest(ABORTED, null));
      expect(actual).toEqual(expected);
    });
  });
});
