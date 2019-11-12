import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

/**
 * ArrowBack button which is connected to react-router-dom.
 * On click will take user back in browser history.
 */
const BackButton = ({ history }) => (
  <IconButton onClick={history.goBack}>
    <ArrowBackIcon />
  </IconButton>
);

BackButton.propTypes = {
  history: PropTypes.shape({
    goBack: PropTypes.func.isRequired
  }).isRequired,
};

export default withRouter(BackButton);
