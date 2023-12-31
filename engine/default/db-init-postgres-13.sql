CREATE DATABASE postgres_test_db;
\c postgres_test_db;

CREATE SCHEMA company;

CREATE TABLE IF NOT EXISTS company.department (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

CREATE TABLE IF NOT EXISTS company.employee (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    department_id INTEGER,
    hire_date DATE NOT NULL,
    salary DECIMAL(10, 2) NOT NULL
);

ALTER TABLE company.employee ADD CONSTRAINT fk_employee_department
FOREIGN KEY (department_id) REFERENCES company.department(id)
ON DELETE SET NULL;

CREATE INDEX idx_employee_department ON company.employee(department_id);

CREATE SCHEMA library;

CREATE TABLE IF NOT EXISTS library.genre (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

CREATE TABLE IF NOT EXISTS library.book (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(100) NOT NULL,
    genre_id INTEGER,
    publication_year INTEGER
);

ALTER TABLE library.book ADD CONSTRAINT fk_book_genre
FOREIGN KEY (genre_id) REFERENCES library.genre(id)
ON DELETE SET NULL;

CREATE INDEX idx_book_genre ON library.book(genre_id);

CREATE SCHEMA events;

CREATE TABLE IF NOT EXISTS events.event_type (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

CREATE TABLE IF NOT EXISTS events.event (
    id SERIAL PRIMARY KEY,
    event_type_id INTEGER,
    event_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    location VARCHAR(255) NOT NULL
);

ALTER TABLE events.event ADD CONSTRAINT fk_event_event_type
FOREIGN KEY (event_type_id) REFERENCES events.event_type(id)
ON DELETE SET NULL;

CREATE INDEX idx_event_event_type ON events.event(event_type_id);
