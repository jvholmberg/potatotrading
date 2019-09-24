import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Widget, Loader } from '../../components';

import mapStateToProps from './selectors';

const Skeleton = () => (
	<Widget>
		<Loader />
	</Widget>
);

const Unauthorized = () => (
	<Fragment />
);

const Authorized = ({ user }) => (
	<Widget>
		{user.firstName}
	</Widget>
);

class Welcome extends Component {

	componentDidMount() {
		
	}

	render() {
		const {
			visible,
			loading,
			user,
		} = this.props;
		
		if (visible && loading) {
			return (<Skeleton />);
		}
		if (user) {
			return (<Authorized {...user} />);
		}
		return (<Unauthorized />);
	}
}

export default connect(mapStateToProps)(Welcome);