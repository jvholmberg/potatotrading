
const selectReducer = (state) => state.ui;
export const selectSidebar = (state) => selectReducer(state).get('sidebar');
export const selectSidebarOpen = (state) => selectReducer(state).getIn('sidebar', 'open');
