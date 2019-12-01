import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { mapStateToProps, mapDispatchToProps } from './selectors';

/**
 * Button for opening menu
 *
 * @param {boolean} props.sidebarOpen - State of sidebar
 * @param {Function} props.setSidebarOpen - Open/Close sidebar
 */
const MenuButton = ({ sidebarOpen, setSidebarOpen }) => (
  <IconButton
    color="inherit"
    onClick={() => setSidebarOpen(!sidebarOpen)}>
    {sidebarOpen ? <CloseIcon /> : <MenuIcon />}
  </IconButton>
);

MenuButton.propTypes = {
  sidebarOpen: PropTypes.bool.isRequired,
  setSidebarOpen: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MenuButton);
