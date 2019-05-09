import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Skeleton = (props) => (
  null
);

const Unauthorized = (props) => (
  <div>
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

const AppHeader = (props) => {
  if (props.showSkeleton) {
    return (<Skeleton {...props} />);
  }
  if (props.loggedIn) {
    return (<Authorized {...props} />);
  }
  return (<Unauthorized {...props} />);
};

export default AppHeader;