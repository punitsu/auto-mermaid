# **auto-mermaid**

Fetches schema from your favourite database, and generates mermaid ERD. 

### Install
```bash
npm install -g auto-mermaid
```

### Paths
auto-mermaid provides a range of options to customize the ERD generation according to your needs.

```html
Options:
-v, --version                    Output the current version
--debug                          show debug information (default: false)
-d, --database <database name>   Database name (choices: "postgres")
-c, --connection-string <value>  Connection string for the database
-as, --all-schemas <Boolean>     Takes all schema (default: true)
-at, --all-tables <Boolean>      Takes all tables (default: true)
-s, --schema [schemas...]        Takes a list of schemas
-t, --table [tables...]          Takes a list of tables in the format "schema_name.table_name"
--no-fk <Boolean>                Omit FK relations in column description (default: false)
--no-default-values <Boolean>    Omit default values in column description (default: false)
--no-nullable <Boolean>          Omit nullable in column description (default: false)
--no-indexes <Boolean>           Omit indexes in column description (default: false)
--no-enum-values <Boolean>       Omit enum values in column description (default: false)
-o, --output <output file>       Output file name with file path (default: "output.mmd")
-h, --help                       display help for command.
```

### Usage

Generate an ERD for specific schemas and tables:
```angular2html
auto-mermaid -d postgres -c "postgres://user:password@localhost:5432/db_name" -s schema1 schema2 -t schema_one.table_1 schema_one.table_2 schema_two.table_1
```

### Output

The tool outputs the Mermaid ERD code based on the provided options.
```mermaid
erDiagram
%%  Tables
schema_one_table_1 {
	integer id PK 
	text name "NOT NULL"
	text email "NOT NULL, UNIQUE"
	table2_id id FK
  }
  
schema_one_table_2 {
	integer id PK
  }
  
schema_two_table_1 {
	integer id PK
  }
  
%%  Relationships
	schema_one_table_1 }o--|| schema_one_table_2 : table2_id
```

## Authors:
* [Punit Sureka](https://www.linkedin.com/in/punitsureka/)

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details