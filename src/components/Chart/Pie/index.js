import React from 'react';
import PropTypes from 'prop-types';
import * as d3 from 'd3';

const Pie = ({ data, ...rest }) => {

const color = d3.scaleOrdinal()
	.domain(data.map(d => d.name))
	.range(d3.quantize(t => d3.interpolateSpectral(t * 0.8 + 0.1), data.length).reverse())

	const arc = d3.arc()
		.innerRadius(0)
		.outerRadius(Math.min(200, 200) / 2 - 1)

	const arcs = d3.pie(data);

	const svg = d3.create("svg")
			.attr("viewBox", [100, 100, 200, 200]);
			
	svg.append("g")
		.attr("stroke", "white")
	.selectAll("path")
	.data(arcs)
	.join("path")
		.attr("fill", d => color(d.data.name))
		.attr("d", arc)
	.append("title")
		.text(d => `${d.data.name}: ${d.data.value.toLocaleString()}`);
};

Pie.propTypes = {
	data: PropTypes.arrayOf(PropTypes.shape({
		name: PropTypes.string.isRequired,
		value: PropTypes.number.isRequired,
	})),
};

export default Pie;
