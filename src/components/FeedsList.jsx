import React from "react";
import FeedItem from "../components/FeedItem.jsx";

const FeedsList = props => {
  const { id, feedsItems, openModal } = props;
  const CurrentFeedItems = feedsItems[id];
  return (
    <ul className="list-group feedContent">
      {CurrentFeedItems.map(child => {
        const { id: feedID, name, link, description } = child;
        return (
          <FeedItem
            key={feedID}
            name={name}
            url={link}
            description={description}
            modalCallback={openModal}
          />
        );
      })}
    </ul>
  );
};

export default FeedsList;
