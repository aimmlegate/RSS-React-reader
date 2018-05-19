import { connect } from 'react-redux';
import Feeds from '../components/Feeds.jsx';
import * as actionCreators from '../actions';

const mapStateToProps = ({ feeds }) => {
  const props = { feeds };
  return props;
};

export default connect(mapStateToProps, actionCreators)(Feeds);
