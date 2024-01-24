export const products = [
    {
        id: 1,
        sku: "MLA123",
        supplier: {
            id: 3,
            code: '7GL89',
            business_name: 'Zara',
            category: "Indumentaria",
            website: "https://www.zara.com/ar/",
            phone_number: 2214568899,
            email: "zara@zara.com",
            address: {
                street: 'calle 8 entre 47 y 48',
                postal_code: '1900',
                city: 'La Plata',
                departament: 'Buenos Aires',
                country: 'Argentina'
            },
            tax_data: {
                cuit: '30-1234567-8',
                responsible_registered: "IVA Responsable Inscripto"
            },
            contact: {
                name: 'Victoria',
                lastname: 'Suárez',
                phone_number: 2216223344,
                email: 'prueba5@prueba.com',
                rol: 'Vendedor'
            },
            logo: "https://es.m.wikipedia.org/wiki/Archivo:Zara_Logo.svg"
        },
        category: {
            id: 2,
            name: "Ropa y calzado",
            created_at: "2024-01-14",
            updated_at: "2024-01-16",
            isDeleted: false
        },
        name: "CARDIGAN STRASS BARCELONETA",
        description: "Cardigan de largo modular debajo de la cadera de calce recto y sin abotonadura en el acceso, con manga balloon. En hombros delanteros lleva piedras cosidas. Tajos laterales a modo de detalle. Material frio, sedoso, fino y elastico",
        price: 50175,
        image: "https://http2.mlstatic.com/D_NQ_NP_889966-MLA69145010633_042023-O.webp"
    },
    {
        id: 2,
        sku: "MLA124",
        supplier: {
            id: 3,
            code: '7GL89',
            business_name: 'Zara',
            category: "Indumentaria",
            website: "https://www.zara.com/ar/",
            phone_number: 2214568899,
            email: "zara@zara.com",
            address: {
                street: 'calle 8 entre 47 y 48',
                postal_code: '1900',
                city: 'La Plata',
                departament: 'Buenos Aires',
                country: 'Argentina'
            },
            tax_data: {
                cuit: '30-1234567-8',
                responsible_registered: "IVA Responsable Inscripto"
            },
            contact: {
                name: 'Victoria',
                lastname: 'Suárez',
                phone_number: 2216223344,
                email: 'prueba5@prueba.com',
                rol: 'Administrativo'
            },
            logo: "https://es.m.wikipedia.org/wiki/Archivo:Zara_Logo.svg"
        },
        category: {
            id: 2,
            name: "Ropa y calzado",
            created_at: "2024-01-14",
            updated_at: "2024-01-16",
            isDeleted: false
        },
        name: "PANTALÓN PINZAS CREMALLERA",
        description: "Pantalón de tiro medio confeccionado con tejido en mezcla de viscosa. Cintura elástica. Detalle de pinzas en delantero. Cierre lateral con cremallera metálica",
        price: 48300,
        image: "https://www.lto.com.ar/wp-content/uploads/2023/08/IMG_8199-1.jpg"
    },
    {
        id: 3,
        sku: "MLA12",
        supplier: {
            id: 1,
            code: 'ABC123',
            business_name: 'Frávega',
            category: "Electro",
            website: "https://www.fravega.com/",
            phone_number: 2213456699,
            email: "fravega@fravega.com",
            address: {
                street: 'calle 8 entre 47 y 48',
                postal_code: '1900',
                city: 'La Plata',
                departament: 'Buenos Aires',
                country: 'Argentina'
            },
            tax_data: {
                cuit: '30-1234567-8',
                responsible_registered: "IVA Responsable Inscripto"
            },
            contact: {
                name: 'Juan',
                lastname: 'Pérez',
                phone_number: 2216223344,
                email: 'prueba@prueba.com',
                rol: 'Encargado de ventas'
            },
            logo: "https://cdn.freelogovectors.net/wp-content/uploads/2022/01/fravega-logo-freelogovectors.net_.png",
        },
        category: {
            id: 1,
            name: "Electrónica",
            created_at: "2024-01-14",
            updated_at: "2024-01-16",
            isDeleted: false
        },
        name: "Celular Samsung Galaxy A04s 128GB White",
        description: "El chip más rápido, potente e inteligente se encuentra en el Galaxy A04s. Cuenta con una batería de 5000 mAh que, junto con su pantalla y procesador de bajo consumo, te permitirá utilizar el smartphone durante todo el día.",
        price:  159999,
        image: "https://images.fravega.com/f500/ef2bf5ced35e6d3a857c02b35f07bb16.jpg"
    },
    {
        id: 4,
        sku: "MLA127",
        supplier: {
            id: 1,
            code: 'ABC123',
            business_name: 'Frávega',
            category: "Electro",
            website: "https://www.fravega.com/",
            phone_number: 2213456699,
            email: "fravega@fravega.com",
            address: {
                street: 'calle 8 entre 47 y 48',
                postal_code: '1900',
                city: 'La Plata',
                departament: 'Buenos Aires',
                country: 'Argentina'
            },
            tax_data: {
                cuit: '30-1234567-8',
                responsible_registered: "IVA Responsable Inscripto"
            },
            contact: {
                name: 'Juan',
                lastname: 'Pérez',
                phone_number: 2216223344,
                email: 'prueba@prueba.com',
                rol: 'Encargado de ventas'
            },
            logo: "https://cdn.freelogovectors.net/wp-content/uploads/2022/01/fravega-logo-freelogovectors.net_.png",
        },
        category: {
            id: 1,
            name: "Electrónica",
            created_at: "2024-01-14",
            updated_at: "2024-01-16",
            isDeleted: false
        },
        name: "Parlante Bluetooth Noblex PSB1000",
        description: "El parlante Noblex PSB1000 dispone de una potencia de salida de 45 watts. Utilízalo mediante tecnología Bluetooth 5.0. También dispone de entrada auxiliar y alimentación por puerto USB. ",
        price: 76000,
        image: "https://http2.mlstatic.com/D_NQ_NP_840554-MLA54896988843_042023-O.webp"
    },
    {
        id: 5,
        sku: "MLA129",
        supplier: {
            id: 4,
            code: 'A1001R',
            business_name: 'Arredo',
            category: "Blanquería",
            website: "https://www.arredo.com/ar/",
            phone_number: 1123456987,
            email: "arredo@arredo.com",
            address: {
                street: 'calle 18 nro 200',
                postal_code: '5000',
                city: 'Carlos Paz',
                departament: 'Córdoba',
                country: 'Argentina'
            },
            tax_data: {
                cuit: '30-1234567-8',
                responsible_registered: "Responsable Monotributo"
            },
            contact: {
                name: 'Juan',
                lastname: 'Pérez',
                phone_number: 2216223344,
                email: 'prueba5@prueba.com',
                rol: 'Vendedor'
            },
            logo: "https://arredo.vtexassets.com/assets/vtex.file-manager-graphql/images/4b4ab8f1-bf34-40bc-b407-ed13c82e340c___9b577355404364e334009aac3bd36d6e.svg"
        },
        category: {
            id: 3,
            name: "Blanquería",
            created_at: "2024-01-14",
            updated_at: "2024-01-16",
            isDeleted: false
        },
        name: "Cubrecama Queen Size Damero Hoja",
        description: "Este cubrecama es ideal para quienes tienen poco tiempo y buscan practicidad, ya que son súper livianos y fáciles de limpiar, las manchas se eliminan rápidamente. Inspirate para vestir tu cama combinando los diseños y texturas que pensamos para vos esta temporada.",
        price: 77990,
        image: "https://acdn.mitiendanube.com/stores/102/037/products/acolchado-fox-almendra-beige1-2cd4193af79679a05815580219384322-640-0.webp"
    },
    {
        id: 6,
        sku: "MLA130",
        supplier: {
            id: 4,
            code: 'A1001R',
            business_name: 'Arredo',
            category: "Blanquería",
            website: "https://www.arredo.com/ar/",
            phone_number: 1123456987,
            email: "arredo@arredo.com",
            address: {
                street: 'calle 18 nro 200',
                postal_code: '5000',
                city: 'Carlos Paz',
                departament: 'Córdoba',
                country: 'Argentina'
            },
            tax_data: {
                cuit: '30-1234567-8',
                responsible_registered: "Responsable Monotributo"
            },
            contact: {
                name: 'Juan',
                lastname: 'Pérez',
                phone_number: 2216223344,
                email: 'prueba5@prueba.com',
                rol: 'Vendedor'
            },
            logo: "https://arredo.vtexassets.com/assets/vtex.file-manager-graphql/images/4b4ab8f1-bf34-40bc-b407-ed13c82e340c___9b577355404364e334009aac3bd36d6e.svg"
        },
        category: {
            id: 3,
            name: "Blanquería",
            created_at: "2024-01-14",
            updated_at: "2024-01-16",
            isDeleted: false
        },
        name: "Juego de Sábanas Twin Size Línea Biotextil Sustentable",
        description: "Este cubrecama es ideal para quienes tienen poco tiempo y buscan practicidad, ya que son súper livianos y fáciles de limpiar, las manchas se eliminan rápidamente. Inspirate para vestir tu cama combinando los diseños y texturas que pensamos para vos esta temporada.",
        price: 44990,
        image: "https://cuadrosdecorativos.com.ar/wp-content/uploads/2023/05/sabanas-Colores-1200--768x768.jpg.webp"
    },
    {
        id: 7,
        sku: "MLA175",
        supplier: {
            id: 2,
            code: '456DFG',
            business_name: 'Hobby toys',
            category: "Juegos y Juguetes",
            website: "https://hobbytoys.com.ar/",
            phone_number: 22365789412,
            email: "hobbytoys@hobbytoys.com",
            address: {
                street: 'calle 39 entre 24 y 25',
                postal_code: '1900',
                city: 'La Plata',
                departament: 'Buenos Aires',
                country: 'Argentina'
            },
            tax_data: {
                cuit: '30-1234567-8',
                responsible_registered: "IVA no Responsable"
            },
            contact: {
                name: 'María',
                lastname: 'Rodriguez',
                phone_number: 2216223344,
                email: 'prueba3@prueba.com',
                rol: 'Gerente de ventas'
            },
            logo: "https://hobbytoys.com.ar/wp-content/themes/bootcommerce-child-main/img/logo.png"
        },
        category: {
            id: 4,
            name: "Juguetería",
            created_at: "2024-01-14",
            updated_at: "2024-01-16",
            isDeleted: false
        },
        name: "Ajedrez profesional Staunton Plastigal 160",
        description: "Sumérgete en el mundo del ajedrez con el Ajedrez profesional Staunton Plastigal 160, un juego de estrategia clásico y desafiante que pondrá a prueba tu ingenio y habilidades tácticas.",
        price: 19990,
        image: "https://tiotomar.vtexassets.com/arquivos/ids/217246-800-800?v=638195008614670000&width=800&height=800&aspect=true"
    },
    {
        id: 8,
        sku: "MLA145",
        supplier: {
            id: 2,
            code: '456DFG',
            business_name: 'Hobby toys',
            category: "Juegos y Juguetes",
            website: "https://hobbytoys.com.ar/",
            phone_number: 22365789412,
            email: "hobbytoys@hobbytoys.com",
            address: {
                street: 'calle 39 entre 24 y 25',
                postal_code: '1900',
                city: 'La Plata',
                departament: 'Buenos Aires',
                country: 'Argentina'
            },
            tax_data: {
                cuit: '30-1234567-8',
                responsible_registered: "IVA no Responsable"
            },
            contact: {
                name: 'María',
                lastname: 'Rodriguez',
                phone_number: 2216223344,
                email: 'prueba3@prueba.com',
                rol: 'Encargado de ventas'
            },
            logo : "https://hobbytoys.com.ar/wp-content/themes/bootcommerce-child-main/img/logo.png"
        },
        category: {
            id: 4,
            name: "Juguetería",
            created_at: "2024-01-14",
            updated_at: "2024-01-16",
            isDeleted: false
        },
        name: "Juego De Memoria Con Luz Y Sonido Memo Star Duende Azul 7530",
        description: "¿Qué mejor plan para una tarde de lluvia que un juego de mesa? Con el Memo Disco Memo Star vas a crear divertidos recuerdos y pasar momentos inolvidables junto a tus amigos y amigas. Con este pasatiempo entretenido las risas están aseguradas.",
        price: 9159,
        image: "https://http2.mlstatic.com/D_Q_NP_654622-MLA43714032077_102020-O.webp"
    }
];
