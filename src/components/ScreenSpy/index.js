import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { useMediaQuery } from '@material-ui/core';
import { useTheme } from '@material-ui/styles';
import mapDispatchToProps from './selectors';

class ScreenReporter extends PureComponent {
  componentDidMount() {
    this.handleReport();
  }

  componentDidUpdate() {
    this.handleReport();
  }

  handleReport() {
    const { isDesktop, setScreenSize } = this.props;
    if (isDesktop) return setScreenSize('lg');
    if (!isDesktop) return setScreenSize('sm');
    return null;
  }

  render() {
    return null;
  }
}

ScreenReporter.propTypes = {
  isDesktop: PropTypes.bool.isRequired,
  setScreenSize: PropTypes.func.isRequired,
};

const ScreenSpy = ({ setScreenSize }) => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'), {
    defaultMatches: true,
  });
  return <ScreenReporter {...{ isDesktop, setScreenSize }} />;
};

ScreenSpy.propTypes = {
  setScreenSize: PropTypes.func.isRequired,
};

export default connect(
  null,
  mapDispatchToProps,
)(ScreenSpy);
