import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-insurance',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="about" class="py-16 md:py-24 bg-gray-100 overflow-hidden w-full">
      <div class="w-full px-4 sm:px-6 lg:px-8">
        <div class="mb-12 text-center">
          <h4 class="text-primary uppercase font-medium mb-4">ABOUT INCEP</h4>
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 leading-tight max-w-3xl mx-auto">
            Life Insurance That Creates Wealth For Everyone
          </h2>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div class="flex flex-col space-y-10 items-center justify-center">
            <div class="bg-white rounded-lg p-10 shadow-md max-w-3xl w-full">
              <div class="flex items-start space-x-6 group">
                <div class="w-28 h-28 bg-[#F5FFFE] rounded-full flex items-center justify-center flex-shrink-0 
                            group-hover:bg-primary transition-colors duration-300">
                  <img 
                    src="assets/3 icon1.png" 
                    alt="Trusted Icon" 
                    class="w-16 h-16 object-contain group-hover:brightness-200 transition-all duration-300"
                  />
                </div>
                <div>
                  <h3 class="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors duration-300">
                    Trusted By Thousand
                  </h3>
                  <p class="text-gray-600 text-lg">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis placerat arcu nibh sed sit amet, consectetur adipiscing.
                  </p>
                </div>
              </div>
            </div>

            <div class="bg-white rounded-lg p-10 shadow-md max-w-3xl w-full">
              <div class="flex items-start space-x-6 group">
                <div class="w-28 h-28 bg-[#F5FFFE] rounded-full flex items-center justify-center flex-shrink-0 
                            group-hover:bg-primary transition-colors duration-300">
                  <img 
                    src="assets/3 icon2.png" 
                    alt="Set For Life Icon" 
                    class="w-16 h-16 object-contain group-hover:brightness-200 transition-all duration-300"
                  />
                </div>
                <div>
                  <h3 class="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors duration-300">
                    Set For Life
                  </h3>
                  <p class="text-gray-600 text-lg">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis placerat arcu nibh sed sit amet, consectetur adipiscing.
                  </p>
                </div>
              </div>
            </div>

            <div class="bg-white rounded-lg p-10 shadow-md max-w-3xl w-full">
              <div class="flex items-start space-x-6 group">
                <div class="w-28 h-28 bg-[#F5FFFE] rounded-full flex items-center justify-center flex-shrink-0 
                            group-hover:bg-primary transition-colors duration-300">
                  <img 
                    src="assets/3 icon3.png" 
                    alt="Protective Insurance Icon" 
                    class="w-16 h-16 object-contain group-hover:brightness-200 transition-all duration-300"
                  />
                </div>
                <div>
                  <h3 class="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors duration-300">
                    Protective Insurance
                  </h3>
                  <p class="text-gray-600 text-lg">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis placerat arcu nibh sed sit amet, consectetur adipiscing.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="relative grid grid-cols-2 gap-6 lg:gap-8 items-center justify-center">
            <div class="relative rounded-2xl overflow-hidden shadow-lg col-span-1">
              <img 
                src="assets/3 img1.png" 
                alt="Parent and Baby" 
                class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div class="relative rounded-2xl overflow-hidden shadow-lg col-span-1 row-span-2">
              <img 
                src="assets/3 img2.png" 
                alt="Family Laughing" 
                class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div class="relative rounded-2xl overflow-hidden shadow-lg col-span-2 lg:col-span-1 row-start-2">
              <img 
                src="assets/3 img3.png" 
                alt="Driving" 
                class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
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
      .relative {
        height: auto !important;
        padding-top: 2rem;
      }
      
      .absolute {
        position: relative;
        width: 100% !important;
        height: 300px !important;
        left: 0 !important;
        right: 0 !important;
        top: 0 !important;
        bottom: 0 !important;
        margin-bottom: 2rem;
      }
    }
  `]
})
export class AboutInsuranceComponent implements OnInit {
  ngOnInit() {

  }
}
