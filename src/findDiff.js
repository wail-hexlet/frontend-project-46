import _ from 'lodash';

const findDiff = (input1, input2) => {
  const indent = '  ';
  const sortedKeys = _.sortBy(_.union(Object.keys(input1), Object.keys(input2)));
  const lines = sortedKeys.reduce((acc, key) => {
    if (!Object.hasOwn(input1, key)) { return [...acc, `${indent}+ ${key}: ${input2[key]}`]; }
    if (!Object.hasOwn(input2, key)) { return [...acc, `${indent}- ${key}: ${input1[key]}`]; }
    if (input1[key] !== input2[key]) { return [...acc, `${indent}- ${key}: ${input1[key]}`, `${indent}+ ${key}: ${input2[key]}`]; }
    return [...acc, `${indent}  ${key}: ${input1[key]}`];
  }, []);

  return ['{', ...lines, '}'].join('\n');
};

export default findDiff;
