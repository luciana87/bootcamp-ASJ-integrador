CREATE DATABASE gestor_compras;

GO

use gestor_compras;

GO
CREATE TABLE countries (
  id INT PRIMARY KEY IDENTITY (1,1) NOT NULL,
  name VARCHAR(50) NOT NULL
);

CREATE TABLE provinces (
  id INT PRIMARY KEY IDENTITY (1,1) NOT NULL,
  name VARCHAR(70) NOT NULL,
  id_country int FOREIGN KEY REFERENCES countries(id) NOT NULL
);

CREATE TABLE addresses (
  id INT PRIMARY KEY IDENTITY (1,1) NOT NULL,
  street varchar(100) NOT NULL,
  postal_code varchar(6) NOT NULL,
  city varchar(100) NOT NULL,
  id_province INT FOREIGN KEY REFERENCES provinces(id) NOT NULL
);

CREATE TABLE contacts (
  id INT PRIMARY KEY IDENTITY (1,1) NOT NULL,
  name_contact varchar(100) NOT NULL,
  lastname_contact varchar(100) NOT NULL,
  phone_number int NOT NULL,
  email varchar(255),
  position varchar(100)
);

CREATE TABLE iva_types (
  id INT PRIMARY KEY IDENTITY (1,1) NOT NULL,
  name varchar(150) NOT NULL
);

CREATE TABLE categories (
  id INT PRIMARY KEY IDENTITY (1,1) NOT NULL,
  name varchar(100) NOT NULL,
  created_at datetime default getdate() NOT NULL,
  updated_at datetime
);

CREATE TABLE suppliers (
  id INT PRIMARY KEY IDENTITY (1,1) NOT NULL,
  code varchar(50) NOT NULL,
  business_name varchar(150) NOT NULL,
  cuit varchar(13) NOT NULL,
  field varchar(100), /*rubro*/
  website varchar(255),
  phone_number varchar(25) NOT NULL,
  email varchar(255),
  logo varchar(255),
  created_at datetime default getdate() NOT NULL,
  updated_at datetime,
  is_deleted bit  default 0 NOT NULL,
  id_address int Foreign key REFERENCES addresses(id) NOT NULL,
  id_iva INT FOREIGN KEY REFERENCES iva_types(id) NOT NULL,
  id_contact int FOREIGN KEY REFERENCES contacts(id) NOT NULL
);

CREATE TABLE products (
  id INT PRIMARY KEY IDENTITY (1,1) NOT NULL,
  sku varchar(50) NOT NULL,
  name varchar(150) NOT NULL,
  price float NOT NULL,
  description text,
  image varchar(255),
  created_at datetime default getdate() NOT NULL,
  updated_at datetime,
  id_category int Foreign key REFERENCES categories(id) NOT NULL,
  id_supplier INT FOREIGN KEY REFERENCES suppliers(id) NOT NULL
);

CREATE TABLE purchase_orders (
id INT PRIMARY KEY IDENTITY(1,1) NOT NULL,
num_order int NOT NULL,
created_at datetime default getdate() NOT NULL,
deadline date NOT NULL,
updated_at datetime,
total float NOT NULL,
status bit NOT NULL,
description text,
id_supplier int FOREIGN KEY REFERENCES suppliers(id) NOT NULL
);

CREATE TABLE items_details (
id INT PRIMARY KEY IDENTITY(1,1) NOT NULL,
price float NOT NULL,
amount int NOT NULL,
total float NOT NULL,
id_product int FOREIGN KEY REFERENCES products(id) NOT NULL,
id_purchase_order int FOREIGN KEY REFERENCES purchase_orders(id) NOT NULL
);

