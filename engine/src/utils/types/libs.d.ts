import { Client } from 'pg';

export type PGClientProps = {
  user?: string;
  password?: string;
  host?: string;
  database?: string;
};

export type PGClient = {
  client: Client;
  connect: () => Promise<void>;
  disconnect: () => Promise<void>;
};

export type fetchDatabaseSchemaInput = {
  database_name: string;
  connection_string: string;
  tables_included: string[] | string;
  schema_included: string[] | string;
};
