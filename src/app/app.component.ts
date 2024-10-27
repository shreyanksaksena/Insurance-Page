import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { FeaturesComponent } from './components/features/features.component';
import { AboutInsuranceComponent } from './components/about-insurance/about-insurance.component';
import { InsuranceServicesComponent } from './components/insurance-services/insurance-services.component';
import { WhyChooseUsComponent } from './components/why-choose-us/why-choose-us.component';
import { ExpertTeamComponent } from './components/expert-team/expert-team.component';
import { CustomerReviewsComponent } from './components/customer-reviews/customer-reviews.component';
import { BlogComponent } from './components/blog/blog.component'; 
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    NavbarComponent,
    HeroComponent,
    FeaturesComponent,
    AboutInsuranceComponent,
    InsuranceServicesComponent,
    WhyChooseUsComponent,
    ExpertTeamComponent,
    CustomerReviewsComponent,
    BlogComponent,
    FooterComponent
  ],
  template: `
    <div class="min-h-screen relative">
      <app-navbar></app-navbar>
      
      <section id="home" class="scroll-mt-20">
        <app-hero></app-hero>
      </section>

      <section class="scroll-mt-20">
        <app-features></app-features>
      </section>

      <section id="about" class="scroll-mt-20">
        <app-about-insurance></app-about-insurance>
      </section>

      <section id="services" class="scroll-mt-20">
        <app-insurance-services></app-insurance-services>
      </section>

      <section class="scroll-mt-20">
        <app-why-choose-us></app-why-choose-us>
      </section>

      <section id="team" class="scroll-mt-20">
        <app-expert-team></app-expert-team>
      </section>

      <section class="scroll-mt-20">
        <app-customer-reviews></app-customer-reviews>
      </section>

      <section id="blog" class="scroll-mt-20">
        <app-blog></app-blog>
      </section>

      <section id="contact" class="scroll-mt-20">
        <app-footer></app-footer>
      </section>
    </div>
  `,
  styles: [`
    .scroll-mt-20 {
      scroll-margin-top: 80px; 
    }
  `]
})
export class AppComponent {}