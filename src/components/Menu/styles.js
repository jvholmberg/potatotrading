import styled from 'styled-components';
import { Link as ReactRouterLink } from 'react-router-dom';

export const Wrapper = styled.div`
	position: sticky;
	display: block;
	padding: 0 1rem;
	width: 100%;
	box-sizing: border-box;
	border-bottom: .1rem solid #b5b5b5;
`;

export const Content = styled.header`
	display: grid;
	margin: 0 auto;
	max-width: 108rem;
	width: 100%;
  grid-template-columns: 12rem auto auto;
	grid-template-areas: "wordmark left-section right-section";
	grid-template-rows: auto;
`;

export const Wordmark = styled(ReactRouterLink)`
	padding: 1.4rem 1rem;
	grid-area: wordmark;
	font-size: 1.5rem;
	font-weight: 400;
	color: #3a3a3a;
	text-decoration: none;
`;

export const LeftSection = styled.nav`
	padding: 0 1rem;
	grid-area: left-section;
`;

export const RightSection = styled.nav`
	padding: 0 1rem;
	grid-area: right-section;
	text-align: right;
`;

export const Link = styled(ReactRouterLink)`
	display: inline-block;
	margin: .7rem 0;
	padding: .8rem 1.6rem;
	font-size: 1.5rem;
	color: #3a3a3a;
	text-decoration: none;
	&:hover {
		text-decoration: underline;
	}
`;

export const ButtonLink = styled(ReactRouterLink)`
	display: inline-block;
	margin: .7rem 1rem .7rem 0;
	padding: .8rem 1.6rem;
	font-size: 1.3rem;
	line-height: 1.3rem;
	background-color: #3a3a3a;
	border: .1rem solid #3a3a3a;
	border-radius: .2rem;
	color: #fff;
	text-decoration: none;
	&:hover, &:active {
		background-color: #4a4a4a;
	}
`;

export const Button = styled.button`
	display: inline-block;
	margin: .7rem 1rem .7rem 0;
	padding: .8rem 1.6rem;
	font-size: 1.3rem;
	line-height: 1.3rem;
	background-color: #3a3a3a;
	border: .1rem solid #3a3a3a;
	border-radius: .2rem;
	color: #fff;
	text-decoration: none;
	&:hover, &:active {
		background-color: #4a4a4a;
	}
`;