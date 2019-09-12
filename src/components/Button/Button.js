import React from 'react';


const Button = ({
  btnType = 'primary',
  className = '',
  ...rest,
}) => (
  <button className={`${className} btn btn-${btnType}`} {...rest} />
);
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