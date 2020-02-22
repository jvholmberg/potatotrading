import { recordSaga } from '../../../utils/reduxSaga';
import * as workers from '../workers';
import {
  SET_LOCAL_STORAGE,
  SET_SESSION_STORAGE,
  GET_LOCAL_STORAGE,
  GET_SESSION_STORAGE,
  DELETE_LOCAL_STORAGE,
  DELETE_SESSION_STORAGE,
} from '../actions';
import { createStorageAction, SUCCESS, FAILED } from '../../actionCreator';

describe('sagas/storage/workers.js', () => {
  const key = 'key';
  const value = 'value';

  describe('local storage', () => {
    it('set', async () => {
      const input = { key, value };
      let dispatched = await recordSaga(workers.workerSetLocalStorage, {}, input);
      expect(dispatched[0]).toEqual({ type: createStorageAction(SET_LOCAL_STORAGE, SUCCESS) });

      dispatched = await recordSaga(workers.workerSetLocalStorage, {});
      expect(dispatched[0].type).toEqual(createStorageAction(SET_LOCAL_STORAGE, FAILED));
    });

    it('get', async () => {
      const input = { key };
      let dispatched = await recordSaga(workers.workerGetLocalStorage, {}, input);
      expect(dispatched[0].type).toEqual(createStorageAction(GET_LOCAL_STORAGE, SUCCESS));

      dispatched = await recordSaga(workers.workerGetLocalStorage, {});
      expect(dispatched[0].type).toEqual(createStorageAction(GET_LOCAL_STORAGE, FAILED));
    });

    it('delete', async () => {
      const input = { key };
      let dispatched = await recordSaga(workers.workerDeleteLocalStorage, {}, input);
      expect(dispatched[0]).toEqual({ type: createStorageAction(DELETE_LOCAL_STORAGE, SUCCESS) });

      dispatched = await recordSaga(workers.workerDeleteLocalStorage, {});
      expect(dispatched[0].type).toEqual(createStorageAction(DELETE_LOCAL_STORAGE, FAILED));
    });
  });

  describe('session storage', () => {
    it('set', async () => {
      const input = { key, value };
      let dispatched = await recordSaga(workers.workerSetSessionStorage, {}, input);
      expect(dispatched[0]).toEqual({ type: createStorageAction(SET_SESSION_STORAGE, SUCCESS) });

      dispatched = await recordSaga(workers.workerSetSessionStorage, {});
      expect(dispatched[0].type).toEqual(createStorageAction(SET_SESSION_STORAGE, FAILED));
    });

    it('get', async () => {
      const input = { key };
      let dispatched = await recordSaga(workers.workerGetSessionStorage, {}, input);
      expect(dispatched[0].type).toEqual(createStorageAction(GET_SESSION_STORAGE, SUCCESS));

      dispatched = await recordSaga(workers.workerGetSessionStorage, {});
      expect(dispatched[0].type).toEqual(createStorageAction(GET_SESSION_STORAGE, FAILED));
    });

    it('delete', async () => {
      const input = { key };
      let dispatched = await recordSaga(workers.workerDeleteSessionStorage, {}, input);
      expect(dispatched[0]).toEqual({ type: createStorageAction(DELETE_SESSION_STORAGE, SUCCESS) });

      dispatched = await recordSaga(workers.workerDeleteSessionStorage, {});
      expect(dispatched[0].type).toEqual(createStorageAction(DELETE_SESSION_STORAGE, FAILED));
    });
  });
});
