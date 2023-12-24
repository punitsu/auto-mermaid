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
