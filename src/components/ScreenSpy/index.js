import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useMediaQuery } from '@material-ui/core';
import { useTheme } from '@material-ui/styles';
import mapDispatchToProps from './selectors';

/**
 * @param {boolean} xs -
 * @param {boolean} sm -
 * @param {boolean} md -
 * @param {boolean} lg -
 * @param {boolean} xl -
 */
const getScreenSize = (xs, sm, md, lg, xl) => {
  if (xl) return 'xl';
  if (lg) return 'lg';
  if (md) return 'md';
  if (sm) return 'sm';
  if (xs) return 'xs';
  return 'xs';
}

class ScreenReporter extends PureComponent {
  componentDidMount() {
    this.handleReport();
  }

  componentDidUpdate() {
    this.handleReport();
  }

  handleReport = () => {
    const {
      xs, sm, md, lg, xl, setScreenSize,
    } = this.props;
    const screenSize = getScreenSize(xs, sm, md, lg, xl);
    return setScreenSize(screenSize);
  }

  render() {
    return null;
  }
}

ScreenReporter.propTypes = {
  xs: PropTypes.bool.isRequired,
  sm: PropTypes.bool.isRequired,
  md: PropTypes.bool.isRequired,
  lg: PropTypes.bool.isRequired,
  xl: PropTypes.bool.isRequired,
  setScreenSize: PropTypes.func.isRequired,
};

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

  return (
    <ScreenReporter {...{
      xs, sm, md, lg, xl, setScreenSize,
    }} />
  );
};

ScreenSpy.propTypes = {
  setScreenSize: PropTypes.func.isRequired,
};

export default connect(
  null,
  mapDispatchToProps,
)(ScreenSpy);
