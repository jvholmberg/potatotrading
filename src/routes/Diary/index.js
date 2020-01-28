import React from 'react';
import PropTypes from 'prop-types';
import Immutable from 'immutable';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from './selectors';
import SessionForm from './SessionForm';

const Diary = ({
  createSessionReq,
  getSessionsReq,
  getSessionTypesReq,
  createSession,
  getSessionTypes,
  sessionTypes,
}) => {
  React.useEffect(() => {
    if (sessionTypes.size === 0) {
      getSessionTypes();
    }
  }, [sessionTypes, getSessionTypes]);
  return (
    <>
      <SessionForm {...{
        submitting: createSessionReq.pending,
        error: createSessionReq.error,
        onSubmit: createSession,
        sessionTypes,
      }} />
    </>
  );
};

Diary.propTypes = {
  createSessionReq: PropTypes.instanceOf(Immutable.Map).isRequired,
  getSessionsReq: PropTypes.instanceOf(Immutable.Map).isRequired,
  getSessionTypesReq: PropTypes.instanceOf(Immutable.Map).isRequired,
  sessionTypes: PropTypes.instanceOf(Immutable.List).isRequired,
  sessions: PropTypes.instanceOf(Immutable.List),
  createSession: PropTypes.func.isRequired,
  getSessions: PropTypes.func,
  getSessionTypes: PropTypes.func.isRequired,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Diary);
