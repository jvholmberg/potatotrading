import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/styles';
import { selectIsDesktop } from '../../sagas/ui/selectors';

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

const Content = ({ children }) => {
  const isDesktop = useSelector(selectIsDesktop);
  const classes = useStyles();
  return (
    <main className={isDesktop ? classes.shift : classes.noShift}>
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
