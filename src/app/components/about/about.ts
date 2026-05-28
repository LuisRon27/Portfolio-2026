import { Component, AfterViewInit, Inject, PLATFORM_ID, OnDestroy } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ScrollAnimationDirective } from '../../shared/directives/scroll-animation.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, ScrollAnimationDirective],
  templateUrl: './about.html',
  styleUrls: ['./about.css']
})
export class About implements AfterViewInit, OnDestroy {
  private isBrowser: boolean;
  private animationStarted = false;
  private observer: IntersectionObserver | null = null;

  // Datos de estadísticas
  stats = [
    { value: 3, label: 'Años de Experiencia', icon: 'uil uil-briefcase-alt' },
    { value: 45, label: 'Certificaciones', icon: 'uil uil-trophy' },
    { value: 18, label: 'Proyectos', icon: 'uil uil-code-branch' }
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngAfterViewInit(): void {
    if (this.isBrowser) {
      setTimeout(() => {
        this.initNumberAnimation();
      }, 500);
    }
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  private animateNumber(element: HTMLElement, targetNumber: number): void {
    let currentNumber = 0;
    const duration = 2000;
    const increment = targetNumber / (duration / 16);
    
    const interval = setInterval(() => {
      currentNumber += increment;
      if (currentNumber >= targetNumber) {
        currentNumber = targetNumber;
        clearInterval(interval);
      }
      element.textContent = `${Math.floor(currentNumber)}+`;
    }, 16);
  }

  private initNumberAnimation(): void {
    const aboutSection = document.getElementById('about');
    
    if (!aboutSection) {
      setTimeout(() => this.initNumberAnimation(), 500);
      return;
    }

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !this.animationStarted) {
          const statNumbers = document.querySelectorAll('.about__stat-number');
          statNumbers.forEach((stat, index) => {
            if (index < this.stats.length) {
              this.animateNumber(stat as HTMLElement, this.stats[index].value);
            }
          });
          this.animationStarted = true;
          this.observer?.disconnect();
        }
      });
    }, { threshold: 0.3 });

    this.observer.observe(aboutSection);
  }

  downloadCV(): void {
    const link = document.createElement('a');
    link.download = 'Curriculum_Luis_Ron.pdf';
    link.href = 'assets/pdf/Currículum vitae.pdf';
    link.click();
  }
}