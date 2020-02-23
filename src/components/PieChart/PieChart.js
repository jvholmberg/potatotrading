import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import {
  ResponsiveContainer, PieChart, Pie, Sector, Cell,
} from 'recharts';

const renderActiveShape = ({
  cx,
  cy,
  name,
  ...rest
}) => (
  <g>
    <text x={cx} y={cy} dy={4} textAnchor="middle">{name}</text>
    <Sector {...{
      cx,
      cy,
      ...rest
    }} />
  </g>
);

renderActiveShape.propTypes = {
  innerRadius: PropTypes.number.isRequired,
  outerRadius: PropTypes.number.isRequired,
  cx: PropTypes.number.isRequired,
  cy: PropTypes.number.isRequired,
  startAngle: PropTypes.number.isRequired,
  endAngle: PropTypes.number.isRequired,
  fill: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  // value: PropTypes.number.isRequired,
  percent: PropTypes.number.isRequired,
};

const CustomPieChart = ({
  innerRadius,
  outerRadius,
  data,
  dataKey,
  nameKey,
}) => {
  const [activeIndex, setActiveIndex] = React.useState(null);
  const minHeight = (outerRadius * 2) + 20
  return (
    <ResponsiveContainer {...{ minHeight }}>
      <PieChart>
        <Pie {...{
          activeIndex,
          activeShape: renderActiveShape,
          innerRadius,
          outerRadius,
          paddingAngle: 5,
          data,
          dataKey,
          nameKey,
          onMouseEnter: (...args) => setActiveIndex(args[1]),
          onMouseLeave: setActiveIndex,
        }}>
          {_.map(data, (entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

CustomPieChart.propTypes = {
  innerRadius: PropTypes.number.isRequired,
  outerRadius: PropTypes.number.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  dataKey: PropTypes.string.isRequired,
  nameKey: PropTypes.string.isRequired,
};

export default React.memo(CustomPieChart);
