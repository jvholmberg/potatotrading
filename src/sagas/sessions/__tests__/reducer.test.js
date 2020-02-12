/* eslint-disable max-lines-per-function */
import { fromJS } from 'immutable';
import {
  createRequestAction, SUCCESS, PENDING, FAILED, ABORTED,
} from '../../actionCreator';
import { updateRequest } from '../../reducerCreator';
import reducer, { defaultState } from '../reducer';
import * as actions from '../actions';


describe('sagas/sessions/reducer.js', () => {
  it('returns initial state', () => {
    // eslint-disable-next-line no-undefined
    const actual = reducer(undefined, undefined);
    const expected = defaultState;
    expect(actual).toEqual(expected);
  });

  describe('CREATE_SESSION', () => {
    it('returns pending state', () => {
      const action = { type: createRequestAction(actions.CREATE_SESSION, PENDING) };
      // eslint-disable-next-line no-undefined
      const actual = reducer(undefined, action);
      const expected = defaultState.setIn(['requests', actions.CREATE_SESSION], updateRequest(PENDING, null));
      expect(actual).toEqual(expected);
    });

    it('returns success state', () => {
      // eslint-disable-next-line global-require
      const mockResponse = require('../__mocks__/createSession.json');
      const action = { type: createRequestAction(actions.CREATE_SESSION, SUCCESS), payload: mockResponse };
      // eslint-disable-next-line no-undefined
      const actual = reducer(undefined, action);
      const expected = defaultState.withMutations(s => s
        .set('data', fromJS(mockResponse))
        .setIn(['requests', actions.CREATE_SESSION], updateRequest(SUCCESS, null)));
      expect(actual).toEqual(expected);
    });

    it('returns failed state', () => {
      const error = 'error';
      const action = { type: createRequestAction(actions.CREATE_SESSION, FAILED), error };
      // eslint-disable-next-line no-undefined
      const actual = reducer(undefined, action);
      const expected = defaultState.setIn(['requests', actions.CREATE_SESSION], updateRequest(FAILED, error));
      expect(actual).toEqual(expected);
    });

    it('returns aborted state', () => {
      const action = { type: createRequestAction(actions.CREATE_SESSION, ABORTED) };
      // eslint-disable-next-line no-undefined
      const actual = reducer(undefined, action);
      const expected = defaultState.setIn(['requests', actions.CREATE_SESSION], updateRequest(ABORTED, null));
      expect(actual).toEqual(expected);
    });
  });

  describe('GET_SESSIONS', () => {
    it('returns pending state', () => {
      const action = { type: createRequestAction(actions.GET_SESSIONS, PENDING) };
      // eslint-disable-next-line no-undefined
      const actual = reducer(undefined, action);
      const expected = defaultState.setIn(['requests', actions.GET_SESSIONS], updateRequest(PENDING, null));
      expect(actual).toEqual(expected);
    });

    it('returns success state', () => {
      // eslint-disable-next-line global-require
      const mockResponse = require('../__mocks__/getSessions.json');
      const action = { type: createRequestAction(actions.GET_SESSIONS, SUCCESS), payload: mockResponse };
      // eslint-disable-next-line no-undefined
      const actual = reducer(undefined, action);
      const expected = defaultState.withMutations(s => s
        .set('data', fromJS(mockResponse))
        .setIn(['requests', actions.GET_SESSIONS], updateRequest(SUCCESS, null)));
      expect(actual).toEqual(expected);
    });

    it('returns failed state', () => {
      const error = 'error';
      const action = { type: createRequestAction(actions.GET_SESSIONS, FAILED), error };
      // eslint-disable-next-line no-undefined
      const actual = reducer(undefined, action);
      const expected = defaultState.setIn(['requests', actions.GET_SESSIONS], updateRequest(FAILED, error));
      expect(actual).toEqual(expected);
    });

    it('returns aborted state', () => {
      const action = { type: createRequestAction(actions.GET_SESSIONS, ABORTED) };
      // eslint-disable-next-line no-undefined
      const actual = reducer(undefined, action);
      const expected = defaultState.setIn(['requests', actions.GET_SESSIONS], updateRequest(ABORTED, null));
      expect(actual).toEqual(expected);
    });
  });

  describe('GET_SESSION_TYPES', () => {
    it('returns pending state', () => {
      const action = { type: createRequestAction(actions.GET_SESSION_TYPES, PENDING) };
      // eslint-disable-next-line no-undefined
      const actual = reducer(undefined, action);
      const expected = defaultState.setIn(['requests', actions.GET_SESSION_TYPES], updateRequest(PENDING, null));
      expect(actual).toEqual(expected);
    });

    it('returns success state', () => {
      // eslint-disable-next-line global-require
      const mockResponse = require('../__mocks__/getSessionTypes.json');
      const action = { type: createRequestAction(actions.GET_SESSION_TYPES, SUCCESS), payload: mockResponse };
      // eslint-disable-next-line no-undefined
      const actual = reducer(undefined, action);
      const expected = defaultState.withMutations(s => s
        .set('types', fromJS(mockResponse))
        .setIn(['requests', actions.GET_SESSION_TYPES], updateRequest(SUCCESS, null)));
      expect(actual).toEqual(expected);
    });

    it('returns failed state', () => {
      const error = 'error';
      const action = { type: createRequestAction(actions.GET_SESSION_TYPES, FAILED), error };
      // eslint-disable-next-line no-undefined
      const actual = reducer(undefined, action);
      const expected = defaultState.setIn(['requests', actions.GET_SESSION_TYPES], updateRequest(FAILED, error));
      expect(actual).toEqual(expected);
    });

    it('returns aborted state', () => {
      const action = { type: createRequestAction(actions.GET_SESSION_TYPES, ABORTED) };
      // eslint-disable-next-line no-undefined
      const actual = reducer(undefined, action);
      const expected = defaultState.setIn(['requests', actions.GET_SESSION_TYPES], updateRequest(ABORTED, null));
      expect(actual).toEqual(expected);
    });
  });
});
