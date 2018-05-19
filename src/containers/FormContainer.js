import { connect } from 'react-redux';
import Form from '../components/Form.jsx';
import * as actionCreators from '../actions';

const mapStateToProps = ({ inputText, formStatus, urls }) => {
  const props = { inputText, formStatus, urls };
  return props;
};

export default connect(mapStateToProps, actionCreators)(Form);

