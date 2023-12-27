import { Client } from 'pg';
import { PGClientProps } from '@utils/types/libs';

export class PGClient {
  client: Client;
  constructor(props: PGClientProps) {
    this.client = new Client({
      user: props.user || 'postgres',
      password: props.password || 'postgres',
      host: props.host || 'localhost',
      database: props.database || 'postgres',
      port: props.port || 5432,
    });
    this.client.connect();
  }
}
