import React from 'react';
import PropTypes from 'prop-types';
import Immutable from 'immutable';
import { connect } from 'react-redux';
import { Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { mapStateToProps, mapDispatchToProps } from './selectors';
import SessionForm from './SessionForm';
import SessionTable from './SessionTable';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    margin: 0,
    padding: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(2),
  }
}));

const Diary = ({
  createSessionReq,
  getSessionsReq,
  getSessionTypesReq,
  createSession,
  getSessionTypes,
  getSessions,
  sessions,
  sessionTypes,
}) => {
  React.useEffect(() => {
    getSessionTypes();
    getSessions();
  }, [getSessionTypes, getSessions]);

  const classes = useStyles();

  return (
    <Grid
      container
      className={classes.root}
      spacing={2}
      direction="row"
      justify="flex-start"
      alignItems="stretch"
      alignContent="stretch">
      <Grid item lg={4} md={6} xs={12}>
        <Paper className={classes.paper}>
          <SessionForm {...{
            submitting: createSessionReq.get('pending'),
            error: createSessionReq.get('error'),
            onSubmit: createSession,
            sessionTypes,
          }} />
        </Paper>
      </Grid>
      <Grid item lg={4} md={6} xs={12}>
        <Paper className={classes.paper}>
          1
        </Paper>
      </Grid>
      <Grid item lg={4} md={6} xs={12}>
        <Paper className={classes.paper}>
          2
        </Paper>
      </Grid>
      <Grid item lg={12} md={12} xs={12}>
        <Paper className={classes.paper}>
          <SessionTable {...{
            loading: getSessionsReq.get('pending'),
            error: getSessionsReq.get('error'),
            data: sessions,
          }} />
        </Paper>
      </Grid>
    </Grid>
  );
};

Diary.propTypes = {
  createSessionReq: PropTypes.instanceOf(Immutable.Map).isRequired,
  getSessionsReq: PropTypes.instanceOf(Immutable.Map).isRequired,
  getSessionTypesReq: PropTypes.instanceOf(Immutable.Map).isRequired,
  sessionTypes: PropTypes.instanceOf(Immutable.List),
  sessions: PropTypes.instanceOf(Immutable.List),
  createSession: PropTypes.func.isRequired,
  getSessions: PropTypes.func.isRequired,
  getSessionTypes: PropTypes.func.isRequired,
}

Diary.defaultProps = {
  sessionTypes: new Immutable.List(),
  sessions: new Immutable.List(),
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Diary);
