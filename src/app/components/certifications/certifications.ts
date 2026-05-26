import { Component, signal, computed, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ScrollAnimationDirective } from '../../shared/directives/scroll-animation.directive';

export interface Certification {
  id: number;
  title: string;
  description: string;
  institution: string;
  date: string;
  image: string;
  link: string;
  category: string;
}

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [CommonModule, ScrollAnimationDirective],
  templateUrl: './certifications.html',
  styleUrls: ['./certifications.css']
})
export class Certifications {
  private isBrowser: boolean;
  
  // Filtro activo
  activeFilter = signal<string>('all');
  
  // Búsqueda
  searchTerm = signal<string>('');
  
  // Paginación
  currentPage = signal<number>(1);
  itemsPerPage = 9; // 9 items por página (3x3)
  
  // Modal
  selectedCert = signal<Certification | null>(null);
  showModal = signal<boolean>(false);

  categories = [
    { id: 'all', name: 'Todas', icon: 'uil uil-apps', color: '#6c5ce7' },
    { id: 'frontend', name: 'Front-End', icon: 'uil uil-brackets-curly', color: '#00b894' },
    { id: 'backend', name: 'Back-End', icon: 'uil uil-server', color: '#0984e3' },
    { id: 'database', name: 'Bases de Datos', icon: 'uil uil-database', color: '#f39c12' },
    { id: 'ai-ml', name: 'AI / ML', icon: 'uil uil-brain', color: '#e17055' },
    { id: 'agile-pm', name: 'Ágiles y PM', icon: 'uil uil-chart-pie', color: '#6c5ce7' },
    { id: 'management', name: 'Management', icon: 'uil uil-users-alt', color: '#9b59b6' },
    { id: 'product-owner', name: 'Product Owner', icon: 'uil uil-clipboard-notes', color: '#00cec9' },
    { id: 'tools', name: 'Herramientas', icon: 'uil uil-wrench', color: '#636e72' },
    { id: 'others', name: 'Otros', icon: 'uil uil-layer-group', color: '#fd79a8' }
  ];

  certifications: Certification[] = [
    // ── Frontend ──
    { id: 0, title: 'HTML y CSS', description: 'Maquetación web con HTML5 y CSS3', institution: 'OpenBootcamp', date: 'Ene. 2023', image: 'assets/img/Cursos/Frontend/curso-html-y-css-openbootcamp-202301-1.jpg', link: 'assets/img/Cursos/Frontend/curso-html-y-css-openbootcamp-202301-1.jpg', category: 'frontend' },
    { id: 1, title: 'CSS', description: 'CSS Grid, Flexbox y diseño responsivo', institution: 'CodigoFacilito', date: 'Abr. 2023', image: 'assets/img/Cursos/Frontend/curso-curso-de-css-codigofacilito-202304-1.jpg', link: 'assets/img/Cursos/Frontend/curso-curso-de-css-codigofacilito-202304-1.jpg', category: 'frontend' },
    { id: 2, title: 'JavaScript', description: 'JavaScript desde cero hasta avanzado', institution: 'OpenBootcamp', date: 'Ene. 2023', image: 'assets/img/Cursos/Frontend/curso-javascript-openbootcamp-202301-1.jpg', link: 'assets/img/Cursos/Frontend/curso-javascript-openbootcamp-202301-1.jpg', category: 'frontend' },
    { id: 3, title: 'TypeScript', description: 'Tipado estático con TypeScript', institution: 'OpenBootcamp', date: 'Feb. 2023', image: 'assets/img/Cursos/Frontend/curso-typescript-openbootcamp-202302-1.jpg', link: 'assets/img/Cursos/Frontend/curso-typescript-openbootcamp-202302-1.jpg', category: 'frontend' },
    { id: 4, title: 'Angular', description: 'Fundamentos del framework Angular', institution: 'OpenBootcamp', date: 'Mar. 2023', image: 'assets/img/Cursos/Frontend/curso-angular-openbootcamp-202303-1.jpg', link: 'assets/img/Cursos/Frontend/curso-angular-openbootcamp-202303-1.jpg', category: 'frontend' },
    { id: 5, title: 'Angular Profesional', description: 'Componentes, servicios, rutas y módulos', institution: 'CodigoFacilito', date: 'Jul. 2023', image: 'assets/img/Cursos/Frontend/curso-curso-profesional-de-angular-codigofacilito-202307-1.jpg', link: 'assets/img/Cursos/Frontend/curso-curso-profesional-de-angular-codigofacilito-202307-1.jpg', category: 'frontend' },
    { id: 6, title: 'Angular Avanzado', description: 'Técnicas avanzadas con Angular', institution: 'Platzi', date: 'Mar. 2026', image: 'assets/img/Cursos/Frontend/curso-angular-avanzado-platzi-202603-1.jpg', link: 'assets/img/Cursos/Frontend/curso-angular-avanzado-platzi-202603-1.jpg', category: 'frontend' },
    { id: 7, title: 'Programación Front-End', description: 'Desarrollo front-end nivel inicial', institution: 'Argentina Programa', date: 'May. 2023', image: 'assets/img/Cursos/Frontend/curso-programación-front-end-nivel-inicial-argentinaprograma-202305-1.jpg', link: 'assets/img/Cursos/Frontend/curso-programación-front-end-nivel-inicial-argentinaprograma-202305-1.jpg', category: 'frontend' },
    { id: 8, title: 'Figma y Diseño de Interfaces', description: 'Diseño UI/UX con Figma', institution: 'CodigoFacilito', date: 'Ago. 2023', image: 'assets/img/Cursos/Frontend/curso-introducción-a-figma-y-diseño-de-interfaces-codigofacilito-202308-1.jpg', link: 'assets/img/Cursos/Frontend/curso-introducción-a-figma-y-diseño-de-interfaces-codigofacilito-202308-1.jpg', category: 'frontend' },
    { id: 9, title: 'Diseño para Programadores', description: 'Principios de diseño para desarrolladores', institution: 'CodigoFacilito', date: 'Ago. 2023', image: 'assets/img/Cursos/Frontend/curso-curso-de-diseño-para-programadores-codigofacilito-202308-1.jpg', link: 'assets/img/Cursos/Frontend/curso-curso-de-diseño-para-programadores-codigofacilito-202308-1.jpg', category: 'frontend' },

    // ── Backend ──
    { id: 10, title: 'APIs con .NET', description: 'Creación de APIs REST con .NET', institution: 'OpenBootcamp', date: 'May. 2023', image: 'assets/img/Cursos/Backend/curso-apis-con-net-openbootcamp-202305-1.jpg', link: 'assets/img/Cursos/Backend/curso-apis-con-net-openbootcamp-202305-1.jpg', category: 'backend' },
    { id: 11, title: 'APIs con .NET', description: 'Desarrollo de APIs modernas con .NET', institution: 'Platzi', date: 'Mar. 2026', image: 'assets/img/Cursos/Backend/curso-apis-con-net-platzi-202603-1.jpg', link: 'assets/img/Cursos/Backend/curso-apis-con-net-platzi-202603-1.jpg', category: 'backend' },
    { id: 12, title: 'C# 10 Profesional', description: 'Programación profesional en C# 10', institution: 'CodigoFacilito', date: 'Ago. 2023', image: 'assets/img/Cursos/Backend/curso-curso-profesional-de-c-10-codigofacilito-202308-1.jpg', link: 'assets/img/Cursos/Backend/curso-curso-profesional-de-c-10-codigofacilito-202308-1.jpg', category: 'backend' },
    { id: 13, title: 'PHP', description: 'Desarrollo backend con PHP', institution: 'OpenBootcamp', date: 'May. 2023', image: 'assets/img/Cursos/Backend/curso-php-openbootcamp-202305-1.jpg', link: 'assets/img/Cursos/Backend/curso-php-openbootcamp-202305-1.jpg', category: 'backend' },
    { id: 14, title: 'PHP 8 Profesional', description: 'Curso profesional de PHP 8', institution: 'CodigoFacilito', date: 'Jun. 2023', image: 'assets/img/Cursos/Backend/curso-curso-profesional-de-php-8-codigofacilito-202306-1.jpg', link: 'assets/img/Cursos/Backend/curso-curso-profesional-de-php-8-codigofacilito-202306-1.jpg', category: 'backend' },
    { id: 15, title: 'EntityFramework y LINQ', description: 'ORM Entity Framework y LINQ', institution: 'CodigoFacilito', date: 'Ago. 2023', image: 'assets/img/Cursos/Backend/curso-curso-de-entityframework-y-linq-codigofacilito-202308-1.jpg', link: 'assets/img/Cursos/Backend/curso-curso-de-entityframework-y-linq-codigofacilito-202308-1.jpg', category: 'backend' },
    { id: 16, title: 'Servicios Web con .NET', description: 'Web API en .NET', institution: 'CodigoFacilito', date: 'Ago. 2023', image: 'assets/img/Cursos/Backend/curso-curso-de-servicios-web-con-web-api-en-net-codigofacilito-202308-1.jpg', link: 'assets/img/Cursos/Backend/curso-curso-de-servicios-web-con-web-api-en-net-codigofacilito-202308-1.jpg', category: 'backend' },
    { id: 17, title: 'Taller API .NET + Azure', description: 'Desarrollo de API con .NET y despliegue en Azure', institution: 'CodigoFacilito', date: 'May. 2023', image: 'assets/img/Cursos/Backend/curso-taller-para-desarrollar-una-api-con-net-y-subirla-a-azure-codigofacilito-202305-1.jpg', link: 'assets/img/Cursos/Backend/curso-taller-para-desarrollar-una-api-con-net-y-subirla-a-azure-codigofacilito-202305-1.jpg', category: 'backend' },

    // ── AI / ML ──
    { id: 18, title: 'Agentes AI', description: 'Creación y despliegue de agentes de IA', institution: 'Platzi', date: 'Mar. 2026', image: 'assets/img/Cursos/AI-ML/curso-agentes-ai-platzi-202603-1.jpg', link: 'assets/img/Cursos/AI-ML/curso-agentes-ai-platzi-202603-1.jpg', category: 'ai-ml' },
    { id: 19, title: 'Ingeniería de Prompts', description: 'Técnicas avanzadas de prompt engineering', institution: 'CodigoFacilito', date: 'May. 2025', image: 'assets/img/Cursos/AI-ML/curso-curso-de-ingeniería-de-prompts-codigofacilito-202505-1.jpg', link: 'assets/img/Cursos/AI-ML/curso-curso-de-ingeniería-de-prompts-codigofacilito-202505-1.jpg', category: 'ai-ml' },
    { id: 20, title: 'Chatbots con Azure OpenAI', description: 'Desarrollo de chatbots usando Azure OpenAI', institution: 'Platzi', date: 'Mar. 2026', image: 'assets/img/Cursos/AI-ML/curso-desarrollo-de-chatbots-con-azure-openai-platzi-202603-1.jpg', link: 'assets/img/Cursos/AI-ML/curso-desarrollo-de-chatbots-con-azure-openai-platzi-202603-1.jpg', category: 'ai-ml' },
    { id: 21, title: 'Fundamentos de LLMs', description: 'Conceptos fundamentales de modelos de lenguaje', institution: 'Platzi', date: 'Mar. 2026', image: 'assets/img/Cursos/AI-ML/curso-fundamentos-de-llms-platzi-202603-1.jpg', link: 'assets/img/Cursos/AI-ML/curso-fundamentos-de-llms-platzi-202603-1.jpg', category: 'ai-ml' },
    { id: 22, title: 'Herramientas AI para Developers', description: 'Herramientas de IA aplicadas al desarrollo', institution: 'Platzi', date: 'Mar. 2026', image: 'assets/img/Cursos/AI-ML/curso-herramientas-de-ai-para-developers-platzi-202603-1.jpg', link: 'assets/img/Cursos/AI-ML/curso-herramientas-de-ai-para-developers-platzi-202603-1.jpg', category: 'ai-ml' },
    { id: 23, title: 'OpenAI API', description: 'Integración con la API de OpenAI', institution: 'Platzi', date: 'Mar. 2026', image: 'assets/img/Cursos/AI-ML/curso-openai-api-platzi-202603-1.jpg', link: 'assets/img/Cursos/AI-ML/curso-openai-api-platzi-202603-1.jpg', category: 'ai-ml' },
    { id: 24, title: 'Prompt Engineering', description: 'Ingeniería de prompts con IA generativa', institution: 'Platzi', date: 'Feb. 2026', image: 'assets/img/Cursos/AI-ML/curso-prompt-engineering-platzi-202602-1.jpg', link: 'assets/img/Cursos/AI-ML/curso-prompt-engineering-platzi-202602-1.jpg', category: 'ai-ml' },
    { id: 25, title: 'RAG con Microsoft Azure', description: 'Implementación de RAG con Azure AI', institution: 'Platzi', date: 'Mar. 2026', image: 'assets/img/Cursos/AI-ML/curso-rag-con-microsoft-azure-platzi-202603-1.jpg', link: 'assets/img/Cursos/AI-ML/curso-rag-con-microsoft-azure-platzi-202603-1.jpg', category: 'ai-ml' },
    { id: 26, title: 'Inmersión en Inteligencia Artificial', description: 'Programa intensivo de IA', institution: 'Imán', date: '2025', image: 'assets/img/Cursos/AI-ML/imanmersion AI-1.jpg', link: 'assets/img/Cursos/AI-ML/imanmersion AI-1.jpg', category: 'ai-ml' },

    // ── Bases de Datos ──
    { id: 27, title: 'SQL', description: 'Consultas SQL y administración de bases de datos', institution: 'OpenBootcamp', date: 'Jun. 2023', image: 'assets/img/Cursos/Bases-de-Datos/curso-sql-openbootcamp-202306-1.jpg', link: 'assets/img/Cursos/Bases-de-Datos/curso-sql-openbootcamp-202306-1.jpg', category: 'database' },
    { id: 28, title: 'Bases de Datos', description: 'Diseño y administración de bases de datos', institution: 'Argentina Programa', date: 'Jul. 2023', image: 'assets/img/Cursos/Bases-de-Datos/curso-base-de-datos-nivel-inicial-argentinaprograma-202307-1.jpg', link: 'assets/img/Cursos/Bases-de-Datos/curso-base-de-datos-nivel-inicial-argentinaprograma-202307-1.jpg', category: 'database' },

    // ── Ágiles y PM ──
    { id: 29, title: 'Trello', description: 'Gestión de proyectos con Trello', institution: 'Platzi', date: 'Mar. 2026', image: 'assets/img/Cursos/Agiles-PM/curso-trello-platzi-202603-1.jpg', link: 'assets/img/Cursos/Agiles-PM/curso-trello-platzi-202603-1.jpg', category: 'agile-pm' },
    { id: 30, title: 'Gestión de Equipos Ágiles', description: 'Metodologías ágiles para equipos de trabajo', institution: 'Platzi', date: 'Feb. 2026', image: 'assets/img/Cursos/Agiles-PM/curso-gestion-de-equipos-agiles-platzi-202602-1.jpg', link: 'assets/img/Cursos/Agiles-PM/curso-gestion-de-equipos-agiles-platzi-202602-1.jpg', category: 'agile-pm' },
    { id: 31, title: 'Historias de Usuario en Scrum', description: 'Redacción y gestión de historias de usuario', institution: 'Platzi', date: 'Feb. 2026', image: 'assets/img/Cursos/Agiles-PM/curso-historias-de-usuario-en-scrum-platzi-202602-1.jpg', link: 'assets/img/Cursos/Agiles-PM/curso-historias-de-usuario-en-scrum-platzi-202602-1.jpg', category: 'agile-pm' },
    { id: 32, title: 'Fundamentos de Project Management', description: 'Gestión de proyectos tradicional y ágil', institution: 'Platzi', date: 'Feb. 2026', image: 'assets/img/Cursos/Agiles-PM/curso-fundamentos-project-management-platzi-202602-1.jpg', link: 'assets/img/Cursos/Agiles-PM/curso-fundamentos-project-management-platzi-202602-1.jpg', category: 'agile-pm' },
    { id: 33, title: 'Análisis de Datos para PM', description: 'Análisis de datos aplicado a gestión de proyectos', institution: 'Platzi', date: 'Feb. 2026', image: 'assets/img/Cursos/Agiles-PM/curso-analisis-de-datos-para-la-gestion-de-proyectos-platzi-202602-1.jpg', link: 'assets/img/Cursos/Agiles-PM/curso-analisis-de-datos-para-la-gestion-de-proyectos-platzi-202602-1.jpg', category: 'agile-pm' },
    { id: 34, title: 'Ciclo de Vida del Software', description: 'SDLC y metodologías de desarrollo', institution: 'CodigoFacilito', date: 'Oct. 2023', image: 'assets/img/Cursos/Agiles-PM/curso-curso-ciclo-de-vida-del-desarrollo-de-software-codigofacilito-202310-1.jpg', link: 'assets/img/Cursos/Agiles-PM/curso-curso-ciclo-de-vida-del-desarrollo-de-software-codigofacilito-202310-1.jpg', category: 'agile-pm' },

    // ── Management ──
    { id: 35, title: 'Habilidades Directivas para Developers', description: 'Liderazgo y habilidades directivas', institution: 'Platzi', date: 'Feb. 2026', image: 'assets/img/Cursos/Management-Liderazgo/curso-habilidades-directivas-para-developers-platzi-202602-1.jpg', link: 'assets/img/Cursos/Management-Liderazgo/curso-habilidades-directivas-para-developers-platzi-202602-1.jpg', category: 'management' },
    { id: 36, title: 'Management en Tecnología', description: 'Gestión de equipos tecnológicos', institution: 'Platzi', date: 'Feb. 2026', image: 'assets/img/Cursos/Management-Liderazgo/curso-management-en-tecnologia-platzi-202602-1.jpg', link: 'assets/img/Cursos/Management-Liderazgo/curso-management-en-tecnologia-platzi-202602-1.jpg', category: 'management' },
    { id: 37, title: 'Liderazgo para Equipos', description: 'Liderazgo efectivo de equipos de trabajo', institution: 'Platzi', date: 'Feb. 2026', image: 'assets/img/Cursos/Management-Liderazgo/curso-liderazgo-para-equipos-de-trabajo-platzi-202602-1.jpg', link: 'assets/img/Cursos/Management-Liderazgo/curso-liderazgo-para-equipos-de-trabajo-platzi-202602-1.jpg', category: 'management' },
    { id: 38, title: 'Herramientas para Managers', description: 'Herramientas prácticas para managers', institution: 'Platzi', date: 'Feb. 2026', image: 'assets/img/Cursos/Management-Liderazgo/curso-herramientas-para-managers-platzi-202602-1.jpg', link: 'assets/img/Cursos/Management-Liderazgo/curso-herramientas-para-managers-platzi-202602-1.jpg', category: 'management' },
    { id: 39, title: 'Engineering Management', description: 'Gestión de ingeniería y equipos técnicos', institution: 'Platzi', date: 'Feb. 2026', image: 'assets/img/Cursos/Management-Liderazgo/curso-engineering-management-platzi-202602-1.jpg', link: 'assets/img/Cursos/Management-Liderazgo/curso-engineering-management-platzi-202602-1.jpg', category: 'management' },

    // ── Product Owner ──
    { id: 40, title: 'Product Owner Práctico', description: 'Rol del PO en equipos ágiles', institution: 'Platzi', date: 'Feb. 2026', image: 'assets/img/Cursos/Product-Owner/curso-product-owner-practico-platzi-202602-1.jpg', link: 'assets/img/Cursos/Product-Owner/curso-product-owner-practico-platzi-202602-1.jpg', category: 'product-owner' },
    { id: 41, title: 'Fundamentos de Product Owner', description: 'Conceptos clave del Product Owner', institution: 'Platzi', date: 'Feb. 2026', image: 'assets/img/Cursos/Product-Owner/curso-fundamentos-de-product-owner-platzi-202602-1.jpg', link: 'assets/img/Cursos/Product-Owner/curso-fundamentos-de-product-owner-platzi-202602-1.jpg', category: 'product-owner' },

    // ── Herramientas ──
    { id: 42, title: 'GitHub a Fondo', description: 'Control de versiones y colaboración con GitHub', institution: 'CodigoFacilito', date: 'Jun. 2023', image: 'assets/img/Cursos/Git-GitHub/curso-curso-a-fondo-de-github-codigofacilito-202306-1.jpg', link: 'assets/img/Cursos/Git-GitHub/curso-curso-a-fondo-de-github-codigofacilito-202306-1.jpg', category: 'tools' },

    // ── Otros ──
    { id: 43, title: 'Design Thinking Práctico', description: 'Metodología Design Thinking aplicada', institution: 'Platzi', date: 'Feb. 2026', image: 'assets/img/Cursos/Otros/curso-design-thinking-practico-platzi-202602-1.jpg', link: 'assets/img/Cursos/Otros/curso-design-thinking-practico-platzi-202602-1.jpg', category: 'others' },
    { id: 44, title: 'Bitcoin y Blockchain', description: 'Fundamentos de Bitcoin y tecnología blockchain', institution: 'Platzi', date: 'Feb. 2026', image: 'assets/img/Cursos/Otros/curso-bitcoin-blockchain-platzi-202602-1.jpg', link: 'assets/img/Cursos/Otros/curso-bitcoin-blockchain-platzi-202602-1.jpg', category: 'others' }
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  // Certificaciones filtradas por categoría y búsqueda
  filteredByCategory = computed(() => {
    let result = this.certifications;
    if (this.activeFilter() !== 'all') {
      result = result.filter(cert => cert.category === this.activeFilter());
    }
    return result;
  });

  filteredBySearch = computed(() => {
    const search = this.searchTerm().toLowerCase();
    if (!search) return this.filteredByCategory();
    return this.filteredByCategory().filter(cert => 
      cert.title.toLowerCase().includes(search) ||
      cert.institution.toLowerCase().includes(search) ||
      cert.description.toLowerCase().includes(search)
    );
  });

  // Total de páginas
  totalPages = computed(() => {
    return Math.ceil(this.filteredBySearch().length / this.itemsPerPage);
  });

  // Certificaciones paginadas
  paginatedCertifications = computed(() => {
    const start = (this.currentPage() - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    return this.filteredBySearch().slice(start, end);
  });

  // Estadísticas
  getCategoryCount(categoryId: string): number {
    if (categoryId === 'all') return this.certifications.length;
    return this.certifications.filter(cert => cert.category === categoryId).length;
  }

  // Cambiar filtro
  setFilter(filter: string): void {
    this.activeFilter.set(filter);
    this.currentPage.set(1); // Resetear página al cambiar filtro
    this.searchTerm.set(''); // Limpiar búsqueda
  }

  // Buscar
  onSearch(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.searchTerm.set(input.value);
    this.currentPage.set(1);
  }

  // Limpiar búsqueda
  clearSearch(): void {
    this.searchTerm.set('');
    this.currentPage.set(1);
  }

  // Cambiar página
  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages()) {
      this.currentPage.set(page);
      // Scroll suave al top de la sección
      if (this.isBrowser) {
        const element = document.getElementById('certification');
        element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }

  // Abrir modal con certificado
  openModal(cert: Certification): void {
    this.selectedCert.set(cert);
    this.showModal.set(true);
    if (this.isBrowser) {
      document.body.style.overflow = 'hidden';
    }
  }

  // Cerrar modal
  closeModal(): void {
    this.showModal.set(false);
    setTimeout(() => {
      this.selectedCert.set(null);
    }, 300);
    if (this.isBrowser) {
      document.body.style.overflow = '';
    }
  }
}