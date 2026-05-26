import { Directive, Input, ElementRef, AfterViewInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[scrollReveal]',
  standalone: true
})
export class ScrollAnimationDirective implements AfterViewInit, OnDestroy {
  @Input('scrollReveal') animationType: 'up' | 'down' | 'left' | 'right' | 'scale' | 'none' | '' = 'up';
  @Input() scrollRevealDelay: string | number = 0;
  @Input() scrollRevealThreshold: string | number = 0.15;

  private observer: IntersectionObserver | null = null;
  private isBrowser: boolean;

  constructor(
    private el: ElementRef<HTMLElement>,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngAfterViewInit(): void {
    if (!this.isBrowser) return;

    const element = this.el.nativeElement;

    const delay = typeof this.scrollRevealDelay === 'string' ? parseFloat(this.scrollRevealDelay) : this.scrollRevealDelay;
    const threshold = typeof this.scrollRevealThreshold === 'string' ? parseFloat(this.scrollRevealThreshold) : this.scrollRevealThreshold;

    element.classList.add('scroll-reveal');

    if (this.animationType !== 'up' && this.animationType !== '' && this.animationType !== 'none') {
      element.classList.add(`scroll-reveal--${this.animationType}`);
    }

    if (this.animationType === 'none') {
      element.classList.add('scroll-reveal--none');
    }

    if (delay > 0) {
      element.style.transitionDelay = `${delay}s`;
    }

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          element.classList.add('scroll-reveal--visible');
          this.observer?.disconnect();
        }
      });
    }, { threshold });

    this.observer.observe(element);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
