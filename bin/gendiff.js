#!/usr/bin/env node
import { Command } from 'commander';

const program = new Command();

program
  .name('gendiff')
  .usage('[options]')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format <type>', 'output format')
  .version('1.0.0', '-V, --version', 'output the version number')
  .arguments('<filepath1> <filepath2>')
  .action((filepath1, filepath2, options) => {
    console.log(`file1:${filepath1}`, `file2:${filepath2}`, `options:${options.format}`);
  });

program.parse();
