import { DATABASES_SUPPORTED, ParseInputValuesInput } from './types/utils';
import { DATABASE_URL_REGEX } from '@utils/constants';

export function parseInputValues(input: ParseInputValuesInput) {
  return {
    debug: input?.debug,
    database_name: input?.database,
    connection_string: input?.connectionString,
    has_custom_schema: !!input?.schema?.length,
    has_custom_tables: !!input?.tables?.length,
    custom_schema: input?.schema,
    custom_tables: input?.tables,
    exclude_foreign_keys: input?.fk,
    exclude_default_values: input?.defaultValues,
    exclude_nullable: input?.nullable,
    exclude_indexes: input?.indexes,
    exclude_enum_values: input?.enumValues,
    output_file_name: input?.output,
  };
}

export function parseDatabaseUrl(url: string, database_name: DATABASES_SUPPORTED) {
  const regex = DATABASE_URL_REGEX[database_name];
  const match = url.match(regex);
  if (!match) {
    throw new Error(`Invalid database URL for ${database_name}`);
  }
  return { user: match[1], password: match[2], host: match[3], port: parseInt(match[4]), database: match[5], engine: match[6] };
}
