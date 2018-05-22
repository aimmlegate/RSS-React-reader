import { connect } from "react-redux";
import Feed from "../components/Feed.jsx";
import * as actionCreators from "../actions";

const mapStateToProps = ({ urls }) => {
  const props = { urls };
  return props;
};

export default connect(mapStateToProps, actionCreators)(Feed);
