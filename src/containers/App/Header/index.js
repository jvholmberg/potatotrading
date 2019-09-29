import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Skeleton = (props) => (
  <div className='App-Header--skeleton'>
			skeleton
		<span className='App-Header--skeleton__Link' />
		<span className='App-Header--skeleton__Link' />
		<span className='App-Header--skeleton__Link' />
	</div>
);

const Unauthorized = (props) => (
  <div>
		not logged in
    <Link to='/'>Landing</Link>
    <Link to='/login'>Login</Link>
    <Link to='/register'>Register</Link>
  </div>
);

const Authorized = (props) => (
  <div>
    <Link to='/'>Landing</Link>
    <Link to='/dashboard'>Dashboard</Link>
    <button onClick={props.logout}>Logout</button>
  </div>
);

const Header = (props) => {
  if (props.showSkeleton) {
    return (<Skeleton {...props} />);
  }
  if (props.loggedIn) {
    return (<Authorized {...props} />);
  }
  return (<Unauthorized {...props} />);
};

Header.defaultProps = {
	showSkeleton: true,
	loggedIn: false,
};

Header.propTypes = {
	showSkeleton: PropTypes.bool.isRequired,
	loggedIn: PropTypes.bool.isRequired,
};

export default Header;