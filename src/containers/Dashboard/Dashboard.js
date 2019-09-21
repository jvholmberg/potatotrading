import { connect } from 'react-redux';
import DashboardView from './DashboardView';
import { mapStateToProps, mapDispatchToProps } from './DashboardMapper';

export default connect(mapStateToProps, mapDispatchToProps)(DashboardView);