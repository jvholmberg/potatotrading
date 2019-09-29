import { all } from 'redux-saga/effects';
import {
	fetchUsers,
} from './users';

export default function* rootSaga() {
  yield all([
		fetchUsers()
	]);
}