import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollAnimationDirective } from '../../shared/directives/scroll-animation.directive';

@Component({
  selector: 'app-qualification',
  standalone: true,
  imports: [CommonModule, ScrollAnimationDirective],
  templateUrl: './qualification.html',
  styleUrls: ['./qualification.css']
})
export class Qualification {
  activeTab: string = 'education';

  // ==================== EDUCACIÓN ====================
  educationList = [
    {
      title: 'Licenciatura en Tecnologías Digitales',
      institution: 'Universidad de la Ciudad de Buenos Aires',
      logo: '/assets/img/qualification/udelaciudad.webp',
      link: 'https://www.udelaciudad.edu.ar/',
      date: 'Ago. 2025 – Actualidad',
      description: 'Formación universitaria en tecnologías digitales'
    },
    {
      title: 'Tecnicatura Superior en Desarrollo de Software',
      institution: 'Instituto Superior Dr. Ramón Carrillo',
      logo: '/assets/img/qualification/institutocarrillobellville.webp',
      link: 'http://institutocarrillobellville.edu.ar/',
      date: 'Abr. 2021 – Nov. 2023',
      description: 'Especialización en desarrollo de software full-stack'
    },
    {
      title: 'Bachiller en Ciencias',
      institution: 'U.E.P Colegio EDUPAL, Venezuela',
      logo: '/assets/img/qualification/edupal.webp',
      link: '',
      date: '2011 - 2016',
      description: 'Educación secundaria'
    }
  ];

  // ==================== EXPERIENCIA LABORAL ====================
  experienceList = [
    {
      title: 'Full-Stack Developer & Technical Lead',
      company: 'Instituto Oncológico Henry Moore',
      logo: '/assets/img/qualification/hm.webp',
      link: 'https://hmoore.com.ar/',
      date: 'Oct. 2023 – Actualidad',
      description: 'Liderazgo técnico y desarrollo full-stack con Angular, ASP.NET Core y SQL Server. Diseño de APIs REST, arquitecturas escalables, gestión de despliegues en IIS y coordinación de equipo de desarrollo.'
    },
    {
      title: 'Freelance Full-Stack Developer',
      company: 'ENERGY SQUARE',
      logo: '/assets/img/qualification/energy_square.webp',
      link: 'https://energysquare.com.ar/',
      date: 'Sept. 2024 – Dic. 2024',
      description: 'Desarrollo integral de sitio web corporativo y sistema de administración de proyectos. Implementación de back-end en PHP, MySQL, front-end responsive y autenticación segura.'
    },
    {
      title: 'Freelance Software Developer',
      company: 'Automotores Sudeste',
      logo: '/assets/img/qualification/Sudeste.webp',
      link: 'https://www.instagram.com/sudesteautomotores/',
      date: 'Nov. 2022 – Ene. 2023',
      description: 'Desarrollo de software desktop a medida para gestión de clientes y ventas.'
    }
  ];

  setActiveTab(tab: string): void {
    this.activeTab = tab;
  }
}