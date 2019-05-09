import './Login.css';

import { connect } from 'react-redux';
import LoginView from './LoginView';
import { mapStateToProps, mapDispatchToProps } from './LoginMapper';

export default connect(mapStateToProps, mapDispatchToProps)(LoginView);