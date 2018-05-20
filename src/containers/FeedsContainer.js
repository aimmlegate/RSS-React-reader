import { connect } from 'react-redux';
import Feeds from '../components/Feeds.jsx';
import * as actionCreators from '../actions';

const mapStateToProps = ({ feeds, activeTab }) => {
  const props = { feeds, activeTab };
  return props;
};

export default connect(mapStateToProps, actionCreators)(Feeds);
