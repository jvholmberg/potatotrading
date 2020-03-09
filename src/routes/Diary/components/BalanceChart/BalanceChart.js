import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/styles';
import { Box, Typography } from '@material-ui/core';
import PieChart from '../../../../components/PieChart';
import { selectFetching, selectError, selectData } from './BalanceChart.selectors';

const useStyles = makeStyles(() => ({
  center: {
    margin: '0 auto',
    width: '100%',
  }
}));

const BalanceChart = () => {
  const fetching = useSelector(selectFetching);
  const error = useSelector(selectError);
  const data = useSelector(selectData);
  const classes = useStyles();
  return (
    <>
      <Typography variant="h3" align="center">Balance</Typography>
      <Box {...{
        className: classes.center,
        width: '200px',
        height: '200px'
      }}>
        <PieChart {...{
          className: classes.center,
          loading: fetching,
          errorMessage: error,
          data,
          nameKey: 'name',
          dataKey: 'value',
          innerRadius: 70,
          outerRadius: 80,
        }} />
      </Box>
    </>
  );
};

BalanceChart.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.bool,
  sessions: PropTypes.array,
};

BalanceChart.defaultProps = {
  loading: false,
  error: false,
  sessions: [],
};

export default BalanceChart;
