
export const createRequestAction = (actionType, suffix = '') => `REQ:${actionType.toUpperCase()}/${suffix.toUpperCase()}`;
export const createCrudAction = (actionType, suffix = '') => `CRUD:${actionType.toUpperCase()}/${suffix.toUpperCase()}`;
export const createStorageAction = (actionType, suffix = '') => `STORAGE:${actionType.toUpperCase()}/${suffix.toUpperCase()}`;

export const getActionType = (action) => action.split(':')[0];
export const getActionName = (action) => action.split(/[://]+/)[1];
export const getActionStatus = (action) => action.split('/')[1];

export const PENDING = 'PENDING';
export const SUCCESS = 'SUCCESS';
export const FAILED = 'FAILED';

export const CREATE = 'CREATE';
export const READ = 'READ';
export const UPDATE = 'UPDATE';
export const DELETE = 'DELETE';
