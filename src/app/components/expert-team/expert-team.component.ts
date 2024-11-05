import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface TeamMember {
  image: string;
  name: string;
  position: string;
}

@Component({
  selector: 'app-expert-team',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id= "team" class="py-24 md:py-36 bg-gray-50 min-h-screen">
      <div class="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
        <div class="text-center mb-20">
          <h4 class="text-primary uppercase font-medium mb-6 text-2xl">EXPERT TEAM</h4>
          <h2 class="text-5xl md:text-6xl font-bold text-gray-900 leading-tight max-w-5xl mx-auto mb-10">
            Meet Our Team Expert & Experience Members
          </h2>
          <p class="text-gray-600 max-w-4xl mx-auto text-lg md:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis placerat arcu nibh sed placerat elementum. Urna eu et purus et mi sit rhoncus.
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div *ngFor="let member of teamMembers" class="group">
            <div class="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
              <div class="relative h-[450px] lg:h-[500px] overflow-hidden">
                <img 
                  [src]="member.image" 
                  [alt]="member.name"
                  class="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-500"
                />
                <div class="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div class="p-8 text-center">
                <h3 class="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300">
                  {{member.name}}
                </h3>
                <p class="text-gray-600 mb-6">{{member.position}}</p>
                <div class="flex justify-center space-x-4">
                  <a *ngFor="let social of socials" 
                     [href]="social.link" 
                     target="_blank" 
                     class="w-12 h-12 rounded-full bg-[#F5FFFE] flex items-center justify-center hover:bg-primary group/icon transition-colors duration-300">
                    <i [class]="social.icon + ' text-primary group-hover/icon:text-white text-xl transition-colors duration-300'"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="text-center mt-16">
          <p class="text-gray-600 max-w-3xl mx-auto text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis placerat arcu nibh sed placerat elementum. Urna eu et purus et mi sit rhoncus.
            <a href="#" class="text-primary hover:text-primary/80 font-medium ml-2">View All</a>
          </p>
        </div>
      </div>
    </section>
  `,
  styles: [`
    :host {
      display: block;
    }

    .transition-all {
      transition: all 0.3s ease-in-out;
    }
  `]
})
export class ExpertTeamComponent {
  teamMembers: TeamMember[] = [
    {
      image: './assets/6 img1.png',
      name: 'Mesiva Sccot',
      position: 'Marketing Ex.'
    },
    {
      image: './assets/6 img2.png',
      name: 'Jeson Thomson',
      position: 'Marketing Ex.'
    },
    {
      image: './assets/6 img3.png',
      name: 'Kohn Wright',
      position: 'Marketing Ex.'
    },
    {
      image: './assets/6 img4.png',
      name: 'Andrew Schimke',
      position: 'Marketing Ex.'
    }
  ];

  socials = [
    { icon: 'fab fa-facebook-f', link: '#' },
    { icon: 'fab fa-twitter', link: '#' },
    { icon: 'fab fa-instagram', link: '#' },
    { icon: 'fab fa-linkedin-in', link: '#' }
  ];
}
