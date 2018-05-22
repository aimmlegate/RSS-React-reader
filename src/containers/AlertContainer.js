import { connect } from "react-redux";
import Alert from "../components/Alert.jsx";
import * as actionCreators from "../actions";

const mapStateToProps = state => state.alertStatus;

export default connect(mapStateToProps, actionCreators)(Alert);
