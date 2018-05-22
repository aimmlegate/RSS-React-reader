import { connect } from "react-redux";
import Modal from "../components/Modal.jsx";
import * as actionCreators from "../actions";

const mapStateToProps = ({ modalStatus }) => {
  return { modalStatus };
};

export default connect(mapStateToProps, actionCreators)(Modal);
