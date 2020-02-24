import React from 'react';
import PropTypes from 'prop-types';
import { Alert, AlertTitle } from '@material-ui/lab';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  padTop: {
    marginTop: theme.spacing(2),
  }
}));

const PieChartEmpty = ({ emptyMessage }) => {
  const classes = useStyles();
  return (
    <Alert {...{ className: classes.padTop, severity: 'info' }}>
      <AlertTitle>Empty</AlertTitle>
      {emptyMessage}
    </Alert>
  );
};

PieChartEmpty.propTypes = {
  emptyMessage: PropTypes.string,
};

PieChartEmpty.defaultProps = {
  emptyMessage: 'No data could be found',
};

export default React.memo(PieChartEmpty);
