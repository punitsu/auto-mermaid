import { ParseInputValuesOutput } from '@utils/types/utils';

export interface FetchPostgresSchemaInput extends ParseInputValuesOutput {
  database_name: string;
}
