const selectReducer = state => state.ui;
export const selectScreenSize = state => selectReducer(state).getIn(['screen', 'size']);
export const selectIsDesktop = state => ['lg', 'xl', 'md'].includes(selectReducer(state).getIn(['screen', 'size']));
export const selectSidebarOpen = state => selectReducer(state).getIn(['sidebar', 'open']);
