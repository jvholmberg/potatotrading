import '../../components/config.css';

import React, { PureComponent, Fragment } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Header from './Header';

const mapStateToProps = (state, props) => {
	return {};
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({

  }, dispatch);

class App extends PureComponent {

	logout = () => {
		const { props } = this;
	}

	componentDidMount() {
		const { props } = this;
	}

	componentDidUpdate(prevProps) {
		const { props } = this;
	}

	render() {
		const { props } = this;
		return (
			<Fragment>
				<Header
					showSkeleton={props.pendingGetJwt && !props.validGetJwt}
					loggedIn={props.validValidateJwt}
					logout={this.logout} />
			</Fragment>
		);
	}
}

App.defaultProps = {

};

App.propTypes = {

};

export default connect(mapStateToProps, mapDispatchToProps)(App);