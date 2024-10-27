import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-16 md:py-24 bg-white w-full">
      <div class="w-full px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <h4 class="text-primary uppercase font-medium mb-4">OUR FEATURES</h4>
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Better Digital Insurance Begins Right Here
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="group p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 feature-card">
            <div class="mb-6 w-16 h-16">
              <img 
                src="assets/2 icon1.png" 
                alt="Money Back Guarantee" 
                class="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">Money Back Guarantee</h3>
            <p class="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis placerat arcu nibh sed.
            </p>
          </div>

          <div class="group p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 feature-card">
            <div class="mb-6 w-16 h-16">
              <img 
                src="assets/2 icon2.png" 
                alt="All Claims At Anytime" 
                class="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">All Claims At Anytime</h3>
            <p class="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis placerat arcu nibh sed.
            </p>
          </div>

          <div class="group p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 feature-card">
            <div class="mb-6 w-16 h-16">
              <img 
                src="assets/2 icon3.png" 
                alt="Digital Insurance Policy" 
                class="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">Digital Insurance Policy</h3>
            <p class="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis placerat arcu nibh sed.
            </p>
          </div>

          <div class="group p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 feature-card">
            <div class="mb-6 w-16 h-16">
              <img 
                src="assets/2 icon4.png" 
                alt="Direct Payment App" 
                class="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">Direct Payment App</h3>
            <p class="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis placerat arcu nibh sed.
            </p>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    :host {
      display: block;
    }

    .feature-card {
      animation: fadeInUp 0.6s ease-out forwards;
      opacity: 0;
    }

    .feature-card:nth-child(1) { animation-delay: 0.2s; }
    .feature-card:nth-child(2) { animation-delay: 0.4s; }
    .feature-card:nth-child(3) { animation-delay: 0.6s; }
    .feature-card:nth-child(4) { animation-delay: 0.8s; }
  `]
})
export class FeaturesComponent {}
