import React from 'react';

import { Wrapper, Content } from './styles';

export default ({ children, ...rest }) => (
	<Wrapper {...rest}>
		<Content>
			{children}
		</Content>
	</Wrapper>
);
