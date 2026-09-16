import { Injectable } from '@angular/core';

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface Challenge {
  problem: string;
  solution: string;
}

export interface Project {
  id: number;
  title: string;
  slug: string;
  subtitle: string;
  description: string;
  fullDescription: string;
  technologies: string[];
  image: string;
  images: string[];
  link?: string;
  github?: string;
  info?: string;
  category: string;
  categoryName: string;
  date?: string;
  features: Feature[];
  challenges?: Challenge[];
  differentiators: string[];
  impact: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProjectDataService {
  private _projects: Project[] = [
    {
      id: 1,
      title: 'Trazabilidad de Medicamentos',
      slug: 'trazabilidad-medicamentos',
      subtitle: 'Sistema de Gestión de Depósito Descartable y Soluciones — Warehouse & Inventory Management System for Medical Supplies',
      description: 'Gestión de solicitudes de medicamentos en un almacén farmacéutico.',
      fullDescription: 'Plataforma web corporativa para la gestión integral del ciclo de solicitud, autorización, preparación y recepción de insumos descartables y soluciones hospitalarias para Henry Moore / Oncomed Reno SA. Digitaliza y automatiza el flujo completo de solicitud de materiales descartables y soluciones para una droguería oncológica, reemplazando procesos manuales con un workflow de 4 etapas (Solicitar, Autorizar, Preparar, Recibir), notificaciones por email, trazabilidad de lotes y reportes de egreso.',
      technologies: ['PHP', 'MySQL', 'Bootstrap', 'SQL Server', 'JavaScript', 'jQuery', 'DataTables', 'PHPMailer'],
      image: 'assets/img/Proyectos/Trazabilidad de medicamento/trazabilidad1.png',
      images: [
        'assets/img/Proyectos/Trazabilidad de medicamento/trazabilidad1.png',
        'assets/img/Proyectos/Trazabilidad de medicamento/trazabilidad2.png',
        'assets/img/Proyectos/Trazabilidad de medicamento/trazabilidad3.png',
        'assets/img/Proyectos/Trazabilidad de medicamento/trazabilidad4.png',
        'assets/img/Proyectos/Trazabilidad de medicamento/trazabilidad5.png',
        'assets/img/Proyectos/Trazabilidad de medicamento/trazabilidad6.png'
      ],
      info: '/proyecto/trazabilidad-medicamentos',
      category: 'web',
      categoryName: 'Web App',
      date: '2023',
      features: [
        { icon: 'uil uil-clipboard-notes', title: 'Solicitud de Artículos', description: 'Catálogo con stock en tiempo real vía Linked Server, selección de tipo de entrega y validación de stock.' },
        { icon: 'uil uil-check-circle', title: 'Autorización Inteligente', description: 'Dashboard unificado con semáforo visual, descuento inteligente de stock por lote (FIFO) y trazabilidad completa.' },
        { icon: 'uil uil-box', title: 'Preparación y Recepción', description: 'Flujo completo de preparación con registro de usuario y timestamp, más confirmación de recepción por el solicitante.' },
        { icon: 'uil uil-envelope', title: 'Notificaciones Email', description: 'Alertas automáticas en cada etapa: creación, autorización con detalle de lote, recordatorios de recepción y preparación.' },
        { icon: 'uil uil-database', title: 'Doble Base de Datos', description: 'Integración SQL Server + MySQL vía Linked Server con OPENQUERY para stock en tiempo real desde sistema legacy.' },
        { icon: 'uil uil-file-alt', title: 'Reportes y Trazabilidad', description: 'Planilla Técnica de Stock, Reporte de Egreso, listado de remitos con trazabilidad por lote, vencimiento y auditoría de operaciones.' }
      ],
      challenges: [
        { problem: 'Stock en dos bases de datos distintas (SQL Server + MySQL) sin sincronización en tiempo real.', solution: 'Implementación de Linked Server con OPENQUERY para consultar MySQL desde SQL Server en tiempo real, garantizando stock actualizado.' },
        { problem: 'Descuento de inventario por lote respetando FIFO (First In, First Out) para cumplimiento de trazabilidad.', solution: 'Algoritmo que itera sobre cada lote, descuenta del más antiguo primero y registra en TrazabilidadProductos con lote, vencimiento y remito.' },
        { problem: 'Notificaciones en cada etapa del workflow sin interrumpir el flujo de trabajo.', solution: 'PHPMailer con SMTP autenticado, destinatarios dinámicos según la etapa del proceso y recordatorios automáticos.' }
      ],
      differentiators: [
        'Integración bidireccional SQL Server ↔ MySQL via Linked Server con stock en tiempo real desde sistema legacy',
        'Descuento inteligente de inventario por lote (FIFO) con trazabilidad completa',
        'Workflow completo de 4 etapas con notificaciones automáticas por email',
        'Sistema 100% funcional en producción real en una droguería oncológica',
        'Trazabilidad total con auditoría de operaciones para compliance',
        'Sin frameworks ni librerías externas pesadas — código 100% controlado'
      ],
      impact: 'Sistema transaccional crítico en producción que automatiza el flujo completo de solicitud de insumos hospitalarios, eliminando procesos manuales y garantizando trazabilidad total de medicamentos oncológicos.'
    },
    {
      id: 2,
      title: 'Facturación Oncomed',
      slug: 'facturacion-oncomed',
      subtitle: 'Sistema de Gestión de Liquidación y Facturación para Farmacias — Plataforma web corporativa para el control, búsqueda y reporte de remitos',
      description: 'Sistema de control y generación de informes para facturación.',
      fullDescription: 'Sistema interno para administrar la facturación y liquidación de remitos (comprobantes de entrega) entre ONCOMED y su red de farmacias asociadas. Permite buscar comprobantes, marcar como recibidos/liquidados, editar valores de liquidación en línea, y generar reportes exportables a Excel con filtros avanzados por fecha, farmacia y estado de liquidación.',
      technologies: ['PHP', 'MySQL', 'JavaScript', 'SQL Server', 'Bootstrap', 'jQuery', 'DataTables', 'SheetJS'],
      image: 'assets/img/Proyectos/Facturación Oncomed/Screenshot_1.png',
      images: [
        'assets/img/Proyectos/Facturación Oncomed/Screenshot_1.png',
        'assets/img/Proyectos/Facturación Oncomed/Screenshot_2.png',
        'assets/img/Proyectos/Facturación Oncomed/Screenshot_3.png'
      ],
      info: '/proyecto/facturacion-oncomed',
      category: 'web',
      categoryName: 'Web App',
      date: '2023',
      features: [
        { icon: 'uil uil-search', title: 'Búsqueda de Remitos', description: 'Búsqueda instantánea por número de remito con AJAX, resultados en DataTable interactiva con paginación.' },
        { icon: 'uil uil-check', title: 'Actualización de Recibido', description: 'Marcar/desmarcar remitos como recibidos con un clic. Manejo transaccional SQL con registro automático de fecha.' },
        { icon: 'uil uil-edit-alt', title: 'Edición Inline', description: 'Edición de valores liquidados directamente en tabla con contenteditable + fetch API + persistencia JSON.' },
        { icon: 'uil uil-file-download-alt', title: 'Exportación Excel', description: 'Reportes exportables a .xlsx usando SheetJS directamente desde el navegador, sin backend intermedio.' },
        { icon: 'uil uil-filter', title: 'Reportes Avanzados', description: 'Filtros combinados: rango de fechas, farmacia, estado de liquidación con resultados en tiempo real.' },
        { icon: 'uil uil-shield', title: 'Autenticación Segura', description: 'Login con sesiones PHP, control de acceso por usuario activo, menú contextual y ayuda PDF integrada.' }
      ],
      challenges: [
        { problem: 'Integración con 4 bases de datos SQL Server legacy del ERP corporativo sin documentación.', solution: 'Consultas cross-database con sintaxis [base].dbo.[tabla], JOINs entre servidores y CTE con ROW_NUMBER() para ranking de productos.' },
        { problem: 'Edición inline persistente sin formularios — experiencia similar a Excel online.', solution: 'Contenteditable + evento onblur + fetch API con endpoint POST y respuesta JSON. Transacciones SQL con BEGIN/COMMIT/ROLLBACK.' },
        { problem: 'Exportación a Excel sin poder instalar librerías PHP en servidor XAMPP compartido.', solution: 'SheetJS (xlsx) del lado del cliente genera el archivo .xlsx directamente en el navegador a partir de datos HTML.' }
      ],
      differentiators: [
        'Sistema en producción real en el datacenter de ONCOMED Reno SA — no es proyecto académico',
        'Integración con ERP legacy corporativo de 4 bases de datos SQL Server',
        'Edición inline tipo Excel con contenteditable + persistencia AJAX (SPA-like sobre PHP tradicional)',
        'CTE con ROW_NUMBER() para ranking y eliminación de duplicados en reportes',
        'Manejo transaccional SQL en operaciones críticas garantizando integridad de datos',
        'Solución 100% intranet sin dependencia cloud — para entornos corporativos aislados'
      ],
      impact: 'Reducción del tiempo de conciliación de remitos de horas a minutos. El equipo administrativo ahora cuenta con visibilidad en tiempo real del estado de entregas y valores pendientes de liquidación.'
    },
    {
      id: 3,
      title: 'Pokedex',
      slug: 'pokedex',
      subtitle: 'Aplicación Angular para Exploración de Pokémon en Tiempo Real — Plataforma web de consulta usando PokeAPI',
      description: 'Aplicación que consume la API de Pokémon usando Angular.',
      fullDescription: 'Single Page Application construida con Angular CLI 15.1.6 que permite buscar, filtrar y visualizar información detallada de más de 1000 Pokémon. Consume la PokeAPI v2 para ofrecer datos actualizados, estadísticas base, evoluciones, habilidades y sprites oficiales. Implementa arquitectura de componentes reutilizables con servicios observables (RxJS), tipado estricto con TypeScript y diseño responsive mobile-first con SCSS.',
      technologies: ['Angular', 'TypeScript', 'REST API', 'SCSS', 'RxJS', 'HTML5'],
      image: 'assets/img/Proyectos/Pokedex/pokedex1.jpeg',
      images: [
        'assets/img/Proyectos/Pokedex/pokedex1.jpeg',
        'assets/img/Proyectos/Pokedex/pokedex2.png',
        'assets/img/Proyectos/Pokedex/pokedex3.png',
        'assets/img/Proyectos/Pokedex/pokedex4.png',
        'assets/img/Proyectos/Pokedex/pokedex5.png',
        'assets/img/Proyectos/Pokedex/pokedex6.png'
      ],
      link: 'https://luisron27.github.io/Pokedex/',
      github: 'https://github.com/luisron27/Pokedex',
      info: '/proyecto/pokedex',
      category: 'frontend',
      categoryName: 'Front-End',
      date: '2023',
      features: [
        { icon: 'uil uil-list-ul', title: 'Listado de Pokémon', description: 'Listado completo con imagen, nombre, tipo y estadísticas básicas en grid responsivo.' },
        { icon: 'uil uil-search', title: 'Búsqueda en Tiempo Real', description: 'Búsqueda por nombre o ID con debounce para evitar peticiones excesivas a la API.' },
        { icon: 'uil uil-filter', title: 'Filtrado por Tipo', description: 'Filtro dinámico por tipo elemental (agua, fuego, planta, eléctrico, etc.) con selectores visuales.' },
        { icon: 'uil uil-eye', title: 'Vista Detallada', description: 'Stats completos (HP, ataque, defensa, velocidad), altura, peso, habilidades y cadenas de evolución.' },
        { icon: 'uil uil-images', title: 'Sprites Oficiales', description: 'Sprites frontal, trasero, shiny y variantes femeninas con transiciones suaves.' },
        { icon: 'uil uil-mobile-android', title: 'Diseño Responsive', description: '3-4 columnas en desktop, 2 en tablet, 1 en móvil con Flexbox/Grid y media queries.' }
      ],
      challenges: [
        { problem: 'Múltiples llamadas encadenadas a PokeAPI para obtener cadena de evolución completa.', solution: 'Uso de switchMap de RxJS para encadenar observables y evitar callback hell, con manejo de errores por tipo de Pokémon.' },
        { problem: 'Rendimiento en listados grandes con más de 1000 Pokémon.', solution: 'Paginación virtual con trackBy en ngFor, lazy loading de imágenes y debounce en búsqueda.' }
      ],
      differentiators: [
        'Arquitectura Angular con componentes reutilizables y servicios singleton',
        'Consumo eficiente de API REST pública con RxJS (Observables, Subjects, operadores map/switchMap/debounceTime)',
        'Diseño mobile-first con SCSS, Flexbox/Grid y animaciones CSS',
        'Tipado estricto TypeScript con interfaces para modelos de datos de la API',
        'Manejo completo de errores con loading spinners para feedback visual'
      ],
      impact: 'Aplicación frontend moderna que demuestra dominio de Angular, consumo de APIs REST, programación reactiva con RxJS y diseño responsive, consumiendo datos de la API pública más grande del ecosistema Pokémon.'
    },
    {
      id: 4,
      title: 'E-commerce',
      slug: 'ecommerce',
      subtitle: 'Interfaz de Tienda Online con HTML5, CSS3, JavaScript y Bootstrap — Plataforma de comercio electrónico con diseño moderno',
      description: 'Diseño de tienda online responsive con Bootstrap.',
      fullDescription: 'Frontend completo de una tienda online que permite explorar productos por categorías, añadir items al carrito, gestionar cantidades y simular el proceso de checkout. Desarrollado con HTML5 semántico, CSS3 personalizado con Bootstrap 5 para diseño responsivo, y JavaScript ES6+ para toda la lógica interactiva: filtrado dinámico, actualización del carrito, persistencia con localStorage y validación de formularios.',
      technologies: ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript', 'localStorage'],
      image: 'assets/img/Proyectos/Ecommerce/Screenshot_1.png',
      images: [
        'assets/img/Proyectos/Ecommerce/Screenshot_1.png',
        'assets/img/Proyectos/Ecommerce/Screenshot_2.png',
        'assets/img/Proyectos/Ecommerce/Screenshot_3.png',
        'assets/img/Proyectos/Ecommerce/Screenshot_4.png',
        'assets/img/Proyectos/Ecommerce/Screenshot_5.png',
        'assets/img/Proyectos/Ecommerce/Screenshot_6.png'
      ],
      info: '/proyecto/ecommerce',
      link: 'https://ecommercetienda2.netlify.app/',
      github: 'https://github.com/LuisRon27/E-commerce',
      category: 'frontend',
      categoryName: 'Front-End',
      date: '2023',
      features: [
        { icon: 'uil uil-store', title: 'Catálogo de Productos', description: 'Visualización en grid responsivo con cards Bootstrap mostrando imagen, nombre, precio y botón de compra.' },
        { icon: 'uil uil-shopping-cart-alt', title: 'Carrito Interactivo', description: 'Carrito lateral/modal con items, cantidades ajustables, precios y total calculado en tiempo real.' },
        { icon: 'uil uil-search', title: 'Búsqueda y Filtros', description: 'Campo de búsqueda y filtros por categoría con respuesta dinámica vía eventos JavaScript.' },
        { icon: 'uil uil-database', title: 'Persistencia Local', description: 'Carrito guardado en localStorage que persiste al recargar la página.' },
        { icon: 'uil uil-check-circle', title: 'Checkout Simulado', description: 'Formulario de datos de envío con validación JavaScript y modal de confirmación.' },
        { icon: 'uil uil-mobile-android', title: 'Diseño Responsivo', description: 'Bootstrap garantiza adaptación a móvil, tablet y escritorio sin media queries adicionales.' }
      ],
      challenges: [
        { problem: 'Mantener el carrito sincronizado entre múltiples interacciones del usuario.', solution: 'Arquitectura de datos centralizada con array en memoria + localStorage, actualización reactiva del DOM con event delegation.' },
        { problem: 'Lograr diseño profesional y responsivo en tiempo récord.', solution: 'Bootstrap 5 como framework UI con sistema de grid de 12 columnas y componentes preconstruidos, personalizados con CSS propio.' }
      ],
      differentiators: [
        'Integración Bootstrap 5 + JavaScript vanilla sin jQuery',
        'Persistencia completa del carrito con localStorage',
        'Arquitectura MVC implícita con separación de responsabilidades',
        'Deploy en Netlify con CDN automático',
        'Cero dependencias backend — 100% frontend estático desplegable'
      ],
      impact: 'Tienda online funcional construida en 2 semanas demostrando capacidad de integración de frameworks CSS con lógica nativa JavaScript para una experiencia de compra completa.'
    },
    {
      id: 5,
      title: 'Gestión de Librería',
      slug: 'gestion-libreria',
      subtitle: 'Sistema de Gestión de Librería — Aplicación de Escritorio con VB.NET y SQL Server',
      description: 'Sistema de gestión de biblioteca con VB.NET y SQL Server.',
      fullDescription: 'Aplicación de escritorio tipo Cliente-Servidor desarrollada en VB.NET con Windows Forms y SQL Server. Permite gestionar libros, ventas, clientes, proveedores y usuarios con dos perfiles de acceso (ADMIN y USER). Sistema completo de negocio para una librería física manejando transacciones, inventario, reportes y control de acceso.',
      technologies: ['VB.NET', 'SQL Server', 'Windows Forms', 'ADO.NET', 'Crystal Reports'],
      image: 'assets/img/Proyectos/bookshop/bookshop2.png',
      images: [
        'assets/img/Proyectos/bookshop/bookshop1.png',
        'assets/img/Proyectos/bookshop/bookshop2.png',
        'assets/img/Proyectos/bookshop/bookshop3.png'
      ],
      info: '/proyecto/gestion-libreria',
      github: 'https://github.com/LuisRon27/Book_Shop_Management-System',
      category: 'desktop',
      categoryName: 'Desktop',
      date: '2022',
      features: [
        { icon: 'uil uil-user', title: 'Autenticación por Roles', description: 'Login con roles ADMIN y USER, sesiones activas y control de acceso granular.' },
        { icon: 'uil uil-book-open', title: 'Gestión de Libros', description: 'ABM completo con título, autor, editorial, ISBN, precio, stock y ubicación.' },
        { icon: 'uil uil-users-alt', title: 'Gestión de Clientes', description: 'Registro de clientes con datos de contacto e historial de compras.' },
        { icon: 'uil uil-shopping-cart', title: 'Punto de Venta', description: 'Interfaz POS con búsqueda de libros, carrito, descuentos y generación de comprobante.' },
        { icon: 'uil uil-chart-bar', title: 'Reportes', description: 'Ventas por período, productos más vendidos, clientes frecuentes, ganancias y stock mínimo.' },
        { icon: 'uil uil-database', title: 'Control de Inventario', description: 'Actualización automática de stock al vender, alerta de stock mínimo y gestión de proveedores.' }
      ],
      challenges: [
        { problem: 'Mantener consistencia transaccional en operaciones de venta (cabecera + detalle + stock).', solution: 'Uso de SqlTransaction para operaciones atómicas: inserción de cabecera, detalles y actualización de stock en una sola transacción.' },
        { problem: 'Arquitectura legacy sin framework ORM.', solution: 'Implementación de capa de datos con ADO.NET y procedimientos almacenados en SQL Server para seguridad y rendimiento.' }
      ],
      differentiators: [
        'Sistema completo POS + inventario + clientes + reportes en una sola aplicación',
        'Roles de usuario con permisos diferenciados',
        'Procedimientos almacenados para operaciones críticas',
        'Backups de base de datos desde la propia aplicación',
        'Bitácora de actividades para auditoría'
      ],
      impact: 'Solución integral para librería física que reemplazó hojas de cálculo y cuadernos, automatizando inventario, ventas y reportes con reducción de mermas del 90%.'
    },
    {
      id: 6,
      title: 'Gestión de Concesionaria',
      slug: 'gestion-concesionaria',
      subtitle: 'Sistema de Gestión Automotriz — Plataforma de Administración para Concesionaria con VB.NET y SQL Server',
      description: 'Sistema para gestión de concesionaria con VB.NET.',
      fullDescription: 'Aplicación de escritorio Cliente-Servidor desarrollada en VB.NET con Windows Forms y SQL Server para la gestión integral de una concesionaria de automóviles. Administra el ciclo de vida completo: flota de vehículos (0km y usados), clientes, ventas, taller de reparaciones y control de stock de repuestos. Incluye autenticación por usuarios, reportes, cancelaciones/bajas lógicas y lógica transaccional compleja.',
      technologies: ['VB.NET', 'SQL Server', 'Windows Forms', 'ADO.NET', 'Crystal Reports'],
      image: 'assets/img/Proyectos/SudesteAutomotores/sudeste1.png',
      images: [
        'assets/img/Proyectos/SudesteAutomotores/sudeste1.png',
        'assets/img/Proyectos/SudesteAutomotores/sudeste2.png',
        'assets/img/Proyectos/SudesteAutomotores/sudeste3.png'
      ],
      info: '/proyecto/gestion-concesionaria',
      github: 'https://github.com/LuisRon27/SudesteAutomotores',
      category: 'desktop',
      categoryName: 'Desktop',
      date: '2022',
      features: [
        { icon: 'uil uil-car', title: 'Gestión de Vehículos', description: 'Catálogo completo con marca, modelo, año, precio, kilometraje, estado y tipo de combustible.' },
        { icon: 'uil uil-users-alt', title: 'Gestión de Clientes', description: 'ABM de clientes con historial de compras y datos de contacto.' },
        { icon: 'uil uil-wrench', title: 'Taller y Reparaciones', description: 'Órdenes de reparación vinculadas a vehículos con repuestos, mano de obra y estados.' },
        { icon: 'uil uil-box', title: 'Stock de Repuestos', description: 'Control de inventario de autopartes con alerta de stock mínimo vinculado a reparaciones.' },
        { icon: 'uil uil-file-alt', title: 'Reportes Gerenciales', description: 'Vehículos vendidos por período, reparaciones comunes, stock bajo mínimo y clientes frecuentes.' },
        { icon: 'uil uil-trash-alt', title: 'Bajas Lógicas', description: 'Cancelación de registros con soft delete preservando historial para auditoría.' }
      ],
      challenges: [
        { problem: 'Datos inconsistentes entre departamentos (ventas, taller, stock) por falta de sistema unificado.', solution: 'Base de datos centralizada SQL Server con relaciones entre módulos: cada vehículo tiene trazabilidad desde ingreso hasta venta/taller.' },
        { problem: 'Múltiples formularios con lógica de negocio compleja.', solution: 'Módulo global compartido (ModuloSistema.vb) con variables de sesión y funciones reutilizables de conexión a BD.' }
      ],
      differentiators: [
        'Cobertura completa del negocio automotriz: ventas + taller + repuestos',
        'Soft delete para auditoría y trazabilidad de cambios',
        'Reportes con Crystal Reports integrados',
        'Módulo global compartido para consistencia跨 formularios',
        'Más de 15 formularios especializados por funcionalidad'
      ],
      impact: 'Sistema integral que unificó la información de una concesionaria eliminando datos inconsistentes entre departamentos, con control total de stock, ventas más rápidas y reportes gerenciales automatizados.'
    },
    {
      id: 7,
      title: 'Agenda Médica - William Osler',
      slug: 'agenda-medica',
      subtitle: 'Sistema de Gestión de Agenda Médica Corporativa — Full-Stack .NET 10 + React 19 + SQL Server',
      description: 'Sistema corporativo de agenda médica con turnos online, gestión de pacientes, múltiples roles y reportes PDF.',
      fullDescription: 'Plataforma integral de turnos médicos, administración de pacientes y gestión de agenda profesional para la obra social y centro médico William Osler. Solución on-premise con arquitectura desacoplada, autenticación JWT multi-rol (Médico, Secretaria, Sistema), 31 tablas normalizadas, 20 controladores con más de 50 endpoints, reportes dinámicos PDF con QuestPDF, panel de administración en tiempo real y auditoría completa con Serilog.',
      technologies: ['.NET 10', 'React 19', 'TypeScript', 'SQL Server', 'Entity Framework', 'JWT', 'QuestPDF'],
      image: 'assets/img/Proyectos/Agenda Medica/agenda1.png',
      images: [
        'assets/img/Proyectos/Agenda Medica/agenda1.png',
        'assets/img/Proyectos/Agenda Medica/agenda2.png',
        'assets/img/Proyectos/Agenda Medica/agenda3.png',
        'assets/img/Proyectos/Agenda Medica/agenda4.png'
      ],
      info: '/proyecto/agenda-medica',
      category: 'fullstack',
      categoryName: 'Full-Stack',
      date: '2025',
      features: [
        { icon: 'uil uil-shield', title: 'Autenticación JWT', description: 'Login con tokens de 30 días, 3 roles con claims-based authorization y políticas personalizadas.' },
        { icon: 'uil uil-calendar-alt', title: 'Gestión de Turnos', description: '6 estados (Libre a Atendido), flujo Llegada→Ingreso→Salida, sobreturnos y control de concurrencia con RowVersion.' },
        { icon: 'uil uil-eye', title: 'Agenda Diaria', description: 'Grid profesional × horario, filtros combinados, estadísticas en tiempo real, toggles por estado y paginación server-side.' },
        { icon: 'uil uil-users-alt', title: 'Gestión de Pacientes', description: 'CRUD con búsqueda avanzada, coberturas médicas múltiples, datos demográficos e historial de turnos.' },
        { icon: 'uil uil-sitemap', title: 'Catálogos Dinámicos', description: 'Profesionales, especialidades, entidades de salud, consultorios, diagnósticos OMS y tablas geográficas.' },
        { icon: 'uil uil-file-download-alt', title: 'Reportes PDF', description: 'Reportes descargables con QuestPDF, logo corporativo y diseño profesional.' }
      ],
      challenges: [
        { problem: 'Gestionar concurrencia en turnos médicos sin bloqueos de base de datos.', solution: 'RowVersion (optimistic concurrency) en entidad Turno con manejo de conflictos vía ApiResponse<T>.' },
        { problem: 'Arquitectura frontend escalable para 5 páginas con lógica de negocio compleja.', solution: 'Feature-Sliced Design con Zustand para estado global, TanStack Query para datos de servidor y lazy loading.' },
        { problem: 'Compatibilidad con IIS para despliegue on-premise.', solution: 'HashRouter en React Router para compatibilidad con servidores IIS sin configuraciones especiales.' }
      ],
      differentiators: [
        '.NET 10 + React 19 últimas versiones estables en producción real',
        'Arquitectura enterprise con Feature-Sliced Design y patrones probados',
        'Autenticación AD + JWT con políticas de claims para seguridad corporativa',
        'Background jobs automáticos para apertura mensual de agendas',
        'PWA con version checking automático para UX tipo SaaS en entorno on-premise',
        'Control de concurrencia optimista con RowVersion en operaciones críticas'
      ],
      impact: 'Plataforma corporativa que modernizó la gestión de turnos médicos eliminando procesos manuales, con arquitectura enterprise y tecnologías de punta en producción real para una institución de salud.'
    },
    {
      id: 8,
      title: 'ChatBot Inteligente para WhatsApp',
      slug: 'chatbot-whatsapp',
      subtitle: 'ChatBot Automatizado para WhatsApp con IA Gemini — Automatización de atención al cliente 24/7',
      description: 'ChatBot automatizado con IA Gemini para atención al cliente 24/7.',
      fullDescription: 'Implementación de un ChatBot inteligente para WhatsApp que combina n8n para automatización de flujos con los modelos de IA Gemini de Google. Integrado con la API de WhatsApp Business para recepción y envío de mensajes, conexión a sistemas de inventario y CRM para respuestas en tiempo real. Diseñado para una zapatería retail que enfrentaba alta demanda de consultas, tiempos de respuesta lentos y pérdida de ventas fuera del horario comercial.',
      technologies: ['n8n', 'Gemini AI', 'WhatsApp API', 'MySQL', 'Google Cloud', 'JavaScript'],
      image: 'assets/img/Proyectos/chatbot/chat bot.webp',
      images: [
        'assets/img/Proyectos/chatbot/chatbot1.webp',
        'assets/img/Proyectos/chatbot/chat bot.webp'
      ],
      info: '/proyecto/chatbot-whatsapp',
      category: 'ai',
      categoryName: 'AI & Automation',
      date: '2025',
      features: [
        { icon: 'uil uil-brain', title: 'Procesamiento con IA', description: 'Reconocimiento de intenciones, extracción de entidades (tallas, colores, modelos) y clasificación automática por urgencia.' },
        { icon: 'uil uil-whatsapp', title: 'Integración WhatsApp', description: 'Conexión directa con WhatsApp Business API para recepción y envío automatizado de mensajes.' },
        { icon: 'uil uil-box', title: 'Consulta de Inventario', description: 'Verificación en tiempo real de disponibilidad de productos con conexión a base de datos.' },
        { icon: 'uil uil-map-pin', title: 'Seguimiento de Pedidos', description: 'Estado de envíos y tiempos de entrega consultados directamente del sistema de logística.' },
        { icon: 'uil uil-clock', title: 'Soporte 24/7', description: 'Respuestas inmediatas fuera del horario comercial, eliminando pérdida de ventas por falta de atención.' },
        { icon: 'uil uil-sliders-v-alt', title: 'Flujos Conversacionales', description: 'Diálogos naturales diseñados para guiar al cliente según su intención: consultas, compras o reclamos.' }
      ],
      challenges: [
        { problem: 'Altos tiempos de respuesta (hasta 24h en temporada alta) e información inconsistente entre vendedores.', solution: 'ChatBot con IA Gemini que interpreta lenguaje natural y responde instantáneamente con información consistente.' },
        { problem: 'Incapacidad para escalar el servicio al cliente fuera del horario comercial.', solution: 'Automatización 24/7 con n8n orquestando flujos de conversación, consultas a base de datos y escalamiento a humanos cuando es necesario.' }
      ],
      differentiators: [
        'IA Gemini para interpretación avanzada de lenguaje natural con detección de regionalismos',
        'Integración completa con WhatsApp Business API',
        'Base de datos en tiempo real para consultas de inventario precisas',
        'Flujos conversacionales diseñados para experiencia natural del cliente',
        'Automatización sin intervención humana para consultas rutinarias'
      ],
      impact: 'Transformación digital del servicio al cliente de una zapatería retail, eliminando tiempos de espera, garantizando información consistente y habilitando ventas 24/7 sin intervención humana.'
    },
    {
      id: 9,
      title: 'Zello - Plataforma de Fidelización',
      slug: 'zello-fidelizacion',
      subtitle: 'Plataforma SaaS Multi-empresa de Fidelización con Recompensas, QR y Dashboard en Tiempo Real',
      description: 'Plataforma SaaS multi-empresa de recompensas con códigos QR.',
      fullDescription: 'Zello es una plataforma web SaaS de fidelización de clientes diseñada para múltiples empresas. Cada negocio registra las visitas de sus clientes mediante códigos QR únicos, acumulan puntos y canjean recompensas. Incluye panel SuperAdmin para gestionar suscripciones, contratos, pagos y servicios con extensión inteligente automática. Clientes acceden por Google Sign-In y ven su progreso en un portal unificado.',
      technologies: ['PHP', 'MySQL', 'Google OAuth', 'JavaScript', 'Bootstrap', 'PHPMailer', 'endroid/qr-code'],
      image: 'assets/img/Proyectos/zello/zello1.png',
      images: [
        'assets/img/Proyectos/zello/zello1.png',
        'assets/img/Proyectos/zello/zello2.png',
        'assets/img/Proyectos/zello/zello3.png',
        'assets/img/Proyectos/zello/zello4.png',
        'assets/img/Proyectos/zello/zello5.png',
        'assets/img/Proyectos/zello/zello6.png'
      ],
      info: '/proyecto/zello-fidelizacion',
      link: 'https://zello.com.ar/',
      category: 'web',
      categoryName: 'Web App',
      date: '2025',
      features: [
        { icon: 'uil uil-google', title: 'Google Sign-In', description: 'Autenticación OAuth 2.0 con Google Identity Services para clientes sin registro manual.' },
        { icon: 'uil uil-qrcode-scan', title: 'Códigos QR Únicos', description: 'Token SHA-256 por cliente+empresa con generación de QR vía endroid/qr-code.' },
        { icon: 'uil uil-chart-line', title: 'Dashboard con KPIs', description: 'Panel SuperAdmin y de empresa con tarjetas de métricas, tendencias y alertas de contrato.' },
        { icon: 'uil uil-credit-card', title: 'Gestión de Pagos', description: 'Facturación recurrente automática con detección de vencimiento y 5 casos de extensión inteligente.' },
        { icon: 'uil uil-envelope', title: 'Notificaciones Email', description: '18 templates HTML con PHPMailer para bienvenida, visitas, promos, facturas y reportes.' },
        { icon: 'uil uil-schedule', title: 'Cron Jobs Automatizados', description: 'Automatizaciones: notificaciones a clientes inactivos, reportes semanales y generación de facturas.' }
      ],
      challenges: [
        { problem: 'Autenticación unificada para clientes sin fricción.', solution: 'Integración con Google Identity Services con botón dinámico que alterna registro/login sin recargar página.' },
        { problem: 'Identificación del cliente en punto de venta sin app móvil.', solution: 'Código QR único por cliente+empresa con token SHA-256, escaneable desde cualquier navegador con cámara.' },
        { problem: 'Gestión de suscripciones con extensiones automáticas y múltiples casos de negocio.', solution: 'Algoritmo con 5 casos (vencimiento próximo, vencido, futuro, periodo no coincide, cambio de plan) dentro de transacción ACID.' }
      ],
      differentiators: [
        'SaaS multi-empresa completo en PHP nativo sin frameworks ni sobreingeniería',
        'Sin necesidad de app móvil — todo funciona desde el navegador con escáner QR',
        'Google Sign-In como único método de registro para máxima reducción de fricción',
        'Algoritmo inteligente de extensión de contratos con 5 casos de negocio',
        'Sistema completo de facturación recurrente con detección de vencimientos a 15 días',
        'Proyecto en producción activa (zello.com.ar) con usuarios reales multi-empresa'
      ],
      impact: 'Plataforma SaaS funcional en producción que permite a múltiples empresas implementar programas de fidelización con código QR, Google Sign-In y gestión automatizada de suscripciones.'
    },
    {
      id: 10,
      title: 'E-commerce de Libros',
      slug: 'ecommerce-libros',
      subtitle: 'Tienda Online de Libros con HTML5, CSS3 y JavaScript Puro — Carrito interactivo con persistencia local',
      description: 'Tienda online de libros con carrito de compras interactivo.',
      fullDescription: 'Tienda online de libros con carrito de compras interactivo, búsqueda, filtros y persistencia en localStorage. Frontend puro sin frameworks, construido con HTML5 semántico, CSS3 con diseño responsivo y JavaScript vanilla (ES6+). Implementa patrón MVC implícito con event delegation, actualización eficiente del DOM y manejo de estado con localStorage.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'localStorage'],
      image: 'assets/img/Proyectos/ecommerbook/ecommerbook1.png',
      images: [
        'assets/img/Proyectos/ecommerbook/ecommerbook1.png',
        'assets/img/Proyectos/ecommerbook/ecommerbook2.png',
        'assets/img/Proyectos/ecommerbook/ecommerbook3.png',
        'assets/img/Proyectos/ecommerbook/ecommerbook4.png',
        'assets/img/Proyectos/ecommerbook/ecommerbook5.png',
        'assets/img/Proyectos/ecommerbook/ecommerbook6.png'
      ],
      info: '/proyecto/ecommerce-libros',
      link: 'https://ecommerbook.netlify.app/',
      github: 'https://github.com/LuisRon27/Online-Book-Store',
      category: 'frontend',
      categoryName: 'Front-End',
      date: '2024',
      features: [
        { icon: 'uil uil-book-open', title: 'Catálogo de Libros', description: 'Grid de libros con imagen, título, autor, precio y botón de compra con búsqueda en tiempo real.' },
        { icon: 'uil uil-shopping-cart', title: 'Carrito Persistente', description: 'Carrito con localStorage, detección de duplicados (incrementa cantidad) y sincronización entre pestañas.' },
        { icon: 'uil uil-search', title: 'Búsqueda Inteligente', description: 'Filtro case-insensitive con toLowerCase() y debounce para rendimiento en catálogos grandes.' },
        { icon: 'uil uil-layer-group', title: 'Filtros por Categoría', description: 'Filtrado dinámico por género/libro sin recargar la página, con actualización instantánea del DOM.' },
        { icon: 'uil uil-mobile-android', title: 'Diseño Responsivo', description: '4→2→1 columnas en desktop/tablet/móvil con media queries y unidades relativas (rem, %, vw).' },
        { icon: 'uil uil-shield', title: 'Seguridad Frontend', description: 'Uso de textContent en lugar de innerHTML para prevenir XSS en datos de localStorage.' }
      ],
      challenges: [
        { problem: 'Mantener el carrito sincronizado entre pestañas del navegador.', solution: 'Listeners del evento storage para actualizar el carrito en tiempo real cuando se modifica desde otra pestaña.' },
        { problem: 'Evitar duplicación de libros en el carrito.', solution: 'Si el libro ya existe, incrementar cantidad en lugar de añadir nueva entrada, con validación por ID único.' }
      ],
      differentiators: [
        'Cero frameworks ni dependencias externas — ideal para rendimiento y entornos legacy',
        'Patrón MVC implícito con separación de responsabilidades',
        'Event delegation para manejo eficiente de elementos dinámicos',
        'Seguridad frontend con prevención de XSS vía textContent',
        'Sincronización multi-pestaña del carrito con evento storage'
      ],
      impact: 'Tienda de libros funcional con cero dependencias, demostrando dominio de fundamentos web (HTML, CSS, JS) y capacidad de construir aplicaciones interactivas completas sin frameworks.'
    },
    {
      id: 11,
      title: 'Energy Square - CMS Inmobiliario',
      slug: 'energy-square',
      subtitle: 'CMS Inmobiliario Full Stack con Panel Administrativo — Gestión de propiedades para Vaca Muerta, Neuquén',
      description: 'Sistema de gestión inmobiliaria CMS con panel administrativo.',
      fullDescription: 'Energy Square es un CMS inmobiliario desarrollado íntegramente en PHP vanilla con MySQL. Consta de 34 archivos fuente (~6.500 líneas de código) distribuidos en frontend público y backend administrativo. La base de datos relacional incluye 7 tablas normalizadas: usuarios, proyectos, propiedades, servicios, ambientes, comodidades e imágenes. Panel admin con CRUD completo, paginación server-side, subida de archivos con naming uniqid() y eliminación en cascada multi-tabla.',
      technologies: ['PHP', 'MySQL', 'Bootstrap', 'JavaScript', 'HTML5', 'CSS3', 'Google Maps API'],
      image: 'assets/img/Proyectos/Energy/energy1.png',
      images: [
        'assets/img/Proyectos/Energy/energy1.png',
        'assets/img/Proyectos/Energy/energy2.png',
        'assets/img/Proyectos/Energy/energy3.png',
        'assets/img/Proyectos/Energy/energy4.png',
        'assets/img/Proyectos/Energy/energy5.png',
        'assets/img/Proyectos/Energy/energy6.png'
      ],
      info: '/proyecto/energy-square',
      link: 'https://energysquare.com.ar/',
      category: 'web',
      categoryName: 'Web App',
      date: '2024',
      features: [
        { icon: 'uil uil-building', title: 'Gestión de Propiedades', description: 'CRUD completo con imágenes, ambientes, servicios, comodidades y geolocalización con Google Maps.' },
        { icon: 'uil uil-users-alt', title: 'Gestión de Usuarios', description: 'Autenticación bcrypt con password_hash/password_verify y roles de administrador.' },
        { icon: 'uil uil-image', title: 'Galería Multimedia', description: 'Subida de archivos con naming uniqid(), thumbnails y organización por propiedad.' },
        { icon: 'uil uil-map-marker', title: 'Google Maps Integration', description: 'Geolocalización de propiedades con Google Maps Embed API para contexto visual.' },
        { icon: 'uil uil-search', title: 'Búsqueda y Filtros', description: 'Filtrado en tabla con JavaScript nativo, paginación server-side y resultados dinámicos.' },
        { icon: 'uil uil-file-alt', title: 'Landing Page + Blog', description: 'Frontend público con landing, blog de mercado inmobiliario y generación de leads.' }
      ],
      challenges: [
        { problem: 'Autenticación segura sin framework PHP.', solution: 'Implementación de bcrypt (password_hash/password_verify) para hashing de contraseñas y sesiones PHP nativas con regeneración de ID.' },
        { problem: 'Eliminación en cascada multi-tabla para propiedades.', solution: 'Transacciones SQL manuales que eliminan registros hijos (imágenes, ambientes, comodidades) antes del registro padre.' }
      ],
      differentiators: [
        'CMS completo desde cero sin WordPress ni frameworks',
        'Autenticación segura con bcrypt en PHP vanilla',
        'Google Maps API para geolocalización de propiedades',
        'Panel admin completo con CRUD multi-tabla y paginación',
        'SEO on-page completo para mercado inmobiliario regional (Vaca Muerta)'
      ],
      impact: 'Sitio web corporativo + CRM para el mercado inmobiliario más importante de Argentina (Vaca Muerta), con panel administrativo completo para gestión de propiedades y generación de leads.'
    },
    {
      id: 12,
      title: 'Luma IA Agency - Sitio Corporativo',
      slug: 'luma-ia-agency',
      subtitle: 'Sitio Web Corporativo para Agencia de Soluciones Digitales con IA — Landing page multi-página',
      description: 'Sitio web corporativo profesional para agencia de soluciones digitales.',
      fullDescription: 'Sitio web corporativo profesional y completamente responsivo para una agencia de soluciones digitales que integra marketing, desarrollo web, publicidad digital y automatización con IA. Incluye portafolio interactivo con 5 casos de estudio reales, blog, calculadora de presupuestos interactiva, catálogo descargable y formulario de contacto funcional. Desarrollado con HTML5, CSS3 puro con sistema de diseño propio (32+ variables CSS), JavaScript vanilla con patrones modernos y Bootstrap 5.3, desplegado en Netlify con SEO completo.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'SEO'],
      image: 'assets/img/Proyectos/Luma/luma1.png',
      images: [
        'assets/img/Proyectos/Luma/luma1.png',
        'assets/img/Proyectos/Luma/luma2.png',
        'assets/img/Proyectos/Luma/luma3.png',
        'assets/img/Proyectos/Luma/luma4.png',
        'assets/img/Proyectos/Luma/luma5.png',
        'assets/img/Proyectos/Luma/luma6.png'
      ],
      info: '/proyecto/luma-ia-agency',
      link: 'https://lumaiaagency.netlify.app',
      category: 'frontend',
      categoryName: 'Front-End',
      date: '2025',
      features: [
        { icon: 'uil uil-rocket', title: 'Landing Page Corporativa', description: 'Hero full-viewport con badge flotante, efecto visual 3D y carrusel infinito de palabras clave.' },
        { icon: 'uil uil-bag', title: 'Portafolio Interactivo', description: '5 casos de estudio con filtro por categoría y animaciones de transición (opacity + scale).' },
        { icon: 'uil uil-calculator-alt', title: 'Calculadora de Presupuestos', description: 'Calculadora interactiva de pricing CM con lógica JS en tiempo real y resultados instantáneos.' },
        { icon: 'uil uil-blog', title: 'Blog + SEO', description: 'Blog con artículos, sitemap.xml, robots.txt, Open Graph, Twitter Cards y meta tags completos.' },
        { icon: 'uil uil-whatsapp', title: 'WhatsApp Integration', description: 'Botón flotante con show/hide en scroll y CTAs estratégicos a WhatsApp como canal principal.' },
        { icon: 'uil uil-palette', title: 'Sistema de Diseño Propio', description: '32+ variables CSS personalizadas, 12+ módulos organizados y tema visual coherente.' }
      ],
      challenges: [
        { problem: 'Lograr sitio profesional completo sin backend, sin CMS y sin frameworks JS pesados.', solution: 'Arquitectura 100% estática con sistema de diseño propio, módulos CSS/JS organizados y herramientas externas (FormSubmit, Meta Pixel).' },
        { problem: 'Navbar y footer duplicados en 12+ páginas HTML estáticas.', solution: 'Organización de páginas en subdirectorios con estructura consistente y sistema de navegación por anclas + history.pushState.' }
      ],
      differentiators: [
        'Suite completa: 4 servicios con pricing, metodología y casos de estudio en un mismo sitio',
        'Calculadora interactiva de presupuestos que reduce fricción en decisión de compra',
        'Casos de estudio con métricas reales (+300% engagement, -60% tiempo, 80% automatización)',
        'Sin frameworks pesados — solo Bootstrap 5.3 + vanilla JS para SEO y Core Web Vitals',
        'SEO completo: sitemap, robots.txt, Open Graph, Twitter Cards, preload, lazy loading',
        'Proyecto real desplegado y activo como sitio oficial de una agencia constituida'
      ],
      impact: 'Sitio corporativo profesional en producción para una agencia de soluciones digitales, demostrando capacidad de construir experiencias web completas sin backend, con sistema de diseño propio y SEO on-page.'
    },
    {
      id: 13,
      title: 'Sistema de Reservas - Auditorio HM',
      slug: 'reserva-auditorio',
      subtitle: 'Sistema de Gestión de Reservas para Auditorio Corporativo — Calendario interactivo FullCalendar',
      description: 'Sistema web de gestión de reservas de auditorio.',
      fullDescription: 'Sistema web interno desarrollado para el Grupo Oncomed Reno / Henry Moore que permite a los empleados reservar el auditorio corporativo de forma eficiente. Incluye calendario visual (FullCalendar 6), creación de reservas individuales o múltiples (batch), verificación automática de conflictos horarios, notificaciones por correo electrónico, autorización jerárquica y recursos opcionales (videoconferencia, proyector). Construido con PHP, SQL Server, Bootstrap 5, JavaScript vanilla y PHPMailer.',
      technologies: ['PHP', 'SQL Server', 'Bootstrap', 'FullCalendar', 'JavaScript', 'jQuery', 'PHPMailer'],
      image: 'assets/img/Proyectos/Reserva Auditorio/reserva1.png',
      images: [
        'assets/img/Proyectos/Reserva Auditorio/reserva1.png',
        'assets/img/Proyectos/Reserva Auditorio/reserva2.png',
        'assets/img/Proyectos/Reserva Auditorio/reserva3.png',
        'assets/img/Proyectos/Reserva Auditorio/reserva4.png',
        'assets/img/Proyectos/Reserva Auditorio/reserva5.png',
        'assets/img/Proyectos/Reserva Auditorio/reserva6.png'
      ],
      info: '/proyecto/reserva-auditorio',
      category: 'web',
      categoryName: 'Web App',
      date: '2024',
      features: [
        { icon: 'uil uil-calendar-alt', title: 'Calendario Interactivo', description: 'FullCalendar 6 con vistas mes/semana/día, navegación intuitiva y eventos visuales por estado.' },
        { icon: 'uil uil-layer-group', title: 'Reservas Batch', description: 'Creación múltiple en varias fechas con detección automática de conflictos horarios en tiempo real.' },
        { icon: 'uil uil-check-circle', title: 'Detección de Conflictos', description: 'Verificación automática de disponibilidad antes de guardar con preview de horarios ocupados.' },
        { icon: 'uil uil-envelope', title: 'Notificaciones Email', description: 'PHPMailer con SMTP autenticado para confirmaciones de creación y cancelación de reservas.' },
        { icon: 'uil uil-shield', title: 'Control de Acceso', description: 'Autenticación contra base corporativa, autorización jerárquica y ownership de reservas.' },
        { icon: 'uil uil-laptop', title: 'Recursos Opcionales', description: 'Checkbox de recursos: videoconferencia, computadora + proyector, solo uso de auditorio.' }
      ],
      challenges: [
        { problem: 'La reserva se gestionaba informalmente (mail, voz a voz, Excel) generando conflictos y dobles reservas.', solution: 'Sistema con calendario en tiempo real, detección automática de conflictos y notificaciones a stakeholders.' },
        { problem: 'Integración con infraestructura corporativa existente sin modificaciones.', solution: 'Conexión a SQL Server corporativo existente, autenticación contra tabla de usuarios activa y servidor SMTP propio.' }
      ],
      differentiators: [
        'Integración completa con infraestructura corporativa existente (SQL Server, usuarios, SMTP)',
        'Sistema batch para reservas múltiples con detección automática de conflictos',
        'UI/UX corporativa: paleta de colores personalizada, animaciones y responsive pulido',
        'Ownership granular: cada usuario gestiona sus reservas sin intervención administrativa',
        'Notificaciones email con diseño HTML corporativo profesional'
      ],
      impact: 'Eliminación completa de conflictos de agenda no detectados, trazabilidad total y autogestión de reservas por parte de empleados, integrándose al ecosistema digital corporativo existente.'
    },
    {
      id: 14,
      title: 'Manuales de Sistemas - DMS',
      slug: 'manuales-sistema',
      subtitle: 'Sistema Web de Gestión de Documentación Técnica Interna (DMS) — Portal Corporativo de Manuales TI',
      description: 'Portal corporativo de documentación técnica interna.',
      fullDescription: 'Portal web full-stack para la administración centralizada de manuales técnicos, procedimientos y documentación de infraestructura y sistemas del departamento de TI. Desarrollado con PHP y SQL Server, permite la carga, categorización, búsqueda y visualización de documentos técnicos internos, con control de versiones, permisos por rol y panel administrativo completo.',
      technologies: ['PHP', 'SQL Server', 'Bootstrap', 'JavaScript', 'jQuery', 'DataTables', 'HTML5', 'CSS3'],
      image: 'assets/img/Proyectos/Manuales de sistema/manual2.png',
      images: [
        'assets/img/Proyectos/Manuales de sistema/manual1.png',
        'assets/img/Proyectos/Manuales de sistema/manual2.png',
        'assets/img/Proyectos/Manuales de sistema/manual3.png',
        'assets/img/Proyectos/Manuales de sistema/manual4.png',
        'assets/img/Proyectos/Manuales de sistema/manual5.png',
        'assets/img/Proyectos/Manuales de sistema/manual6.png'
      ],
      info: '/proyecto/manuales-sistema',
      category: 'web',
      categoryName: 'Web App',
      date: '2024',
      features: [
        { icon: 'uil uil-file-alt', title: 'Gestión de Documentos', description: 'Carga, categorización y organización de manuales técnicos con metadatos descriptivos.' },
        { icon: 'uil uil-search', title: 'Búsqueda Avanzada', description: 'Búsqueda por título, categoría, fecha y palabras clave con resultados en DataTable interactiva.' },
        { icon: 'uil uil-users-alt', title: 'Control de Acceso', description: 'Autenticación por roles con permisos diferenciados para lectura, carga y administración.' },
        { icon: 'uil uil-history', title: 'Control de Versiones', description: 'Historial de cambios con registro de usuario, fecha y versión de cada documento.' },
        { icon: 'uil uil-sitemap', title: 'Categorización', description: 'Organización jerárquica por área, sistema, tipo de documento con navegación intuitiva.' },
        { icon: 'uil uil-print', title: 'Visualización y Descarga', description: 'Visor integrado con opciones de descarga en múltiples formatos y previsualización.' }
      ],
      challenges: [
        { problem: 'Documentación técnica dispersa en archivos compartidos sin control de versiones ni organización.', solution: 'Portal centralizado con base de datos SQL Server, categorización jerárquica y control de versiones con auditoría.' },
        { problem: 'Diferentes niveles de acceso según el rol del usuario.', solution: 'Autenticación contra SQL Server con permisos granulares por usuario-aplicación-opción.' }
      ],
      differentiators: [
        'Portal DMS completo desde cero sin WordPress ni CMS existentes',
        'Control de versiones con trazabilidad completa de cambios',
        'Búsqueda avanzada multi-criterio con DataTables',
        'Organización jerárquica por área y tipo de documento',
        'Integración con base de usuarios corporativa existente'
      ],
      impact: 'Centralización de la documentación técnica del departamento de TI, eliminando archivos dispersos y garantizando acceso controlado con trazabilidad de cambios.'
    },
    {
      id: 15,
      title: 'Mantenimiento de Agenda - William Osler',
      slug: 'mantenimiento-agenda',
      subtitle: 'Sistema de Gestión de Agendas Médicas Full-Stack — .NET 10 + React 19 + TypeScript + SQL Server',
      description: 'Sistema de gestión de agendas médicas para Instituto William Osler.',
      fullDescription: 'Aplicación web full-stack para la gestión completa de agendas médicas del Instituto William Osler. Permite a secretarias administrar profesionales, esquemas de agenda semanal, turnos (CRUD, búsqueda, cambios de estado masivos), apertura mensual automatizada, feriados, consultorios y especialidades. Incluye autenticación JWT con políticas de autorización por roles, panel administrativo, notificaciones por email, background jobs automáticos y soporte PWA con modo offline.',
      technologies: ['.NET 10', 'React 19', 'TypeScript', 'SQL Server', 'Entity Framework', 'JWT', 'Tailwind CSS', 'shadcn/ui'],
      image: 'assets/img/Proyectos/Mantenimiendo de Agenda/mantenimiento1.png',
      images: [
        'assets/img/Proyectos/Mantenimiendo de Agenda/mantenimiento1.png',
        'assets/img/Proyectos/Mantenimiendo de Agenda/mantenimiento2.png',
        'assets/img/Proyectos/Mantenimiendo de Agenda/mantenimiento3.png',
        'assets/img/Proyectos/Mantenimiendo de Agenda/mantenimiento4.png',
        'assets/img/Proyectos/Mantenimiendo de Agenda/mantenimiento5.png',
        'assets/img/Proyectos/Mantenimiendo de Agenda/mantenimiento6.png',
        'assets/img/Proyectos/Mantenimiendo de Agenda/mantenimiento7.png'
      ],
      info: '/proyecto/mantenimiento-agenda',
      category: 'fullstack',
      categoryName: 'Full-Stack',
      date: '2025',
      features: [
        { icon: 'uil uil-user-md', title: 'Gestión de Profesionales', description: 'CRUD con paginación, asignación múltiple de especialidades, duración configurable de turno y fecha de baja programada.' },
        { icon: 'uil uil-calendar-alt', title: 'Esquema de Agenda', description: 'Plantillas semanales por profesional con días configurables, horarios y flag activo/inactivo.' },
        { icon: 'uil uil-clock', title: 'Apertura Automatizada', description: 'Apertura masiva mensual con background job IHostedService, recordatorios y notificaciones por email.' },
        { icon: 'uil uil-list-ul', title: 'Gestión de Turnos', description: '6 estados con badges de color, flujo Llegada→Ingreso→Salida, registro de hora y modificación masiva transaccional.' },
        { icon: 'uil uil-calendar-slash', title: 'Feriados', description: 'Calendario visual con date-fns + react-day-picker, CRUD completo con indicador día completo/mañana/tarde.' },
        { icon: 'uil uil-shield', title: 'Seguridad Enterprise', description: 'JWT con claims policies, login con AD + SQL Server, middleware de errores, logs de acceso y auditoría.' }
      ],
      challenges: [
        { problem: 'Apertura manual mensual de agendas para múltiples profesionales generando errores y sobrecarga.', solution: 'Background job con IHostedService que automatiza la apertura mensual, con recordatorios por email y operaciones transaccionales.' },
        { problem: 'Modificación masiva de estados de turnos con consistencia transaccional.', solution: 'Operaciones transaccionales con rollback en caso de error, utilizando Entity Framework Core con manejo de contexto.' },
        { problem: 'Despliegue en IIS con routing SPA.', solution: 'Hash Router en React Router DOM para compatibilidad total con servidores IIS sin configuraciones de rewrite.' }
      ],
      differentiators: [
        '.NET 10 + React 19 latest stable en producción real',
        'Background jobs automáticos (IHostedService) que reemplazan procesos manuales mensuales',
        'Autenticación AD + JWT con claims policies (seguridad corporativa enterprise)',
        'PWA con version checking automático para UX moderna en entorno on-premise',
        'Feature-based modules: frontend escala por funcionalidad',
        'ApiResponse<T> envelope consistente en toda la API'
      ],
      impact: 'Plataforma full-stack enterprise que centraliza la administración de agendas médicas, automatizando procesos manuales mensuales y garantizando consistencia transaccional en un entorno de salud.'
    },
    {
      id: 16,
      title: 'Receta Digital - Prescripción Electrónica',
      slug: 'receta-digital',
      subtitle: 'Sistema de Gestión de Recetas Médicas Digitales — Plataforma enterprise de prescripción electrónica',
      description: 'Plataforma enterprise de prescripción electrónica.',
      fullDescription: 'Sistema web profesional para la gestión integral del ciclo de vida de recetas médicas digitales. Cubre desde la prescripción por parte del médico, pasando por la autorización de auditoría y control de secretaría, hasta la dispensación en farmacia. Soporta dos instituciones de salud (HM y WO) con flujos diferenciados, integración con APIs gubernamentales (OSECAC), generación automática de Formularios de Prescripción Oncológica (FPO) en PDF, y notificaciones al paciente vía email y WhatsApp.',
      technologies: ['Angular', 'ASP.NET Core', 'SQL Server', 'TypeScript', 'C#', 'Entity Framework', 'JWT', 'QuestPDF'],
      image: 'assets/img/Proyectos/Receta Medica/receta2.jpeg',
      images: [
        'assets/img/Proyectos/Receta Medica/receta1.jpeg',
        'assets/img/Proyectos/Receta Medica/receta2.jpeg',
        'assets/img/Proyectos/Receta Medica/receta3.png',
        'assets/img/Proyectos/Receta Medica/receta4.png',
        'assets/img/Proyectos/Receta Medica/receta5.png',
        'assets/img/Proyectos/Receta Medica/receta6.png',
        'assets/img/Proyectos/Receta Medica/receta7.jpeg',
        'assets/img/Proyectos/Receta Medica/receta8.png'
      ],
      info: '/proyecto/receta-digital',
      category: 'fullstack',
      categoryName: 'Full-Stack',
      date: '2025',
      features: [
        { icon: 'uil uil-shield', title: 'Autenticación Multi-rol', description: 'Login unificado contra 2 bases de datos, JWT con claims personalizados y 5 niveles de permiso (Sistema, Secretaría, Farmacia, Auditoría, Médicos).' },
        { icon: 'uil uil-notes', title: 'Prescripción Médica', description: 'Búsqueda de paciente por DNI/HC, medicamentos vía API RCTA, clasificación automática y firma digital con canvas HTML5.' },
        { icon: 'uil uil-check-circle', title: 'Flujo de Autorización', description: 'Panel de recetas pendientes, autorización/rechazo con mensaje, reemisión y reenvío para Auditoría.' },
        { icon: 'uil uil-file-alt', title: 'FPO - Receta Oncológica', description: 'Formulario reactivo completo con diagnóstico OMS, TNM, tratamientos previos y generación de PDF reglamentario.' },
        { icon: 'uil uil-envelope', title: 'Notificaciones Multicanal', description: 'Email con SMTP + plantillas HTML y WhatsApp mediante Chattigo API con mensajes HSM estructurados.' },
        { icon: 'uil uil-building', title: 'Multi-institución', description: 'Soporte para HM y WO con esquemas de BD divergentes, temas visuales diferenciados y flujos personalizados.' }
      ],
      challenges: [
        { problem: 'Integración con dos bases de datos legacy de diferentes instituciones con esquemas divergentes.', solution: 'Dos DbContexts independientes con interfaz IUsuario común y failover (HM → WO) para autenticación unificada.' },
        { problem: 'Clasificación automática de medicamentos según reglas de negocio complejas.', solution: 'Algoritmo multi-nivel que evalúa pertenencia a listas de alto costo, extracápita, cápita y PPG según entidad/obra social del paciente.' },
        { problem: 'Integración con API gubernamental OSECAC para prescripciones oficiales.', solution: 'Servicio especializado con autenticación OAuth2, generación de PDFs con formato oficial y manejo de errores con retry logic.' },
        { problem: 'Generación de documentos oncológicos FPO con formato reglamentario.', solution: 'Servicio FpoService con QuestPDF (~1142 líneas) que genera PDFs profesionales con datos complejos del paciente oncológico.' }
      ],
      differentiators: [
        'Multi-institución: soporte nativo para dos instituciones con esquemas de BD divergentes y flujos de autorización personalizados',
        'Clasificación automática de medicamentos con algoritmo propietario multi-nivel',
        'Integración OSECAC: conexión directa con sistema oficial de prescripciones del gobierno',
        'FPO completo: Formulario de Prescripción Oncológica con 36+ campos en formato reglamentario',
        'Notificaciones multicanal: Email + WhatsApp con mensajes HSM estructurados',
        '.NET 10 + Angular 21: stack tecnológico de última generación en producción real',
        'Trazabilidad total: cada acción registrada con usuario y timestamp'
      ],
      impact: 'Plataforma enterprise de prescripción electrónica que cubre el ciclo de vida completo de recetas digitales, integrando dos instituciones de salud, APIs gubernamentales y notificaciones multicanal.'
    },
    {
      id: 17,
      title: 'Prospección Automatizada con IA para Google Maps',
      slug: 'lead-generation-google-maps',
      subtitle: 'Automatización de prospección comercial con n8n e IA — Extracción de leads, análisis de sitios web y comunicación personalizada',
      description: 'Automatización completa para prospección B2B: busca negocios en Google Maps, extrae datos de contacto y genera mensajes personalizados con IA.',
      fullDescription: 'Workflow inteligente construido en n8n que automatiza todo el proceso de prospección comercial. El sistema busca negocios en Google Maps según nicho y ubicación, extrae automáticamente URLs de sitios web, filtra dominios irrelevantes, visita cada sitio para obtener su HTML, limpia el código, extrae información clave (teléfonos, emails, descripciones del negocio), utiliza IA Gemini para analizar el contenido y redactar mensajes de WhatsApp y correos electrónicos personalizados, y finalmente guarda toda la información en Google Sheets mientras envía los emails automáticamente. Diseñado para una agencia de marketing digital que necesitaba escalar su captación de clientes sin aumentar horas de trabajo manual.',
      technologies: ['n8n', 'Gemini AI', 'Google Maps', 'Google Sheets', 'Gmail API', 'JavaScript', 'HTTP Requests', 'Web Scraping'],
      image: 'assets/img/Proyectos/leadgen/lead-generation.webp',
      images: [
        'assets/img/Proyectos/leadgen/lead-generation.webp',
      ],
      info: '/proyecto/lead-generation-google-maps',
      category: 'ai',
      categoryName: 'AI & Automation',
      date: '2025',
      features: [
        { icon: 'uil uil-map', title: 'Scraping de Google Maps', description: 'Búsqueda automatizada de negocios por nicho y ubicación geográfica con extracción de URLs de sitios web.' },
        { icon: 'uil uil-filter', title: 'Filtrado Inteligente', description: 'Eliminación automática de dominios irrelevantes (google, instagram, wa.link) preservando solo sitios web reales de negocios.' },
        { icon: 'uil uil-globe', title: 'Extracción de Datos Web', description: 'Visita cada sitio web, limpia el HTML y extrae teléfonos, emails, títulos y descripciones del negocio.' },
        { icon: 'uil uil-brain', title: 'Análisis con IA Gemini', description: 'Gemini analiza la descripción de cada negocio y genera mensajes de WhatsApp y correos personalizados según su rubro y necesidades.' },
        { icon: 'uil uil-whatsapp', title: 'Mensajes Personalizados', description: 'Generación automática de mensajes de WhatsApp contextuales con propuestas de valor concretas.' },
        { icon: 'uil uil-envelope', title: 'Email Automatizado', description: 'Creación de emails profesionales con diseño HTML responsive y envío automático vía Gmail.' },
        { icon: 'uil uil-sheet', title: 'Registro en Google Sheets', description: 'Almacenamiento estructurado de todos los leads con datos de contacto, mensajes generados y fecha de prospección.' },
        { icon: 'uil uil-clock', title: 'Control de Throttling', description: 'Pausas estratégicas entre solicitudes para evitar bloqueos y simular comportamiento humano.' }
      ],
      challenges: [
        { problem: 'Proceso manual de búsqueda de prospectos: horas revisando Google Maps, visitando sitios web y anotando datos de contacto.', solution: 'Automatización completa que reduce de horas a minutos el proceso de captación de leads por nicho y ubicación.' },
        { problem: 'Mensajes comerciales genéricos con baja tasa de respuesta por falta de personalización.', solution: 'IA Gemini analiza la descripción de cada negocio y genera mensajes contextuales que mencionan necesidades específicas según su rubro.' },
        { problem: 'Dificultad para escalar prospección a múltiples nichos y zonas geográficas simultáneamente.', solution: 'Flujo parametrizable que permite ejecutar campañas para cualquier combinación de nicho + ubicación sin modificar el workflow.' }
      ],
      differentiators: [
        'Extracción de hasta 30 URLs por búsqueda con filtrado inteligente de dominios irrelevantes',
        'Limpieza y normalización de HTML con eliminación de scripts, estilos y contenido no relevante',
        'IA Gemini entrenada como experto en ventas B2B para generar mensajes persuasivos',
        'Corrección automática de problemas de codificación (tildes, eñes, caracteres especiales) en textos extraídos',
        'Pipeline completo: búsqueda → scraping → análisis IA → almacenamiento → envío de emails',
        'Detección de números de teléfono argentinos con normalización de formato (+54)',
        'Generación de emails en HTML con diseño profesional manteniendo personalización del contenido'
      ],
      impact: 'Transformación del proceso de prospección comercial de una agencia de marketing digital, eliminando horas de trabajo manual diarias, aumentando la cantidad de prospectos calificados, mejorando las tasas de respuesta con mensajes personalizados por IA, y permitiendo escalar campañas a múltiples nichos y zonas geográficas simultáneamente.'
    },
    {
      id: 18,
      title: 'Asistente Virtual para Estética con WhatsApp',
      slug: 'asistente-estetica-whatsapp',
      subtitle: 'ChatBot Inteligente para Recepción de Estética — Automatización de turnos con IA Gemini',
      description: 'Asistente virtual que automatiza la atención al cliente, gestión de turnos y consultas de servicios de una estética vía WhatsApp.',
      fullDescription: 'Workflow inteligente construido en n8n que funciona como una recepcionista virtual llamada "Ana" para un centro de estética. El sistema recibe mensajes de clientes a través de la API de WhatsApp Business, procesa el lenguaje natural con IA Gemini, y utiliza herramientas conectadas a Google Calendar para consultar disponibilidad, agendar y cancelar turnos, así como una base de datos en Google Sheets para consultar servicios, precios y duraciones. La agente mantiene memoria de la conversación, responde con un tono cálido y profesional, y sigue reglas estrictas de disponibilidad horaria (lunes a viernes 9-18hs). Diseñado para una estética que enfrentaba saturación del personal de recepción, llamadas telefónicas desbordadas y pérdida de clientes por falta de respuesta ágil.',
      technologies: ['n8n', 'Gemini AI', 'WhatsApp API', 'Twilio', 'Google Calendar', 'Google Sheets', 'JavaScript', 'Memory Buffer'],
      image: 'assets/img/Proyectos/chatbot-estetica/chatbot-estetica.webp',
      images: [
        'assets/img/Proyectos/chatbot-estetica/chatbot-estetica.webp',
      ],
      info: '/proyecto/asistente-estetica-whatsapp',
      category: 'ai',
      categoryName: 'AI & Automation',
      date: '2025',
      features: [
        { icon: 'uil uil-brain', title: 'IA con Personalidad Propia', description: 'Gemini actúa como "Ana", una recepcionista cálida y profesional que nunca revela ser un bot, usando lenguaje natural y emojis moderados.' },
        { icon: 'uil uil-whatsapp', title: 'Integración Total con WhatsApp', description: 'Conexión mediante Twilio para recibir y enviar mensajes, permitiendo a los clientes interactuar desde su aplicación favorita.' },
        { icon: 'uil uil-calendar-alt', title: 'Gestión Inteligente de Turnos', description: 'Consulta disponibilidad, agenda y cancela citas en Google Calendar con verificación previa y confirmación del cliente.' },
        { icon: 'uil uil-sheet', title: 'Catálogo de Servicios', description: 'Base de datos en Google Sheets con servicios, precios, duraciones y profesionales, consultable en tiempo real.' },
        { icon: 'uil uil-memory', title: 'Memoria Contextual', description: 'Buffer de memoria con 25 mensajes de contexto para mantener coherencia en conversaciones largas sin repetir información.' },
        { icon: 'uil uil-clock', title: 'Reglas de Disponibilidad', description: 'Restricción automática a horario laboral (lunes a viernes 9-18hs) con duración base de 1 hora por turno.' },
        { icon: 'uil uil-shield-check', title: 'Confirmación Doble', description: 'Solicita confirmación del cliente antes de crear o cancelar eventos, evitando errores y mejorando la experiencia.' },
        { icon: 'uil uil-robot', title: 'Confidencialidad', description: 'Nunca comparte información de otros clientes y responde de forma cordial cuando no encuentra un turno solicitado.' }
      ],
      challenges: [
        { problem: 'Recepción saturada: el personal atendía llamadas y mensajes simultáneamente, generando demoras y errores en la agenda.', solution: 'Automatización 24/7 que responde instantáneamente, liberando al personal para tareas presenciales de mayor valor.' },
        { problem: 'Pérdida de clientes fuera del horario laboral: consultas nocturnas o de fin de semana quedaban sin respuesta hasta el día siguiente.', solution: 'Asistente operativo 24/7 que agenda turnos incluso fuera del horario de atención (respetando rangos disponibles).' },
        { problem: 'Información inconsistente: los precios y servicios variaban según qué recepcionista atendiera.', solution: 'Fuente única de verdad en Google Sheets, garantizando respuestas consistentes y actualizadas en tiempo real.' }
      ],
      differentiators: [
        'Personalidad cálida y humana ("Ana") que nunca revela ser una IA, generando confianza en el cliente',
        'Memoria conversacional de 25 mensajes para mantener el hilo de diálogos extensos',
        'Confirmación en dos pasos antes de acciones críticas (crear/cancelar turnos)',
        'Integración nativa con Google Calendar y Google Sheets sin necesidad de middlewares adicionales',
        'Reglas de disponibilidad automáticas: respeta horarios y duraciones definidas',
        'Confidencialidad garantizada: nunca expone datos de otros clientes',
        'Tono profesional pero cercano, con uso moderado de emojis para calidez',
        'Respuesta inmediata 24/7 eliminando tiempos de espera'
      ],
      impact: 'Transformación digital de la gestión de turnos de una estética, reduciendo la carga del personal de recepción en un 70%, eliminando la pérdida de clientes por falta de respuesta fuera del horario laboral, garantizando información consistente sobre servicios y precios, y mejorando la experiencia del cliente con respuestas instantáneas y un trato cálido y profesional en todo momento.'
    },
    {
      id: 19,
      title: 'Gestión Financiera Colaborativa',
      slug: 'gestion-financiera-colaborativa',
      subtitle: 'Sistema de Gestión Financiera Colaborativa — PHP Vanilla + MySQL 8 + Bootstrap 5.3 + Chart.js 4.4',
      description: 'Gestión de finanzas personales y compartidas con aportes proporcionales.',
      fullDescription: 'Plataforma web integral diseñada para que parejas, familias y grupos de amigos administren sus finanzas compartidas de manera eficiente y equitativa. Permite crear cuentas financieras (personales o compartidas), registrar ingresos y egresos, planificar gastos mensuales, establecer metas de ahorro con seguimiento visual, y calcular automáticamente aportes proporcionales basados en los ingresos de cada miembro. Implementa un sofisticado motor de cálculo que distribuye los gastos compartidos según la capacidad económica de cada participante, con notificaciones automáticas y transferencias entre cuentas con doble asiento contable. Desarrollado con PHP 8+ vanilla (sin frameworks), MySQL 8 con PDO, Bootstrap 5.3, Chart.js 4.4, JavaScript vanilla y CSS3 avanzado con arquitectura MVC artesanal, 9 clases de dominio estáticas, 12 tablas relacionales y más de 40 endpoints AJAX.',
      technologies: ['PHP 8', 'MySQL 8', 'Bootstrap 5.3', 'Chart.js 4.4', 'JavaScript', 'PDO', 'HTML5', 'CSS3'],
      image: 'assets/img/Proyectos/gestion_financiera/gf2.webp',
      images: [
        'assets/img/Proyectos/gestion_financiera/gf1.webp',
        'assets/img/Proyectos/gestion_financiera/gf2.webp',
        'assets/img/Proyectos/gestion_financiera/gf3.webp',
        'assets/img/Proyectos/gestion_financiera/gf4.webp',
        'assets/img/Proyectos/gestion_financiera/gf5.webp',
        'assets/img/Proyectos/gestion_financiera/gf6.webp'
      ],
      info: '/proyecto/gestion-financiera-colaborativa',
      category: 'web',
      categoryName: 'Web App',
      date: '2026',
      features: [
        { icon: 'uil uil-usd-circle', title: 'Aportes Proporcionales Colaborativos', description: 'Algoritmo que calcula contribuciones según el ingreso de cada miembro del grupo, distribuyendo los gastos compartidos de forma equitativa y proporcional a la capacidad económica.' },
        { icon: 'uil uil-users-alt', title: 'Cuentas Multi-usuario con Roles', description: 'Cuentas personales y compartidas con jerarquía de 4 niveles (propietario, administrador, miembro, consulta) y permisos granulares verificados en cada operación.' },
        { icon: 'uil uil-chart-pie', title: 'Dashboard Interactivo con Chart.js', description: 'Resumen financiero del mes con gráficos doughnut de distribución por grupos, línea de ingresos vs gastos, exportación a CSV y reportes dinámicos.' },
        { icon: 'uil uil-calendar-alt', title: 'Planificación Mensual de Gastos', description: 'Checklist de gastos planificados con estados (pendiente/pagado/vencido), marcado masivo, control de saldo suficiente y copia inteligente del mes anterior.' },
        { icon: 'uil uil-trophy', title: 'Metas de Ahorro con Progreso', description: 'Objetivos con monto target y fecha límite, barra de progreso visual, agregado manual de progreso y auto-completado al alcanzar el monto objetivo.' },
        { icon: 'uil uil-exchange', title: 'Transferencias con Doble Asiento', description: 'Transferencias entre cuentas propias con doble asiento contable: egreso en origen e ingreso en destino en una sola transacción atómica con actualización de saldos.' }
      ],
      challenges: [
        { problem: 'Mantener consistencia del saldo al crear, editar o eliminar movimientos, especialmente al marcar pagos y transferir entre cuentas.', solution: 'Transacciones atómicas SQL con commit/rollback, reversión de saldos anteriores al editar y verificación de saldo suficiente antes de cada operación.' },
        { problem: 'Distribuir gastos compartidos de forma proporcional a los ingresos de cada miembro, que cambian mes a mes.', solution: 'Algoritmo en PlanMensual::calcularAportes() que calcula porcentajes dinámicos sobre ingresos totales del grupo y los aplica a cada gasto compartido.' },
        { problem: 'Implementar doble asiento contable en transferencias: cada transferencia debe generar egreso en origen e ingreso en destino de forma atómica.', solution: 'Una sola transacción SQL con 6+ queries que crea ambos movimientos espejo, actualiza ambos saldos y, si el destino es compartida, actualiza el aporte correspondiente.' }
      ],
      differentiators: [
        'Arquitectura MVC artesanal en PHP vanilla sin frameworks, demostrando comprensión profunda de separación de responsabilidades y patrones de diseño',
        'Algoritmo de aportes proporcionales automáticos que distribuye gastos según los ingresos de cada miembro del grupo',
        'Sistema de roles y permisos jerárquicos con 4 niveles (propietario > administrador > miembro > consulta) verificados en cada endpoint',
        'Mecanismo de transferencias con doble asiento contable y consistencia transaccional entre cuentas de origen y destino',
        'Más de 40 endpoints AJAX, 9 clases de dominio estáticas, 12 tablas relacionales y frontend responsive completo sin dependencias de build',
        'CSRF implementado manualmente con tokens criptográficos (random_bytes(32)) y verificación timing-safe (hash_equals)'
      ],
      impact: 'Plataforma financiera colaborativa completa que demuestra capacidad para diseñar e implementar arquitecturas web profesionales desde cero, con lógica de negocio compleja (aportes proporcionales, doble asiento contable, roles jerárquicos) y una experiencia de usuario refinada, todo construido sin frameworks ni dependencias externas pesadas.'
    },
    {
      id: 20,
      title: 'Sistema de Gestión de Permisos Médicos',
      slug: 'permisos-medicos',
      subtitle: 'Sistema de Solicitud y Autorización de Permisos Médicos — PHP + SQL Server + Bootstrap 5 + FPDF',
      description: 'Digitalización del flujo de solicitud y autorización de permisos médicos con workflow multi-etapa.',
      fullDescription: 'Aplicación web transaccional desarrollada para el Instituto Henry Moore (Oncomed Reno SA) que digitaliza y automatiza el flujo completo de solicitud, revisión y autorización de permisos médicos. Reemplaza un proceso manual basado en papel y correos informales por un workflow digital trazable con múltiples etapas: Recepción por Secretaría, validación por RRHH, autorización por especialistas según tipo de permiso (Hematología, Seguimiento) y aprobación final por un autorizador general. Incluye dos modalidades de solicitud: con recupero (modificación de agenda con detalle de bloqueo o reprogramación) y sin recupero (ausencia directa). Genera documentos PDF formales con firmas digitales integradas, notifica por correo electrónico en cada transición de estado y provee trazabilidad visual completa de cada solicitud. Construido con PHP nativo, SQL Server, Bootstrap 5, JavaScript vanilla, PHPMailer y FPDF.',
      technologies: ['PHP', 'SQL Server', 'Bootstrap 5', 'JavaScript', 'FPDF', 'PHPMailer', 'SweetAlert2', 'HTML5', 'CSS3'],
      image: 'assets/img/Proyectos/Permisos Medicos/pm1.webp',
      images: [
        'assets/img/Proyectos/Permisos Medicos/pm1.webp',
        'assets/img/Proyectos/Permisos Medicos/pm2.webp',
        'assets/img/Proyectos/Permisos Medicos/pm3.webp',
        'assets/img/Proyectos/Permisos Medicos/pm4.webp',
        'assets/img/Proyectos/Permisos Medicos/pm5.webp',
        'assets/img/Proyectos/Permisos Medicos/pm6.webp'
      ],
      info: '/proyecto/permisos-medicos',
      category: 'web',
      categoryName: 'Web App',
      date: '2025',
      features: [
        { icon: 'uil uil-clipboard-alt', title: 'Solicitud con Dos Modalidades', description: 'Permisos "con recupero" (modificación de agenda con detalle de bloqueo o reprogramación) y "sin recupero" (ausencia directa), con formularios específicos y validación cliente-servidor.' },
        { icon: 'uil uil-sitemap', title: 'Workflow Multi-etapa', description: 'Flujo secuencial de 4 etapas: Recepción Secretaría → Validación RRHH → Autorización Especialista → Autorización General, con detección automática de rol por email.' },
        { icon: 'uil uil-envelope', title: 'Notificaciones Email Transaccionales', description: 'PHPMailer con SMTP autenticado envía correos HTML en cada transición de estado, con destinatarios dinámicos según la etapa del flujo.' },
        { icon: 'uil uil-file-alt', title: 'Generación PDF con Firmas Digitales', description: 'FPDF genera documentos formales con dos layouts diferenciados (recupera/no recupera), incluyendo firmas digitales en Base64 de solicitantes y autorizadores.' },
        { icon: 'uil uil-history', title: 'Trazabilidad Visual', description: 'Componente reutilizable de trazabilidad que muestra el historial completo de cada solicitud con estados, fechas, autorizadores y comentarios en formato expandible.' },
        { icon: 'uil uil-shield', title: 'Dashboard con Permisos por Rol', description: 'Cards de acceso dinámicos renderizados según permisos del usuario, con bandejas de recepción y autorización filtradas automáticamente por rol y especialidad.' }
      ],
      challenges: [
        { problem: 'Integración con base de datos SQL Server legacy (Hmoore) compartida con otros sistemas del instituto, sin posibilidad de alterar tablas existentes.', solution: 'Consultas directas a tablas compartidas con JOINs y transacciones SQL, utilizando SCOPE_IDENTITY para consistencia y tablas propias (solicitudCabeceraPermiso, solicitudDetallePermiso) para los datos del proyecto.' },
        { problem: 'Workflow multi-etapa con condiciones dinámicas: el flujo depende del tipo de permiso, el rol del autorizador (detectado por email vía stripos()), el orden secuencial de etapas y el estado de cada autorización.', solution: 'Lógica condicional en SQL con columnas de autorización por etapa (secretaria, rrhh, hematologia, seguimiento, general), verificación secuencial de estados y filtrado automático de bandejas por rol.' },
        { problem: 'Generación de PDF con FPDF en dos layouts diferenciados y soporte de firmas digitales en Base64 renderizadas como imágenes dentro del documento.', solution: 'FPDF con layout condicional según tipo de permiso, subqueries para datos anidados (detalle, tipos, profesionales) y renderizado de imágenes Base64 como recursos embebidos en el PDF.' }
      ],
      differentiators: [
        'Workflow multi-etapa completo con 4 roles y detección automática de autorizador por email',
        'Desarrollado sin frameworks — PHP nativo con sesiones, transacciones SQL y manejo HTTP directo',
        'Generación de PDF formal con firmas digitales integradas usando FPDF',
        'Componente reutilizable de trazabilidad visual con historial expandible',
        'Sistema de diseño CSS propio (1600+ líneas) con animaciones y diseño responsive',
        'Producto en producción real en una institución de salud, integrado con sistemas legacy existentes'
      ],
      impact: 'Solución integral que reemplazó un proceso manual de papel y correos informales por un workflow digital completo, trazable y auditable, eliminando demoras en autorizaciones, garantizando consistencia en la información y proporcionando visibilidad en tiempo real del estado de cada solicitud de permiso médico.'
    },
    {
      id: 21,
      title: 'Trazabilidad HC WO',
      slug: 'trazabilidad-hc',
      subtitle: 'Sistema de Trazabilidad de Digitalización de Historias Clínicas — PHP + SQL Server + Bootstrap 5',
      description: 'Registro y control del recorrido físico de las Historias Clínicas desde el Archivo WO hasta su devolución tras la digitalización.',
      fullDescription: 'Sistema web para registrar y controlar el recorrido físico de las Historias Clínicas (HC) de un hospital, desde que son recopiladas por el área de Archivo (WO) hasta que son devueltas tras su digitalización. En el circuito de un servicio de salud, una HC en papel se mueve entre distintas áreas: el archivo de Work Orders la recopila al momento de la atención, la entrega al sector de Digitalización para su escaneo y luego la recibe de vuelta para su resguardo físico. Perder el control de ese recorrido genera extravíos, demoras y falta de respaldo ante auditorías. La aplicación resuelve ese problema registrando cada etapa con fecha, hora y usuario responsable: permite armar lotes de entrega, asignarlos a usuarios de Digitalización, marcarlas como digitalizadas desde una bandeja de trabajo, registrar devoluciones por lote y consultar la trazabilidad completa por paciente. Desarrollada en PHP sobre XAMPP, consulta la base SQL Server existente (AgendaWO) que aporta turnos, pacientes y usuarios, evitando duplicar información. El frontend usa Bootstrap 5 y JavaScript vanilla (sin frameworks), consumiendo una API interna propia en JSON con autenticación por sesión y control de roles.',
      technologies: ['PHP', 'SQL Server', 'Bootstrap 5', 'JavaScript', 'XAMPP', 'SQLSRV', 'SweetAlert2', 'HTML5', 'CSS3'],
      image: 'assets/img/Proyectos/Trazabilidad-HC/trazabilidad-hc-1.jpeg',
      images: [
        'assets/img/Proyectos/Trazabilidad-HC/trazabilidad-hc-1.jpeg',
        'assets/img/Proyectos/Trazabilidad-HC/trazabilidad-hc-2.png',
        'assets/img/Proyectos/Trazabilidad-HC/trazabilidad-hc-3.png',
        'assets/img/Proyectos/Trazabilidad-HC/trazabilidad-hc-4.png'
      ],
      info: '/proyecto/trazabilidad-hc',
      category: 'web',
      categoryName: 'Web App',
      date: '2026',
      features: [
        { icon: 'uil uil-clipboard-notes', title: 'Recopilación de HC por Turno', description: 'El Archivo WO consulta los turnos citados del día y recopila cada Historia Clínica registrando opcionalmente Nro. de documento y una nota, pasando la HC a estado Recopilado.' },
        { icon: 'uil uil-box', title: 'Armado y Entrega de Lotes', description: 'Con las HCs recopiladas del día se arma el lote de entrega y se asigna a un usuario de Digitalización, dejando cada HC en estado En Digitalización.' },
        { icon: 'uil uil-inbox', title: 'Bandeja de Trabajo', description: 'El sector de Digitalización busca la HC en su bandeja con filtros por NroHC, documento o paciente y la marca como Digitalizada con nota opcional.' },
        { icon: 'uil uil-import', title: 'Devolución por Lote', description: 'Cuando Digitalización devuelve físicamente las HCs, Archivo WO registra la devolución por lote con fecha, hora y responsable, pasando al estado Devuelto.' },
        { icon: 'uil uil-analysis', title: 'Dashboard de Indicadores', description: 'El Admin monitorea el circuito con KPIs por rango de fechas y consulta la trazabilidad completa de cada HC filtrable por estado, paciente y fecha.' },
        { icon: 'uil uil-shield', title: 'Autenticación y Roles', description: 'Login contra la base existente con permisos por aplicación y tres perfiles jerárquicos: ArchivoWO, Digitalizacion y Admin, cada uno con pantallas enfocadas en su tarea.' }
      ],
      challenges: [
        { problem: 'Integrarse con una base SQL Server existente (AgendaWO) compartida con otros sistemas del hospital, sin duplicar información de turnos, pacientes y usuarios.', solution: 'Consultas directas a las tablas existentes y una tabla propia (TrazabilidadHC) que guarda el estado global de cada HC con las fechas y usuarios de cada etapa del circuito.' },
        { problem: 'Operaciones masivas de entrega y devolución de lotes que deben ser consistentes ante fallas.', solution: 'Ejecución de las operaciones de lote dentro de transacciones (db_begin / db_commit / db_rollback) para garantizar la consistencia de los datos.' },
        { problem: 'Evitar que una misma HC esté en dos circuitos a la vez.', solution: 'Índice único filtrado (Estado <> Devuelto) que garantiza una sola HC activa por circuito en todo momento.' }
      ],
      differentiators: [
        'API interna propia en JSON con autenticación por sesión y validación de rol en cada endpoint',
        'Estados derivados por columna con trazabilidad completa de fecha, hora y usuario responsable por etapa',
        'Operaciones de lote transaccionales para entrega y devolución masiva de Historias Clínicas',
        'Integración directa con la base institucional existente evitando duplicar información',
        'Paginado en cliente con un paginador reutilizable (15-20 filas) sin recargar la página',
        'Producto sencillo por diseño que corre directamente bajo XAMPP sin instalaciones complejas'
      ],
      impact: 'Sistema en un servicio de salud que digitaliza y controla el circuito completo de las Historias Clínicas en papel, eliminando extravíos y demoras, garantizando respaldo ante auditorías y proporcionando visibilidad en tiempo real de dónde está cada HC, quién la movió y cuándo.'
    }
  ];

  get projects(): Project[] {
    return this._projects;
  }

  getProjectBySlug(slug: string): Project | undefined {
    return this._projects.find(p => p.slug === slug);
  }

  getProjectById(id: number): Project | undefined {
    return this._projects.find(p => p.id === id);
  }
}
