import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Drawer } from '@material-ui/core';

import LinkSection from './LinkSection';
import useStyles from './styles';

import { mapStateToProps, mapDispatchToProps } from './selectors';

const Sidebar = ({
  isLoggedIn, isDesktop, sidebarOpen, setSidebarOpen,
}) => {
  const classes = useStyles();
  return (
    <Drawer
      anchor="left"
      variant={isDesktop ? 'persistent' : 'temporary'}
      classes={{ paper: classes.drawer }}
      onClose={() => setSidebarOpen(false)}
      open={isDesktop || sidebarOpen}>
      <LinkSection isLoggedIn={isLoggedIn} />
    </Drawer>
  );
};

Sidebar.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  isDesktop: PropTypes.bool,
  sidebarOpen: PropTypes.bool.isRequired,
  setSidebarOpen: PropTypes.func.isRequired
};

Sidebar.defaultProps = {
  isDesktop: true,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Sidebar);
