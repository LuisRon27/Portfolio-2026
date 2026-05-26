import { Component, OnInit, signal, computed, Inject, PLATFORM_ID, HostListener, Renderer2, OnDestroy } from '@angular/core';
import { CommonModule, DOCUMENT, isPlatformBrowser } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { ProjectDataService, Project } from '../../services/project-data.service';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './project-detail.html',
  styleUrls: ['./project-detail.css']
})
export class ProjectDetail implements OnInit, OnDestroy {
  project = signal<Project | null>(null);
  loading = signal(true);
  error = signal(false);
  selectedImage = signal<string>('');
  activeTab = signal<'description' | 'features' | 'challenges'>('description');
  showScrollTop = signal(false);
  relatedProjects = computed(() => {
    const current = this.project();
    if (!current) return [];
    return this.projectData.projects
      .filter(p => p.category === current.category && p.id !== current.id)
      .slice(0, 3);
  });
  private isBrowser: boolean;

  constructor(
    private route: ActivatedRoute,
    private projectData: ProjectDataService,
    private titleService: Title,
    private metaService: Meta,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const slug = params.get('slug');
      if (slug) {
        const found = this.projectData.getProjectBySlug(slug);
        if (found) {
          this.project.set(found);
          this.selectedImage.set(found.image);
          this.updateSeo(found);
        } else {
          this.error.set(true);
          this.titleService.setTitle('Proyecto no encontrado | Luis Ron - Full-Stack Developer');
          this.metaService.updateTag({ name: 'description', content: 'El proyecto solicitado no existe en el portafolio de Luis Ron.' });
        }
      } else {
        this.error.set(true);
        this.titleService.setTitle('Proyecto no encontrado | Luis Ron - Full-Stack Developer');
        this.metaService.updateTag({ name: 'description', content: 'El proyecto solicitado no existe en el portafolio de Luis Ron.' });
      }
      this.loading.set(false);
    });
  }

  ngOnDestroy(): void {
    this.cleanupSeo();
  }

  private updateSeo(project: Project): void {
    const fullTitle = `${project.title} | Luis Ron - ${project.categoryName}`;
    this.titleService.setTitle(fullTitle);

    const desc = project.description.length > 155
      ? project.description.substring(0, 152) + '...'
      : project.description;

    this.metaService.updateTag({ name: 'description', content: desc });
    this.metaService.updateTag({ name: 'keywords', content: project.technologies.join(', ') + ', Luis Ron, Full-Stack Developer, ' + project.categoryName + ', ' + project.title });

    this.metaService.updateTag({ property: 'og:title', content: fullTitle });
    this.metaService.updateTag({ property: 'og:description', content: desc });
    this.metaService.updateTag({ property: 'og:url', content: `https://LuisRon.github.io/proyecto/${project.slug}` });
    this.metaService.updateTag({ property: 'og:image', content: `https://LuisRon.github.io/${project.image}` });
    this.metaService.updateTag({ property: 'og:type', content: 'article' });

    this.metaService.updateTag({ name: 'twitter:title', content: fullTitle });
    this.metaService.updateTag({ name: 'twitter:description', content: desc });
    this.metaService.updateTag({ name: 'twitter:image', content: `https://LuisRon.github.io/${project.image}` });

    this.addCreativeWorkJsonLd(project);
  }

  private addCreativeWorkJsonLd(project: Project): void {
    const scriptId = 'json-ld-creativework';
    const existing = this.document.getElementById(scriptId);
    if (existing) {
      existing.remove();
    }

    const script = this.renderer.createElement('script');
    this.renderer.setAttribute(script, 'type', 'application/ld+json');
    this.renderer.setAttribute(script, 'id', scriptId);

    const jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'CreativeWork',
      name: project.title,
      description: project.description,
      dateCreated: project.date,
      about: project.subtitle,
      keywords: project.technologies.join(', '),
      url: `https://LuisRon.github.io/proyecto/${project.slug}`,
      image: `https://LuisRon.github.io/${project.image}`,
      author: {
        '@type': 'Person',
        name: 'Luis Ron'
      }
    };

    this.renderer.appendChild(script, this.renderer.createText(JSON.stringify(jsonLd)));
    const head = this.document.head;
    if (head) {
      this.renderer.appendChild(head, script);
    }
  }

  private cleanupSeo(): void {
    const script = this.document.getElementById('json-ld-creativework');
    if (script) {
      script.remove();
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    if (this.isBrowser) {
      this.showScrollTop.set(window.scrollY > 300);
    }
  }

  selectImage(img: string): void {
    this.selectedImage.set(img);
  }

  setTab(tab: 'description' | 'features' | 'challenges'): void {
    this.activeTab.set(tab);
  }

  scrollToTop(): void {
    if (this.isBrowser) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  getCategoryColor(category: string): string {
    const colors: Record<string, string> = {
      fullstack: '#00b894',
      frontend: '#0984e3',
      web: '#f39c12',
      desktop: '#e17055',
      ai: '#a29bfe'
    };
    return colors[category] || '#6c5ce7';
  }
}