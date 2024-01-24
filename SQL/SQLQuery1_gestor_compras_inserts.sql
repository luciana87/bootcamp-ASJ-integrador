-- inserts
use gestor_compras;

GO

INSERT INTO country(name)
VALUES 
  ('Argentina'),
  ('Brasil'),
  ('Uruguay'),
  ('Chile'),
  ('Bolivia');

  INSERT INTO province(name, country_id)
VALUES 
  ('Chubut',1),
  ('Neuquén',1),
  ('Jujuy',1),
  ('Buenos Aires', 1),
  ('Cordoba', 1),
  ('Santa Fe', 1),
  ('Mendoza', 1),
  ('Tucuman', 1),
  ('Salta', 1);

  INSERT INTO address(street, postal_code, city, province_id)
VALUES 
  ('Calle 123', '1900', 'La Plata', 1),
  ('Avenida XYZ', '5000', 'Carlos Paz', 2),
  ('Calle ABC', 'S3153', 'Rosario', 3), 
  ('Av. de las Flores', 'M5561', 'Tupungato', 4),
  ('Ruta 567', '4000', 'San Miguel de Tucumán', 5),
  ('Av. de los Andes', 'A4427', 'Cafayate', 6),
  ('Av. de los Andes2', 'A4427', 'Cafayate2', 6);

  INSERT INTO contact(contact_name, contact_lastname, phone_number, email, position)
VALUES 
  ('Juan', 'Pérez', 11456789, 'juan.perez@gmail.com', 'Gerente de ventas'),
  ('Maria', 'Gomez', 35154321, 'maria.gomez@gmail.com', 'Representante de ventas'),
  ('Carlos', 'Rodriguez', 35166777, 'carlos.rodriguez@hotmail.com', 'Administrativo de ventas'),
  ('Ana', 'Martinez', 1142333, 'ana.martinez@prueba.com', 'Coordinator'),
  ('Diego', 'Lopez', 22178777, 'diego.lopez@gmail.com', 'Director de ventas'),
  ('Juliana', 'Mendoza', 119888777, 'juliana.mendoza@gmail.com', 'Directora de ventas'),
  ('Victoria', 'García', 221458777, 'victoria.garcia@gmail.com', 'Coordinadora');

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

  INSERT INTO category(name, created_at, updated_at, deleted)
VALUES 
  ('Electrodomésticos pequeños', '2023-07-02T08:30:00', NULL, false),
  ('Electrónica', '2023-11-15T10:30:00', NULL, false),
  ('Ropa y calzado', '2024-01-14T15:45:00', NULL, false),
  ('Blanquería', '2015-06-01T12:00:00', NULL, false),
  ('Juguetería', '2021-04-15T09:20:00', NULL, false),
  ('Libros', '2018-07-20T17:00:00', NULL, false),
  ('Libreria y papeleria', '2018-07-20T17:00:00', NULL, false);


  /*CURRENT_TIMESTAMP cambiar por getdate()*/

  INSERT INTO supplier(code, business_name, cuit, field, website, phone_number, email, logo, created_at, updated_at, address_id, iva_id, contact_id, deleted)
VALUES
  ('C1234', 'Frávega', '18-34234567-0', 'Electro', 'https://www.fravega.com', '2213456699', 'fravega@fravega.com', 'https://cdn.freelogovectors.net/wp-content/uploads/2022/01/fravega-logo-freelogovectors.net_.png', GETDATE(), NULL, 1, 2, 3, false),
  ('C4567', 'Hobby toys', '45-18234567-2', 'Juegos y Juguetes', 'https://hobbytoys.com.ar', '22365789412', 'hobbytoys@hobbytoys.com', 'https://hobbytoys.com.ar/wp-content/themes/bootcommerce-child-main/img/logo.png', GETDATE(), NULL, 2, 3, 4, false),
  ('E6396P', 'Zara', '30-81234567-8', 'Indumentaria', 'https://www.zara.com/ar', '2214568899', 'zara@zara.com', 'https://es.m.wikipedia.org/wiki/Archivo:Zara_Logo.svg', GETDATE(), NULL, 3, 4, 5, false),
  ('BR4561S', 'Arredo', '33-33234567-7', 'Blanquería', 'https://www.arredo.com/ar', '1123456987', 'arredo@gmail.com', 'https://arredo.vtexassets.com/assets/vtex.file-manager-graphql/images/4b4ab8f1-bf34-40bc-b407-ed13c82e340c___9b577355404364e334009aac3bd36d6e.svg', GETDATE(), NULL, 4, 5, 7, false),
  ('98779', 'Sony', '27-65987777-3', 'Electro', 'https://store.sony.com.ar/', '999888777', 'sonyarg@gmail.com', 'https://1000marcas.net/wp-content/uploads/2020/01/logo-Sony.png', GETDATE(), NULL, 5, 2, 6, false),
  ('M4567L', 'El ateneo', '30-66999888-5', 'Libreria', 'https://www.yenny-elateneo.com/', '777888999', 'elateneo@gmail.com', 'https://norteenlinea.com/media/k2/items/cache/478a704d4d7526a0efe92cafb445a447_Generic.jpg', GETDATE(), NULL, 1, 6, 2, false),
  ('ARG988', 'Batik paseo diagonal', '30-77444111-9', 'Libreria y papeleria', 'https://batik.com.ar/', '221444333', 'batik@gmail.com', 'https://tiendup.b-cdn.net/business/48/images/logo_59f3a2f566930.png', GETDATE(), NULL, 2, 7, 1, false);


  /*PARSEDATETIME('2022-01-15 09:45:00', 'yyyy-MM-dd HH:mm:ss') para parsear el date
  
  INSERT INTO product(sku, name, price, description, image, created_at, updated_at, category_id, supplier_id, deleted)
VALUES
  ('3332S318', 'Jersey cuello alto', 27990, 'Jersey tejido en hilatura con...', 'https://static.zara.net/photos///2022/I/0/2/p/3332/318/500/2/w/563/3332318500_6_1_1.jpg?ts=1662994370783', PARSEDATETIME('2022-01-15 09:45:00', 'yyyy-MM-dd HH:mm:ss'), NULL, 2, 1, false);

*/

  INSERT INTO product(sku, name, price, description, image, created_at, updated_at, category_id, supplier_id, deleted)
VALUES
  ('3880S026', 'Sudadera oversize', 19990, 'Prenda 87% algodón 13% poliéster', 'https://static.zara.net/photos///2023/S/0/1/p/3880/026/531/2/w/563/3880026531_6_1_1.jpg?ts=1695376401003', '2022/09/10 12:35:06', NULL, 2, 3, false),
  ('6861B670', 'Blazer slim fit', 33990, 'Blazer slim fit de cuello con solapas de muesca. Manga larga acabada en puño con detalle de botones. Bolsillos de solapa en cadera. Detalle bolsillo interior. Cierre frontal con botones.', 'https://static.zara.net/photos///2023/W/0/2/p/6861/670/250/2/w/563/6861670250_6_1_1.jpg?ts=1669793830702', '2021/09/10 12:25:33', NULL, 2, 3, false),
  ('3332S318', 'Jersey cuello alto', 27990, 'Jersey tejido en hilatura con mezcla de lana. Cuello alto y manga larga. Acabados en rib.', 'https://static.zara.net/photos///2022/I/0/2/p/3332/318/500/2/w/563/3332318500_6_1_1.jpg?ts=1662994370783', '2017/03/17 18:35:06', NULL, 2, 3, false),
  ('20001U08276KP', 'Acolchado 1 Plaza Reversible Mariposas y Corazones', 29196, 'Acolchado 1 Plaza reversible estampado compuesto por mezcla de algodón y microfibra de poliéster.', 'https://arredo.vtexassets.com/arquivos/ids/767882-1600-auto?v=638381720932200000&width=1600&height=auto&aspect=true', '2024/01/10 13:25:14', NULL, 3, 4, false),
  ('10033U08375Z', 'Juego de Sábanas 1 Plaza Rayas', 30096, 'Juego de sábanas 1 Plaza estampado compuesto por mezcla de algodón y poliéster..', 'https://arredo.vtexassets.com/arquivos/ids/772126-1600-auto?v=638381764723600000&width=1600&height=auto&aspect=true', '2024/01/10 14:25:14', NULL, 3, 4, false),
  ('LI8450AP', 'Licuadora de Pie Atma 500W 1.5', 45999, 'La licuadora de pie Atma LI8450AP tiene un moderno diseño en color plateado y negro con un cuerpo de acero inoxidable. Incluye una jarra de vidrio desmontable de 1,5 litros de capacidad que posee una cerradura de seguridad.', 'https://images.fravega.com/f300/707e03b17224631a83b4e27a38f519d8.jpg.webp', '2023/09/21 12:33:04', NULL, 7, 1, false),
  ('AS8933PI', 'Aspiradora con Bolsa ATMA', 99990, 'El modelo AS8933PI tiene 1500 watts con regulador de potencia, con la que podrás aspirar múltiples elementos. Asimismo cuenta con una capacidad de almacenamiento de suciedad de 1,5 litros e indicador de bolsa llena para saber cuando es necesario tirar la basura acumulada.', 'https://images.fravega.com/f300/12485335618b755cf64dbdf7c21134f7.jpg.webp', '2020/04/01 13:25:14', NULL, 7, 1, false),
  ('PE-ET1001N', 'eTermo Peabody Termo Eléctrico', 70999, 'El eTermo funciona con tecnología de aislamiento por vacío y está construido con doble capa de acero inoxidable 18/8, permitiendo conservar altas o bajas temperaturas.', 'https://images.fravega.com/f300/53b060e2ace70e45707d81791824d139.jpg.webp', '2024/01/08 11:15:16', NULL, 7, 1, false),
  ('BOL987', 'Lapicera Bic', 850, 'Punta ultra fina 0.7mm. Varios colores.', 'https://tiendup.b-cdn.net/business/48/products/pK1klR_6466722967b88_large.png', '2023/09/21 13:25:14', NULL, 5, 7, false),
  ('LA487', 'Lápiz Giotto Colors 3.0 Cartón 24 Colores', 7820, 'Lapices Calidad Premiun, Textura de Alto Pigmento y Colores Vivaces, Cuerpo de 18cm con Mina de 3.0 Resistente a Roturas, cuerpo Barnizado del Color de la Mina con Detalles Dorada, presentación en caja con 24 unidades.', 'https://tiendup.b-cdn.net/business/48/products/gq58zE_6382333db0a33_large.jpg', '2023/11/22 11:05:24', NULL, 5, 7, false),
  ('KUR7321', 'Kurecolor Marcador', 7320, 'Línea: Deep Colours, varios colores.', 'https://tiendup.b-cdn.net/business/48/products/gNooRB_61562514122e9_large.png', '2023/05/19 17:38:55', NULL, 5, 7, false),
  ('RES947COL', 'Hoja Color A4 x100 Husares', 5830, 'Surtidas: 4 Colores, 25 amarillo Comercial, 25 celeste Comercial, 25 verde Comercial, 25 rosa Comercial', 'https://tiendup.b-cdn.net/business/48/products/DY6KK0_649309ed88205_large.jpg', '2017/02/11 09:14:33', NULL, 5, 7, false),
  ('PAS1114OL', 'Pastel al Óleo Maped x24', 13290, 'Pack de 24 pasteles al óleo, colores brillantes, lavables, resistentes a la luz, cubrientes y fáciles de mezclar entre ellos.', 'https://tiendup.b-cdn.net/business/48/products/D8kBZg_5ec56cf2306ee_large.jpg', '2024/01/07 15:08:45', NULL, 5, 7, false),
  ('SKU123', 'Cardigan Strass Barceloneta', 50175, 'Cardigan de largo modular debajo de la cadera de calce recto y sin abotonadura en el acceso, con manga balloon. En hombros delanteros lleva piedras cosidas. Tajos laterales a modo de detalle. Material frio, sedoso, fino y elastico', 'https://http2.mlstatic.com/D_NQ_NP_889966-MLA69145010633_042023-O.webp', '2023/11/24', NULL, 2, 3, false),
  ('SKU456', 'Pantalón pinzas cremallera', 48300, 'Pantalón de tiro medio confeccionado con tejido en mezcla de viscosa. Cintura elástica. Detalle de pinzas en delantero. Cierre lateral con cremallera metálica', 'https://www.lto.com.ar/wp-content/uploads/2023/08/IMG_8199-1.jpg', '2022/09/10', NULL, 2, 3, false),
  ('SKU789', 'Celular Samsung Galaxy A04s 128GB White', 159999, 'El chip más rápido, potente e inteligente se encuentra en el Galaxy A04s. Cuenta con una batería de 5000 mAh que, junto con su pantalla y procesador de bajo consumo, te permitirá utilizar el smartphone durante todo el día.', 'https://images.fravega.com/f500/ef2bf5ced35e6d3a857c02b35f07bb16.jpg', '2023/12/16', NULL, 1, 5, false),
  ('SKU101', 'Parlante Bluetooth Sony PSB1000', 76000, 'El parlante Sony PSB1000 dispone de una potencia de salida de 45 watts. Utilízalo mediante tecnología Bluetooth 5.0. También dispone de entrada auxiliar y alimentación por puerto USB.', 'https://http2.mlstatic.com/D_NQ_NP_840554-MLA54896988843_042023-O.webp', '2024/01/05', NULL, 1, 1, false),
  ('SKU112', 'Cubrecama Queen Size Damero Hoja', 77990, 'Este cubrecama es ideal para quienes tienen poco tiempo y buscan practicidad, ya que son súper livianos y fáciles de limpiar, las manchas se eliminan rápidamente. Inspirate para vestir tu cama combinando los diseños y texturas que pensamos para vos esta temporada.', 'https://acdn.mitiendanube.com/stores/102/037/products/acolchado-fox-almendra-beige1-2cd4193af79679a05815580219384322-640-0.webp', '2023/10/08', NULL, 3, 4, false),
  ('MLA130', 'Juego de Sábanas Twin Size Línea Biotextil Sustentable', 44990, 'Este juego de sábanas es ideal para quienes tienen poco tiempo y buscan practicidad. Inspirate para vestir tu cama combinando los diseños y texturas que pensamos para vos esta temporada.', 'https://cuadrosdecorativos.com.ar/wp-content/uploads/2023/05/sabanas-Colores-1200--768x768.jpg.webp', '2023/10/18', NULL, 3, 4, false),
  ('MLA175', 'Ajedrez profesional Staunton Plastigal 160', 19990, 'Sumérgete en el mundo del ajedrez con el Ajedrez profesional Staunton Plastigal 160, un juego de estrategia clásico y desafiante que pondrá a prueba tu ingenio y habilidades tácticas.', 'https://tiotomar.vtexassets.com/arquivos/ids/217246-800-800?v=638195008614670000&width=800&height=800&aspect=true', '2023/11/23', NULL, 4, 2, false),
  ('MLA145', 'Juego De Memoria Con Luz Y Sonido Memo Star Duende Azul 7530', 9159, '¿Qué mejor plan para una tarde de lluvia que un juego de mesa? Con el Memo Disco Memo Star vas a crear divertidos recuerdos y pasar momentos inolvidables junto a tus amigos y amigas. Con este pasatiempo entretenido las risas están aseguradas.', 'https://http2.mlstatic.com/D_Q_NP_654622-MLA43714032077_102020-O.webp', '2023/09/21', NULL, 4, 2, false),
  ('3022160', 'Mooving Coloring Marcador Acrilico x60 - Acrylic Mode XL', 75000, 'Punta Redonda de 3,4 a 3,7mm, tinta a Base de agua, con filtro, excelente poder cubritivo, no traspasa el papel, secado rápido de tinta, no derrama la tinta, lavable con agua', 'https://tiendup.b-cdn.net/business/48/products/g3Xvb6_659829cbcdd71_large.jpg', '2023/09/21', NULL, 5, 7, false),
  ('CA4987', 'Carpeta A4 2x40 Mooving Chic - Welcome new ideas', 8500, 'Carpeta de 3 ganchos, variedad en diseños.', 'https://tiendup.b-cdn.net/business/48/products/Dn3BYN_656776d186335_large.jpg', '2023/09/21', NULL, 5, 7, false),
  ('TP25100', 'Cuaderno Escolar Exito 16x21 Cuadriculado Araña T-D x100hj', 8500, 'Papel de 100grs, liso, rayado y cuadriculado. Varios colores.', 'https://tiendup.b-cdn.net/business/48/products/p13AYg_5fda4c359c2ca_large.png', '2023/08/11', NULL, 5, 7, false),
  ('HP7L689', 'Harry Potter Y El Prisionero De Azkaban Ilustrado - Rowling', 61799, 'El Senor de las Tinieblas esta solo y sin amigos, abandonado por sus seguidores. Su vasallo ha estado encadenado doce anos. Hoy, antes de la medianoche, el vasallo se liberara e ira a reunirse con su amo', 'https://http2.mlstatic.com/D_NQ_NP_2X_719848-MLA26471665811_122017-F.webp', '2023/05/03', NULL, 6, 6, false),
  ('7CNT45', 'Muerte En La Vicaria (bolsillo) - Agatha Christie', 11300, 'Al encontrar el cuerpo sin vida del coronel Protheroe en el despacho del vicario, su segunda esposa y el párroco se convierten en los principales sospechosos, y después del dudoso resultado de las investigaciones, miss Marple considera que esa muerte beneficia a más de uno', 'https://http2.mlstatic.com/D_NQ_NP_2X_845428-MLA51392381006_092022-F.webp', '2023/06/09', NULL, 6, 6, false);

  INSERT INTO purchase_order(num_order, created_at, deadline, updated_at, total, status, description, supplier_id)
VALUES
  (1001, '2023-12-10', '2023-12-15', NULL, 29149, 1, 'Orden de compra #1001, ajedrez y juego de luces', 2),
  (1002, '2023-12-16', '2023-12-21', NULL, 146775, 0, 'Orden de compra #1002, 2 pantalones y un cardigan.', 3),
  (1003, '2024-01-02', '2024-01-07', NULL, 76000, 1, 'Orden de compra #1003,parlante Sony', 5),
  (1004, '2024-01-07', '2024-01-12', NULL, 122980, 0, 'Orden de compra #1004, juego de cama y cubrecama', 4),
  (1005, '2024-02-17', '2024-02-24', NULL, 100500, 1, 'Orden de compra #1005, 3 cuadernos y una unidad marcadores Mooving', 7),
  (1006, '2024-03-07', '2024-03-15', NULL, 61799, 0, 'Orden de compra #1006, libro Harry Potter', 6),
  (1007, '2024-01-02', '2024-01-07', NULL, 29196, 1, 'Orden de compra #1007, acolchado', 4);

  INSERT INTO items_details(price, amount, total, id_product, id_purchase_order)
VALUES
  (19990,1,19990,7,1),
  (9159,1,9159,8,1),
  (48300,2,96600,2,2),
  (50175,1,50175,1,2),
  (76000,1,76000,4,3),
  (44900,1,44900,6,4),
  (77900,1,77900,5,4),
  (8500,3,25000,11,5),
  (75000,1,75000,9,5),
  (61799,1,61799,12,6),
  (29196,1,29196,22,7);


  /*
  select * from items_details 
  order by id_product DESC;
  select * from products;

  select * from purchase_orders*/

  update purchase_orders set id_supplier = 4 where id = 7