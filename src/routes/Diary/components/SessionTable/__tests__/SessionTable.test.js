/* eslint-disable no-undefined */
/* eslint-disable max-lines-per-function */
import React from 'react';
import { shallow } from 'enzyme';
import * as sagaSelectors from '../../../../../sagas/ui/selectors';
import * as componentSelectors from '../SessionTable.selectors';
import { SORT_DIRECTION_DESCENDING } from '../../../../../sagas/constants';
import SessionTable from '..';
import SessionTableError from '../SessionTable.error';
import SessionTableLoading from '../SessionTable.loading';
import SessionTableEmpty from '../SessionTable.empty';
import SessionTableIdeal from '../SessionTable.ideal';

describe('<SessionTable />', () => {
  it('should return error', () => {
    jest.spyOn(componentSelectors, 'selectIsFetching').mockReturnValue(false);
    jest.spyOn(componentSelectors, 'selectFetchError').mockReturnValue('error');
    jest.spyOn(sagaSelectors, 'selectSortingDiary').mockReturnValue({
      key: 'timestamp',
      direction: SORT_DIRECTION_DESCENDING,
    });
    jest.spyOn(componentSelectors, 'selectSessionsIdsSorted').mockReturnValue(undefined);
    const wrapper = shallow(<SessionTable />);
    expect(wrapper.find(SessionTableError)).toExist();
    expect(wrapper.find(SessionTableLoading)).not.toExist();
    expect(wrapper.find(SessionTableEmpty)).not.toExist();
    expect(wrapper.find(SessionTableIdeal)).not.toExist();
  });

  it('should return pending', () => {
    jest.spyOn(componentSelectors, 'selectIsFetching').mockReturnValue(true);
    jest.spyOn(componentSelectors, 'selectFetchError').mockReturnValue(null);
    jest.spyOn(sagaSelectors, 'selectSortingDiary').mockReturnValue({
      key: 'timestamp',
      direction: SORT_DIRECTION_DESCENDING,
    });
    jest.spyOn(componentSelectors, 'selectSessionsIdsSorted').mockReturnValue(undefined);
    const wrapper = shallow(<SessionTable />);
    expect(wrapper.find(SessionTableError)).not.toExist();
    expect(wrapper.find(SessionTableLoading)).toExist();
    expect(wrapper.find(SessionTableEmpty)).not.toExist();
    expect(wrapper.find(SessionTableIdeal)).not.toExist();
    expect(wrapper.find(SessionTableIdeal)).not.toExist();
  });

  it('should return empty', () => {
    jest.spyOn(componentSelectors, 'selectIsFetching').mockReturnValue(false);
    jest.spyOn(componentSelectors, 'selectFetchError').mockReturnValue(null);
    jest.spyOn(sagaSelectors, 'selectSortingDiary').mockReturnValue({
      key: 'timestamp',
      direction: SORT_DIRECTION_DESCENDING,
    });
    jest.spyOn(componentSelectors, 'selectSessionsIdsSorted').mockReturnValue([]);
    const wrapper = shallow(<SessionTable />);
    expect(wrapper.find(SessionTableError)).not.toExist();
    expect(wrapper.find(SessionTableLoading)).not.toExist();
    expect(wrapper.find(SessionTableEmpty)).toExist();
    expect(wrapper.find(SessionTableIdeal)).not.toExist();
  });

  it('should return ideal', () => {
    jest.spyOn(componentSelectors, 'selectIsFetching').mockReturnValue(false);
    jest.spyOn(componentSelectors, 'selectFetchError').mockReturnValue(null);
    jest.spyOn(sagaSelectors, 'selectSortingDiary').mockReturnValue({
      key: 'timestamp',
      direction: SORT_DIRECTION_DESCENDING,
    });
    jest.spyOn(componentSelectors, 'selectSessionsIdsSorted').mockReturnValue([0, 1, 2, 3]);
    const wrapper = shallow(<SessionTable />);
    expect(wrapper.find(SessionTableError)).not.toExist();
    expect(wrapper.find(SessionTableLoading)).not.toExist();
    expect(wrapper.find(SessionTableEmpty)).not.toExist();
    expect(wrapper.find(SessionTableIdeal)).toExist();
  });
});
