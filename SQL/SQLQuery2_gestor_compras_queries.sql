-- Modificar cantidad de caracteres en una columna:
  alter table contacts
  alter column email varchar(255);

  delete from suppliers -- se eliminaron los registros insertados porque se crearon con id comenzando con el 3 y no con el 1
  DBCC CHECKIDENT('contacts', NORESEED) --muestra el último valor de id asignado
  DBCC CHECKIDENT('suppliers', RESEED, 0); -- resetea los id para que comiencen desde el 1

  ALTER TABLE products
ALTER COLUMN image VARCHAR(255);

  ALTER TABLE contacts
ALTER COLUMN phone_number VARCHAR(25);



ALTER TABLE suppliers 
ADD is_deleted BIT DEFAULT 0 NOT NULL;

select * from categories
select * from suppliers
select * from addresses
select * from contacts

UPDATE categories
SET name = 'Libreria y papeleria'
WHERE id = 5;

UPDATE categories
SET name = 'Libros'
WHERE id = 6;

UPDATE products
SET price = 9500
WHERE id = 10;

UPDATE suppliers
SET field = 'Electrodomésticos'
WHERE id = 1;

UPDATE contacts
SET phone_number = '3517122233'
WHERE id = 4;

UPDATE suppliers
SET phone_number = '351223458'
WHERE id = 7;

UPDATE contacts
SET phone_number = '2213114587'
WHERE id = 2;

UPDATE contacts
SET phone_number = '34185412'
WHERE id = 5;


select * from products
select * from suppliers
select * from categories
select * from purchase_orders

select p.*, s.business_name as proveedor
from products p
join suppliers s on p.id_supplier = s.id
where s.id = 7;

select s.business_name as Proveedor, a.street as Calle, pr.name as Provincia, p.name as Pais
from suppliers s
inner join addresses a on s.id_address = a.id
inner join provinces pr on a.id_province = pr.id
inner join countries p on pr.id_country = p.id

select * from provinces;