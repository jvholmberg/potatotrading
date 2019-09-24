import React from 'react';
import styled from 'styled-components';
import * as common from '../config';

import { Label } from '../';

const StyledInput = styled.input`
  display: block;
  margin: ${common.SPACING} 0;
  padding: ${common.PADDING};
  width: 100%;
  font-size: 1em;
  font-weight: 100;
  box-sizing: border-box;
  background-color: ${common.LIGHT_COLOR};
  border: none;
  border-bottom: .1rem solid ${common.SECONDARY_COLOR}
  &[required]:valid {
    border-bottom: .1rem solid ${common.SUCCESS_COLOR}
  }
  &[required]:invalid {
    border-bottom: .1rem solid ${common.DANGER_COLOR}
  }
`;

const Error = styled.span`
	display: block;
	color: ${common.DANGER_COLOR};
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