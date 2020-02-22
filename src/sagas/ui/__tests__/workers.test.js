import { recordSaga } from '../../../utils/reduxSaga';
import * as workers from '../workers';
import {
  SCREEN_SIZE,
  SIDEBAR_OPEN,
} from '../actions';
import { createUiAction } from '../../actionCreator';

describe('sagas/ui/workers.js', () => {
  it('set screen size', async () => {
    const payload = 'size';
    const dispatched = await recordSaga(workers.workerScreenSize, {}, { payload });
    expect(dispatched[0]).toEqual({ type: createUiAction(SCREEN_SIZE), payload });
  });

  it('set sidebar open', async () => {
    const payload = true;
    const dispatched = await recordSaga(workers.workerSidebarOpen, {}, { payload });
    expect(dispatched[0]).toEqual({ type: createUiAction(SIDEBAR_OPEN), payload });
  });
});
