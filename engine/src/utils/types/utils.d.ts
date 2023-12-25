export type ParseInputValuesInput = {
  database: string;
  connectionString: string;
  schema: [string];
  tables: [string];
  allTables: boolean;
  allSchemas: boolean;
};
