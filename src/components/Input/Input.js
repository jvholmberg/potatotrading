import React from 'react';
import styled from 'styled-components';

const Input = styled.input`

`;

Input.Text = (props) => (<Input type='text' {...props} />);
Input.Email = (props) => (<Input type='email' {...props} />);
Input.Date = (props) => (<Input type='date' {...props} />);
Input.Password = (props) => (<Input type='password' {...props} />);
Input.Radio = (props) => (<Input type='radio' {...props} />);
Input.Checkbox = (props) => (<Input type='checkbox' {...props} />);

export { Input };