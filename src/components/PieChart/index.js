import React from 'react';
import PropTypes from 'prop-types';

import PieChartLoading from './PieChart.loading';
import PieChartEmpty from './PieChart.empty';
import PieChartIdeal from './PieChart';
import PieChartError from './PieChart.error';

const Piechart = ({
  loading,
  errorMessage,
  emptyMessage,
  innerRadius,
  outerRadius,
  data,
  dataKey,
  nameKey,
}) => {
  try {
    if (errorMessage) return (<PieChartError {...{ errorMessage }} />);
    if (loading) return (<PieChartLoading {...{ outerRadius }} />);
    if (data.length === 0) return (<PieChartEmpty {...{ emptyMessage }} />);
    return (
      <PieChartIdeal {...{
        innerRadius,
        outerRadius,
        data,
        dataKey,
        nameKey,
      }} />
    );
  } catch (err) {
    if (process.env.NODE_ENV !== 'production') console.error(err);
    return (<PieChartError {...{ errorMessage }} />)
  }
};

Piechart.propTypes = {
  loading: PropTypes.bool,
  errorMessage: PropTypes.string,
  emptyMessage: PropTypes.string,
  innerRadius: PropTypes.number,
  outerRadius: PropTypes.number,
  data: PropTypes.array.isRequired,
  dataKey: PropTypes.string.isRequired,
  nameKey: PropTypes.string.isRequired,
};

Piechart.defaultProps = {
  loading: false,
  innerRadius: 70,
  outerRadius: 80,
};

export default React.memo(Piechart);
