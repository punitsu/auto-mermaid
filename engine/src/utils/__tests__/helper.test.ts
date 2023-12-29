import { parseDatabaseUrl, parseInputValues } from '@utils/helper';

describe('@utils/helper.js', () => {
  describe('parseInputValues', () => {
    test('Case: Should return successful response', () => {
      const res = parseInputValues({
        debug: false,
        allSchemas: true,
        allTables: true,
        fk: false,
        defaultValues: false,
        nullable: false,
        indexes: false,
        enumValues: false,
        output: 'output',
        database: 'postgres',
        connectionString: 'postgres://user:password@host:5432/database',
        schema: ['schema'],
        tables: ['table'],
      });
      expect(res).toEqual({
        debug: false,
        database_name: 'postgres',
        connection_string: 'postgres://user:password@host:5432/database',
        has_custom_schema: true,
        has_custom_tables: true,
        custom_schema: ['schema'],
        custom_tables: ['table'],
        exclude_foreign_keys: false,
        exclude_default_values: false,
        exclude_nullable: false,
        exclude_indexes: false,
        exclude_enum_values: false,
        output_file_name: 'output',
      });
    });
  });
  describe('parseDatabaseUrl', () => {
    test('Case: Should throw error if regex doesnt match the expression', () => {
      expect(() => {
        parseDatabaseUrl('postgres://user:password@host:5432', 'postgres');
      }).toThrowError('Invalid database URL for postgres');
    });
    test('Case: Should throw error if regex doesnt match the expression', () => {
      expect(() => {
        parseDatabaseUrl('postgres://user:password@host:/database', 'postgres');
      }).toThrowError('Invalid database URL for postgres');
    });
    test('Case: Should pass if expression is correct', () => {
      const res = parseDatabaseUrl('postgres://user:password@host:5432/database', 'postgres');
      expect(res.user).toEqual('user');
      expect(res.password).toEqual('password');
      expect(res.host).toEqual('host');
      expect(res.port).toEqual(5432);
      expect(res.database).toEqual('database');
    });
  });
});
