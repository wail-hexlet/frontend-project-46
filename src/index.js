import fs from 'fs';
import path from 'path';
import process from 'process';
import findDiff from './findDiff.js';

const getFileContent = (filepath) => {
  const fullFilePath = path.resolve(process.cwd(), filepath);
  return fs.readFileSync(fullFilePath, 'utf8');
};

const genDiff = (filepath1, filepath2, options) => {
  const data1 = JSON.parse(getFileContent(filepath1));
  const data2 = JSON.parse(getFileContent(filepath2));
  return findDiff(data1, data2);
};

export default genDiff;
