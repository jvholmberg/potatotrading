import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  display: inline-block;
  padding: ${({ btnSize = 'md' }) => ({
    xs: '.1rem .2rem',
    sm: '.3rem .6rem',
    md: '.75rem 1.5rem',
    lg: '1.1rem 2.2rem',
  })[btnSize]}
  font-size: ${({ btnSize = 'md' }) => ({
    xs: '.65em',
    sm: '.75em',
    md: '.9em',
    lg: '1.3em',
  })[btnSize]}
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  border-radius: .15em;
  background-color: ${({ btnType = 'primary' }) => ({
    primary: '#007bff',
    secondary: '#6c757d',
    success: '#28a745',
    danger: '#dc3545',
    warning: '#ffc107',
    info: '#17a2b8',
    light: '#f8f9fa',
    dark: '#343a40',
    link: 'transparent',
  })[btnType]};
  border-color: ${({ btnType = 'primary' }) => ({
    primary: '#007bff',
    secondary: '#6c757d',
    success: '#28a745',
    danger: '#dc3545',
    warning: '#ffc107',
    info: '#17a2b8',
    light: '#f8f9fa',
    dark: '#343a40',
    link: 'transparent',
  })[btnType]};
  color: ${({ btnType = 'primary' }) => ({
    primary: '#fff',
    secondary: '#fff',
    success: '#fff',
    danger: '#fff',
    warning: '#212529',
    info: '#fff',
    light: '#212529',
    dark: '#fff',
    link: '#007bff',
  })[btnType]};
  &:hover, &:active {
    background-color: ${({ btnType = 'primary' }) => ({
      primary: '#0062cc',
      secondary: '#545b62',
      success: '#218838',
      danger: '#c82333',
      warning: '#e0a800',
      info: '#138496',
      light: '#e2e6ea',
      dark: '#23272b',
      link: 'transparent',
    })[btnType]};
    border-color: ${({ btnType = 'primary' }) => ({
      primary: '#0062cc',
      secondary: '#545b62',
      success: '#218838',
      danger: '#c82333',
      warning: '#e0a800',
      info: '#138496',
      light: '#e2e6ea',
      dark: '#23272b',
      link: 'transparent',
    })[btnType]};
    color: ${({ btnType = 'primary' }) => ({
      primary: '#fff',
      secondary: '#fff',
      success: '#fff',
      danger: '#fff',
      warning: '#212529',
      info: '#fff',
      light: '#212529',
      dark: '#fff',
      link: '#0056b3',
    })[btnType]}
  }
`;

Button.Primary = (props) => (<Button btnType='primary' {...props} />);
Button.Secondary = (props) => (<Button btnType='secondary' {...props} />);
Button.Success = (props) => (<Button btnType='success' {...props} />);
Button.Danger = (props) => (<Button btnType='danger' {...props} />);
Button.Warning = (props) => (<Button btnType='warning' {...props} />);
Button.Info = (props) => (<Button btnType='info' {...props} />);
Button.Light = (props) => (<Button btnType='light' {...props} />);
Button.Dark = (props) => (<Button btnType='dark' {...props} />);
Button.Link = (props) => (<Button btnType='link' {...props} />);

export { Button };