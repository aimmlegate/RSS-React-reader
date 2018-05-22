import { connect } from "react-redux";
import Modal from "../components/Modal.jsx";
import * as actionCreators from "../actions";

const mapStateToProps = ({ modalStatus }) => {
  const props = { modalStatus };
  return props;
};

export default connect(mapStateToProps, actionCreators)(Modal);
