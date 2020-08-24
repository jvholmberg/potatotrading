import React from 'react';
import PropTypes from 'prop-types';
import { NavLink as RouterLink } from 'react-router-dom';
import { ListItem, Button, colors } from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(theme => ({
  item: {
    display: 'flex',
    paddingTop: 0,
    paddingBottom: 0
  },
  button: {
    color: colors.blueGrey[800],
    padding: '10px 8px',
    justifyContent: 'flex-start',
    textTransform: 'none',
    letterSpacing: 0,
    width: '100%',
    fontWeight: theme.typography.fontWeightMedium
  },
  icon: {
    color: theme.palette.icon,
    width: 24,
    height: 24,
    display: 'flex',
    alignItems: 'center',
    marginRight: theme.spacing(1)
  },
  active: {
    color: theme.palette.primary.main,
    fontWeight: theme.typography.fontWeightMedium,
    '& $icon': {
      color: theme.palette.primary.main
    }
  }
}));

const SidebarLink = ({ to, children, icon: IconComponent }) => {
  const classes = useStyles();
  return (
    <ListItem className={classes.item}>
      <Button
        activeClassName={classes.active}
        className={classes.button}
        component={RouterLink}
        to={to}>
        <div className={classes.icon}>
          <IconComponent />
        </div>
        {children}
      </Button>
    </ListItem>
  );
}

SidebarLink.propTypes = {
  icon: PropTypes.object.isRequired,
  to: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default SidebarLink;
