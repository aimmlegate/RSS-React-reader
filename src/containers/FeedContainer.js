import { connect } from "react-redux";
import Feed from "../components/Feed.jsx";
import * as actionCreators from "../actions";

const mapStateToProps = ({ urls }) => {
  return { urls: Object.values(urls) };
};

export default connect(mapStateToProps, actionCreators)(Feed);
