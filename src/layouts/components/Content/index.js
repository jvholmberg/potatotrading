import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/styles';
import { mapStateToProps } from './selectors';

const useStyles = makeStyles(theme => ({
  shiftContent: {
    paddingLeft: 240
  },
}));

export const Content = ({ isDesktop, children }) => {
	const classes = useStyles();
	return (
		<div className={isDesktop ? classes.shiftContent : undefined}>
			{children}
		</div>
	)
};

export default connect(
	mapStateToProps,
	null,
)(Content);