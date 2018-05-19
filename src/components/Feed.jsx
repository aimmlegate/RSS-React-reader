import React from 'react';
import FeedItem from '../components/Feed.jsx';
import FeedsListContainer from '../containers/FeedsListContainer';

const Feed = (props) => {
  return (
    <div className="jumbotron">
    <h2 className="display-5">{props.name}</h2>
    <p className="lead">{props.description}</p>
      <FeedsListContainer id={props.id}></FeedsListContainer>
    </div>
  );
};

export default Feed;
