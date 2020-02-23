import React from 'react';
import PropTypes from 'prop-types';
import { Alert, AlertTitle } from '@material-ui/lab';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  padTop: {
    marginTop: theme.spacing(2),
  }
}));

const PieChartError = ({ error }) => {
  const classes = useStyles();
  return (
    <Alert {...{ className: classes.padTop, severity: 'error' }}>
      <AlertTitle>Error</AlertTitle>
      {error}
    </Alert>
  );
};

PieChartError.propTypes = {
  error: PropTypes.string,
};

PieChartError.defaultProps = {
  error: 'Something went wrong',
};

export default React.memo(PieChartError);
