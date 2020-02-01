import React from 'react';
import PropTypes from 'prop-types';
import Immutable from 'immutable';
import {
  Paper, TableContainer, Table, TableHead, TableBody, TableRow, TableCell, LinearProgress,
} from '@material-ui/core';

const SessionTable = ({ loading, error, data }) => (
  <TableContainer component={Paper}>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Datum</TableCell>
          <TableCell>Typ</TableCell>
          <TableCell>namn</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {loading && (
          <TableRow>
            <TableCell colSpan="3">
              <LinearProgress color="secondary" />
            </TableCell>
          </TableRow>
        )}
        {data.map(entry => (
          <TableRow key={entry.get('id')}>
            <TableCell>Datum</TableCell>
            <TableCell>{entry.get('name')}</TableCell>
            <TableCell>{entry.get('comment')}</TableCell>
          </TableRow>
        ))}

      </TableBody>
    </Table>
  </TableContainer>
);

SessionTable.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.string,
  data: PropTypes.instanceOf(Immutable.List),
};

SessionTable.defaultProps = {
  loading: false,
  data: new Immutable.List(),
  error: null,
};

export default SessionTable;
