import { connect } from 'react-redux';
import Form from '../components/Form.jsx';
import * as actionCreators from '../actions';

const mapStateToProps = ({ inputText, urls, formStatus }) => {
  const props = { inputText, urls, formStatus };
  return props;
};

export default connect(mapStateToProps, actionCreators)(Form);

