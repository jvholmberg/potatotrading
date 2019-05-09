import './App.css';

import { connect } from 'react-redux';
import AppView from './AppView';
import { mapStateToProps, mapDispatchToProps } from './AppMapper';

export default connect(mapStateToProps, mapDispatchToProps)(AppView);