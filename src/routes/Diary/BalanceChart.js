import React from 'react';
import PropTypes from 'prop-types';
import PieChart from '../../components/PieChart';
import Immutable from 'immutable';

const BalanceChart = ({ sessions }) => {
  const jsSessions = sessions.toJS();
  const data = jsSessions.reduce((accumulator, currentValue) => {
    const currentValueOfType = accumulator[currentValue.type.name] || 0;
    return ({
      ...accumulator,
      [currentValue.name]: currentValueOfType + 1,
    });
  }, {});
  return (
    <PieChart {...{
      data,
      dataName: 'name',
      dataKey: 'value',
    }} />
  );
};

BalanceChart.propTypes = {
  sessions: PropTypes.instanceOf(Immutable.List),
};

BalanceChart.defaultProps = {
  sessions: Immutable.List(),
};

export default React.memo(BalanceChart);
