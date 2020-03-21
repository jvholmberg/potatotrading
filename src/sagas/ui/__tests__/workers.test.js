import { recordSaga } from '../../../utils/reduxSaga';
import { createAction } from '../../sagaHelpers';
import {
  workerScreenSize,
  workerSidebarOpen,
  workerSortingDiary,
} from '../workers';
import {
  SCREEN_SIZE,
  SIDEBAR_OPEN,
  SORTING_DIARY,
} from '../constants';
import { SET } from '../../constants';

describe('sagas/ui/workers.js', () => {
  it('set screen size', async () => {
    const payload = 'size';
    const dispatched = await recordSaga(workerScreenSize, {}, { payload });
    expect(dispatched[0]).toEqual({ type: createAction(SCREEN_SIZE, SET), payload });
  });

  it('set sidebar open', async () => {
    const payload = true;
    const dispatched = await recordSaga(workerSidebarOpen, {}, { payload });
    expect(dispatched[0]).toEqual({ type: createAction(SIDEBAR_OPEN, SET), payload });
  });

  it('set sorting diary', async () => {
    const payload = 'sortKey';
    const dispatched = await recordSaga(workerSortingDiary, {}, { payload });
    expect(dispatched[0]).toEqual({ type: createAction(SORTING_DIARY, SET), payload });
  });
});
