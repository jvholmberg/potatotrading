import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import {
  Table, TableHead, TableBody, TableRow, TableCell,
} from '../../../../components/Table';

const SessionTableRow = () => (
  <TableRow>
    <TableCell><Skeleton /></TableCell>
    <TableCell><Skeleton /></TableCell>
    <TableCell><Skeleton /></TableCell>
    <TableCell><Skeleton /></TableCell>
  </TableRow>
);

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
      <SessionTableRow />
      <SessionTableRow />
      <SessionTableRow />
      <SessionTableRow />
    </TableBody>
  </Table>
);

export default SessionTable;
