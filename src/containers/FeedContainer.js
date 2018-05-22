import { connect } from "react-redux";
import Feed from "../components/Feed.jsx";
import * as actionCreators from "../actions";
import { getFeedsUrlSelector } from '../selectors'

const mapStateToProps = state => ({ urls: getFeedsUrlSelector(state) });

export default connect(mapStateToProps, actionCreators)(Feed);
