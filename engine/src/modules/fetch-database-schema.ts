// Libraries
import { PGClient } from '@libs/pg-connector';

// Modules
import { parseDatabaseUrl, parseInputValues } from '@utils/helper';

// Utilities
import { FetchDatabaseSchemaInput, FetchPostgresSchemaInput } from '@utils/types';
import { logger } from '@utils/wrappers';

export async function fetchDatabaseSchema(input: FetchDatabaseSchemaInput) {
  const parsed_input = parseInputValues(input);
  switch (parsed_input?.database_name) {
    case 'postgres':
      return await fetchPostgresSchema(parsed_input);
    default:
      throw new Error(`Database ${parsed_input?.database_name} not supported`);
  }
}

export async function fetchPostgresSchema(input: FetchPostgresSchemaInput) {
  const { user, password, host, port, database } = parseDatabaseUrl(input?.connection_string, input?.database_name);
  const client = new PGClient({ user, password, host, port, database });
  try {
    logger.info(`Fetching schema`);
    const { rows } = await client.query(`
      SELECT table_schema, table_name, column_name, data_type, is_nullable, column_default
      FROM information_schema.columns
      WHERE table_schema NOT IN ('information_schema', 'pg_catalog')
      ORDER BY table_schema, table_name, ordinal_position;
    `);
    return rows;
  } catch (error) {
    logger.error(`Error fetching schema: ${error}`);
    throw error;
  } finally {
    await client.end();
  }
}
