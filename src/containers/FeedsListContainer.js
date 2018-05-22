import { connect } from "react-redux";
import FeedsList from "../components/FeedsList.jsx";
import * as actionCreators from "../actions";
import { getFeedsItemsSelector } from "../selectors";

const mapStateToProps = state => ({ feedsItems: getFeedsItemsSelector(state) });

export default connect(mapStateToProps, actionCreators)(FeedsList);
