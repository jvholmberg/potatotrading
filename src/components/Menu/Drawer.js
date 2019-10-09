import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const WrapperOuter = styled.header`
	display: sticky;
	width: 100%;
	background-color: red;
`;

const WrapperInner = styled.div`
	display: grid;
  grid-template-columns: auto 65% 35%;
  grid-template-rows: auto;
  grid-template-areas: 
    "brand main tools";
	padding: 0 2rem;
	width: 100%;
	box-sizing: border-box;
`;

const Brand = styled.span`
	display: block;
	grid-area: brand;
	padding: 1rem 2rem;
`;

const Main = styled.div`
	grid-area: main;
`;

const Tools = styled.div`
	grid-area: tools;
`;

const LinkWrapper = styled.span`
	display: inline-block;
	padding: 1rem;
`;



const AppBar = ({ children, ...rest }) => (
	<WrapperOuter {...rest}>
		<WrapperInner>
			<Brand>Training</Brand>
			{children}
		</WrapperInner>
	</WrapperOuter>
);
AppBar.Main = Main;
AppBar.Tools = Tools;
AppBar.Link = (props) => (
	<LinkWrapper>
		<NavLink {...props} />
	</LinkWrapper>
);

export { AppBar };





<AppBar>
	<AppBar.Main>
		<AppBar.Link to='/login'>
			login
		</AppBar.Link>
		<AppBar.Link to='/register'>
			register
		</AppBar.Link>
	</AppBar.Main>
	<AppBar.Tools>

	</AppBar.Tools>
</AppBar>
