import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  scrollToElement(elementId: string): void {
    try {
      const yOffset = -80; 
      const element = document.getElementById(elementId);
      
      if (element) {
        setTimeout(() => {
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({
            top: y,
            behavior: 'smooth'
          });
        }, 100);
      }
    } catch (err) {
      console.error('Error scrolling to element:', err);
    }
  }
}