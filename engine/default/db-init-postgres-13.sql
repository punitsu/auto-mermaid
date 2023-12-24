CREATE DATABASE superstore;

CREATE SCHEMA ecommerce;

-- Tables --

CREATE TABLE IF NOT EXISTS ecommerce.category (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

CREATE TABLE IF NOT EXISTS ecommerce.product (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    category_id INTEGER,
    price DECIMAL(10, 2) NOT NULL,
    stock_quantity INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS ecommerce.customer (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL,
    phone_number VARCHAR(15)
);

CREATE TABLE IF NOT EXISTS ecommerce.order (
    id SERIAL PRIMARY KEY,
    customer_id INTEGER,
    order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    total_amount DECIMAL(10, 2) NOT NULL
);

CREATE TABLE IF NOT EXISTS ecommerce.order_item (
    id SERIAL PRIMARY KEY,
    order_id INTEGER,
    product_id INTEGER,
    quantity INTEGER NOT NULL,
    unit_price DECIMAL(10, 2) NOT NULL
);


-- Relationships

ALTER TABLE ecommerce.product ADD CONSTRAINT fk_product_category
FOREIGN KEY (category_id) REFERENCES ecommerce.category(id)
ON DELETE SET NULL;

ALTER TABLE ecommerce.order ADD CONSTRAINT fk_order_customer
FOREIGN KEY (customer_id) REFERENCES ecommerce.customer(id)
ON DELETE SET NULL;

ALTER TABLE ecommerce.order_item ADD CONSTRAINT fk_order_item_order
FOREIGN KEY (order_id) REFERENCES ecommerce.order(id)
ON DELETE CASCADE;

ALTER TABLE ecommerce.order_item ADD CONSTRAINT fk_order_item_product
FOREIGN KEY (product_id) REFERENCES ecommerce.product(id)
ON DELETE SET NULL;
