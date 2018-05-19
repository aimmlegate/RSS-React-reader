import axios from 'axios';
import { checkParseErr, parseHtmlCollection, extractChildren } from '../logic/helpers';

export const currentFormInput = inputText => ({
  type: 'INPUT_TEXT',
  payload: {
    inputText,
  },
});

export const setFormStatus = formStatus => ({
  type: 'SET_FORM_STATUS',
  payload: {
    formStatus,
  },
});

export const addFeedRequest = alertStatus => ({
  type: 'FEED_ADD_REQUEST',
  payload: {
    alertStatus,
  },
});

export const addFeedSuccess = feedAtributes => ({
  type: 'FEED_ADD_SUCCESS',
  payload: {
    feedAtributes,
  },
});

export const addFeedError = error => ({
  type: 'FEED_ADD_ERROR',
  payload: {
    error,
  },
});

export const alertClose = () => ({
  type: 'ALERT_CLOSE',
});

export const addFeeds = url => async (dispatch) => {
  dispatch(addFeedRequest());
  const parser = new DOMParser();
  try {
    const corsProxy = 'https://cors-proxy.htmldriven.com/';
    const proxyUrl = new URL('?url=', corsProxy);
    const response = await axios.get(new URL(`${proxyUrl.href}${url}`), { timeout: 5000 });
    const parsedData = parser.parseFromString(response.data.body, 'application/xml');
    if (checkParseErr((parsedData))) {
      throw new Error('Parsing Error');
    }
    const feed = parseHtmlCollection(parsedData);
    const feedChildren = extractChildren(feed);
    const feedId = feed.id;
    dispatch(addFeedSuccess({
      feedId,
      feed,
      feedChildren,
      url,
    }));
  } catch (e) {
    console.error(e);
    dispatch(addFeedError(e));
  }
};
