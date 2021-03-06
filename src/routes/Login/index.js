import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';
import LoginForm from './LoginForm';
import BackButton from '../../components/Buttons/Back';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    backgroundColor: theme.palette.background.default,
  },
  leftContainer: {
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    backgroundImage: 'url(/tushar.jpg)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  leftTitle: {
    color: theme.palette.white,
    fontWeight: 300,
  },
  rightContainer: {
    padding: theme.spacing(2),
  },
  contentHeader: {
    position: 'absolute',
    padding: theme.spacing(2),
    boxSizing: 'border-box',
  },
  content: {
    display: 'flex',
    padding: theme.spacing(2),
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    boxSizing: 'border-box',
  },
}));

const Login = () => {
  const classes = useStyles();
  return (
    <>
      <Grid
        container
        className={classes.root}
        direction="row"
        justify="space-evenly"
        alignItems="stretch"
        alignContent="stretch">
        <Grid item lg={5} className={classes.leftContainer}>
          <Typography className={classes.leftTitle} variant="h1">
            #Example title
          </Typography>
        </Grid>
        <Grid item lg={7} xs={12} className={classes.rightContainer}>
          <div className={classes.contentHeader}>
            <BackButton />
          </div>
          <div className={classes.content}>
            <LoginForm />
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default Login;
