import React from 'react';

const PrimaryButton = () => (null);
const SecondaryButton = () => (null);
const SuccessButton = () => (null);
const DangerButton = () => (null);
const WarningButton = () => (null);
const InfoButton = () => (null);
const LightButton = () => (null);
const DarkButton = () => (null);
const LinkButton = () => (null);

const Button = (props) => <PrimaryButton {...props} />;
Button.Primary = PrimaryButton;
Button.Secondary = SecondaryButton;
Button.Success = SuccessButton;
Button.Danger = DangerButton;
Button.Warning = WarningButton;
Button.Info = InfoButton;
Button.Light = LightButton;
Button.Dark = DarkButton;
Button.Link = LinkButton;
export { Button };