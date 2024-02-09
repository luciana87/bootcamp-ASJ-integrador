
<img src="angular/gestion-compras/src/assets/img/logo7.png" alt="Logo" title="Imágen gestor de compras" width="170" height="120" />

# Proyecto Integrador Final

<p>Desarrollo de un <em>Sistema de Gestión Compras</em> para manejar información de Proveedores, Productos y Órdenes de compra simplificando la administración de los inventarios.</p>


### Índice <img align="right" src="angular/gestion-compras/src/assets/img/img-removebg-preview.png" alt="Logo" title="Imágen gestor de compras" width="350" height="250" />

- [Tecnologías](#tecnologías)

- [Ejecutar localmente](#ejecutar-localmente)

- [Entidades mandatorias](#entidades-mandatorias)

- [Aclaraciones sobre Login](#aclaraciones-sobre-login)

- [Desarrolladora](#desarrollado-por)
    - [Contacto](#contacto)


.
## Tecnologías
  - **Dependencias**:
  	- Spring Web
  	- MS SQLServer Driver
  	- Spring Boot Starter Data JPA
  	- Spring Boot Devtools 
  	- Validation
  
  - **Tecnología Frontend**    
      - Angular con TypeScript
      
  - **Tecnología Backend**   
      - Java 21
      - Spring Boot
      
  - **Tecnología base de datos**   
      - SQLServer


## Ejecutar localmente

Pasos necesarios para correr el proyecto localmente

- Crear una base de datos llamada compras
```sql
  CREATE DATABASE compras;
```

- Correr el proyecto **SpringBoot** para que se creen las tablas automáticamente

- Desde **sqlServer** seleccionar mi base de datos
```sql
USE compras;
```

- Insertar **Países**

```sql
INSERT INTO country(name)
VALUES 
  ('Argentina'),
  ('Brasil'),
  ('Uruguay'),
  ('Chile'),
  ('Bolivia');

```

- Insertar  **Provincias**

```sql

--Provincias de Argentina
INSERT INTO province(name, country_id)
VALUES 
  ('Chubut',1), ('Neuquén',1), ('Jujuy',1), ('Buenos Aires', 1), ('Córdoba', 1),
  ('Santa Fe', 1), ('Mendoza', 1), ('Tucumán', 1), ('Salta', 1), ('Tierra del Fuego', 1),
  ('Santa Cruz', 1), ('Río Negro', 1), ('La Pampa', 1), ('San Luis', 1), ('San Juan', 1),
  ('La Rioja', 1), ('Catamarca', 1), ('Entre Ríos', 1), ('Corrientes', 1), ('Misiones', 1),
  ('Santiago del Estero', 1), ('Chaco', 1), ('Formosa', 1);
       
-- Provincias de Brasil
INSERT INTO province(name, country_id)
VALUES 
  ('Alagoas', 2),
  ('Bahía', 2),
  ('Amazonas', 2),
  ('Sao Paulo', 2),
  ('Mato Grosso', 2),
  ('Santa Catarina', 2);

-- Provincias de Uruguay
INSERT INTO province(name, country_id)
VALUES 
  ('Colonia', 3),
  ('San José', 3),
  ('Montevideo', 3),
  ('Maldonado', 3),
  ('Florida', 3);

-- Provincias de Chile
INSERT INTO province(name, country_id)
VALUES 
  ('Chacabuco', 4),
  ('Cordillera', 4),
  ('Maipo', 4),
  ('Melipilla', 4),
  ('Santiago ', 4),
  ('Talagante', 4);

-- Provincias de Bolivia.
INSERT INTO province(name, country_id)
VALUES 
  ('La Paz', 5),
  ('Potosí ', 5),
  ('Santa Cruz', 5);

```

- Insertar **Condiciones de Iva**
```sql
INSERT INTO iva_type(name)
VALUES 
  ('IVA Responsable Inscripto'),
  ('IVA Responsable No Inscripto'),
  ('Monotributista'),
  ('Exento'),
  ('IVA no Responsable'),
  ('Consumidor Final'),
  ('Sujeto no Categorizado'),
  ('Proveedor del Exterior'),
  ('Cliente del Exterior'),
  ('IVA Liberado'),
  ('Pequeño Contribuyente Eventual'),
  ('Monotributista Social'),
  ('Pequeño Constribuyente Eventual Social');
```
- Ejecutar el servidor de Angular (*puerto 4200*)

```bash
  ng serve -o
```

- Ejecutar el servidor de Java (*puerto 8080*)

- Insertar algunas **Categorías** pueden ingresarse desde el FRONT.
- Insertar algunos **Rubros** pueden ingresarse desde el FRONT.

   _Tanto las categorías como los rubros pueden ingresarse desde el **panel de configuración general** ó desde
   el formulario de productos y proveedores respectivamente._

## Entidades mandatorias
El sistema cuenta con entidades mandatorias. Una vez insertados los países con sus provincias, las condiciones de IVA y/o las categorías y rubros, lo siguiente que se debe crear son los **PROVEEDORES**. 
Una vez creado el/los proveedores puedo crear **PRODUCTOS**, ya que se necesita de la entidad Proveedor para tal fin.
Por último ya puedo generar **ÓRDENES DE COMPRA**.

1. Insertar algunos **Proveedores** desde los formularios del FRONT
  
      *Proveedores > Nuevo provedor*

2. Insertar algunos **Productos** desde los formularios del FRONT
  
      *Productos > Nuevo producto*

3. Insertar algunas **Ordenes de Compra** desde los formularios del FRON
  
      *Órdenes de compra > Nueva órden*


## Aclaraciones sobre **Login**

La primer pantalla es el **Login**, se deberá ingresar con las siguientes credenciales:

**Email**: luciana24  
**Password**: 123456

## Desarrollado por:

Este proyecto fue desarrollado por: **Luciana Yamila Chaparro** en el marco del BootCamp de ASJ.

## Contacto

Si te gustó mi proyecto y te interesa mi trabajo, podés contactarme a cualquiera de mis redes sociales. 

  - LinkedIn ---> [<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg" width="25px" alt="icon linkedin">](http://linkedin.com/in/luciana-chaparro-39521221a)  

  - Gmail ---> [<img src="https://img.icons8.com/ios-filled/50/null/gmail.png" width="26px" alt="icon gmail">](mailto:lucianachaparro87@gmail.com) 
