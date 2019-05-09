import './Landing.css';

import { connect } from 'react-redux';
import LandingView from './LandingView';
import { mapStateToProps, mapDispatchToProps } from './LandingMapper';

export default connect(mapStateToProps, mapDispatchToProps)(LandingView);