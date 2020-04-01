import { colors } from '@material-ui/core';

export default {
  primary: {
    contrastText: colors.common.white,
    dark: colors.blue[900],
    main: colors.blue[500],
    light: colors.blue[100]
  },
  secondary: {
    contrastText: colors.common.white,
    dark: colors.blue[900],
    main: colors.blue.A400,
    light: colors.blue.A400
  },
  success: {
    contrastText: colors.common.white,
    dark: colors.green[900],
    main: colors.green[600],
    light: colors.green[400]
  },
  info: {
    contrastText: colors.common.white,
    dark: colors.blue[900],
    main: colors.blue[600],
    light: colors.blue[400]
  },
  warning: {
    contrastText: colors.common.white,
    dark: colors.orange[900],
    main: colors.orange[600],
    light: colors.orange[400]
  },
  error: {
    contrastText: colors.common.white,
    dark: colors.red[900],
    main: colors.red[600],
    light: colors.red[400]
  },
  text: {
    primary: colors.blueGrey[900],
    secondary: colors.blueGrey[600],
    link: colors.blue[600]
  },
  background: {
    default: colors.grey[100],
    paper: colors.common.white
  },
  icon: colors.blueGrey[600],
  divider: colors.grey[200]
};
