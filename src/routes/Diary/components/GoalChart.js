/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import PieChart from '../../../components/PieChart';

const useStyles = makeStyles(() => ({
  center: {
    margin: '0 auto',
  }
}));

const GoalChart = ({ sessions }) => {
  const classes = useStyles();
  const data = sessions.reduce((ret, val) => {
    const idx = _.findIndex(ret, e => e.name === val.type.name);

    if (idx === -1) {
      // Adding new record
      ret.push({ name: val.type.name, value: 1 });
    } else {
      // Updating existing record
      ret.splice(idx, 1, { name: val.type.name, value: ret[idx].value + 1 });
    }
    return ret;
  }, []);

  return (
    <>
      <Typography variant="h3" align="center">Goal</Typography>
      <Box>
        <PieChart {...{
          className: classes.center,
          data,
          nameKey: 'name',
          dataKey: 'value',
          width: 200,
          height: 200,
        }} />
      </Box>
    </>
  );
};

GoalChart.propTypes = {
  sessions: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    timestamp: PropTypes.number,
    name: PropTypes.string,
    comment: PropTypes.string,
  })),
};

GoalChart.defaultProps = {
  sessions: [],
};

export default GoalChart;
