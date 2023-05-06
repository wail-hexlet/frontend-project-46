import path from 'node:path';
import { fileURLToPath } from 'url';
import { readFileSync } from 'fs';
import { describe, test, expect } from '@jest/globals';
import gendiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const getPath = (fileName) => path.join(__dirname, '..', '__fixtures__', fileName);
const readFile = (fileName) => readFileSync(getPath(fileName), 'utf-8');

describe('gendiff', () => {
  test('compare plain json', () => {
    const result = gendiff(getPath('file1.json'), getPath('file2.json'), 'plain');
    const expectedResult = readFile('expected_plain.txt');
    expect(result).toEqual(expectedResult);
  });
  test('compare plain yaml', () => {
    const result = gendiff(getPath('file1.yaml'), getPath('file2.yaml'), 'plain');
    const expectedResult = readFile('expected_plain.txt');
    expect(result).toEqual(expectedResult);
  });
  test('compare plain yml', () => {
    const result = gendiff(getPath('file1.yml'), getPath('file2.yml'), 'plain');
    const expectedResult = readFile('expected_plain.txt');
    expect(result).toEqual(expectedResult);
  });
});
