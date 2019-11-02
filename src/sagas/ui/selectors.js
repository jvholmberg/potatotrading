const selectReducer = (state) => state.ui;
export const selectScreenSize = (state) => selectReducer(state).getIn(['screen', 'size']);
export const selectIsDesktop = (state) => selectReducer(state).getIn(['screen', 'size']) === 'lg';
export const selectSidebarOpen = (state) => selectReducer(state).getIn(['sidebar', 'open']);
