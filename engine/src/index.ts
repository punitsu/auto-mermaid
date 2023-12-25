#!/usr/bin/env node

// Libs
import * as fs from 'fs';
import { Command, Option } from 'commander';

// Modules
import { parseInputValues } from './utils/helper';
import { fetchDatabaseSchema } from './modules/fetch-database-schema';

// Utilities
import { DATABASES_SUPPORTED } from './utils/constants';

const application_version = JSON.parse(fs.readFileSync('./package.json', 'utf8')).version;

const program = new Command();

program
  .name('auto-mermaid')
  .description('Converts schema from your favourite database to mermaid ERD diagram')
  .version(application_version, '-v, --version', 'Output the current version');

program
  .addOption(new Option('-d, --database <database name>', 'Database name').choices(DATABASES_SUPPORTED).makeOptionMandatory(true))
  .requiredOption('-c, --connection-string <value>', 'Connection string for the database')
  .option('-as, --all-schema', 'Takes all schema', true)
  .option('-at, --all-tables', 'Takes all tables', true)
  .option('-s, --schema [schemas...]', 'Takes a list of schemas')
  .option('-t, --table [tables...]', 'Takes a list of tables in the format "schema_name.table_name"');

program.parse(process.argv);

const { database_name, connection_string, tables_included, schema_included } = parseInputValues(program.opts());
const database_schema = await fetchDatabaseSchema({ database_name, connection_string, tables_included, schema_included });
