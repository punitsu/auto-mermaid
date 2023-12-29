// Libs
import { PGClient } from '@libs/pg-connector';

// Modules
import { parseDatabaseUrl, parseInputValues } from '@utils/helper';

// Utilities
import { FetchDatabaseSchemaInput, FetchPostgresSchemaInput } from '@utils/types/libs';

export async function fetchPostgresSchema(input: FetchPostgresSchemaInput) {
  const { user, password, host, port, database } = parseDatabaseUrl(input?.connection_string, input?.database_name);
  const client = new PGClient({ user, password, host, port, database });
  await client.connect();
  const { rows } = await client.query(`
    SELECT table_schema, table_name, column_name, data_type, is_nullable, column_default
    FROM information_schema.columns
    WHERE table_schema NOT IN ('information_schema', 'pg_catalog')
    ORDER BY table_schema, table_name, ordinal_position;
  `);
  await client.end();
  return rows;
}

export async function fetchDatabaseSchema(input: FetchDatabaseSchemaInput) {
  const parsed_input = parseInputValues(input);
  switch (parsed_input?.database_name) {
    case 'postgres':
      await fetchPostgresSchema(parsed_input);
      break;
    default:
      throw new Error(`Database ${parsed_input?.database_name} not supported`);
  }
}
