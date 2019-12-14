import makeStyles from '@material-ui/core/styles/makeStyles';

export default makeStyles(theme => ({
  title: {
    margin: theme.spacing(4, 4, 0),
  },
  body: {
    margin: theme.spacing(2, 4, 4),
    maxWidth: '35rem',
  },
}));
