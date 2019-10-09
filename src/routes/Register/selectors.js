import { createSelector } from 'reselect';
import { bindActionCreators } from 'redux';
import { createUser } from "../../sagas/users/actions";
import { reqCreateUser } from "../../sagas/users/selectors";

export const mapStateToProps = createSelector(
	[reqCreateUser],
	(reqCreateUser) => ({
		...reqCreateUser
	}));

export const mapDispatchToProps = (dispatch) =>
	bindActionCreators({
		createUser,
	}, dispatch);