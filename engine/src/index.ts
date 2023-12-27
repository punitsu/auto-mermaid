#!/usr/bin/env node

// Libs
import * as fs from 'fs';
require('module-alias/register');
import { Command, Option } from 'commander';

// Modules
import { fetchDatabaseSchema } from '@modules/fetch-database-schema';

// Utilities
import { DATABASES_SUPPORTED } from '@utils/types/utils';

const program = new Command();
export const database_choices: DATABASES_SUPPORTED[] = ['postgres', 'mysql', 'sqlite'];
const application_version = JSON.parse(fs.readFileSync('./package.json', 'utf8')).version;

(async function startApplication() {
  program
    .name('auto-mermaid')
    .description('Converts schema from your favourite database to mermaid ERD diagram')
    .version(application_version, '-v, --version', 'Output the current version');

  program
    .option('--debug', 'show debug information', false)
    .addOption(new Option('-d, --database <database name>', 'Database name').choices(database_choices).makeOptionMandatory(true))
    .requiredOption('-c, --connection-string <value>', 'Connection string for the database')
    .option('-as, --all-schemas <Boolean>', 'Takes all schema', true)
    .option('-at, --all-tables <Boolean>', 'Takes all tables', true)
    .option('-s, --schema [schemas...]', 'Takes a list of schemas')
    .option('-t, --table [tables...]', 'Takes a list of tables in the format "schema_name.table_name"')
    .option('--no-fk <Boolean>', 'Omit FK relations in column description', false)
    .option('--no-default-values <Boolean>', 'Omit default values in column description', false)
    .option('--no-nullable <Boolean>', 'Omit nullable in column description', false)
    .option('--no-indexes <Boolean>', 'Omit indexes in column description', false)
    .option('--no-enum-values <Boolean>', 'Omit enum values in column description', false)
    .option('-o, --output <output file>', 'Output file name with file path', 'output.mmd');

  program.parse(process.argv);

  const database_schema = await fetchDatabaseSchema(program.opts());
})();
