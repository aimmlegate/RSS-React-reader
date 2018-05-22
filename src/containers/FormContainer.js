import { connect } from "react-redux";
import Form from "../components/Form.jsx";
import * as actionCreators from "../actions";

const mapStateToProps = ({ inputText, formStatus, urls }) => {
  return { inputText, formStatus, urls };
};

export default connect(mapStateToProps, actionCreators)(Form);
