#!/usr/bin/env node

// Libs
import * as fs from 'fs';
import { Command, Option } from 'commander';

// Utilities
import { DATABASES_SUPPORTED } from './utils/constants';

const application_version = JSON.parse(fs.readFileSync('./package.json', 'utf8')).version;

const program = new Command();

program
  .version(application_version, '-v, --version', 'Output the current version')
  .addOption(new Option('-d, --database <database name>', 'Database name').choices(DATABASES_SUPPORTED).makeOptionMandatory(true))
  .requiredOption('-c, --connection-string <value>', 'Connection string for the database')
  .option('-s, --schema [schemas...]', 'Takes a list of schemas, by default takes all')
  .option('-t, --table [tables...]', 'Takes a list of tables in the format "schema_name.table_name", by default takes all');

program.parse(process.argv);
