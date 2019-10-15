import { createSelector } from 'reselect';
import { bindActionCreators } from 'redux';
import { createSession } from '../../sagas/sessions/actions';
import { selectCreateSessionReq } from '../../sagas/sessions/selectors';

export const mapStateToProps = createSelector(
	[selectCreateSessionReq],
	(request) => ({
		...request
	}));

export const mapDispatchToProps = (dispatch) =>
	bindActionCreators({
		createSession,
	}, dispatch);