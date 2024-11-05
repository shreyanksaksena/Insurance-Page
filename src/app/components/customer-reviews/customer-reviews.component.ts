import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-customer-reviews',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-24 md:py-36 bg-primary/90 relative overflow-hidden">
      <img 
        src="./assets/leaf.png" 
        alt="Decorative Leaf" 
        class="absolute top-10 right-10 w-24 h-24 transform rotate-45 opacity-20"
      />
      
      <div class="absolute bottom-10 right-10">
        <img 
          src="./assets/leaf.png" 
          alt="Decorative Pattern" 
          class="w-32 h-32 opacity-20"
        />
      </div>

      <div class="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12 relative">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
          <div class="space-y-8 lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="bg-white rounded-3xl p-12 shadow-lg hover:shadow-xl transition-all duration-300">
              <div class="flex items-start mb-6">
                <div class="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                  <img src="./assets/7 icon1.png" alt="Manika Selven" class="w-14 h-14 rounded-full"/>
                </div>
              </div>
              <div class="flex items-start text-yellow-400 mb-6">
                <ng-container *ngFor="let star of [1,2,3,4,5]">
                  <svg class="w-6 h-6 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                </ng-container>
              </div>
              <p class="text-gray-700 text-xl mb-8 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis placerat arcu nibh sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <div>
                <h4 class="font-bold text-2xl text-gray-900 mb-1">Manika Selven</h4>
                <p class="text-primary text-lg">Marketing Ex.</p>
              </div>
            </div>
            <div class="bg-white rounded-3xl p-12 shadow-lg hover:shadow-xl transition-all duration-300 lg:translate-x-2">
              <div class="flex items-start mb-6">
                <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <img src="./assets/7 icon2.png" alt="Jhun Selven" class="w-14 h-14 rounded-full"/>
                </div>
              </div>
              <div class="flex items-start text-yellow-400 mb-6">
                <ng-container *ngFor="let star of [1,2,3,4,5]">
                  <svg class="w-6 h-6 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                </ng-container>
              </div>
              <p class="text-gray-700 text-xl mb-8 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis placerat arcu nibh sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <div>
                <h4 class="font-bold text-2xl text-gray-900 mb-1">Jhun Selven</h4>
                <p class="text-primary text-lg">Marketing Ex.</p>
              </div>
            </div>
<div class="bg-white rounded-3xl p-12 shadow-lg hover:shadow-xl transition-all duration-300">
  <div class="flex items-start text-yellow-400 mb-6">
    <ng-container *ngFor="let star of [1,2,3,4,5]">
      <svg class="w-6 h-6 mr-1" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
      </svg>
    </ng-container>
  </div>
  <p class="text-2xl text-gray-700">
    Average 4.6 from 1200+ reviews of our customers.
  </p>
</div>
          </div>
          <div class="text-white space-y-10 lg:pl-12">
            <h4 class="uppercase font-medium">OUR REVIEW</h4>
            <h2 class="text-5xl md:text-6xl font-bold leading-tight">
              What they say about us honest reviews
            </h2>
            <p class="text-white/80 text-lg leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis placerat arcu nibh sed placerat elementum. Urna eu et purus et mi sit rhoncus.
            </p>
            <button class="bg-white text-primary px-10 py-4 rounded-md hover:bg-white/90 transition-colors inline-flex items-center space-x-3 group">
              <span class="text-lg">View More</span>
              <svg 
                class="w-6 h-6 transform group-hover:translate-x-1 transition-transform" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .transition-all {
      transition: all 0.3s ease-in-out;
    }

    @media (max-width: 1024px) {
      .lg\\:translate-x-8 {
        transform: translateX(0);
      }
    }
  `]
})
export class CustomerReviewsComponent {}
