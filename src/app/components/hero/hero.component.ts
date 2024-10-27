import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section id="home" class="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-[#F5FFFE] w-full">
      <!-- Main Content -->
      <div class="w-full px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <!-- Left Content - Text Section -->
          <div class="space-y-6 relative z-10">
            <div 
              class="animate-fadeIn opacity-0"
              [style.animation-delay]="'0.2s'"
              [style.animation-fill-mode]="'forwards'"
            >
              <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Take The Worry Out Of Life With 
                <span class="text-primary relative inline-block">
                  Insurance
                  <span class="absolute bottom-0 left-0 w-full h-1 bg-primary/20"></span>
                </span>
                Protection
              </h1>
            </div>

            <div 
              class="animate-fadeIn opacity-0"
              [style.animation-delay]="'0.4s'"
              [style.animation-fill-mode]="'forwards'"
            >
              <p class="text-gray-600 text-lg leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis placerat arcu nibh sed placerat elementum. Urna eu et purus et mi sit rhoncus. Id nisl quis arcu nulla leo nulla cras justo consectetur adipiscing elit.
              </p>
            </div>

            <div 
              class="flex flex-col sm:flex-row gap-4 animate-fadeIn opacity-0"
              [style.animation-delay]="'0.6s'"
              [style.animation-fill-mode]="'forwards'"
            >
              <button class="group bg-primary text-white px-8 py-3 rounded-md hover:bg-primary/90 transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg flex items-center justify-center space-x-2">
              <a 
  href="#features" 
  style="text-decoration: none; color: inherit;"
>
  <span>Get Started</span>
</a>
                <svg 
                  class="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    stroke-linecap="round" 
                    stroke-linejoin="round" 
                    stroke-width="2" 
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </button>
              <button class="group border-2 border-primary text-primary px-8 py-3 rounded-md hover:bg-primary/10 transition-all duration-300 flex items-center justify-center space-x-2">
              <a 
  href="#contact" 
  style="text-decoration: none; color: inherit;"
>
  <span>Contact Us</span>
</a>

                <svg 
                  class="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    stroke-linecap="round" 
                    stroke-linejoin="round" 
                    stroke-width="2" 
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </button>
            </div>
          </div>
        
          <div 
            class="relative mt-10 md:mt-0 animate-fadeIn opacity-0"
            [style.animation-delay]="'0.8s'"
            [style.animation-fill-mode]="'forwards'"
          >
            <div class="relative group">
              <div class="absolute -inset-1 bg-gradient-to-r from-primary/20 via-[#F5FFFE] to-primary/20 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
              
              <img 
                src="assets/hero-image.png" 
                alt="Father and daughter with stuffed bunny" 
                class="relative w-full h-auto rounded-lg shadow-lg z-10 transform group-hover:scale-[1.01] transition-transform duration-300"
                loading="lazy"
              />
              
              <div class="absolute -bottom-8 -left-8 z-20">
                <img 
                  src="assets/leaf.png" 
                  alt="Decorative leaf" 
                  class="w-16 h-16 animate-float filter drop-shadow-lg"
                />
              </div>

              <div class="absolute -right-4 -bottom-4 w-32 h-32 bg-gradient-to-br from-primary/10 to-[#F5FFFE] rounded-full blur-sm animate-pulse"></div>
              <div class="absolute -right-2 -top-2 w-24 h-24 bg-primary/5 rounded-full blur-sm animate-pulse" style="animation-delay: 1s;"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    @keyframes float {
      0%, 100% { 
        transform: translateY(0) rotate(45deg); 
      }
      50% { 
        transform: translateY(-10px) rotate(45deg); 
      }
    }

    @keyframes fadeIn {
      from { 
        opacity: 0;
        transform: translateY(20px);
      }
      to { 
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes pulse {
      0%, 100% {
        opacity: 0.5;
        transform: scale(1);
      }
      50% {
        opacity: 0.8;
        transform: scale(1.05);
      }
    }

    .animate-float {
      animation: float 3s ease-in-out infinite;
    }

    .animate-fadeIn {
      animation: fadeIn 0.8s ease-out;
    }

    .animate-pulse {
      animation: pulse 4s ease-in-out infinite;
    }

    .group:hover .group-hover\\:scale-\\[1\\.01\\] {
      transform: scale(1.01);
    }

    .group:hover .group-hover\\:translate-x-1 {
      transform: translateX(0.25rem);
    }

    .hover\\:shadow-lg:hover {
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 
                 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    }
  `]
})
export class HeroComponent {
  @HostListener('window:scroll', ['$event'])
  onScroll() {
  }

  ngOnInit() {
  }
}
