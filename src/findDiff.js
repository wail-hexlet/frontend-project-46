import _ from 'lodash';

const findDiff = (input1, input2) => {
  const keys = _.sortBy(_.union(Object.keys(input1), Object.keys(input2)));
  return keys.map((key) => {
    if (_.isObject(input1[key]) && _.isObject(input2[key])) {
      return { name: key, changeType: 'tree', children: findDiff(input1[key], input2[key]) };
    }
    if (!_.has(input1, key)) return { name: key, value: input2[key], changeType: 'added' };
    if (!_.has(input2, key)) return { name: key, value: input1[key], changeType: 'removed' };
    if (input1[key] !== input2[key]) {
      return {
        name: key, oldValue: input1[key], value: input2[key], changeType: 'updated',
      };
    }
    return { name: key, value: input2[key], changeType: 'unchanged' };
  });
};

export default (input1, input2) => ({ children: findDiff(input1, input2) });
