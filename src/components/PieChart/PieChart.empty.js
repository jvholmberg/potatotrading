import React from 'react';
import PropTypes from 'prop-types';
import { Skeleton } from '@material-ui/lab';

const PieChartEmpty = ({ outerRadius }) => (
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

PieChartEmpty.propTypes = {
  outerRadius: PropTypes.number.isRequired,
};

export default PieChartEmpty;
