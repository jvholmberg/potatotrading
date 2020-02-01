import React from 'react';
import PropTypes from 'prop-types';
import Immutable from 'immutable';
import { connect } from 'react-redux';
import {
  ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Typography,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { mapStateToProps, mapDispatchToProps } from './selectors';
import SessionForm from './SessionForm';
import SessionTable from './SessionTable';

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

  return (
    <>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>New session</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <SessionForm {...{
            submitting: createSessionReq.get('pending'),
            error: createSessionReq.get('error'),
            onSubmit: createSession,
            sessionTypes,
          }} />
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <SessionTable {...{
        loading: getSessionsReq.get('pending'),
        error: getSessionsReq.get('error'),
        data: sessions,
      }} />
    </>
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
