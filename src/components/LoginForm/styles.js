import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Form = styled.form`
	padding: 3rem;
	max-width: 35rem;
	background-color: #fff;
	border: .1rem solid #b5b5b5;
	border-radius: 0.2rem;
`;

export const Input = styled.input`
  display: block;
  margin: 1rem 0;
  padding: 1rem;
  width: 100%;
  font-size: 1.2em;
  font-weight: 100;
  box-sizing: border-box;
	background-color: #fff;
	border-radius: .2em;
  border: .1rem solid #b5b5b5;
`;

export const Label = styled.label`
  display: inline-block;
	width: 100%;
  font-size: 1.2rem;
  font-weight: 100;
	color: #212529;
	box-sizing: border-box;
`;

export const Error = styled.span`
	display: block;
	color: #dc3545;
`;

export const PrimaryButton = styled.button`
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

export const SecondaryButton = styled(Link)`
	display: inline-block;
	margin: .7rem .5rem;
	padding: .8rem 1.6rem;
	font-size: 1.3rem;
	line-height: 1.3rem;
	background-color: #fff;
	border: .1rem solid #3a3a3a;
	border-radius: .2rem;
	color: #4a4a4a;
	text-decoration: none;
	&:hover, &:active {
		background-color: #fff;
	}
`;