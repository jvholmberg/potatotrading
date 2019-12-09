import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useMediaQuery } from '@material-ui/core';
import { useTheme } from '@material-ui/styles';
import mapDispatchToProps from './selectors';

const getScreenSize = (xs, sm, md, lg, xl) => {
  if (xl) return 'xl';
  if (lg) return 'lg';
  if (md) return 'md';
  if (sm) return 'sm';
  if (xs) return 'xs';
  return 'xs';
}

/**
 * Determine screen size and pass to ScreenReporter
 *
 * @param {Function} props.setScreenSize - Action to set screenSize in store
 */
const ScreenSpy = ({ setScreenSize }) => {
  const theme = useTheme();
  const xs = useMediaQuery(theme.breakpoints.up('xs'));
  const sm = useMediaQuery(theme.breakpoints.up('sm'));
  const md = useMediaQuery(theme.breakpoints.up('md'));
  const lg = useMediaQuery(theme.breakpoints.up('lg'));
  const xl = useMediaQuery(theme.breakpoints.up('xl'));

  useEffect(() => {
    const screenSize = getScreenSize(xs, sm, md, lg, xl);
    setScreenSize(screenSize);
  });

  return null;
};

ScreenSpy.propTypes = {
  setScreenSize: PropTypes.func.isRequired,
};

export default connect(
  null,
  mapDispatchToProps,
)(ScreenSpy);
