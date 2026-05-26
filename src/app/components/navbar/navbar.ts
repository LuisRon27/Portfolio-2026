import { Component, OnInit, Inject, PLATFORM_ID, AfterViewInit } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css']
})
export class Navbar implements OnInit, AfterViewInit {
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit(): void {
    if (this.isBrowser) {
      this.initTheme();
    }
  }

  ngAfterViewInit(): void {
    if (this.isBrowser) {
      this.initMenuEvents();
      this.initScrollActive();
      this.initScrollHeader();
      this.initScrollUp();
      this.initThemeButton();
    }
  }

  // ==================== MENU SHOW Y HIDDEN ====================
  private initMenuEvents(): void {
    const navMenu = document.getElementById('nav-menu');
    const navToggle = document.getElementById('nav-toggle');
    const navClose = document.getElementById('nav-close');

    if (navToggle) {
      navToggle.addEventListener('click', () => {
        navMenu?.classList.add('show-menu');
      });
    }

    if (navClose) {
      navClose.addEventListener('click', () => {
        navMenu?.classList.remove('show-menu');
      });
    }

    const navLinks = document.querySelectorAll('.nav_link');
    navLinks.forEach(n => {
      n.addEventListener('click', () => {
        navMenu?.classList.remove('show-menu');
      });
    });
  }

  // ==================== SCROLL SECTIONS ACTIVE LINK ====================
  private initScrollActive(): void {
    const sections = document.querySelectorAll('section[id]');

    const scrollActive = () => {
      const scrollY = window.pageYOffset;

      sections.forEach(current => {
        const element = current as HTMLElement;
        const sectionHeight = element.offsetHeight;
        const sectionTop = element.offsetTop - 50;
        const sectionId = element.getAttribute('id');

        const link = document.querySelector(`.nav_menu a[href*="${sectionId}"]`);
        if (link) {
          if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            link.classList.add('active-link');
          } else {
            link.classList.remove('active-link');
          }
        }
      });
    };

    window.addEventListener('scroll', scrollActive);
    scrollActive();
  }

  // ==================== CHANGE BACKGROUND HEADER ====================
  private initScrollHeader(): void {
    const scrollHeader = () => {
      const nav = document.getElementById('header');
      if (window.scrollY >= 80) {
        nav?.classList.add('scroll-header');
      } else {
        nav?.classList.remove('scroll-header');
      }
    };

    window.addEventListener('scroll', scrollHeader);
    scrollHeader();
  }

  // ==================== SHOW SCROLL UP ====================
  private initScrollUp(): void {
    const scrollUp = () => {
      const scrollUpBtn = document.getElementById('scroll-up');
      if (window.scrollY >= 560) {
        scrollUpBtn?.classList.add('show-scroll');
      } else {
        scrollUpBtn?.classList.remove('show-scroll');
      }
    };

    window.addEventListener('scroll', scrollUp);
    scrollUp();
  }

  // ==================== DARK LIGHT THEME ====================
  private initTheme(): void {
    const darkTheme = 'dark-theme';
    const iconTheme = 'uil-sun';

    const selectedTheme = localStorage.getItem('selected-theme');
    const selectedIcon = localStorage.getItem('selected-icon');

    // Aplicar tema guardado
    if (selectedTheme === 'dark') {
      document.body.classList.add(darkTheme);
    } else if (selectedTheme === 'light') {
      document.body.classList.remove(darkTheme);
    } else {
      // Si no hay tema guardado, revisar preferencia del sistema
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (prefersDark) {
        document.body.classList.add(darkTheme);
      }
    }

    // Aplicar ícono guardado
    const themeButton = document.getElementById('theme-button');
    if (themeButton && selectedIcon) {
      if (selectedIcon === 'uil-sun') {
        themeButton.classList.remove('uil-moon');
        themeButton.classList.add('uil-sun');
      } else {
        themeButton.classList.remove('uil-sun');
        themeButton.classList.add('uil-moon');
      }
    }
  }

  private initThemeButton(): void {
    const themeButton = document.getElementById('theme-button');
    const darkTheme = 'dark-theme';
    const iconTheme = 'uil-sun';

    if (!themeButton) return;

    const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
    const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun';

    // Eliminar event listeners anteriores para evitar duplicados
    const newButton = themeButton.cloneNode(true);
    themeButton.parentNode?.replaceChild(newButton, themeButton);
    const freshButton = document.getElementById('theme-button');

    freshButton?.addEventListener('click', () => {
      // Alternar tema
      if (document.body.classList.contains(darkTheme)) {
        document.body.classList.remove(darkTheme);
        localStorage.setItem('selected-theme', 'light');
        freshButton.classList.remove('uil-sun');
        freshButton.classList.add('uil-moon');
        localStorage.setItem('selected-icon', 'uil-moon');
      } else {
        document.body.classList.add(darkTheme);
        localStorage.setItem('selected-theme', 'dark');
        freshButton.classList.remove('uil-moon');
        freshButton.classList.add('uil-sun');
        localStorage.setItem('selected-icon', 'uil-sun');
      }
    });
  }
}