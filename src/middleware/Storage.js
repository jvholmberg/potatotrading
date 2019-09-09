import _ from 'lodash';

/**
 * Constants
 */
export const LOCAL_STORAGE = 'localStorage';
export const SESSION_STORAGE = 'sessionStorage';

export const STORAGE_GET = 'STORAGE_MIDDLWARE:GET';
export const STORAGE_SET = 'STORAGE_MIDDLWARE:SET';
export const STORAGE_REMOVE = 'STORAGE_MIDDLWARE:REMOVE';

/**
 * Sets keys in Local/SessionStorage
 * @param {array} cmds - array of objects, can be created using "createObjectForStorageActions"
 */
export const getFromStorage = (cmds) => ({
	[STORAGE_GET]: cmds,
});
/**
 * Sets keys in Local/SessionStorage.
 * @param {array} cmds - array of objects, can be created using "createObjectForStorageActions"
 */
export const setToStorage = (cmds) => ({
	[STORAGE_SET]: cmds,
});
/**
 * Remove keys in Local/SessionStorage
 * @param {array} cmds - array of objects, can be created using "createObjectForStorageActions"
 */
export const removeFromStorage = (cmds) => ({
	[STORAGE_REMOVE]: cmds,
});
/**
 * 
 * @param {string} [storage=LOCAL_STORAGE] - what storage to be used, local or session. Use constants LOCAL_STORAGE or SESSION_STORAGE
 * @param {string} key - key to be get/set/deleted in Local/SessionStorage
 * @param {string} value - value to be set for key in Local/SessionStorage
 * @param {function} formatter - function that must return { key, value }, "key" is created in action with "value". Required for get-operation.
 */
export const createObjectForStorageActions = (storage = LOCAL_STORAGE, key, value, formatter) => ({
	storage,
	key,
	value,
	formatter,
});

/**
 * Validator
 */
const validator = (e, action) => {
	if (process.env.NODE_ENV !== 'production') {
		const validate = (x) => {
			if (!x.key) {
				throw new Error('key must be provided');
			}
			if (action === STORAGE_SET && !x.value) {
				throw new Error('value must be provided when setting to storage');
			}
			if (action === STORAGE_GET && !x.formatter) {
				throw new Error('formatter must be provided when getting from storage');
			}
		};
		_.isArray(e)
			? _.forEach(e, validate)
			: validate(e);
	}
};

/**
 * Middleware
 */
export default (store) => (next) => (action) => {

	// Check if input exist for this middleware
	const set = action[STORAGE_SET],
		get = action[STORAGE_GET],
		remove = action[STORAGE_REMOVE];

  // If no input for this middleware exist; skip
	if (!set && !get && !remove) {
		next(action);
		return;
	}

	const createdAction = Object.assign({}, action);

	// Save all provided keys/value in storage
	if (set) {
		validator(set, STORAGE_SET);
		!_.isArray(set)
			? window[set.storage].setItem(set.key, set.value)
			: _.forEach(set, (x) => {
				window[set.storage].setItem(x.key, x.value);
			});
		delete createdAction[STORAGE_SET];
	}

	// Get values for all provided keys
	if (get) {
		validator(set, STORAGE_GET);
		!_.isArray(get)
			? (() => {
				const data = window[get.storage].getItem(get.key);
				if (data) {
					const formatted = get.formatter(data);
					createdAction[formatted.key] = formatted.value;
				}
			})()
			: _.forEach(set, (x) => {
				const data = window[x.storage].getItem(x.key);
				if (data) {
					const formatted = x.formatter(data);
					createdAction[formatted.key] = formatted.value;
				}
			});
		delete createdAction[STORAGE_GET];
	}

	// Handle all keys marked for removal
	if (remove) {
		validator(set, STORAGE_REMOVE);
		!_.isArray(remove)
			? window[remove.storage].removeItem(remove.key)
			: _.forEach(set, (x) => {
				window[remove.storage].removeItem(x.key);
			});
		delete createdAction[STORAGE_REMOVE];
	}

	next(createdAction);
	return;
};
