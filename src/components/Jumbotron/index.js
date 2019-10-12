import styled from 'styled-components';

const Jumbotron = styled.div`
	display: block;
	padding: 2rem;
	box-sizing: border-box;
	background-color: blue;
`;

Jumbotron.Header = styled.h3`
	font-size: 2.5rem;
`;

Jumbotron.Content = styled.div`
	padding 1rem 0 0;
`;

export { Jumbotron };