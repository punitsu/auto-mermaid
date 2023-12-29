import { Client } from 'pg';
import { PGClient } from '../pg-connector';

describe('PGClient', () => {
  const pg_client = new PGClient({
    host: 'localhost',
    database: 'postgres',
    user: 'postgres',
    password: 'postgres',
    port: 5432,
  });

  const pg_client_mock = new Client({
    host: 'localhost_mock',
    database: 'postgres_mock',
    user: 'postgres_mock',
    password: 'postgres_mock',
  });

  test('Should be defined', () => {
    expect(PGClient).toBeDefined();
    expect(pg_client).toBeDefined();
    expect(pg_client_mock).toBeDefined();
    expect(pg_client_mock).toBeInstanceOf(Client);
    expect(pg_client_mock).not.toBeInstanceOf(PGClient);
    expect(pg_client_mock).not.toBe(pg_client);
  });
});
