import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-why-choose-us',
  standalone: true,
  imports: [CommonModule],
  template: `
<section class="py-20 md:py-32 bg-gray-100 overflow-hidden">
  <div class="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center justify-items-center">
      <div class="relative flex justify-center items-center">
        <div class="absolute -z-10 -top-10 -left-10 w-[110%] h-[110%] bg-[#F5FFFE] rounded-3xl"></div>
        <div class="relative z-10 rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.05] transition-all duration-300 max-w-full lg:max-w-3xl">
          <img 
            src="assets/5 img.png" 
            alt="Happy Family" 
            class="w-full h-auto rounded-3xl hover:scale-110 transition-transform duration-500"
          />
        </div>
            <img 
              src="assets/leaf.png" 
              alt="Decorative Leaf" 
              class="absolute -top-10 right-0 w-20 h-20 transform rotate-45 z-20 animate-float"
            />
          </div>
          <div class="space-y-10">
            <div class="max-w-2xl">
              <h4 class="text-primary uppercase font-medium mb-4 text-lg">WHY CHOOSE US</h4>
              <h2 class="text4xl md:text-4xl font-bold text-gray-900 leading-tight mb-8">
                Our Company Has Been Working Very Faithfully
              </h2>
              <p class="text-gray-600 text-lg leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis placerat arcu nibh sed placerat elementum. Urna eu et purus et mi sit rhoncus. Id nisl quis arcu nulla leo.
              </p>
            </div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
  <div *ngFor="let feature of features" 
       class="bg-white p-4 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 group transform hover:-translate-y-1">
    <div class="flex items-center space-x-3">
      <div class="bg-[#F5FFFE] p-1.5 rounded-xl group-hover:bg-primary transition-colors duration-300">
        <img 
          src="assets/double-tick.png" 
          alt="Check" 
          class="w-6 h-6 group-hover:brightness-200 transition-all duration-300"
        />
      </div>
      <span class="text-gray-800 font-medium text-base">{{ feature }}</span>
    </div>
  </div>
</div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    @keyframes float {
      0%, 100% { transform: translateY(0) rotate(45deg); }
      50% { transform: translateY(-10px) rotate(45deg); }
    }

    .animate-float {
      animation: float 3s ease-in-out infinite;
    }

    .transition-all {
      transition: all 0.3s ease-in-out;
    }

    .shadow-2xl {
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    }

    .hover\\:shadow-2xl:hover {
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.35);
    }
  `]
})
export class WhyChooseUsComponent {
  features: string[] = [
    'Protective Protection',
    'Money Back Guarantee',
    'Homeowner Insurance',
    'Partnership System',
    'Consultations',
    'Safety Ensure'
  ];
}