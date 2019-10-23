import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	padding-bottom: 6vw;
	clip-path: polygon(
		0 0,
		100% 0,
		100% 100%,
		0 calc(100% - 6vw)
	);
`;

const Content = styled.div`
	margin: 0 auto;
	padding: 5rem 1rem;
	max-width: 108rem;
	width: 100%;
	box-sizing: border-box;
`;

export default ({ children, ...rest }) => (
	<Wrapper {...rest}>
		<Content>
			{children}
		</Content>
	</Wrapper>
)