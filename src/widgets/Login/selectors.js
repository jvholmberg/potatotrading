import { createSelector } from 'reselect';
import { bindActionCreators } from 'redux';
// import { resGetJwt, errGetJwt } from '../../selectors';
// import { getJwt } from "../../actions";

// export const mapStateToProps = createSelector(
// 	[resGetJwt, errGetJwt],
// 	(resGetJwt, errGetJwt) => ({
// 		visible: errGetJwt,
// 		loading: !resGetJwt && !errGetJwt,
// 	}));

// export const mapDispatchToProps = (dispatch) =>
// 	bindActionCreators({
// 		getJwt,
// 	}, dispatch);