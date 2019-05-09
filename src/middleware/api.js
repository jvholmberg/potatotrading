import _ from 'lodash';
import moment from 'moment';
import { format } from 'util';
import { REFRESH_JWT } from '../actions';
import {
  getJwtToken,
  removeJwtToken,
} from '../utils/localStorage';

const API_ROOT = process.env.NODE_ENV === 'production'
  ? 'https://forkyfork.com'
  : 'https://localhost:5000';

// Fetches an API response and normalizes the result JSON according to schema.
// This makes every API response have the same shape, regardless of how nested it was.
const makeRequest = (url, method, query, body, restricted, next) => {

  // If url starts with '/' add prefix with API_ROOT
  const fullUrl = url.indexOf('/') === 0
    ? API_ROOT + url
    : url;

  // Set default headers
  const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  };

  // If restricted route get tokens
  if (restricted) {
    // Make sure all data is present
    let jwt = getJwtToken();
    if (!jwt || !jwt.accessToken || !jwt.refreshToken || !jwt.expiry) {
      jwt = removeJwtToken();
    }
  
    // Check if expired or within grace period
    if (jwt) {
      const now = moment();
      const expiry = moment(jwt.expiry);
      const grace = moment(jwt.expiry).subtract(1, 'day');

      // Check if expired
      if (expiry.isSameOrBefore(now)) {
        jwt = removeJwtToken();
      }

      // Check if within grace period (24hours)
      if (jwt && grace.isSameOrBefore(now)) {
        next({ type: `REQ:${REFRESH_JWT}/QUEUED` });
      }

      // Add Authorization header if valid accessToken
      if (jwt && jwt.accessToken) {
        headers['Authorization'] = `Bearer ${jwt.accessToken}`;
      }
    }
  }

  // Make request
  return fetch(fullUrl, {
    method,
    headers,
    query,
    body: JSON.stringify(body),
    mode: 'cors',
  }).then((res) =>
    res.json()
      .then((json) => {
        if (!res.ok) {
          return Promise.reject(json)
        }
        return Promise.resolve(json);
      }));
};

export const CALL_API = 'CALL_API';

// A Redux middleware that interprets actions with CALL_API info specified.
// Performs the call and promises when such actions are dispatched.
export default (store) => (next) => (action) => {
  const callAPI = action[CALL_API]

  // If not action of type 'CALL_API'; skip
  if (typeof callAPI === 'undefined') {
    return next(action);
  }

  // Make sure url, type, schema is provided
  const {
    type,
    url,
    method,
    query,
    body,
    restricted,
    forceReq,
    deleteReq,
  } = callAPI;
  if (!_.isString(type)) {
    throw new Error('Expected type to be string.');
  }
  if (!_.isString(url)) {
    throw new Error('Must specify a string url.');
  }
  if (!_.includes(['GET', 'POST', 'PUT', 'PATCH', 'DELETE'], method)) {
    throw new Error('Expected method to be one of GET, POST, PUT, DELETE or PATCH.');
  }

  // Delete request in store
  if (deleteReq) {
    next({ type: `REQ:${type}/DELETE` });
    return;
  }

  // Get status of request
  const {
    valid,
    pending,
  } = _.get(store.getState(), `requests.${type}`, {});

  // Ignore request if valid or pending unless using force
  if (!forceReq
    && (valid || pending)) {
    return;
  }

  // Clean action
  const actionWith = (data) => {
    const finalAction = Object.assign({}, action, data);
    delete finalAction[CALL_API];
    return finalAction;
  }

  // Mark request as pending and make call
  next(actionWith({ type: `REQ:${type}/PENDING` }));
  return makeRequest(url, method, query, body, restricted, next)
    .then((res) => next(actionWith({
      type: `REQ:${type}/SUCCESS`,
      response: res,
    })))
    .catch((err) => next(actionWith({
      type: `REQ:${type}/FAILURE`,
      error: err,
    })));
};