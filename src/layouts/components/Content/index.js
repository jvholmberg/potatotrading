import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/styles';
import { mapStateToProps } from './selectors';

const useStyles = makeStyles(() => ({
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
  );
};

Content.propTypes = {
  isDesktop: PropTypes.bool,
  children: PropTypes.node,
};

Content.defaultProps = {
  isDesktop: true,
  children: null,
};

export default connect(
  mapStateToProps,
  null,
)(Content);
