import { Component, HostListener, signal, Inject, PLATFORM_ID, Renderer2, OnInit } from '@angular/core';
import { CommonModule, DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Navbar } from '../../components/navbar/navbar';
import { Home } from '../../components/home/home';
import { About } from '../../components/about/about';
import { Skills } from '../../components/skills/skills';
import { Qualification } from '../../components/qualification/qualification';
import { Certifications } from '../../components/certifications/certifications';
import { Services } from '../../components/services/services';
import { Portfolio } from '../../components/portfolio/portfolio';
import { Contact } from '../../components/contact/contact';
import { Footer } from '../../components/footer/footer';
import { ScrollAnimationDirective } from '../../shared/directives/scroll-animation.directive';
import { ProjectDataService } from '../../services/project-data.service';
import { Recognitions } from "../../components/recognitions/recognitions";

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    CommonModule,
    ScrollAnimationDirective,
    Navbar,
    Home,
    About,
    Skills,
    Qualification,
    Certifications,
    Services,
    Portfolio,
    Contact,
    Footer,
    Recognitions
],
  templateUrl: './main-page.html',
  styleUrls: ['./main-page.css']
})
export class MainPage implements OnInit {
  showScrollTop = signal(false);
  showWhatsApp = signal(false);

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2,
    private projectData: ProjectDataService
  ) {}

  ngOnInit(): void {
    this.addItemListJsonLd();
  }

  private addItemListJsonLd(): void {
    const items = this.projectData.projects.map((p, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'CreativeWork',
        name: p.title,
        url: `https://LuisRon.github.io/proyecto/${p.slug}`,
        description: p.description,
        keywords: p.technologies.join(', ')
      }
    }));

    const jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Proyectos de Luis Ron - Full-Stack Developer',
      description: 'Portafolio de 16 proyectos de desarrollo web, full-stack, frontend, desktop y automatización con IA.',
      itemListElement: items,
      numberOfItems: this.projectData.projects.length
    };

    const script = this.renderer.createElement('script');
    this.renderer.setAttribute(script, 'type', 'application/ld+json');
    this.renderer.setAttribute(script, 'id', 'json-ld-itemlist');
    this.renderer.appendChild(script, this.renderer.createText(JSON.stringify(jsonLd)));
    const head = this.document.head;
    if (head) {
      this.renderer.appendChild(head, script);
    }
  }

  scrollToContact(): void {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  @HostListener('window:scroll')
  onScroll() {
    if (isPlatformBrowser(this.platformId)) {
      this.showWhatsApp.set(window.scrollY >= 300);
      this.showScrollTop.set(window.scrollY >= 500);
    }
  }

  scrollToTop() {
    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
}
