# **auto-mermaid**

Fetches schema from your favourite database, and generate mermaid ERD. 

### Install
```npm install -g auto-mermaid```

### Paths

```angular2html
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
-h, --help                       display help for command
```

## Authors:
* [Punit Sureka](https://www.linkedin.com/in/punitsureka/)
