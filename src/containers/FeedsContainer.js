import { connect } from "react-redux";
import Feeds from "../components/Feeds.jsx";
import * as actionCreators from "../actions";
import { getFeedsIdSelector, getFeedsSelector } from "../selectors";

const mapStateToProps = state => ({
  feeds: getFeedsSelector(state),
  activeTab: state.activeTab,
  feedsIds: getFeedsIdSelector(state)
});

export default connect(mapStateToProps, actionCreators)(Feeds);
