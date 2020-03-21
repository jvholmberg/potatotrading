import _ from 'lodash';
import { reducerName } from './constants';

const selectReducer = state => state[reducerName];

export const selectScreen = state => selectReducer(state).screen;
export const selectScreenSize = state => selectScreen(state).size;
export const selectIsDesktop = state => _.includes(['xl', 'lg', 'md'], selectScreenSize(state));
export const selectIsHandheld = state => _.includes(['md', 'sm'], selectScreenSize(state));

export const selectSidebar = state => selectReducer(state).sidebar;
export const selectSidebarOpen = state => selectSidebar(state).open;

const selectSorting = state => selectReducer(state).sorting;
export const selectSortingDiary = state => selectSorting(state).diary;
