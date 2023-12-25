import { ParseInputValuesInput } from './types/utils';

export function parseInputValues(input: ParseInputValuesInput) {
  const { database, connectionString, schema, tables, allTables, allSchemas } = input;
  if (!allSchemas && !schema.length) throw new Error('No schema provided');
  if (!allTables && !tables.length) throw new Error('No tables provided');
  return {
    database_name: database,
    connection_string: connectionString,
    has_custom_schema: !allSchemas,
    has_custom_tables: !allTables,
    custom_schema: schema,
    custom_tables: tables,
  };
}
