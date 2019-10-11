import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
	position: sticky;
	display: block;
	padding: 0 2rem;
	width: 100%;
	box-sizing: border-box;
	background-color: red;
`;

const Content = styled.header`
	display: grid;
  grid-template-columns: auto 60% 40%;
	grid-template-areas: "wordmark left-section right-section";
	grid-template-rows: auto;
`;

const Wordmark = styled(Link)`
	padding: 1rem;
	grid-area: wordmark;
	text-decoration: none;
`;

const AppBar = ({ children }) =>  (
	<Wrapper>
		<Content>
			<Wordmark to='/'>
				Training
			</Wordmark>
			{children}
		</Content>
	</Wrapper>
);

AppBar.LeftSection = styled.nav`
	grid-area: left-section;
`;

AppBar.RightSection = styled.nav`
	grid-area: right-section;
`;

AppBar.Link = styled(Link)`
	display: inline-block;
	padding: 1rem;
	text-decoration: none;

`;

export { AppBar };