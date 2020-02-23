import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';

import PieChartLoading from './PieChart.loading';
import PieChartEmpty from './PieChart.empty';
import PieChartIdeal from './PieChart';
import PieChartError from './PieChart.error';

const Piechart = ({
  className,
  width,
  height,
  fill,
  innerRadius,
  outerRadius,
  data,
  dataKey,
  nameKey,
  loading,
  error,
}) => {
  try {
    if (error) return (<PieChartLoading {...{ error }} />);
    if (loading) return (<PieChartLoading {...{ className, width, height }} />);
    if (data.length === 0) return (<PieChartLoading />);
    return (
      <PieChartIdeal {...{
        className,
        width,
        height,
        fill,
        innerRadius,
        outerRadius,
        data,
        dataKey,
        nameKey,

      }} />
    );
  } catch (err) {
    if (process.env.NODE_ENV !== 'production') console.error(err);
    return (<PieChartError {...{ error }} />)
  }
};

Piechart.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.string,
  data: PropTypes.array,
};

Piechart.defaultProps = {
  loading: false,
  error: null,
  data: [],
};

export default React.memo(Piechart);
