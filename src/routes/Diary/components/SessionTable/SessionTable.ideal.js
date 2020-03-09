import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { format } from 'date-fns';
import {
  Table, TableHead, TableBody, TableRow, TableCell,
} from '../../../../components/Table';
import { selectSessionById, selectSessionTypeById } from '../../../../sagas/sessions/selectors';

const SessionTableRow = ({ sessionId }) => {
  const session = useSelector(state => selectSessionById(state, sessionId));
  const sessionType = useSelector(state => selectSessionTypeById(state, session.typeId));
  return (
    <TableRow>
      <TableCell>{sessionType.name}</TableCell>
      <TableCell>{format(new Date(session.timestamp), 'dd/MM/yyyy')}</TableCell>
      <TableCell>{session.name}</TableCell>
      <TableCell>{session.comment}</TableCell>
    </TableRow>
  );
};

SessionTableRow.propTypes = {
  sessionId: PropTypes.number,
};

SessionTableRow.defaultProps = {
  sessionId: null,
};

const SessionTable = ({ sessionIds }) => (
  <Table>
    <TableHead>
      <TableRow>
        <TableCell>Type</TableCell>
        <TableCell>Date</TableCell>
        <TableCell>Name</TableCell>
        <TableCell>Comment</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {sessionIds.map(sessionId => (
        <SessionTableRow {... {
          key: `session_row_${sessionId}`,
          sessionId,
        }} />
      ))}
    </TableBody>
  </Table>
);

SessionTable.propTypes = {
  sessionIds: PropTypes.array.isRequired,
};

export default SessionTable;
