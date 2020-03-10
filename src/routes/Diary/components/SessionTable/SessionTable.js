import React from 'react';
import { useSelector } from 'react-redux';
import { selectSortingDiary } from '../../../../sagas/ui/selectors';
import { selectIsFetching, selectFetchError, selectSessionsIdsSorted } from './SessionTable.selectors';
import SessionTableLoading from './SessionTable.loading';
import SessionTableEmpty from './SessionTable.empty';
import SessionTableIdeal from './SessionTable.ideal';
import SessionTableError from './SessionTable.error';

const SessionTable = () => {
  const pending = useSelector(selectIsFetching);
  const error = useSelector(selectFetchError);
  const sorting = useSelector(selectSortingDiary);
  const sessionIds = useSelector(selectSessionsIdsSorted);

  if (error) return (<SessionTableError {...{ error }} />);
  if (pending) return (<SessionTableLoading />);
  if (sessionIds.length === 0) return (<SessionTableEmpty />);
  return (
    <SessionTableIdeal {...{ sorting, sessionIds }} />
  );
};

export default SessionTable;
