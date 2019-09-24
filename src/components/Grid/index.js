import React from 'react';
import styled from 'styled-components';
import {
	GAP,
} from '../config';

const Grid = styled.div`
	display: grid;
	grid-template-columns: auto auto auto auto;
	grid-gap: ${GAP};
`;

Grid.Item = styled.div`

`;

export { Grid };