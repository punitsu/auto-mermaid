import { FetchDatabaseSchemaInput } from '@utils/types/libs';

export type DATABASES_SUPPORTED = 'postgres' | 'mysql' | 'sqlite';

export interface ParseInputValuesInput extends FetchDatabaseSchemaInput {}

export interface ParseInputValuesOutput {
  debug: boolean;
  database_name: DATABASES_SUPPORTED;
  connection_string: string;
  has_custom_schema: boolean;
  has_custom_tables: boolean;
  custom_schema?: [string];
  custom_tables?: [string];
  exclude_foreign_keys: boolean;
  exclude_default_values: boolean;
  exclude_nullable: boolean;
  exclude_indexes: boolean;
  exclude_enum_values: boolean;
  output_file_name: string;
}

export type DatabaseConnectionInfo = {
  user: string;
  password: string;
  host: string;
  port: number;
  database: string;
  engine: string;
};
