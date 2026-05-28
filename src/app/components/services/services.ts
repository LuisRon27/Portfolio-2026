import { Component, signal, Inject, PLATFORM_ID, OnDestroy, HostListener } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ScrollAnimationDirective } from '../../shared/directives/scroll-animation.directive';

interface Service {
  id: number;
  title: string;
  shortDescription: string;
  icon: string;
  features: string[];
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, ScrollAnimationDirective],
  templateUrl: './services.html',
  styleUrls: ['./services.css']
})
export class Services implements OnDestroy {
  private isBrowser: boolean;

  selectedService = signal<Service | null>(null);
  showModal = signal<boolean>(false);

  services: Service[] = [
    {
      id: 1,
      title: 'Desarrollo de Sitios Web',
      shortDescription: 'Creamos sitios web modernos y funcionales para tu negocio.',
      icon: 'uil uil-web-grid',
      features: [
        'Diseño personalizado',
        'Desarrollo en HTML/CSS',
        'Pruebas extensivas',
        'Entrenamiento básico',
        'Soporte continuo'
      ]
    },
    {
      id: 2,
      title: 'Aplicaciones Web Personalizadas',
      shortDescription: 'Desarrollamos aplicaciones web a medida.',
      icon: 'uil uil-arrow',
      features: [
        'Análisis de requerimientos',
        'Diseño de arquitectura',
        'Desarrollo de interfaz',
        'Desarrollo de back-end',
        'Integración de base de datos',
        'Pruebas y control de calidad',
        'Implementación y puesta en marcha',
        'Entrenamiento y soporte'
      ]
    },
    {
      id: 3,
      title: 'Desarrollo de Tiendas en Línea',
      shortDescription: 'Creamos tiendas en línea personalizadas.',
      icon: 'uil uil-store',
      features: [
        'Análisis de requerimientos',
        'Diseño atractivo y funcional',
        'Desarrollo de plataforma e-commerce',
        'Integración de pasarelas de pago',
        'Gestión de productos y catálogo',
        'Diseño responsivo',
        'Seguridad y protección de datos',
        'Entrenamiento y soporte'
      ]
    },
    {
      id: 4,
      title: 'Desarrollo de Aplicaciones de Escritorio',
      shortDescription: 'Desarrollamos aplicaciones de escritorio.',
      icon: 'uil uil-desktop',
      features: [
        'Análisis de requerimientos',
        'Diseño de interfaz de usuario',
        'Desarrollo de lógica y funcionalidad',
        'Integración de base de datos',
        'Pruebas y control de calidad',
        'Empaquetado y distribución',
        'Entrenamiento y soporte'
      ]
    }
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnDestroy(): void {
    if (this.isBrowser) {
      document.body.style.overflow = '';
    }
  }

  openModal(service: Service): void {
    this.selectedService.set(service);
    this.showModal.set(true);
    if (this.isBrowser) {
      document.body.style.overflow = 'hidden';
    }
  }

  closeModal(): void {
    this.showModal.set(false);
    setTimeout(() => {
      this.selectedService.set(null);
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