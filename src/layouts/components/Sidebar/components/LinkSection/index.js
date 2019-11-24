import React from 'react';
import { NavLink as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { List, ListItem, Button } from '@material-ui/core';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import useStyles from './styles';

const LinkItem = ({ icon, to, text }) => {
  const classes = useStyles();
  return (
    <ListItem>
      <Button
        activeClassName={classes.active}
        className={classes.button}
        component={RouterLink}
        to={to}>
        <div className={classes.icon}>{icon}</div>
        {text}
      </Button>
    </ListItem>
  );
};

LinkItem.propTypes = {
  icon: PropTypes.node,
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

LinkItem.defaultProps = {
  icon: null,
};

const LinkSection = () => (
  <List>
    <LinkItem icon={LockOpenIcon} to="/" text="Landing" />
  </List>
);

LinkSection.propTypes = {

};

export default LinkSection;
