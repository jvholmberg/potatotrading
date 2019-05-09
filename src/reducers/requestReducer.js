import _ from 'lodash';

const isRequestAction = (type) => _.startsWith(type, 'REQ:');

const getRequestStatus = (type) => _.split(type, '/')[1];

const getActionType = (type) => {
  const stageOne = _.split(type, ':')[1];
  const stageTwo = _.split(stageOne, '/')[0];
  return stageTwo;
};

export const defaultState = {

};

export default (state = defaultState, action) => {

  // Not a request action
  if (!isRequestAction(action.type)) {
    return state;
  }

  const requestStatus = getRequestStatus(action.type);
  const actionType = getActionType(action.type);
  switch (requestStatus) {
    case 'PENDING':
      return Object.assign({}, state, {
        [actionType]: {
          valid: false,
          pending: true,
          failed: false,
          queued: false,
        },
      });
    case 'SUCCESS':
      return Object.assign({}, state, {
        [actionType]: {
          valid: true,
          pending: false,
          failed: false,
          queued: false,
          response: action.response,
        },
      });
    case 'FAILURE':
      return Object.assign({}, state, {
        [actionType]: {
          valid: false,
          pending: false,
          failed: true,
          queued: false,
          error: action.error,
        },
      });
    case 'QUEUED':
      return Object.assign({}, state, {
        [actionType]: {
          valid: false,
          pending: false,
          failed: false,
          queued: true,
        },
      });
    case 'DELETE':
      const newState = Object.assign({}, state);
      delete newState[actionType];
      return newState;
    default:
      return state;
  }
};