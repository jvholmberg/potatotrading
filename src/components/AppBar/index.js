import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
	position: sticky;
	display: block;
	padding: 0 1rem;
	width: 100%;
	box-sizing: border-box;
	background-color: #fff;
	border-bottom: .1rem solid #b5b5b5
`;

const Content = styled.header`
	display: grid;
  grid-template-columns: 12rem auto auto;
	grid-template-areas: "wordmark left-section right-section";
	grid-template-rows: auto;
`;

const Wordmark = styled(Link)`
	padding: 1.5rem;
	grid-area: wordmark;
	font-size: 1.5rem;
	font-weight: 300;
	color: #444;
	text-decoration: none;
`;

const AppBar = ({ children }) =>  (
	<Wrapper>
		<Content>
			<Wordmark to='/'>
				{/* <i className='fas fa-heartbeat' style={{
					marginRight: '1.5rem',
					color: '#dc3131',
					fontSize: '1.7rem'
				}} /> */}
				Training
			</Wordmark>
			{children}
		</Content>
	</Wrapper>
);

AppBar.LeftSection = styled.nav`
	padding: 0 1rem;
	grid-area: left-section;
`;

AppBar.RightSection = styled.nav`
	padding: 0 1rem;
	grid-area: right-section;
`;

AppBar.Link = styled(Link)`
	display: inline-block;
	padding: 1.5rem;
	font-size: 1.5rem;
	font-weight: 300;
	text-decoration: none;

`;

export { AppBar };