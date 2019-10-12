import React from 'react';
import styled from 'styled-components';

const defaultStyle = `
	display: inline-block;
  margin: 0 1rem;
	padding: 1rem 1.5rem;
  font-size: 1.4rem;
  font-family: inherit;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
	border-radius: .2rem;
	border: none;
`;

const Button = (props) => (null);
Button.Primary = styled.button`
	${defaultStyle}
	background-color: #007bff;
	color: #fff;
	&:hover, &:active {
		background-color: #0062cc;
	};
`;
Button.Secondary = styled.button`
	${defaultStyle}
	background-color: #6c757d;
	color: #fff;
	&:hover, &:active {
		background-color: #545b62;
	};
`;
Button.Success = styled.button`
	${defaultStyle}
	background-color: #28a745;
	color: #fff;
	&:hover, &:active {
		background-color: #218838;
	};
`;
Button.Danger = styled.button`
	${defaultStyle}
	background-color: #dc3545;
	color: #fff;
	&:hover, &:active {
		background-color: #c82333;
	};
`;
Button.Warning = styled.button`
	${defaultStyle}
	background-color: #ffc107;
	color: #fff;
	&:hover, &:active {
		background-color: #e0a800;
	};
`;
Button.Info = styled.button`
	${defaultStyle}
	background-color: #17a2b8;
	color: #fff;
	&:hover, &:active {
		background-color: #138496;
	};
`;
Button.Light = styled.button`
	${defaultStyle}
	background-color: #f8f9fa;
	color: #212529;
	&:hover, &:active {
		background-color: #e2e6ea;
	};
`;
Button.Dark = styled.button`
	${defaultStyle}
	background-color: #343a40;
	color: #fff;
	&:hover, &:active {
		background-color: #23272b;
	};
`;
Button.Link = styled.button`
	${defaultStyle}
	background-color: transparent;
	color: #007bff;
	&:hover, &:active {
		color: #0062cc;
	};
`;

export { Button };
