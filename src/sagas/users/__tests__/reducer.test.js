/* eslint-disable global-require */
/* eslint-disable no-undefined */
/* eslint-disable max-lines-per-function */
import _ from 'lodash';
import {
  createAction,
  updateRequest
} from '../../sagaHelpers';
import {
  SUCCESS,
  PENDING,
  FAILED,
  ABORTED,
} from '../../constants';
import reducer, { getInitialState } from '../reducer';
import {
  CREATE_USER,
  GET_MY_USER,
  GET_USERS,
  UPDATE_USER,
  DELETE_USER,
} from '../constants';


describe('sagas/users/reducer.js', () => {
  it('returns initial state', () => {
    const actual = reducer(undefined, undefined);
    const expected = { ...getInitialState() };
    expect(actual).toEqual(expected);
  });

  describe('CREATE_USER', () => {
    it('returns pending state', () => {
      const action = { type: createAction(CREATE_USER, PENDING) };
      const actual = reducer(undefined, action);
      const expected = { ...getInitialState() };
      _.set(expected, `requests.${CREATE_USER}`, updateRequest(PENDING, null));
      expect(actual).toEqual(expected);
    });

    it('returns success state', () => {
      const mockResponse = require('../__mocks__/createUser.json');
      const action = { type: createAction(CREATE_USER, SUCCESS), payload: mockResponse };
      const actual = reducer(undefined, action);
      const expected = { ...getInitialState() };
      _.set(expected, `requests.${CREATE_USER}`, updateRequest(SUCCESS, null));
      expect(actual).toEqual(expected);
    });

    it('returns failed state', () => {
      const error = 'error';
      const action = { type: createAction(CREATE_USER, FAILED), error };
      const actual = reducer(undefined, action);
      const expected = { ...getInitialState() };
      _.set(expected, `requests.${CREATE_USER}`, updateRequest(FAILED, error));
      expect(actual).toEqual(expected);
    });

    it('aborted request is ignored', () => {
      const action = { type: createAction(CREATE_USER, ABORTED) };
      const actual = reducer(undefined, action);
      const expected = { ...getInitialState() };
      _.set(expected, `requests.${CREATE_USER}`, updateRequest(ABORTED, null));
      expect(actual).toEqual(expected);
    });
  });

  describe('GET_MY_USER', () => {
    it('returns pending state', () => {
      const action = { type: createAction(GET_MY_USER, PENDING) };
      const actual = reducer(undefined, action);
      const expected = { ...getInitialState() };
      _.set(expected, `requests.${GET_MY_USER}`, updateRequest(PENDING, null));
      expect(actual).toEqual(expected);
    });

    it('returns success state', () => {
      const mockResponse = require('../__mocks__/getMyUser.json');
      const action = { type: createAction(GET_MY_USER, SUCCESS), payload: mockResponse };
      const actual = reducer(undefined, action);
      const expected = { ...getInitialState() };
      _.set(expected, 'my', mockResponse);
      _.set(expected, `requests.${GET_MY_USER}`, updateRequest(SUCCESS, null));
      expect(actual).toEqual(expected);
    });

    it('returns failed state', () => {
      const error = 'error';
      const action = { type: createAction(GET_MY_USER, FAILED), error };
      const actual = reducer(undefined, action);
      const expected = { ...getInitialState() };
      _.set(expected, `requests.${GET_MY_USER}`, updateRequest(FAILED, error));
      expect(actual).toEqual(expected);
    });

    it('aborted request is ignored', () => {
      const action = { type: createAction(GET_MY_USER, ABORTED) };
      const actual = reducer(undefined, action);
      const expected = { ...getInitialState() };
      _.set(expected, `requests.${GET_MY_USER}`, updateRequest(ABORTED, null));
      expect(actual).toEqual(expected);
    });
  });

  describe('GET_USERS', () => {
    it('returns pending state', () => {
      const action = { type: createAction(GET_USERS, PENDING) };
      const actual = reducer(undefined, action);
      const expected = { ...getInitialState() };
      _.set(expected, `requests.${GET_USERS}`, updateRequest(PENDING, null));
      expect(actual).toEqual(expected);
    });

    it('returns success state', () => {
      const mockResponse = require('../__mocks__/getUsers.json');
      const action = { type: createAction(GET_USERS, SUCCESS), payload: mockResponse };
      const actual = reducer(undefined, action);
      const expected = { ...getInitialState() };
      _.set(expected, 'others', mockResponse);
      _.set(expected, `requests.${GET_USERS}`, updateRequest(SUCCESS, null));
      expect(actual).toEqual(expected);
    });

    it('returns failed state', () => {
      const error = 'error';
      const action = { type: createAction(GET_USERS, FAILED), error };
      const actual = reducer(undefined, action);
      const expected = { ...getInitialState() };
      _.set(expected, `requests.${GET_USERS}`, updateRequest(FAILED, error));
      expect(actual).toEqual(expected);
    });

    it('aborted request is ignored', () => {
      const action = { type: createAction(GET_USERS, ABORTED) };
      const actual = reducer(undefined, action);
      const expected = { ...getInitialState() };
      expect(actual).toEqual(expected);
    });
  });

  describe('UPDATE_USER', () => {
    it('returns pending state', () => {
      const action = { type: createAction(UPDATE_USER, PENDING) };
      const actual = reducer(undefined, action);
      const expected = { ...getInitialState() };
      _.set(expected, `requests.${UPDATE_USER}`, updateRequest(PENDING, null));
      expect(actual).toEqual(expected);
    });

    it('returns success state', () => {
      const mockResponse = require('../__mocks__/updateUser.json');
      const action = { type: createAction(UPDATE_USER, SUCCESS), payload: mockResponse };
      const actual = reducer(undefined, action);
      const expected = { ...getInitialState() };
      _.set(expected, 'others', mockResponse);
      _.set(expected, `requests.${UPDATE_USER}`, updateRequest(SUCCESS, null));
      expect(actual).toEqual(expected);
    });

    it('returns failed state', () => {
      const error = 'error';
      const action = { type: createAction(UPDATE_USER, FAILED), error };
      const actual = reducer(undefined, action);
      const expected = { ...getInitialState() };
      _.set(expected, `requests.${UPDATE_USER}`, updateRequest(FAILED, error));
      expect(actual).toEqual(expected);
    });

    it('aborted request is ignored', () => {
      const action = { type: createAction(UPDATE_USER, ABORTED) };
      const actual = reducer(undefined, action);
      const expected = { ...getInitialState() };
      expect(actual).toEqual(expected);
    });
  });

  describe('DELETE_USER', () => {
    it('returns pending state', () => {
      const action = { type: createAction(DELETE_USER, PENDING) };
      const actual = reducer(undefined, action);
      const expected = { ...getInitialState() };
      _.set(expected, `requests.${DELETE_USER}`, updateRequest(PENDING, null));
      expect(actual).toEqual(expected);
    });

    it('returns success state', () => {
      const mockResponse = require('../__mocks__/deleteUser.json');
      const action = { type: createAction(DELETE_USER, SUCCESS), payload: mockResponse };
      const actual = reducer(undefined, action);
      const expected = { ...getInitialState() };
      _.set(expected, `requests.${DELETE_USER}`, updateRequest(SUCCESS, null));
      expect(actual).toEqual(expected);
    });

    it('returns failed state', () => {
      const error = 'error';
      const action = { type: createAction(DELETE_USER, FAILED), error };
      const actual = reducer(undefined, action);
      const expected = { ...getInitialState() };
      _.set(expected, `requests.${DELETE_USER}`, updateRequest(FAILED, error));
      expect(actual).toEqual(expected);
    });

    it('aborted request is ignored', () => {
      const action = { type: createAction(DELETE_USER, ABORTED) };
      const actual = reducer(undefined, action);
      const expected = { ...getInitialState() };
      expect(actual).toEqual(expected);
    });
  });
});
