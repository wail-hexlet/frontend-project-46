import _ from 'lodash';

const stringify = (value) => {
  if (_.isObject(value)) { return '[complex value]'; }
  if (_.isString(value)) { return `'${value}'`; }
  return value;
};

const plain = (object, path = '') => {
  const result = object.children.map(({ name, oldValue, changeType }, i, node) => {
    switch (changeType) {
      case 'tree': return `${plain(node[i], `${path}${name}.`)}`;
      case 'added': return `Property '${path}${name}' was added with value: ${stringify(node[i].value)}`;
      case 'updated': return `Property '${path}${name}' was updated. From ${stringify(oldValue)} to ${stringify(node[i].value)}`;
      case 'removed': return `Property '${path}${name}' was removed.`;
      case 'unchanged': return null;
      default: return null;
    }
  });
  return `${result.filter((el) => el !== null).join('\n')}`;
};

export default plain;
