import path from 'node:path';
import { fileURLToPath } from 'url';
import { readFileSync } from 'fs';
import { describe, test, expect } from '@jest/globals';
import gendiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const getPath = (fileName) => path.join(__dirname, '..', '__fixtures__', fileName);
const readFile = (fileName) => readFileSync(getPath(fileName), 'utf-8');

function makeTest(format, extension) {
  const expectedResult = readFile(`expected_${format}.txt`);
  test(`compare ${format} ${extension}`, () => {
    const result = gendiff(getPath(`file1.${extension}`), getPath(`file2.${extension}`), format);
    expect(result).toEqual(expectedResult);
  });
}

describe('gendiff', () => {
  makeTest('stylish', 'json');
  makeTest('plain', 'json');
  makeTest('json', 'json');
  makeTest('stylish', 'yaml');
  makeTest('plain', 'yaml');
  makeTest('json', 'yaml');
  makeTest('stylish', 'yml');
  makeTest('plain', 'yml');
  makeTest('json', 'yml');
});
