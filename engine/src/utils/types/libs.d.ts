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

export type FetchDatabaseSchemaInput = {
  database: string;
  connectionString: string;
  schema: [string];
  tables: [string];
  allTables: boolean;
  allSchemas: boolean;
};
