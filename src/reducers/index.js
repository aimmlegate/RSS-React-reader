import { combineReducers } from 'redux';

const inputText = (state = '', action) => {
  switch (action.type) {
    case 'INPUT_TEXT':
      return action.payload.inputText;
    case 'FEED_ADD_REQUEST':
      return '';
    default:
      return state;
  }
};

const urls = (state = [], action) => {
  switch (action.type) {
    case 'NEW_FEED_ADD':
      return action.payload.inputText;
    case 'FEED_ADD_SUCCESS': {
      const newUrl = action.payload.url;
      return [...state, newUrl];
    }
    default:
      return state;
  }
};

const formStatus = (state = {}, action) => {
  switch (action.type) {
    case 'SET_FORM_STATUS':
      return action.payload.formStatus;
    default:
      return state;
  }
};

const alertStatus = (state = {}, action) => {
  switch (action.type) {
    case 'FEED_ADD_REQUEST':
      return action.payload.alertStatus;
    default:
      return state;
  }
};

const feeds = (state = [], action) => {
  switch (action.type) {
    case 'FEED_ADD_SUCCESS': {
      const newFeed = action.payload.feed;
      return [...state, newFeed];
    }
    default:
      return state;
  }
};

const feedsItems = (state = [], action) => {
  switch (action.type) {
    case 'FEED_ADD_SUCCESS': {
      const newFeedItems = action.payload.children;
      return [...state, newFeedItems];
    }
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  inputText,
  urls,
  formStatus,
  alertStatus,
  feeds,
  feedsItems,
});

export default rootReducer;
