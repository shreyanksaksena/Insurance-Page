import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface BlogPost {
  image: string;
  date: string;
  author: string;
  category: string;
  title: string;
}

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="blog" class="py-24 md:py-36 bg-white w-full">
      <div class="max-w-[1600px] mx-auto px-8 sm:px-10 lg:px-12">
        <div class="text-center mb-20">
          <h4 class="text-primary uppercase font-medium mb-6">BLOG AND NEWS</h4>
          <h2 class="text-5xl md:text-6xl font-bold text-gray-900 leading-tight max-w-5xl mx-auto">
            Better Digital Insurance Begins Right Here
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div class="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
            <div class="relative overflow-hidden">
              <img 
                src="assets/8 img1.png" 
                alt="Personal Liability Coverage" 
                class="w-full h-[350px] object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div class="p-8">
              <div class="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                <span class="flex items-center">
                  <span>BY ADMIN</span>
                </span>
                <span>|</span>
                <span class="text-primary">INSURANCE</span>
              </div>
              <h3 class="text-2xl font-bold mb-6 group-hover:text-primary transition-colors duration-300">
                What Is Personal Liability Umbrella Coverage
              </h3>
              <button class="text-primary font-medium inline-flex items-center space-x-3 group-hover:text-primary/80">
                <span>Read More</span>
                <svg class="w-6 h-6 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </button>
            </div>
          </div>

          <div class="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
            <div class="relative overflow-hidden">
              <img 
                src="assets/8 img2.png" 
                alt="Fire Insurance Coverage" 
                class="w-full h-[350px] object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div class="p-8">
              <div class="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                <span class="flex items-center">
                  <span>BY ADMIN</span>
                </span>
                <span>|</span>
                <span class="text-primary">INSURANCE</span>
              </div>
              <h3 class="text-2xl font-bold mb-6 group-hover:text-primary transition-colors duration-300">
                Insurance Covers Risk Of Fire Absence Of Fire Insurance
              </h3>
              <button class="text-primary font-medium inline-flex items-center space-x-3 group-hover:text-primary/80">
                <span>Read More</span>
                <svg class="w-6 h-6 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </button>
            </div>
          </div>


          <div class="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
            <div class="relative overflow-hidden">
              <img 
                src="assets/8 img3.png" 
                alt="Ambulance Cover" 
                class="w-full h-[350px] object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div class="p-8">
              <div class="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                <span class="flex items-center">
                  <span>BY ADMIN</span>
                </span>
                <span>|</span>
                <span class="text-primary">INSURANCE</span>
              </div>
              <h3 class="text-2xl font-bold mb-6 group-hover:text-primary transition-colors duration-300">
                Ambulance Cover Of Fire On Insurance Serving
              </h3>
              <button class="text-primary font-medium inline-flex items-center space-x-3 group-hover:text-primary/80">
                <span>Read More</span>
                <svg class="w-6 h-6 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </button>
            </div>
          </div>
        </div>


        <div class="flex justify-center mt-16 space-x-3">
          <button class="w-4 h-4 rounded-full bg-primary"></button>
          <button class="w-4 h-4 rounded-full bg-gray-300 hover:bg-primary/60 transition-colors"></button>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .transition-all {
      transition: all 0.3s ease-in-out;
    }

    .group:hover .group-hover\\:scale-105 {
      transform: scale(1.05);
    }

    @media (max-width: 768px) {
      .grid-cols-1 {
        gap: 2.5rem;
      }
    }
  `]
})
export class BlogComponent {}
