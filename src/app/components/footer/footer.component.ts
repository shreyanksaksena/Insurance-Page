import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section id="contact" class="py-20 bg-white relative overflow-hidden w-full">
      <div class="absolute left-0 top-1/2 -translate-y-1/2">
        <div class="grid grid-cols-4 gap-2">
          <ng-container *ngFor="let i of [1,2,3,4,5,6,7,8]">
            <ng-container *ngFor="let j of [1,2,3,4]">
              <div class="w-2 h-2 rounded-full bg-primary/20"></div>
            </ng-container>
          </ng-container>
        </div>
      </div>

      <div class="absolute right-0 top-1/2 -translate-y-1/2">
        <div class="grid grid-cols-4 gap-2">
          <ng-container *ngFor="let i of [1,2,3,4,5,6,7,8]">
            <ng-container *ngFor="let j of [1,2,3,4]">
              <div class="w-2 h-2 rounded-full bg-primary/20"></div>
            </ng-container>
          </ng-container>
        </div>
      </div>

      <img 
        src="assets/leaf.png" 
        alt="Decorative Leaf" 
        class="absolute left-32 top-1/2 -translate-y-1/2 w-20 opacity-20 transform -rotate-45"
      />

      <img 
        src="assets/leaf.png" 
        alt="Decorative Leaf" 
        class="absolute right-32 top-1/2 -translate-y-1/2 w-20 opacity-20 transform rotate-45"
      />

      <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center relative z-10">
        <h4 class="text-primary uppercase font-medium mb-4">READY TO GET STARTED</h4>
        <h2 class="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
          Get The Latest Insurance News In Minutes
        </h2>
        <p class="text-gray-600 mb-12 max-w-3xl mx-auto text-lg leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis placerat arcu nibh sed placerat elementum. Urna eu et purus et mi sit rhoncus.
        </p>
        
        <form (submit)="subscribe()" class="flex max-w-2xl mx-auto">
          <input 
            type="email" 
            placeholder="Email address" 
            class="flex-1 px-6 py-4 bg-gray-100 rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary text-lg"
            [(ngModel)]="email"
            name="email"
            aria-label="Email address for newsletter"
            required
          />
          <button 
            type="submit"
            class="bg-primary text-white px-10 py-4 rounded-r-md hover:bg-primary/90 transition-colors flex items-center space-x-3"
          >
            <span class="text-lg">Subscribe</span>
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
            </svg>
          </button>
        </form>
      </div>
    </section>

    <footer class="bg-gray-50 py-20 w-full">
      <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h3 class="text-primary text-3xl font-bold mb-8">Logo</h3>
            <div class="space-y-6">
              <p class="flex items-start space-x-4">
                <span class="text-gray-600 font-medium">Location:</span>
                <span class="text-gray-500">Isr Street glirt awam juim</span>
              </p>
              <p class="flex items-start space-x-4">
                <span class="text-gray-600 font-medium">Contact:</span>
                <a 
                  href="tel:+95555559909" 
                  class="text-gray-500 hover:text-primary transition-colors"
                  aria-label="Call us at +9 5555559909"
                >
                  +9 5555559909
                </a>
              </p>
              <p class="flex items-start space-x-4">
                <span class="text-gray-600 font-medium">Time:</span>
                <span class="text-gray-500">(9am - 5pm EST, Monday - Friday)</span>
              </p>
              <p class="flex items-start space-x-4">
                <span class="text-gray-600 font-medium">Email:</span>
                <a 
                  href="mailto:youme@example.com" 
                  class="text-gray-500 hover:text-primary transition-colors"
                  aria-label="Email us at youme@example.com"
                >
                youme&#64;example.com
                </a>
              </p>
            </div>
          </div>

          <div>
            <h3 class="text-gray-900 text-2xl font-bold mb-8">Company</h3>
            <ul class="space-y-6">
              <li><a href="#" class="text-gray-600 hover:text-primary transition-colors">Case Studies</a></li>
              <li><a href="#" class="text-gray-600 hover:text-primary transition-colors">Case Details</a></li>
              <li><a href="#" class="text-gray-600 hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" class="text-gray-600 hover:text-primary transition-colors">Services</a></li>
            </ul>
          </div>

          <div>
            <h3 class="text-gray-900 text-2xl font-bold mb-8">Explore</h3>
            <ul class="space-y-6">
              <li><a href="#" class="text-gray-600 hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" class="text-gray-600 hover:text-primary transition-colors">Blog And News</a></li>
              <li><a href="#" class="text-gray-600 hover:text-primary transition-colors">Blog Details</a></li>
              <li><a href="#" class="text-gray-600 hover:text-primary transition-colors">Pricing</a></li>
            </ul>
          </div>

          <div>
            <h3 class="text-gray-900 text-2xl font-bold mb-8">Insurance</h3>
            <ul class="space-y-6">
              <li><a href="#" class="text-gray-600 hover:text-primary transition-colors">Health Insurance</a></li>
              <li><a href="#" class="text-gray-600 hover:text-primary transition-colors">Car Insurance</a></li>
              <li><a href="#" class="text-gray-600 hover:text-primary transition-colors">Business Insurance</a></li>
              <li><a href="#" class="text-gray-600 hover:text-primary transition-colors">Life Insurance</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .transition-all {
      transition: all 0.3s ease-in-out;
    }
  `]
})
export class FooterComponent {
  email: string = '';

  subscribe() {
    // Handle newsletter subscription
    console.log('Subscribe:', this.email);
    this.email = '';
  }
}