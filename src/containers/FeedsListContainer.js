import { connect } from "react-redux";
import FeedsList from "../components/FeedsList.jsx";
import * as actionCreators from "../actions";

const mapStateToProps = ({ feedsItems, modalStatus }) => {
  return { feedsItems, modalStatus };
};

export default connect(mapStateToProps, actionCreators)(FeedsList);
