import { connect } from 'react-redux';
import Alert from '../components/Alert.jsx';
import * as actionCreators from '../actions';

const mapStateToProps = ({ alertStatus }) => {
  const props = { alertStatus };
  return props;
};

export default connect(mapStateToProps, actionCreators)(Alert);
