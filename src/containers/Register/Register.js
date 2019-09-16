import { connect } from 'react-redux';
import RegisterView from './RegisterView';
import { mapStateToProps, mapDispatchToProps } from './RegisterMapper';

export default connect(mapStateToProps, mapDispatchToProps)(RegisterView);