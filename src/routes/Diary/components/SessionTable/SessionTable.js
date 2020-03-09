import React from 'react';
import { useSelector } from 'react-redux';
import { selectSessionIds } from '../../../../sagas/sessions/selectors';
import { selectIsFetching, selectFetchError } from './SessionTable.selectors';
import SessionTableLoading from './SessionTable.loading';
import SessionTableEmpty from './SessionTable.empty';
import SessionTableIdeal from './SessionTable.ideal';
import SessionTableError from './SessionTable.error';

const SessionTable = () => {
  const pending = useSelector(selectIsFetching);
  const error = useSelector(selectFetchError);
  const sessionIds = useSelector(selectSessionIds);

  if (error) return (<SessionTableError {...{ error }} />);
  if (pending) return (<SessionTableLoading />);
  if (sessionIds.length === 0) return (<SessionTableEmpty />);
  return (
    <SessionTableIdeal {...{ sessionIds }} />
  );
};

export default SessionTable;
