// Prefix
export const REQ = 'REQ';
export const CRUD = 'CRUD';
export const STORAGE = 'STORAGE';
export const UI = 'UI';

// Action creators
export const createRequestAction = (actionType, suffix = '') =>
  `${REQ}:${actionType.toUpperCase()}/${suffix.toUpperCase()}`;
export const createCrudAction = (actionType, suffix = '') =>
  `${CRUD}:${actionType.toUpperCase()}/${suffix.toUpperCase()}`;
export const createStorageAction = (actionType, suffix = '') =>
  `${STORAGE}:${actionType.toUpperCase()}/${suffix.toUpperCase()}`;
export const createUiAction = actionType => `${UI}:${actionType.toUpperCase()}`;

// Utils
export const getActionType = (action = '') => action.split(':')[0];
export const getActionName = (action = '') => action.split(/[://]+/)[1];
export const getActionStatus = (action = '') => action.split('/')[1];

export const isREQ = action => getActionType(action) === REQ;
export const isCRUD = action => getActionType(action) === CRUD;
export const isSTORAGE = action => getActionType(action) === STORAGE;
export const isUI = action => getActionType(action) === UI;

// Suffix
export const PENDING = 'PENDING';
export const SUCCESS = 'SUCCESS';
export const FAILED = 'FAILED';
export const ABORTED = 'ABORTED';

export const CREATE = 'CREATE';
export const READ = 'READ';
export const UPDATE = 'UPDATE';
export const DELETE = 'DELETE';

export const RESET = 'RESET';
