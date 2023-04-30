#!/usr/bin/env node
import { Command } from 'commander';
const program = new Command();

program
.name('gendiff')
.usage('[options]')
.description('Compares two configuration files and shows a difference.')
.option('-h, --help', 'display help for command')
.version('1.0.0', '-V, --version', 'output the version number');

program.command('gendiff');
program.parse();