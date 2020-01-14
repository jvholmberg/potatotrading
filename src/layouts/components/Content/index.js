import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/styles';
import { mapStateToProps } from './selectors';

const useStyles = makeStyles(() => ({
  noShift: {
    height: '100%',
    boxSizing: 'border-box',
  },
  shift: {
    paddingLeft: 240,
    height: '100%',
    boxSizing: 'border-box',
  },
}));

export const Content = ({ isDesktop, children }) => {
  const classes = useStyles();
  return (
    <main className={isDesktop ? classes.shift : classes.noShift}>
      {children}
    </main>
  );
};

Content.propTypes = {
  isDesktop: PropTypes.bool,
  children: PropTypes.node,
};

Content.defaultProps = {
  isDesktop: false,
  children: null,
};

export default connect(
  mapStateToProps,
  null,
)(Content);
