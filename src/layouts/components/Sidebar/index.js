import React from 'react';
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

const Sidebar = props => {
	const classes = useStyles();
	return (
		<Drawer
			anchor='left'
			variant={props.isDesktop ? 'persistent' : 'temporary'}
			classes={{ paper: classes.drawer }}
			onClose={() => props.setSidebarOpen(false)}
			open={props.isDesktop || props.sidebarOpen}>
			sidesdadadsd
		</Drawer>
	);
};

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Sidebar);