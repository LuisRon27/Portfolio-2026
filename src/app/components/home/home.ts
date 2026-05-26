import { Component, AfterViewInit, ElementRef, ViewChild, Inject, PLATFORM_ID, OnInit } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css'] 
})
export class Home implements AfterViewInit {
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngAfterViewInit(): void {
    if (this.isBrowser) {
      this.initInfiniteSlider();
    }
  }

  private initInfiniteSlider(): void {
    const stackContainer = document.querySelector('.stack-container');
    const stack = document.querySelector('.stack');

    if (stackContainer && stack) {
      stackContainer.addEventListener('mouseenter', () => {
        (stack as HTMLElement).style.animationPlayState = 'paused';
      });

      stackContainer.addEventListener('mouseleave', () => {
        (stack as HTMLElement).style.animationPlayState = 'running';
      });
    }
  }
}