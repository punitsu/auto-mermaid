import { fetchDatabaseSchemaInput } from '../utils/types/libs';

export async function fetchDatabaseSchema({ database_name, connection_string, tables_included, schema_included }: fetchDatabaseSchemaInput) {
  console.log('fetchDatabaseSchema', { database_name, connection_string, tables_included, schema_included });
}
