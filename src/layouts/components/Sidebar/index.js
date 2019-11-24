import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Drawer } from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';

import { mapStateToProps, mapDispatchToProps } from './selectors';

const useStyles = makeStyles(theme => ({
  drawer: {
    width: 240,
    [theme.breakpoints.up('lg')]: {
      marginTop: 64,
      height: 'calc(100% - 64px)'
    }
  },
  root: {
    backgroundColor: theme.palette.white,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    padding: theme.spacing(2)
  },
  divider: {
    margin: theme.spacing(2, 0)
  },
  nav: {
    marginBottom: theme.spacing(2)
  }
}));

const Sidebar = ({ isDesktop, sidebarOpen, setSidebarOpen }) => {
  const classes = useStyles();
  return (
    <Drawer
      anchor="left"
      variant={isDesktop ? 'persistent' : 'temporary'}
      classes={{ paper: classes.drawer }}
      onClose={() => setSidebarOpen(false)}
      open={isDesktop || sidebarOpen}>
        asd
    </Drawer>
  );
};

Sidebar.propTypes = {
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
