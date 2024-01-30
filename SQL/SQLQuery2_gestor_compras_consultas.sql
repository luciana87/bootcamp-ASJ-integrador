use gestor_compras;

GO

-- 1.Obtener todos los productos, mostrando nombre del producto, categor�a, proveedor (raz�n social y codigo proveedor), precio.

select p.name as Nombre, cat.name as Categor�a, s.business_name as 'Raz�n social', s.business_name as 'C�digo proveedor'
from products p
inner join categories cat on p.id_category = cat.id
inner join suppliers s on p.id_supplier = s.id

-- 2. En el listado anterior, adem�s de los datos mostrados, traer el campo imagen aunque el producto NO tenga una. Sino tiene imagen, mostrar "-".

select p.name as Nombre, cat.name as Categor�a, p.image as 'URL im�gen producto', s.business_name as 'Raz�n social', s.business_name as 'C�digo proveedor'
from products p
inner join categories cat on p.id_category = cat.id
inner join suppliers s on p.id_supplier = s.id

-- 3. Mostrar los datos que se pueden modificar (en el front) del producto con ID = 2.

select p.sku as SKU, p.name as 'Nombre producto', p.price as Precio, p.description as Descripci�n, p.image as 'URL im�gen', cat.name as Categor�a
from products p
inner join categories cat on p.id_category = cat.id
where p.id = 2;

-- 4. Listar todo los proveedores cuyo tel�fono tenga la caracter�stica de C�rdoba o que la provincia sea igual a alguna de las 3 con m�s proveedores.

select s.*, pr.name as Provincia
from suppliers s
join addresses a on s.id_address = a.id
join provinces pr on a.id_province = pr.id
where s.phone_number LIKE '351%' or pr.id IN (select TOP 3 a.id_province
												from suppliers s
												inner join addresses a on s.id_address = a.id
												group by a.id_province
												order by count(a.id_province) DESC
												)
order by s.phone_number;



-- 5. Traer un listado de todos los proveedores que no hayan sido eliminados , y ordenados por razon social, codigo proveedor y fecha en que se di� de alta ASC. De este listado mostrar los datos que correspondan con su tabla del front.	

select s.code as 'C�digo proveedor', s.business_name as 'Raz�n social', CONCAT('Tel: ',s.phone_number, ' | ', 'Correo: ', s.email, ' | ', 'Sitio web: ', s.website) as Informaci�n, s.created_at as 'Fecha de alta'
from suppliers s
where s.is_deleted != 1
order by s.business_name, s.code, s.created_at;



-- 6. Obtener razon social, codigo proveedor, imagen, web, email, tel�fono y los datos del contacto del proveedor con m�s ordenes de compra cargadas.

select s.business_name as 'Raz�n social', s.code as 'C�digo proveedor', s.logo as 'Logo proveedor', s.website as 'Sitio web', s.phone_number as Tel�fono,
	CONCAT(c.name_contact, ' ', c.lastname_contact) as 'Nombre del contacto', c.email as 'Correo del contacto', c.phone_number as 'Tel�fono del contacto', c.position as 'Puesto en la empresa'
from suppliers s
inner join contacts c on s.id_contact = c.id
where s.id IN (select top 1 o.id_supplier
				from purchase_orders o
				inner join suppliers s on o.id_supplier = s.id
				group by o.id_supplier, s.business_name
				order by count(o.id_supplier) DESC)



-- 7. Mostrar la fecha emisi�n, n� de orden, razon social y codigo de proveedor, y la cantidad de productos de cada orden.

select CONVERT(DATE, po.created_at) as 'Fecha emisi�n', po.num_order as 'Nro de �rden', SUM(it.amount) as 'Cantidad de productos', s.business_name as 'Raz�n social proveedor', s.code as 'C�digo proveedor'
from purchase_orders po
inner join suppliers s on po.id_supplier = s.id
inner join items_details it on po.id = it.id_purchase_order
group by po.id


select * from purchase_orders