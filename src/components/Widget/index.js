import React from 'react';
import styled from 'styled-components';
import { Grid } from '../Grid';

const Widget = (props) => (
	<Grid.Item {...props} />
);

Widget.Title = styled.h6`

`;

Widget.Body = styled.div`

`;

export { Widget };