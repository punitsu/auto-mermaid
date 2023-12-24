import { Client } from 'pg';
import { PGClientProps } from './types/pg-connector';

export class PGClient {
  public client: Client;
  constructor(props: PGClientProps) {
    this.client = new Client({
      user: props.user || 'postgres',
      password: props.password || 'postgres',
      host: props.host || 'localhost',
      database: props.database || 'postgres',
    });
  }
}
