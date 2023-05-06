import plain from './plain.js';

export default (formatName) => {
  switch (formatName) {
    case 'plain': return plain;
    default: throw new Error('Unknown format');
  }
};
