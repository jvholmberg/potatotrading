import React, { Component, Fragment } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Landing from './Landing';
import Register from './Register';
import Login from './Login';
import Dashboard from './Dashboard';
import NotFound from './NotFound';
import { mapStateToProps, mapDispatchToProps } from './selectors';

import { Menu } from '../components';

const ControlledRoute = ({ path, to, component, push }) => to
	? (<Redirect { ...{ to, push } } />)
	: (<Route { ...{ path, component } }  />);

class Routes extends Component {

	componentDidMount() {

	}

	render() {
		const { accessToken } = this.props;
		return (
			<Fragment>
				<Menu />
				<Switch>
					<Route exact path='/' component={Landing} />
					<ControlledRoute
						path='/register'
						to={accessToken && '/dashboard'}
						component={Register} />
					<ControlledRoute
						path='/login'
						to={accessToken && '/dashboard'}
						component={Login} />
					<ControlledRoute
						path='/dashboard'
						to={!accessToken && '/'}
						component={Dashboard} />
					<Route component={NotFound} />
				</Switch>
			</Fragment>
		);
	}
}

Routes.propTypes = {
	authenticated: PropTypes.bool.isRequired,
};

Routes.defaultProps = {
	authenticated: false,
};

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Routes);