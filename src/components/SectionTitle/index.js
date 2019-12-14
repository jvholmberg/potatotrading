import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import useStyles from './styles';

/**
 * Section title
 *
 * @param {Object} props -
 * @param {String} props.title -
 * @param {Node} props.children -
 */
const SectionTitle = ({ title, children }) => {
  const classes = useStyles();
  return (
    <>
      <Typography className={classes.title} variant="h2" gutterBottom>
        {title}
      </Typography>
      <Typography className={classes.body} variant="body2" gutterBottom>
        {children}
      </Typography>
    </>
  );
};

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

SectionTitle.defaultProps = {
  children: null,
};

export default SectionTitle;
