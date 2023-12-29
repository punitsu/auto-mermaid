export type DATABASES_SUPPORTED = 'postgres' | 'mysql' | 'sqlite';

export interface PGClientProps {
  user?: string;
  password?: string;
  host?: string;
  database?: string;
  port?: number;
}

export interface FetchDatabaseSchemaInput {
  debug: boolean;
  allSchemas: boolean;
  allTables: boolean;
  fk: boolean;
  defaultValues: boolean;
  nullable: boolean;
  indexes: boolean;
  enumValues: boolean;
  output: string;
  database: DATABASES_SUPPORTED;
  connectionString: string;
  schema?: [string];
  tables?: [string];
}

export interface FetchPostgresSchemaInput {
  debug: boolean;
  database_name: DATABASES_SUPPORTED;
  connection_string: any;
  has_custom_schema: boolean;
  has_custom_tables: boolean;
  custom_schema: [string] | undefined;
  custom_tables: [string] | undefined;
  exclude_foreign_keys: boolean;
  exclude_default_values: boolean;
  exclude_nullable: boolean;
  exclude_indexes: boolean;
  exclude_enum_values: boolean;
  output_file_name: string;
}

export interface ParseInputValuesInput extends FetchDatabaseSchemaInput {}
