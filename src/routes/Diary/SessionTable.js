import React from 'react';
import PropTypes from 'prop-types';
import Immutable from 'immutable';
import {
  TableContainer, Table, TableHead, TableBody, TableRow, TableCell, LinearProgress,
} from '@material-ui/core';

const SessionTable = ({
  loading, error, sessions, sessionTypes,
}) => (
  <TableContainer>
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
        {loading && (
          <TableRow>
            <TableCell colSpan="4">
              <LinearProgress color="secondary" />
            </TableCell>
          </TableRow>
        )}
        {error && (
          null
        )}
        {!loading && !error && sessions && sessions.map(entry => {
          const sessionType = sessionTypes.find(type => type.get('id') === entry.get('typeId'));
          return (
            <TableRow key={entry.get('id')}>
              <TableCell>{sessionTypes && sessionType.get('name')}</TableCell>
              <TableCell>Datum</TableCell>
              <TableCell>{entry.get('name')}</TableCell>
              <TableCell>{entry.get('comment')}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  </TableContainer>
);

SessionTable.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.string,
  sessions: PropTypes.instanceOf(Immutable.List),
  sessionTypes: PropTypes.instanceOf(Immutable.List),
};

SessionTable.defaultProps = {
  loading: false,
  sessions: new Immutable.List(),
  sessionTypes: new Immutable.List(),
  error: null,
};

export default SessionTable;
