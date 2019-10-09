import React from 'react';
import styled from 'styled-components';
import * as common from '../../theme';

const StyledButton = styled.button`
  display: inline-block;
  margin: 0 ${common.SPACING};
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
  font-family: inherit;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  border-radius: ${common.BORDER_RADIUS};
  background-color: ${({ btnType = 'primary' }) => ({
    primary: common.PRIMARY_COLOR,
    secondary: common.SECONDARY_COLOR,
    success: common.SUCCESS_COLOR,
    danger: common.DANGER_COLOR,
    warning: common.WARNING_COLOR,
    info: common.INFO_COLOR,
    light: common.LIGHT_COLOR,
    dark: common.DARK_COLOR,
    link: 'transparent',
  })[btnType]};
  border-color: ${({ btnType = 'primary' }) => ({
    primary: common.PRIMARY_COLOR,
    secondary: common.SECONDARY_COLOR,
    success: common.SUCCESS_COLOR,
    danger: common.DANGER_COLOR,
    warning: common.WARNING_COLOR,
    info: common.INFO_COLOR,
    light: common.LIGHT_COLOR,
    dark: common.DARK_COLOR,
    link: 'transparent',
  })[btnType]};
  color: ${({ btnType = 'primary' }) => ({
    primary: common.FONT_COLOR_LIGHT,
    secondary: common.FONT_COLOR_LIGHT,
    success: common.FONT_COLOR_LIGHT,
    danger: common.FONT_COLOR_LIGHT,
    warning: common.FONT_COLOR_DARK,
    info: common.FONT_COLOR_LIGHT,
    light: common.FONT_COLOR_DARK,
    dark: common.FONT_COLOR_LIGHT,
    link: common.PRIMARY_COLOR,
  })[btnType]};
  &:hover, &:active {
    background-color: ${({ btnType = 'primary' }) => ({
      primary: common.PRIMARY_VARIANT_COLOR,
      secondary: common.SECONDARY_VARIANT_COLOR,
      success: common.SUCCESS_VARIANT_COLOR,
      danger: common.DANGER_VARIANT_COLOR,
      warning: common.WARNING_VARIANT_COLOR,
      info: common.INFO_VARIANT_COLOR,
      light: common.LIGHT_VARIANT_COLOR,
      dark: common.DARK_VARIANT_COLOR,
      link: 'transparent',
    })[btnType]};
    border-color: ${({ btnType = 'primary' }) => ({
      primary: common.PRIMARY_VARIANT_COLOR,
      secondary: common.SECONDARY_VARIANT_COLOR,
      success: common.SUCCESS_VARIANT_COLOR,
      danger: common.DANGER_VARIANT_COLOR,
      warning: common.WARNING_VARIANT_COLOR,
      info: common.INFO_VARIANT_COLOR,
      light: common.LIGHT_VARIANT_COLOR,
      dark: common.DARK_VARIANT_COLOR,
      link: 'transparent',
    })[btnType]};
    color: ${({ btnType = 'primary' }) => ({
      primary: common.FONT_COLOR_LIGHT,
      secondary: common.FONT_COLOR_LIGHT,
      success: common.FONT_COLOR_LIGHT,
      danger: common.FONT_COLOR_LIGHT,
      warning: common.FONT_COLOR_DARK,
      info: common.FONT_COLOR_LIGHT,
      light: common.FONT_COLOR_DARK,
      dark: common.FONT_COLOR_LIGHT,
      link: common.PRIMARY_VARIANT_COLOR,
    })[btnType]}
  }
`;

const Button = (props) => (<StyledButton {...props} btnType='primary' />);
Button.Primary = (props) => (<StyledButton {...props} btnType='primary' />);
Button.Secondary = (props) => (<StyledButton {...props} btnType='secondary' />);
Button.Success = (props) => (<StyledButton {...props} btnType='success' />);
Button.Danger = (props) => (<StyledButton {...props} btnType='danger' />);
Button.Warning = (props) => (<StyledButton {...props} btnType='warning' />);
Button.Info = (props) => (<StyledButton {...props} btnType='info' />);
Button.Light = (props) => (<StyledButton {...props} btnType='light' />);
Button.Dark = (props) => (<StyledButton {...props} btnType='dark' />);
Button.Link = (props) => (<StyledButton {...props} btnType='link' />);

export { Button };