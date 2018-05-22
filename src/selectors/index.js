import { createSelector } from "reselect";

const getFeedsUrl = state => state.urls;
const getFeeds = state => state.feeds;
const getFeedItems = state => state.feedsItems;

export const getFeedsUrlSelector = createSelector(getFeedsUrl, urls =>
  Object.values(urls)
);

export const getFeedsIdSelector = createSelector(getFeeds, feeds =>
  Object.keys(feeds)
);

export const getFeedsSelector = createSelector(getFeeds, feeds => feeds);

export const getFeedsItemsSelector = createSelector(getFeedItems, items => items);