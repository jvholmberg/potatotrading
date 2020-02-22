import React from 'react';
import PropTypes from 'prop-types';
import {
  TableContainer, Table, TableHead, TableBody, TableRow, TableCell, LinearProgress,
} from '@material-ui/core';
import { format } from 'date-fns';

const SessionTable = ({
  loading, error, sessions,
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
        {!loading && !error && sessions && sessions.map(entry => (
          <TableRow key={entry.id}>
            <TableCell>{entry.type.name}</TableCell>
            <TableCell>{format(new Date(entry.timestamp), 'dd/MM/yyyy')}</TableCell>
            <TableCell>{entry.name}</TableCell>
            <TableCell>{entry.comment}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

SessionTable.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.string,
  sessions: PropTypes.arrayOf(PropTypes.shape({

  })),
};

SessionTable.defaultProps = {
  loading: false,
  sessions: [],
  error: null,
};

export default SessionTable;
