import { FetchDatabaseSchemaInput } from '@utils/types/libs';
import { parseInputValues } from '@utils/helper';

export async function fetchDatabaseSchema(input: FetchDatabaseSchemaInput) {
  const { database_name, connection_string, custom_schema, has_custom_schema, has_custom_tables, custom_tables } = parseInputValues(input);
  console.log(database_name, connection_string, custom_schema, has_custom_schema, has_custom_tables, custom_tables);
}
