import fs from 'fs';
import path from 'path';
import process from 'process';
import findDiff from './findDiff.js';
import formatType from './formatters/index.js';
import parseData from './parsers.js';

const getFileContent = (filepath) => {
  const fullFilePath = path.resolve(process.cwd(), filepath);
  return parseData(fs.readFileSync(fullFilePath, 'utf8'), path.extname(fullFilePath));
};

const genDiff = (filepath1, filepath2, options = 'stylish') => {
  const difference = findDiff(getFileContent(filepath1), getFileContent(filepath2));
  return formatType(options)(difference);
};

export default genDiff;
