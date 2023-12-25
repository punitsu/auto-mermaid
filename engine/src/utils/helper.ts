import { ParseInputValuesInput } from './types/utils';

export function parseInputValues(input: ParseInputValuesInput) {
  const { database, connectionString, schema = 'all', tables = 'all' } = input;
  return { database_name: database, connection_string: connectionString, schema_included: schema, tables_included: tables };
}
