import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import LinkComponent from '@material-ui/core/Link';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  }
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.root}>
      <Typography variant="body1">
        &copy;
        {' '}
        <Link to="/copyright" as={LinkComponent}>
          forkyfork
        </Link>
        . 2019
      </Typography>
      <Typography variant="caption">
        Created with love for the forks. By forks and spoons who
        love to eat together in diners!
      </Typography>
    </footer>
  );
};

export default Footer;
