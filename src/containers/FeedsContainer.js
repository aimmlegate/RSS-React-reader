import { connect } from 'react-redux';
import Feeds from '../components/Feeds.jsx';
import * as actionCreators from '../actions';

const mapStateToProps = ({ feeds, activeTab, urls }) => {
  const props = { feeds, activeTab, urls };
  return props;
};

export default connect(mapStateToProps, actionCreators)(Feeds);
