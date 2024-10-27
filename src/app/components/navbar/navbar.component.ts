import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SearchService } from '../../services/search.service';
import { ScrollService } from '../../services/scroll.service';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  template: `
    <nav class="fixed w-full bg-white shadow-sm z-50 transition-all duration-300"
         [class.shadow-md]="isScrolled">
      <div class="w-full px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <div class="flex-shrink-0">
            <a (click)="navigateTo('home')" class="text-2xl font-semibold text-primary hover:text-primary/90 transition-colors cursor-pointer">Logo</a>
          </div>
          <div class="hidden lg:flex relative">
            <input 
              type="text" 
              [(ngModel)]="searchQuery"
              (ngModelChange)="onSearchChange($event)"
              placeholder="Search here..." 
              class="w-64 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
              [class.w-96]="isSearchFocused"
              (focus)="isSearchFocused = true"
              (blur)="isSearchFocused = false"
            >
            <button class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-primary">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>

          <div class="hidden md:flex items-center space-x-8">
            <a (click)="navigateTo('home')" class="cursor-pointer text-gray-700 hover:text-primary transition-colors">Home</a>
            <div class="relative group">
              <button class="text-gray-700 hover:text-primary flex items-center transition-colors">
                Pages
                <svg class="ml-1 w-4 h-4 transform group-hover:rotate-180 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div class="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform -translate-y-2 group-hover:translate-y-0">
                <a (click)="navigateTo('about')" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">About Us</a>
                <a (click)="navigateTo('team')" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">Our Team</a>
                <a (click)="navigateTo('services')" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">Pricing</a>
              </div>
            </div>
            <div class="relative group">
              <button class="text-gray-700 hover:text-primary flex items-center transition-colors">
                Insurances
                <svg class="ml-1 w-4 h-4 transform group-hover:rotate-180 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div class="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform -translate-y-2 group-hover:translate-y-0">
                <a (click)="navigateTo('services')" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">Life Insurance</a>
                <a (click)="navigateTo('services')" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">Health Insurance</a>
                <a (click)="navigateTo('services')" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">Car Insurance</a>
              </div>
            </div>
            <a (click)="navigateTo('blog')" class="cursor-pointer text-gray-700 hover:text-primary transition-colors">Blog</a>
            <a (click)="navigateTo('contact')" class="cursor-pointer text-gray-700 hover:text-primary transition-colors">Contact Us</a>
          </div>

          <div class="hidden md:flex items-center space-x-4">
            <div class="flex items-center group">
              <svg class="w-5 h-5 text-primary group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <a href="tel:+11165458856" class="ml-2 text-gray-700">+(111) 65 458 856</a>
            </div>
            <a 
  href="#contact" 
  class="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary/90 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5"
>
  Get A Quote
</a>

          </div>

          <div class="md:hidden">
            <button 
              class="text-gray-700 hover:text-primary focus:outline-none"
              (click)="toggleMobileMenu()"
            >
              <svg 
                class="w-6 h-6 transform transition-transform duration-300"
                [class.rotate-90]="isMobileMenuOpen"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  [attr.d]="isMobileMenuOpen 
                    ? 'M6 18L18 6M6 6l12 12' 
                    : 'M4 6h16M4 12h16M4 18h16'"
                />
              </svg>
            </button>
          </div>
        </div>

        <div 
          @slideInOut
          class="md:hidden overflow-hidden"
          *ngIf="isMobileMenuOpen"
        >
          <div class="px-2 pt-2 pb-3 space-y-1">
            <a (click)="navigateTo('home')" class="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary transition-colors cursor-pointer">Home</a>
            <a (click)="navigateTo('about')" class="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary transition-colors cursor-pointer">About</a>
            <a (click)="navigateTo('services')" class="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary transition-colors cursor-pointer">Insurances</a>
            <a (click)="navigateTo('blog')" class="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary transition-colors cursor-pointer">Blog</a>
            <a (click)="navigateTo('contact')" class="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary transition-colors cursor-pointer">Contact</a>
          </div>
          <div class="px-5 py-3 border-t border-gray-200">
            <div class="flex items-center">
              <svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span class="ml-2 text-gray-700">+(111) 65 458 856</span>
            </div>
            <button class="mt-4 w-full bg-primary text-white px-6 py-2 rounded-md hover:bg-primary/90 transition-colors">
              Get A Quote
            </button>
          </div>
        </div>
      </div>
    </nav>
  `,
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ height: 0, opacity: 0 }),
        animate('200ms ease-out', style({ height: '*', opacity: 1 }))
      ]),
      transition(':leave', [
        style({ height: '*', opacity: 1 }),
        animate('200ms ease-in', style({ height: 0, opacity: 0 }))
      ])
    ])
  ]
})

export class NavbarComponent {
  isScrolled = false;
  isMobileMenuOpen = false;
  isSearchFocused = false;
  searchQuery = '';

  constructor(
    private searchService: SearchService,
    private scrollService: ScrollService
  ) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 20;
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  onSearchChange(query: string) {
    this.searchService.updateSearchQuery(query);
  }

  navigateTo(section: string): void {
    this.scrollService.scrollToElement(section);
    if (this.isMobileMenuOpen) {
      this.toggleMobileMenu();
    }
  }
}