import { Component, AfterViewInit, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

interface Recognition {
  id: number;
  title: string;
  institution: string;
  date: string;
  description: string;
  image: string;
  type: 'academic' | 'human' | 'honor';
  icon: string;
  color: string;
}

@Component({
  selector: 'app-recognitions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recognitions.html',
  styleUrls: ['./recognitions.css']
})
export class Recognitions implements AfterViewInit {
  private isBrowser: boolean;

  recognitions: Recognition[] = [
    {
      id: 1,
      title: 'Mejor Compañero - Promoción 2023',
      institution: 'Instituto Superior "Dr. Ramón J. Carrillo"',
      date: '31 de Octubre de 2023',
      description: 'Distinción otorgada por sus compañeros, reconociendo su calidad humana, compañerismo y contribución positiva al ambiente educativo.',
      image: 'assets/img/reconocimientos/reconocimiento2.webp',
      type: 'human',
      icon: 'uil uil-heart',
      color: '#e17055'
    },
    {
      id: 2,
      title: 'Cuadro de Honor - Abanderado',
      institution: 'Instituto Superior "Dr. Ramón J. Carrillo"',
      date: 'Mayo de 2023',
      description: 'Reconocimiento al alto desempeño académico, compromiso y participación destacada, integrante del Cuadro de Honor institucional.',
      image: 'assets/img/reconocimientos/reconocimiento1.webp',
      type: 'academic',
      icon: 'uil uil-trophy',
      color: '#00b894'
    }
  ];

  isModalOpen = false;
  selectedRecognition: Recognition | null = null;

  // Zoom state
  zoomLevel = 1;
  private readonly MIN_ZOOM = 1;
  private readonly MAX_ZOOM = 5;
  private readonly ZOOM_STEP = 0.1;
  private readonly DEFAULT_ZOOM = 2;
  zoomOriginX = 50;
  zoomOriginY = 50;

  // Pan state
  isDragging = false;
  private dragStartX = 0;
  private dragStartY = 0;
  currentTranslateX = 0;
  currentTranslateY = 0;

  // Touch tracking
  private touchMoved = false;

  // Zoom HUD
  showZoomHud = false;
  private zoomHudTimeout: ReturnType<typeof setTimeout> | null = null;

  // Pinch state
  private isPinching = false;
  private pinchStartDistance = 0;
  private pinchStartZoom = 1;

  get isZoomed(): boolean {
    return this.zoomLevel > 1;
  }

  get currentIndex(): number {
    if (!this.selectedRecognition) return -1;
    return this.recognitions.findIndex(r => r.id === this.selectedRecognition!.id);
  }

  get hasNext(): boolean {
    return this.currentIndex < this.recognitions.length - 1;
  }

  get hasPrev(): boolean {
    return this.currentIndex > 0;
  }

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngAfterViewInit(): void {
    if (this.isBrowser) {
      this.initScrollAnimation();
    }
  }

  openModal(recognition: Recognition): void {
    this.selectedRecognition = recognition;
    this.isModalOpen = true;
    this.resetZoom();
    if (this.isBrowser) {
      document.body.style.overflow = 'hidden';
    }
  }

  closeModal(): void {
    this.isModalOpen = false;
    this.selectedRecognition = null;
    this.resetZoom();
    if (this.isBrowser) {
      document.body.style.overflow = '';
    }
  }

  nextImage(): void {
    if (!this.hasNext) return;
    this.resetZoom();
    this.selectedRecognition = this.recognitions[this.currentIndex + 1];
  }

  prevImage(): void {
    if (!this.hasPrev) return;
    this.resetZoom();
    this.selectedRecognition = this.recognitions[this.currentIndex - 1];
  }

  toggleZoom(event: MouseEvent | TouchEvent): void {
    if (this.touchMoved) {
      this.touchMoved = false;
      return;
    }

    if (this.isZoomed) {
      this.zoomOut();
    } else {
      this.zoomIn(event);
    }
  }

  private zoomIn(event: MouseEvent | TouchEvent): void {
    const target = event.target as HTMLElement;
    const img = target.closest('img');
    const container = img?.closest('.recognition__modal-image') as HTMLElement;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const clientX = 'touches' in event
      ? (event as TouchEvent).touches[0].clientX
      : (event as MouseEvent).clientX;
    const clientY = 'touches' in event
      ? (event as TouchEvent).touches[0].clientY
      : (event as MouseEvent).clientY;

    this.zoomOriginX = ((clientX - rect.left) / rect.width) * 100;
    this.zoomOriginY = ((clientY - rect.top) / rect.height) * 100;
    this.currentTranslateX = 0;
    this.currentTranslateY = 0;
    this.zoomLevel = this.DEFAULT_ZOOM;
  }

  private zoomOut(): void {
    this.zoomLevel = 1;
    this.currentTranslateX = 0;
    this.currentTranslateY = 0;
  }

  resetZoom(): void {
    this.zoomLevel = 1;
    this.currentTranslateX = 0;
    this.currentTranslateY = 0;
  }

  onImageDblClick(): void {
    if (this.isZoomed) {
      this.zoomLevel = 1;
      this.currentTranslateX = 0;
      this.currentTranslateY = 0;
    }
  }

  private showZoomIndicator(): void {
    this.showZoomHud = true;
    if (this.zoomHudTimeout) {
      clearTimeout(this.zoomHudTimeout);
    }
    this.zoomHudTimeout = setTimeout(() => {
      this.showZoomHud = false;
    }, 1500);
  }

  onWheel(event: WheelEvent): void {
    if (!this.isModalOpen) return;

    const target = event.target as HTMLElement;
    if (target.closest('.recognition__modal-nav')) return;

    event.preventDefault();

    const container = target.closest('.recognition__modal-image') as HTMLElement;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    this.zoomOriginX = ((event.clientX - rect.left) / rect.width) * 100;
    this.zoomOriginY = ((event.clientY - rect.top) / rect.height) * 100;

    if (event.deltaY < 0) {
      this.zoomLevel = Math.min(this.zoomLevel + this.ZOOM_STEP, this.MAX_ZOOM);
    } else {
      this.zoomLevel = Math.max(this.zoomLevel - this.ZOOM_STEP, this.MIN_ZOOM);
    }

    if (this.zoomLevel <= 1) {
      this.currentTranslateX = 0;
      this.currentTranslateY = 0;
    }

    this.showZoomIndicator();
  }

  onDragStart(event: MouseEvent | TouchEvent): void {
    if (!this.isZoomed) return;
    event.preventDefault();
    this.isDragging = true;
    const pos = this.getEventPosition(event);
    this.dragStartX = pos.x - this.currentTranslateX;
    this.dragStartY = pos.y - this.currentTranslateY;
  }

  onDragMove(event: MouseEvent | TouchEvent): void {
    if (!this.isDragging) return;
    event.preventDefault();
    const pos = this.getEventPosition(event);

    const target = event.target as HTMLElement;
    const container = target.closest('.recognition__modal-image') as HTMLElement;
    if (!container) return;

    const rect = container.getBoundingClientRect();

    const rawX = pos.x - this.dragStartX;
    const rawY = pos.y - this.dragStartY;

    const boundX = rect.width * (this.zoomLevel - 1) * 0.5;
    const boundY = rect.height * (this.zoomLevel - 1) * 0.5;

    this.currentTranslateX = Math.min(Math.max(rawX, -boundX), boundX);
    this.currentTranslateY = Math.min(Math.max(rawY, -boundY), boundY);
  }

  onDragEnd(): void {
    this.isDragging = false;
  }

  private getEventPosition(event: MouseEvent | TouchEvent): { x: number; y: number } {
    if ('touches' in event) {
      return { x: event.touches[0].clientX, y: event.touches[0].clientY };
    }
    return { x: event.clientX, y: event.clientY };
  }

  onTouchStart(event: TouchEvent): void {
    if (event.touches.length === 2) {
      this.isPinching = true;
      this.isDragging = false;
      this.pinchStartDistance = this.getTouchDistance(event);
      this.pinchStartZoom = this.zoomLevel;

      const target = event.target as HTMLElement;
      const container = target.closest('.recognition__modal-image') as HTMLElement;
      if (container) {
        const rect = container.getBoundingClientRect();
        const midX = (event.touches[0].clientX + event.touches[1].clientX) / 2;
        const midY = (event.touches[0].clientY + event.touches[1].clientY) / 2;
        this.zoomOriginX = ((midX - rect.left) / rect.width) * 100;
        this.zoomOriginY = ((midY - rect.top) / rect.height) * 100;
      }
      return;
    }

    this.touchMoved = false;
    this.onDragStart(event);
  }

  onTouchMove(event: TouchEvent): void {
    if (this.isPinching && event.touches.length === 2) {
      event.preventDefault();
      this.touchMoved = true;
      const distance = this.getTouchDistance(event);
      const scale = distance / this.pinchStartDistance;
      this.zoomLevel = Math.min(
        Math.max(this.pinchStartZoom * scale, this.MIN_ZOOM),
        this.MAX_ZOOM
      );

      const target = event.target as HTMLElement;
      const container = target.closest('.recognition__modal-image') as HTMLElement;
      if (container) {
        const rect = container.getBoundingClientRect();
        const midX = (event.touches[0].clientX + event.touches[1].clientX) / 2;
        const midY = (event.touches[0].clientY + event.touches[1].clientY) / 2;
        this.zoomOriginX = ((midX - rect.left) / rect.width) * 100;
        this.zoomOriginY = ((midY - rect.top) / rect.height) * 100;
      }

      this.showZoomIndicator();
      return;
    }

    this.touchMoved = true;
    this.onDragMove(event);
  }

  onTouchEnd(event: TouchEvent): void {
    if (this.isPinching) {
      this.isPinching = false;
      if (event.touches.length === 1) {
        const pos = { x: event.touches[0].clientX, y: event.touches[0].clientY };
        this.isDragging = true;
        this.dragStartX = pos.x - this.currentTranslateX;
        this.dragStartY = pos.y - this.currentTranslateY;
      }
      return;
    }
    this.onDragEnd();
  }

  private getTouchDistance(event: TouchEvent): number {
    const dx = event.touches[0].clientX - event.touches[1].clientX;
    const dy = event.touches[0].clientY - event.touches[1].clientY;
    return Math.sqrt(dx * dx + dy * dy);
  }

  @HostListener('window:keydown.escape')
  onEscapePress(): void {
    if (this.isModalOpen) {
      this.closeModal();
    }
  }

  @HostListener('window:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent): void {
    if (!this.isModalOpen) return;
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      this.nextImage();
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault();
      this.prevImage();
    }
  }

  private initScrollAnimation(): void {
    const cards = document.querySelectorAll('.recognition__card');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('recognition__card-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    cards.forEach(card => observer.observe(card));
  }
}
