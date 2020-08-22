import React from 'react';
import PropTypes from 'prop-types';
import { Alert, AlertTitle } from '@material-ui/lab';
import {
  Table, TableHead, TableBody, TableRow, TableCell,
} from '../../../../components/Table';

const SessionTable = ({ error }) => (
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
      <TableRow>
        <TableCell colSpan={4}>
          <Alert {...{ severity: 'error' }}>
            <AlertTitle>Error</AlertTitle>
            {error?.message}
          </Alert>
        </TableCell>
      </TableRow>
    </TableBody>
  </Table>
);

SessionTable.propTypes = {
  error: PropTypes.object.isRequired,
};

export default SessionTable;
