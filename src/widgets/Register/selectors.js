import { createSelector } from 'reselect';
import { bindActionCreators } from 'redux';
import { errGetJwt, reqCreateUser } from '../../selectors';
import { createUser } from "../../actions";

export const mapStateToProps = createSelector(
	[errGetJwt, reqCreateUser],
	(errGetJwt, reqCreateUser) => ({
		visible: errGetJwt,
		loading: reqCreateUser.pending,
	}));

export const mapDispatchToProps = (dispatch) =>
	bindActionCreators({
		createUser,
	}, dispatch);