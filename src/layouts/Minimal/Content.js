import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
  root: {
    height: '100%',
    boxSizing: 'border-box',
  },
}));

const Content = ({ children }) => {
  const classes = useStyles();
  return (
    <main className={classes.root}>
      {children}
    </main>
  );
};

Content.propTypes = {
  children: PropTypes.node,
};

Content.defaultProps = {
  children: null,
};

export default Content;
