import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Hidden } from '@material-ui/core';
import {
  Root, SignInButton, SignOutButton, MenuButton, FlexGrow
} from './styles';
import NotificationsButton from '../../../components/Buttons/Notifications';
import { mapStateToProps, mapDispatchToProps } from './selectors';

const Header = ({
  accessToken, destroyJwt, isDesktop, noSidebar, sidebarOpen, setSidebarOpen,
}) => (
  <Root>
    <FlexGrow />
    {accessToken ? (
      <Hidden mdDown>
        <NotificationsButton length={1} />
        <SignOutButton onClick={destroyJwt} />
      </Hidden>
    ) : (
      <Hidden mdDown>
        <SignInButton />
      </Hidden>
    )}
    {!noSidebar && (
      <Hidden lgUp>
        <MenuButton onClick={() => !isDesktop && setSidebarOpen(!sidebarOpen)} />
      </Hidden>
    )}
  </Root>
);

Header.propTypes = {
  accessToken: PropTypes.string,
  destroyJwt: PropTypes.func,
  isDesktop: PropTypes.bool,
  noSidebar: PropTypes.bool,
  sidebarOpen: PropTypes.bool,
  setSidebarOpen: PropTypes.func,
};

Header.defaultProps = {
  accessToken: null,
  destroyJwt: null,
  isDesktop: false,
  noSidebar: false,
  sidebarOpen: false,
  setSidebarOpen: null,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);
