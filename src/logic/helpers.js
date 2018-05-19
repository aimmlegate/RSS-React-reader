import md5 from 'md5';
import _ from 'lodash';

export const getNodeTagVal = (node, tag) => {
  const nd = node.getElementsByTagName(tag)[0];
  return nd.textContent;
};

export const checkParseErr = (node) => {
  const nd = node.getElementsByTagName('parsererror');
  return (!(nd.length === 0));
};

export const parseHtmlCollection = (coll) => {
  const items = [...coll.getElementsByTagName('item')];
  const name = getNodeTagVal(coll, 'title');
  const description = getNodeTagVal(coll, 'description');
  const link = getNodeTagVal(coll, 'link');
  const guid = getNodeTagVal(coll, 'guid');
  return {
    id: md5(guid),
    guid,
    name,
    description,
    link,
    children: items.map(el => parseHtmlCollection(el)),
  };
};

export const extractChildren = (coll) => {
  const extracted = _.pick(coll, ['children']);
  return extracted.children;
};

export const extractFeed = coll => _.omit(coll, ['children']);

export const findUniq = (oldFeed, newFeed) => {
  const setOldFeed = new Set(oldFeed.map(el => el.guid));
  return newFeed.filter(el => !setOldFeed.has(el.guid));
};

export const findInRss = (uid, data) => data.filter(el => el.id === uid)[0];

export const normalizeUrl = url => url.trim().toLowerCase();

