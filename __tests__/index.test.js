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
  const fileTypes = ['stylish', 'plain', 'json'];
  const fileExtensions = ['json', 'yaml', 'yml'];

  for (let iT = 0; iT < fileTypes.length; iT += 1) {
    const expectedResult = readFile(`expected_${fileTypes[iT]}.txt`);
    for (let iE = 0; iE < fileExtensions.length; iE += 1) {
      test(`compare ${fileTypes[iT]} ${fileExtensions[iE]}`, () => {
        const result = gendiff(getPath(`file1.${fileExtensions[iE]}`), getPath(`file2.${fileExtensions[iE]}`), fileTypes[iT]);
        expect(result).toEqual(expectedResult);
      });
    }
  }
});
