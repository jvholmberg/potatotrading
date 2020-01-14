import React from 'react';
import PropTypes from 'prop-types';
import { NavLink as RouterLink } from 'react-router-dom';
import { ListItem, Button } from '@material-ui/core';
import useStyles from './styles';

const LinkItem = ({ to, children, icon: IconComponent }) => {
  const classes = useStyles();
  return (
    <ListItem className={classes.item}>
      <Button
        activeClassName={classes.active}
        className={classes.button}
        component={RouterLink}
        to={to}>
        {IconComponent && (
          <div className={classes.icon}>
            <IconComponent />
          </div>
        )}
        {children}
      </Button>
    </ListItem>
  );
}

LinkItem.propTypes = {
  icon: PropTypes.element,
  to: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

LinkItem.defaultProps = {
  icon: null,
};

export default LinkItem;
