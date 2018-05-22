import React from "react";
import FeedItem from "../components/Feed.jsx";
import FeedsListContainer from "../containers/FeedsListContainer";

export default class Feed extends React.Component {
  componentDidMount() {
    const startFeedUpdater = () => {
      const { urls } = this.props;
      const urlsArr = Object.values(urls);
      const updatingFeeds = urlsArr.map(url =>
        this.props.addFeeds(url, "update")
      );
      return Promise.all(updatingFeeds)
        .catch(err => console.error(err))
        .then(() => setTimeout(startFeedUpdater, 5000));
    };
    startFeedUpdater();
  }

  render() {
    return (
      <div className="jumbotron">
        <h2 className="display-5">{this.props.name}</h2>
        <p className="lead">{this.props.description}</p>
        <FeedsListContainer id={this.props.id} />
      </div>
    );
  }
}
