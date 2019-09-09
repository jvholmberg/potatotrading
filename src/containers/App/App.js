import './App.css';

import React, { PureComponent, Fragment } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getJwtToken, removeJwtToken } from '../../utils/localStorage';

import Header from './Header';
import Routes from './Routes';


import { validateJwt, refreshJwt, destroyJwt } from '../../actions'
import { reqGetJwt, reqValidateJwt, reqRefreshJwt, reqDestroyJwt } from '../../selectors'

const mapStateToProps = (state, props) => {
  const {
    pending: pendingGetJwt,
    valid: validGetJwt,
  } = reqGetJwt(state);
  const {
    pending: pendingValidateJwt,
    valid: validValidateJwt,
  } = reqValidateJwt(state);
  const {
    queued: queuedRefreshJwt,
    pending: pendingRefreshJwt,
  } = reqRefreshJwt(state);
  const {
    pending: pendingDestroyJwt,
    valid: validDestroyJwt,
  } = reqDestroyJwt(state);
  return {
    pendingGetJwt,
    validGetJwt,
    pendingValidateJwt,
    validValidateJwt,
    queuedRefreshJwt,
    pendingRefreshJwt,
    pendingDestroyJwt,
    validDestroyJwt,
  };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({
    validateJwt,
    refreshJwt,
    destroyJwt,
  }, dispatch);


// Check useEffect (React hooks new api)

class App extends PureComponent {

	logout = () => {
		const { props } = this;
		props.destroyJwt({ force: true });
		removeJwtToken();
	}

	componentDidMount() {
		const { props } = this;

		// Validate jwt-token if exists
		const jwt = getJwtToken();
		if (jwt) {
			props.validateJwt();
		}
	}

	componentDidUpdate(prevProps) {
		const { props } = this;

		// Re evaluate jwt-token
		if ((prevProps.pendingGetJwt && props.validGetJwt)
			|| (prevProps.pendingDestroyJwt && props.validDestroyJwt)) {
				props.validateJwt({ force: true });
			}

		// Refresh jwt-token if queued
		if (!prevProps.queuedRefreshJwt
			&& props.queuedRefreshJwt
			&& !props.pendingRefreshToken) {
				const jwt = getJwtToken();
				props.refreshJwt(jwt.refreshToken, { force: true });
			}
	}

	render() {
		const { props } = this;
		return (
			<Fragment>
				<Header
					showSkeleton={props.pendingGetJwt && !props.validGetJwt}
					loggedIn={props.validValidateJwt}
					logout={this.logout} />
				<Routes
					loggedIn={props.validValidateJwt} />
			</Fragment>
		);
	}
}

App.defaultProps = {

};

App.propTypes = {

};

export default connect(mapStateToProps, mapDispatchToProps)(App);