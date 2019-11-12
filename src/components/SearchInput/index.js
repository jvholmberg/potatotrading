import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Input from '@material-ui/core/Input';
import SearchIcon from '@material-ui/icons/Search';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    padding: theme.spacing(1),
    alignItems: 'center',
    borderRadius: '4px',
  },
  icon: {
    marginRight: theme.spacing(1),
    color: theme.palette.text.secondary,
  },
  input: {
    flexGrow: 1,
    fontSize: '14px',
    lineHeight: '16px',
  },
}));

const SearchInput = props => {
  const { className, ...rest } = props;
  const classes = useStyles();
  return (
    <Paper className={clsx(classes.root, className)}>
      <SearchIcon className={classes.icon} />
      <Input {...rest} className={classes.input} disableUnderline />
    </Paper>
  );
};

SearchInput.propTypes = {
  className: PropTypes.string,
};

SearchInput.defaultProps = {
  className: '',
};

export default SearchInput;
