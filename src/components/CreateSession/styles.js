/* eslint-disable */

// This will be completely remade from the ground up and only still exists to prevent legacy code from breaking

import styled from 'styled-components';

export const Table = styled.table`
	width: 100%;
`;

export const THead = styled.thead`

`;

export const TH = styled.th`
	padding: 1rem;
`;

export const TBody = styled.tbody`

`;

export const TD = styled.td`
	padding: 1rem;
`;

export const TR = styled.tr`

`;

export const Label = styled.label`
  display: inline-block;
	width: 100%;
  font-size: 1.2rem;
  font-weight: 100;
  color: #212529;
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
