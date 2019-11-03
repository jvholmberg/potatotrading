import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/styles';
import { mapStateToProps } from './selectors';

const useStyles = makeStyles(theme => ({
	noShift: {
		paddingTop: 64,
		height: '100%',
		boxSizing: 'border-box',
	},
  shift: {
		paddingTop: 64,
    paddingLeft: 240,
		height: '100%',
		boxSizing: 'border-box',
  },
}));

export const Content = ({ isDesktop, children }) => {
	const classes = useStyles();
	return (
		<div className={isDesktop ? classes.shift : classes.noShift}>
			{children}
		</div>
	)
};

export default connect(
	mapStateToProps,
	null,
)(Content);