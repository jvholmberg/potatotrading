const selectReducer = state => state.ui;
export const selectScreen = state => selectReducer(state).get('screen');
export const selectScreenSize = state => selectScreen(state).get('size');

export const selectIsDesktop = state => ['xl', 'lg', 'md'].includes(selectScreenSize(state));
export const selectIsHandheld = state => ['md', 'sm'].includes(selectScreenSize(state));

export const selectSidebarOpen = state => selectReducer(state).getIn(['sidebar', 'open']);
