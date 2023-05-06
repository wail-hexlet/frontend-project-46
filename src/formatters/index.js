import plain from './plain.js';
import stylish from './stylish.js';

export default (option, data) => {
  switch (option) {
    case 'plain': return plain(data);
    case 'stylish': return stylish(data);
    default: throw new Error('Unknown format');
  }
};
