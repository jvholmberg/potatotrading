import React, { memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableSortLabel,
} from '../../../../components/Table';
import { setSortingDiary } from '../../../../sagas/ui/actions';
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

const headCells = [
  { id: 'type.name', label: 'Type' },
  { id: 'timestamp', label: 'Date' },
  { id: 'name', label: 'Name' },
  { id: 'comment', label: 'Comment' },
];

const SessionTable = ({ sorting, sessionIds }) => {
  const dispatch = useDispatch();
  return (
    <Table>
      <TableHead>
        <TableRow>
          {headCells.map(headCell => (
            <TableCell {...{
              key: headCell.id,
              onClick: () => dispatch(setSortingDiary(headCell.id)),
            }}>
              <TableSortLabel {...{
                active: headCell.id === sorting.key,
                direction: sorting.direction,
              }}>
                {headCell.label}
              </TableSortLabel>
            </TableCell>
          ))}
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
};

SessionTable.propTypes = {
  sorting: PropTypes.object.isRequired,
  sessionIds: PropTypes.array.isRequired,
};

export default memo(SessionTable);
