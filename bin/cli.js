#! /usr/bin/env node
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const program = require('commander');
const figlet = require('figlet');
const chalk = require('chalk');
import { CASE } from '../case/case.js';
console.log(import.meta.url);
