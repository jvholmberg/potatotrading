import React from 'react';
import PropTypes from 'prop-types';
import { Skeleton } from '@material-ui/lab';

const PieChartLoading = ({ outerRadius }) => (
  <Skeleton {...{
    animation: 'wave',
    variant: 'circle',
    width: `${outerRadius}%`,
    height: `${outerRadius}%`,
    style: {
      margin: `${(100 - outerRadius) / 2}%`,
      boxSizing: 'border-box',
    },
  }} />
);

PieChartLoading.propTypes = {
  outerRadius: PropTypes.number.isRequired,
};

export default PieChartLoading;
