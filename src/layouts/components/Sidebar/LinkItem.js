import React from 'react';
import PropTypes from 'prop-types';
import RouterLink from 'react-router-dom/NavLink';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';
import useStyles from './styles';

const LinkItem = ({ to, children, icon: IconComponent }) => {
  const classes = useStyles();
  return (
    <ListItem>
      <Button
        activeClassName={classes.active}
        className={classes.button}
        component={RouterLink}
        to={to}>
        {IconComponent && (
          <div className={classes.icon}><IconComponent /></div>
        )}
        {children}
      </Button>
    </ListItem>
  );
}

LinkItem.propTypes = {
  icon: PropTypes.node,
  to: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

LinkItem.defaultProps = {
  icon: null,
};

export default LinkItem;
