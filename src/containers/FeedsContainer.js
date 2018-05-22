import { connect } from "react-redux";
import Feeds from "../components/Feeds.jsx";
import * as actionCreators from "../actions";

const mapStateToProps = ({ feeds, activeTab, urls }) => {
  return { feeds, activeTab, urls };
};

export default connect(mapStateToProps, actionCreators)(Feeds);
