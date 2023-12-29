import { Client } from 'pg';
import { PGClientProps } from '@utils/types';
import { logger } from '@utils/wrappers';

export class PGClient {
  client: Client;

  constructor(props: PGClientProps) {
    this.client = new Client(props);
  }

  private async connect() {
    try {
      await this.client.connect();
    } catch (error) {
      logger.error(`Error connecting to PostgreSQL: ${error}`);
      throw error;
    }
  }

  async query(sql: string) {
    try {
      await this.connect();
      logger.info(`Connected to PostgreSQL`);
      return await this.client.query(sql);
    } catch (error) {
      logger.error(`Error executing query: ${error}`);
      throw error;
    }
  }

  async end() {
    try {
      await this.client.end();
    } catch (error) {
      logger.error(`Error disconnecting from PostgreSQL: ${error}`);
      throw error;
    }
  }
}
