import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { makeStyles } from '@material-ui/styles';
import { Box, Typography } from '@material-ui/core';
import PieChart from '../../../components/PieChart';

const useStyles = makeStyles(() => ({
  center: {
    margin: '0 auto',
    width: '100%',
  }
}));

const BalanceChart = ({ sessions, loading, error }) => {
  const classes = useStyles();
  const data = sessions.reduce((ret, val) => {
    const idx = _.findIndex(ret, e => e.name === val.type.name);

    if (idx === -1) {
      // Adding new record
      ret.push({
        name: val.type.name,
        color: val.type.color,
        value: 1,
      });
    } else {
      // Updating existing record
      ret.splice(idx, 1, { name: val.type.name, value: ret[idx].value + 1, color: val.type.color });
    }
    return ret;
  }, []);

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
          loading,
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
  sessions: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
  })),
};

BalanceChart.defaultProps = {
  sessions: [],
};

export default BalanceChart;
