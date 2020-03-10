import React from 'react';
import MuiTableContainer from '@material-ui/core/TableContainer';
import MuiTable from '@material-ui/core/Table';
import MuiTableHead from '@material-ui/core/TableHead';
import MuiTableBody from '@material-ui/core/TableBody';
import MuiTableRow from '@material-ui/core/TableRow';
import MuiTableCell from '@material-ui/core/TableCell';
import MuiTableSortLabel from '@material-ui/core/TableSortLabel';

const Table = props => (
  <MuiTableContainer>
    <MuiTable {...props} />
  </MuiTableContainer>
);

export {
  Table,
  MuiTableHead as TableHead,
  MuiTableBody as TableBody,
  MuiTableRow as TableRow,
  MuiTableCell as TableCell,
  MuiTableSortLabel as TableSortLabel,
};
