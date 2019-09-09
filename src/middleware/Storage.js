import _ from 'lodash';

/**
 * Constants
 */
export const STORAGE_GET = `STORAGE_MIDDLWARE:GET`;
export const STORAGE_SET = `STORAGE_MIDDLWARE:SET`;
export const STORAGE_REMOVE = `STORAGE_MIDDLWARE:REMOVE`;

/**
 * Actions
 */
export const getFromLocalStorage = (keys, formatter) => ({
	[STORAGE_GET]: {
		keys,
		formatter,
	},
});
export const setToLocalStorage = (keys, value) => ({
	[STORAGE_SET]: {
		keys,
		value,
	},
});

/**
 * Remove keys in 
 * @param {array} keys 
 */
export const removeFromLocalStorage = (keys) => ({
	[STORAGE_REMOVE]: keys
});

/**
 * Middleware
 */
export default (store) => (next) => (action) => {

	// Check if input exist for this middleware
	const input = action[STORAGE_GET]
		|| action[STORAGE_SET]
		|| action[STORAGE_REMOVE];

  // If no input for this middleware exist; skip
	if (typeof input === 'undefined') {
		next(action);
		return;
	}

	// Check if key/value should be fetched, saved or deleted
	const shouldSetToStorage = !!action[STORAGE_SET];
	const shouldRemoveFromStorage = !!action[STORAGE_REMOVE];

	const {
		keys,
		set,
		formatter,
		value,
	} = input;

	// Perform operation
	const createdAction = Object.assign({}, action);
	if (shouldSetToStorage) {
		_.isArray(keys)
			? keys.forEach((key) => {
				window.localStorage.setItem(key, value)
			})
			: window.localStorage.setItem(key, value);
    delete createdAction[STORAGE_SET];
	} else if (shouldRemoveFromStorage) {
		window.localStorage.removeItem(key);
		delete createdAction[STORAGE_REMOVE];
	} else {
		createdAction[set] = formatter
			? formatter(window.localStorage.getItem(key))
			: window.localStorage.getItem(key);
    delete createdAction[STORAGE_GET];
	}

	next(createdAction);
	return;
};
