import { Client } from 'pg';
import { PGClientProps } from '@utils/types';
import { logger } from '@utils/wrappers';

export class PGClient {
  client: Client;
  is_connected: boolean;

  constructor(props: PGClientProps) {
    logger.info(`Initializing PostgreSQL client`);
    this.client = new Client(props);
    this.is_connected = false;
  }

  private async connect() {
    try {
      if (!this.is_connected) {
        logger.info(`Connecting to PostgreSQL at ${this.client.host}:${this.client.port}`);
        await this.client.connect();
        this.is_connected = true;
        logger.info(`Connected to PostgreSQL at ${this.client.host}:${this.client.port}`);
      }
    } catch (error) {
      logger.error(`Error connecting to PostgreSQL: ${error}`);
      throw error;
    }
  }

  public async query(sql: string) {
    await this.connect();
    logger.info(`Executing query: ${sql}`);
    try {
      return await this.client.query(sql);
    } catch (error) {
      logger.error(`Error executing query: ${error}`);
      throw error;
    }
  }

  public async end() {
    try {
      if (this.is_connected) {
        await this.client.end();
        this.is_connected = false;
      } else {
        logger.info(`Not connected to PostgreSQL. Skipping disconnect.`);
      }
    } catch (error) {
      logger.error(`Error disconnecting from PostgreSQL: ${error}`);
      throw error;
    }
  }
}
