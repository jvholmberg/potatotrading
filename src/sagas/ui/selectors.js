import _ from 'lodash';

const selectReducer = state => state.ui;

export const selectScreen = state => selectReducer(state).screen;
export const selectScreenSize = state => selectScreen(state).size;
export const selectIsDesktop = state => _.includes(['xl', 'lg', 'md'], selectScreenSize(state));
export const selectIsHandheld = state => _.includes(['md', 'sm'], selectScreenSize(state));

export const selectSidebar = state => selectReducer(state).sidebar;
export const selectSidebarOpen = state => selectSidebar(state).open;
