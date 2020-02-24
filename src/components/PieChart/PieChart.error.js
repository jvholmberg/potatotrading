import React from 'react';
import PropTypes from 'prop-types';
import { Alert, AlertTitle } from '@material-ui/lab';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  padTop: {
    marginTop: theme.spacing(2),
  }
}));

const PieChartError = ({ errorMessage }) => {
  const classes = useStyles();
  return (
    <Alert {...{ className: classes.padTop, severity: 'error' }}>
      <AlertTitle>Error</AlertTitle>
      {errorMessage}
    </Alert>
  );
};

PieChartError.propTypes = {
  errorMessage: PropTypes.string,
};

PieChartError.defaultProps = {
  errorMessage: 'Something went wrong',
};

export default React.memo(PieChartError);
