/* eslint-disable no-undefined */
import _ from 'lodash';
import { createAction } from '../../sagaHelpers';
import reducer, { getInitialState } from '../reducer';
import {
  SCREEN_SIZE,
  SIDEBAR_OPEN,
  SORTING_DIARY,
} from '../constants';
import { SET, SORT_DIRECTION_DESCENDING } from '../../constants';

describe('sagas/ui/reducer.js', () => {
  it('returns initial state', () => {
    const actual = reducer(undefined, undefined);
    const expected = { ...getInitialState() };
    expect(actual).toEqual(expected);
  });

  describe('SCREEN_SIZE', () => {
    it('screen size is set in reducer', () => {
      const size = 'size';
      const action = { type: createAction(SCREEN_SIZE, SET), payload: size };
      const actual = reducer(undefined, action);
      const expected = { ...getInitialState() };
      _.set(expected, 'screen.size', size);
      expect(actual).toEqual(expected);
    });
  });

  describe('SIDEBAR_OPEN', () => {
    it('sidebar open state is set in reducer', () => {
      const open = true;
      const action = { type: createAction(SIDEBAR_OPEN, SET), payload: open };
      const actual = reducer(undefined, action);
      const expected = { ...getInitialState() };
      _.set(expected, 'sidebar.open', open);
      expect(actual).toEqual(expected);
    });
  });

  describe('SORTING_DIARY', () => {
    it('sidebar open state is set in reducer', () => {
      const sortKey = 'sortKey';
      const action = { type: createAction(SORTING_DIARY, SET), payload: sortKey };
      const actual = reducer(undefined, action);
      const expected = { ...getInitialState() };
      _.set(expected, 'sorting.diary.key', sortKey);
      _.set(expected, 'sorting.diary.direction', SORT_DIRECTION_DESCENDING);
      expect(actual).toEqual(expected);
    });
  });
});
