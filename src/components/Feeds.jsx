import React from 'react';
import Feed from '../components/Feed.jsx';

export default class Feeds extends React.Component {
  render() {
    const { feeds } = this.props;
    const feedsIds = Object.keys(feeds);
    return (
      feedsIds.map((id) => {
        const { name, description } = feeds[id];
        return <Feed key={id} name={name} description={description} id={id}></Feed>;
      })
    );
  }
}
