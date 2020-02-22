/* eslint-disable no-undefined */
import _ from 'lodash';
import { createUiAction } from '../../actionCreator';
import reducer, { getInitialState } from '../reducer';
import * as actions from '../actions';

describe('sagas/ui/reducer.js', () => {
  it('returns initial state', () => {
    const actual = reducer(undefined, undefined);
    const expected = { ...getInitialState() };
    expect(actual).toEqual(expected);
  });

  describe('SCREEN_SIZE', () => {
    it('screen size is set in reducer', () => {
      const size = 'size';
      const action = { type: createUiAction(actions.SCREEN_SIZE), payload: size };
      const actual = reducer(undefined, action);
      const expected = { ...getInitialState() };
      _.set(expected, 'screen.size', size);
      expect(actual).toEqual(expected);
    });
  });

  describe('SIDEBAR_OPEN', () => {
    it('sidebar open state is set in reducer', () => {
      const open = true;
      const action = { type: createUiAction(actions.SIDEBAR_OPEN), payload: open };
      const actual = reducer(undefined, action);
      const expected = { ...getInitialState() };
      _.set(expected, 'sidebar.open', open);
      expect(actual).toEqual(expected);
    });
  });
});
