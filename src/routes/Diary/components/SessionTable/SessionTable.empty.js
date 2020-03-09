import React from 'react';
import { Alert, AlertTitle } from '@material-ui/lab';
import {
  Table, TableHead, TableBody, TableRow, TableCell,
} from '../../../../components/Table';

const SessionTable = () => (
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
          <Alert {...{ severity: 'info' }}>
            <AlertTitle>Empty</AlertTitle>
            No sessions found!
          </Alert>
        </TableCell>
      </TableRow>
    </TableBody>
  </Table>
);

export default SessionTable;
