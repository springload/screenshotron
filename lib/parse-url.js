import normalizeURL from 'normalize-url';

const normalizeOptions = {
    normalizeProtocol: true,
    stripFragment: false,
    stripWWW: false,
};

export default (url) => normalizeURL(url, normalizeOptions);
