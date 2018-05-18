import axios from 'axios';
import { checkParseErr, parseHtmlCollection, extractChildren, normalizeUrl } from '../logic/helpers';

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

export const addFeedSuccess = ({ feed, children, url }) => ({
  type: 'FEED_ADD_SUCCESS',
  payload: {
    url,
    feed,
    children,
  },
});

export const addFeeds = url => async (dispatch) => {
  dispatch(addFeedRequest({ message: 'adding' }));
  const parser = new DOMParser();
  try {
    const corsProxy = 'https://cors-anywhere.herokuapp.com/';
    const proxyUrl = new URL('', corsProxy);
    const normUrl = normalizeUrl(url);
    const response = await axios.get(new URL(`${proxyUrl.href}${normUrl}`), { timeout: 5000 });
    const parsedData = parser.parseFromString(response.data, 'application/xml');
    if (checkParseErr((parsedData))) {
      throw new Error('Parsing Error');
    }
    const feed = parseHtmlCollection(parsedData);
    const feedChildren = extractChildren(feed);
    dispatch(addFeedSuccess({ feed, feedChildren, normUrl }));
  } catch (e) {
    console.log(e);
  }
};
