import _ from 'lodash';

const getIndent = (deep, changeType = 'unchanged') => {
  const length = 4;
  const indent = ' ';
  const signsIndent = changeType === 'tree' || changeType === 'unchanged' ? 0 : 2;
  return `\n${indent.repeat(length * deep - signsIndent)}`;
};

function stringify(node, deep = 1) {
  return Object.keys(node).map((key) => {
    const value = !_.isObject(node[key]) ? node[key] : `{${stringify(node[key], deep + 1)}${getIndent(deep)}}`;
    return `${getIndent(deep)}${key}: ${value}`;
  }).join('');
}
function stylish(object, deep = 1) {
  return object.children.map(({ name, oldValue, changeType }, i, node) => {
    const indent = getIndent(deep, changeType);
    const setValue = (value) => (!_.isObject(value) ? value : `{${stringify(value, deep + 1)}${getIndent(deep)}}`);
    switch (changeType) {
      case 'added': return `${indent}+ ${name}: ${setValue(node[i].value)}`;
      case 'removed': return `${indent}- ${name}: ${setValue(node[i].value)}`;
      case 'unchanged': return `${indent}${name}: ${setValue(node[i].value)}`;
      case 'tree': return `${indent}${name}: {${stylish(node[i], deep + 1)}${indent}}`;
      case 'updated': return `${indent}- ${name}: ${setValue(oldValue)}${indent}+ ${name}: ${setValue(node[i].value)}`;
      default: return null;
    }
  }).join('');
}

export default (object) => `{${stylish(object)}\n}`;
