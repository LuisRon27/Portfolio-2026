import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollAnimationDirective } from '../../shared/directives/scroll-animation.directive';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, ScrollAnimationDirective],
  templateUrl: './footer.html',
  styleUrls: ['./footer.css']
})
export class Footer{
  currentYear: number = new Date().getFullYear();

  footerLinks = [
    { name: 'Inicio', href: '#home' },
    { name: 'Habilidades', href: '#skills' },
    { name: 'Servicios', href: '#services' },
    { name: 'Portafolio', href: '#portfolio' },
    { name: 'Contacto', href: '#contact' }
  ];

  socialLinks = [
    { name: 'LinkedIn', icon: 'uil uil-linkedin', url: 'https://www.linkedin.com/in/luis-ron/' },
    { name: 'WhatsApp', icon: 'uil uil-whatsapp', url: 'https://api.whatsapp.com/send/?phone=%2B5493537583500' },
    { name: 'GitHub', icon: 'uil uil-github', url: 'https://github.com/LuisRon27' },
    { name: 'Instagram', icon: 'uil uil-instagram', url: 'https://www.instagram.com/luisron_27/' }
  ];

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}