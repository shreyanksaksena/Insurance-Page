import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-insurance-services',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="services" class="py-16 md:py-24 bg-white w-full">
      <div class="w-full px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h4 class="text-primary uppercase font-medium mb-4">INSURANCE SERVICES</h4>
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 leading-tight max-w-4xl mx-auto">
            Take The Worry Out Of Life With Insurance Protection
          </h2>
        </div>

        <div class="relative flex justify-center items-center">
          <button 
            class="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-white p-3 rounded-full shadow-lg z-10 hover:bg-gray-50 hidden md:block"
            (click)="prevSlide()"
          >
            <svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
            </svg>
          </button>
          
          <button 
            class="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-white p-3 rounded-full shadow-lg z-10 hover:bg-gray-50 hidden md:block"
            (click)="nextSlide()"
          >
            <svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
          </button>

          <div class="flex overflow-hidden justify-center">
            <div class="flex transition-transform duration-500 ease-in-out justify-center items-center" [style.transform]="'translateX(' + translateX + '%)'">
              <div class="w-full md:w-[50%] lg:w-[40%] px-6 flex justify-center">
                <div class="relative group rounded-2xl overflow-hidden max-w-3xl">
                  <img 
                    src="./assets/4 img1.png" 
                    alt="Business Insurance" 
                    class="w-full h-[500px] object-cover"
                  />
                  <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-center justify-center">
                    <div class="absolute bottom-0 left-0 right-0 p-8"></div>
                  </div>
                  <div class="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>

              <div class="w-full md:w-[50%] lg:w-[40%] px-6 flex justify-center">
                <div class="relative group rounded-2xl overflow-hidden max-w-3xl">
                  <img 
                    src="./assets/4 img2.png" 
                    alt="Vehicle Insurance" 
                    class="w-full h-[500px] object-cover"
                  />
                  <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-center justify-center">
                    <div class="absolute bottom-0 left-0 right-0 p-8"></div>
                  </div>
                  <div class="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>

              <div class="w-full md:w-[50%] lg:w-[40%] px-6 flex justify-center">
                <div class="relative group rounded-2xl overflow-hidden max-w-3xl">
                  <img 
                    src="./assets/4 img3.png" 
                    alt="Car Insurance" 
                    class="w-full h-[500px] object-cover"
                  />
                  <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-center justify-center">
                    <div class="absolute bottom-0 left-0 right-0 p-8"></div>
                  </div>
                  <div class="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="text-center mt-12">
          <p class="text-gray-600 max-w-2xl mx-auto mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis placerat arcu nibh sed placerat elementum. Urna eu et purus et mi sit rhoncus
          </p>
          <a href="#" class="text-primary hover:text-primary/80 font-medium inline-flex items-center space-x-2">
            <span>View All</span>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .transition-transform {
      transition: transform 0.5s ease-in-out;
    }
  `]
})
export class InsuranceServicesComponent implements OnInit {
  translateX = 0;
  currentSlide = 0;
  totalSlides = 3;

  ngOnInit() {}

  prevSlide() {
    if (this.currentSlide > 0) {
      this.currentSlide--;
      this.updateTranslateX();
    }
  }

  nextSlide() {
    if (this.currentSlide < this.totalSlides - 1) {
      this.currentSlide++;
      this.updateTranslateX();
    }
  }

  private updateTranslateX() {
    this.translateX = -(this.currentSlide * 100);
  }
}
