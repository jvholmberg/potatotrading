import React from 'react';
import PropTypes from 'prop-types';
import { Skeleton } from '@material-ui/lab';

const PieChartLoading = ({ width, height }) => (
  <Skeleton
    {...{
      animation: 'wave',
      variant: 'circle',
      width,
      height,
    }} />
);

PieChartLoading.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};

export default React.memo(PieChartLoading);
