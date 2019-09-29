import React from 'react';
import PropTypes from 'prop-types';
import * as d3 from 'd3';

const Pie = ({ data, ...rest }) => {

	return null;
};

Pie.propTypes = {
	data: PropTypes.arrayOf(PropTypes.shape({
		name: PropTypes.string.isRequired,
		value: PropTypes.number.isRequired,
	})),
};

export default Pie;
