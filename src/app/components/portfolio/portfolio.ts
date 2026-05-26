import { Component, signal, computed, Inject, PLATFORM_ID, HostListener } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProjectDataService, Project } from '../../services/project-data.service';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './portfolio.html',
  styleUrls: ['./portfolio.css']
})
export class Portfolio {
  private isBrowser: boolean;

  activeFilter = signal<string>('all');
  searchTerm = signal<string>('');
  currentPage = signal<number>(1);
  itemsPerPage = 6;
  selectedProject = signal<Project | null>(null);
  showModal = signal<boolean>(false);

  categories = [
    { id: 'all', name: 'Todos', icon: 'uil uil-apps', color: '#6c5ce7' },
    { id: 'fullstack', name: 'Full-Stack', icon: 'uil uil-code-branch', color: '#00b894' },
    { id: 'frontend', name: 'Front-End', icon: 'uil uil-brackets-curly', color: '#0984e3' },
    { id: 'web', name: 'Web Apps', icon: 'uil uil-browser', color: '#f39c12' },
    { id: 'desktop', name: 'Desktop', icon: 'uil uil-desktop', color: '#e17055' },
    { id: 'ai', name: 'AI & Automation', icon: 'uil uil-robot', color: '#a29bfe' }
  ];

  projects: Project[];

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private projectData: ProjectDataService
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
    this.projects = this.projectData.projects;
  }

  filteredByCategory = computed(() => {
    let result = this.projects;
    if (this.activeFilter() !== 'all') {
      result = result.filter(p => p.category === this.activeFilter());
    }
    return result;
  });

  filteredBySearch = computed(() => {
    const search = this.searchTerm().toLowerCase();
    if (!search) return this.filteredByCategory();
    return this.filteredByCategory().filter(p => 
      p.title.toLowerCase().includes(search) ||
      p.description.toLowerCase().includes(search) ||
      p.technologies.some(t => t.toLowerCase().includes(search))
    );
  });

  totalPages = computed(() => {
    return Math.ceil(this.filteredBySearch().length / this.itemsPerPage);
  });

  paginatedProjects = computed(() => {
    const start = (this.currentPage() - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    return this.filteredBySearch().slice(start, end);
  });

  getCategoryCount(categoryId: string): number {
    if (categoryId === 'all') return this.projects.length;
    return this.projects.filter(p => p.category === categoryId).length;
  }

  setFilter(filter: string): void {
    this.activeFilter.set(filter);
    this.currentPage.set(1);
    this.searchTerm.set('');
  }

  onSearch(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.searchTerm.set(input.value);
    this.currentPage.set(1);
  }

  clearSearch(): void {
    this.searchTerm.set('');
    this.currentPage.set(1);
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages()) {
      this.currentPage.set(page);
      if (this.isBrowser) {
        const element = document.getElementById('portfolio');
        element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }

  openModal(project: Project): void {
    this.selectedProject.set(project);
    this.showModal.set(true);
    if (this.isBrowser) {
      document.body.style.overflow = 'hidden';
    }
  }

  closeModal(): void {
    this.showModal.set(false);
    setTimeout(() => {
      this.selectedProject.set(null);
    }, 300);
    if (this.isBrowser) {
      document.body.style.overflow = '';
    }
  }

  @HostListener('document:keydown.escape')
  onEscapeHandler(): void {
    if (this.showModal()) {
      this.closeModal();
    }
  }
}
