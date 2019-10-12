import React from 'react';
import styled from 'styled-components';

import { Label } from '../';

const StyledInput = styled.input`
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

const Error = styled.span`
	display: block;
	color: #dc3545;
`;


const Input = ({ label, error, ...rest}) => label
  ? (
    <Label>
      {label}
      <StyledInput {...rest} />
			<Error>{error}</Error>
    </Label>
  )
  : (
    <StyledInput {...rest} />
  );

Input.Text = (props) => (<Input {...props} type='text' />);
Input.Email = (props) => (<Input {...props} type='email' />);
Input.Date = (props) => (<Input {...props} type='date' />);
Input.Password = (props) => (<Input {...props} type='password' />);
Input.Radio = (props) => (<Input {...props} type='radio' />);
Input.Checkbox = (props) => (<Input {...props} type='checkbox' />);

export { Input };