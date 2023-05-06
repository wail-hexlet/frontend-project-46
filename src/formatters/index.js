import plain from './plain.js';
import stylish from './stylish.js';
import json from './json.js';

export default (option, data) => {
  switch (option) {
    case 'plain': return plain(data);
    case 'stylish': return stylish(data);
    case 'json': return json(data);
    default: throw new Error('Unknown format');
  }
};
