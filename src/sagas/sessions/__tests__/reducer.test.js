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
  CREATE_SESSION,
  GET_SESSIONS,
  GET_SESSION_TYPES,
} from '../constants';


describe('sagas/sessions/reducer.js', () => {
  it('returns initial state', () => {
    const actual = reducer(undefined, undefined);
    const expected = { ...getInitialState() };
    expect(actual).toEqual(expected);
  });

  describe('CREATE_SESSION', () => {
    it('returns pending state', () => {
      const action = { type: createAction(CREATE_SESSION, PENDING) };
      const actual = reducer(undefined, action);
      produce(getInitialState(), draft => {
        _.set(draft, `requests.${CREATE_SESSION}`, updateRequest(PENDING, null));
        expect(actual).toEqual(draft);
      });
    });

    it('returns success state', () => {
      const mockResponse = require('../__mocks__/createSession.json');
      const action = { type: createAction(CREATE_SESSION, SUCCESS), payload: mockResponse };
      const actual = reducer(undefined, action);
      produce(getInitialState(), draft => {
        _.set(draft, `sessions.byId.${mockResponse.id}`, mockResponse);
        _.get(draft, 'sessions.allIds').push(mockResponse.id);
        _.set(draft, `requests.${CREATE_SESSION}`, updateRequest(SUCCESS, null));
        expect(actual).toEqual(draft);
      });
    });

    it('returns failed state', () => {
      const error = 'error';
      const action = { type: createAction(CREATE_SESSION, FAILED), error };
      const actual = reducer(undefined, action);
      produce(getInitialState(), draft => {
        _.set(draft, `requests.${CREATE_SESSION}`, updateRequest(FAILED, error));
        expect(actual).toEqual(draft);
      });
    });

    it('returns aborted state', () => {
      const action = { type: createAction(CREATE_SESSION, ABORTED) };
      const actual = reducer(undefined, action);
      produce(getInitialState(), draft => {
        _.set(draft, `requests.${CREATE_SESSION}`, updateRequest(ABORTED, null));
        expect(actual).toEqual(draft);
      });
    });
  });

  describe('GET_SESSIONS', () => {
    it('returns pending state', () => {
      const action = { type: createAction(GET_SESSIONS, PENDING) };
      const actual = reducer(undefined, action);
      produce(getInitialState(), draft => {
        _.set(draft, `requests.${GET_SESSIONS}`, updateRequest(PENDING, null));
        expect(actual).toEqual(draft);
      });
    });

    it('returns success state', () => {
      const mockResponse = require('../__mocks__/getSessions.json');
      const action = { type: createAction(GET_SESSIONS, SUCCESS), payload: mockResponse };
      const actual = reducer(undefined, action);
      produce(getInitialState(), draft => {
        _.forEach(mockResponse, mock => {
          _.set(draft, `sessions.byId.${mock.id}`, mock);
          _.get(draft, 'sessions.allIds').push(mock.id);
        });
        _.set(draft, `requests.${GET_SESSIONS}`, updateRequest(SUCCESS, null));
        expect(actual).toEqual(draft);
      });
    });

    it('returns failed state', () => {
      const error = 'error';
      const action = { type: createAction(GET_SESSIONS, FAILED), error };
      const actual = reducer(undefined, action);
      produce(getInitialState(), draft => {
        _.set(draft, `requests.${GET_SESSIONS}`, updateRequest(FAILED, error));
        expect(actual).toEqual(draft);
      });
    });

    it('returns aborted state', () => {
      const action = { type: createAction(GET_SESSIONS, ABORTED) };
      const actual = reducer(undefined, action);
      produce(getInitialState(), draft => {
        _.set(draft, `requests.${GET_SESSIONS}`, updateRequest(ABORTED, null));
        expect(actual).toEqual(draft);
      });
    });
  });

  describe('GET_SESSION_TYPES', () => {
    it('returns pending state', () => {
      const action = { type: createAction(GET_SESSION_TYPES, PENDING) };
      const actual = reducer(undefined, action);
      produce(getInitialState(), draft => {
        _.set(draft, `requests.${GET_SESSION_TYPES}`, updateRequest(PENDING, null));
        expect(actual).toEqual(draft);
      });
    });

    it('returns success state', () => {
      const mockResponse = require('../__mocks__/getSessionTypes.json');
      const action = { type: createAction(GET_SESSION_TYPES, SUCCESS), payload: mockResponse };
      const actual = reducer(undefined, action);
      produce(getInitialState(), draft => {
        _.forEach(mockResponse, mock => {
          _.set(draft, `sessionTypes.byId.${mock.id}`, mock);
          _.get(draft, 'sessionTypes.allIds').push(mock.id);
        });
        _.set(draft, `requests.${GET_SESSION_TYPES}`, updateRequest(SUCCESS, null));
        expect(actual).toEqual(draft);
      });
    });

    it('returns failed state', () => {
      const error = 'error';
      const action = { type: createAction(GET_SESSION_TYPES, FAILED), error };
      const actual = reducer(undefined, action);
      produce(getInitialState(), draft => {
        _.set(draft, `requests.${GET_SESSION_TYPES}`, updateRequest(FAILED, error));
        expect(actual).toEqual(draft);
      });
    });

    it('returns aborted state', () => {
      const action = { type: createAction(GET_SESSION_TYPES, ABORTED) };
      const actual = reducer(undefined, action);
      produce(getInitialState(), draft => {
        _.set(draft, `requests.${GET_SESSION_TYPES}`, updateRequest(ABORTED, null));
        expect(actual).toEqual(draft);
      });
    });
  });
});
