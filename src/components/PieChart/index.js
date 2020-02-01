import React from 'react';
import PropTypes from 'prop-types';
import { PieChart, Pie, Sector } from 'recharts';

const renderActiveShape = ({
  innerRadius,
  outerRadius,
  cx,
  cy,
  startAngle,
  endAngle,
  fill,
  name,
  // value,
  percent,
}) => (
  <g>
    <text x={cx} y={cy} dy={-4} textAnchor="middle">{name}</text>
    <text x={cx} y={cy} dy={20} textAnchor="middle">{`${(percent * 100).toFixed(2)}%`}</text>
    <Sector {...{
      cx,
      cy,
      innerRadius,
      outerRadius,
      startAngle,
      endAngle,
      fill,
    }} />
  </g>
);

const CustomPieChart = ({
  width,
  height,
  fill,
  innerRadius,
  outerRadius,
  data,
  dataKey,
  nameKey,
}) => {
  const [activeIndex, setActiveIndex] = React.useState(null);

  return (
    <PieChart {...{ width, height }}>
      <Pie {...{
        activeIndex,
        activeShape: renderActiveShape,
        innerRadius,
        outerRadius,
        cx: width / 2,
        cy: height / 2,
        fill,
        data,
        dataKey,
        nameKey,
        onMouseEnter: (...args) => setActiveIndex(args[1]),
        onMouseLeave: setActiveIndex,
      }} />
    </PieChart>
  );
};

CustomPieChart.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  fill: PropTypes.string,
  innerRadius: PropTypes.number,
  outerRadius: PropTypes.number,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  dataKey: PropTypes.string.isRequired,
  nameKey: PropTypes.string.isRequired,
};

CustomPieChart.defaultProps = {
  width: 400,
  height: 400,
  fill: '#8884d8',
  innerRadius: 50,
  outerRadius: 80,
};

export default CustomPieChart;
