import { selectCreateSessionReq } from '../../../../sagas/sessions/selectors';

export const selectSubmitting = state => selectCreateSessionReq(state).pending;
export const selectError = state => selectCreateSessionReq(state).error;
