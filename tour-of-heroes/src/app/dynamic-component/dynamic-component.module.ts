import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdDirective } from './ad.directive';
import { AdBannerComponent } from './ad-banner.component';
import { HeroJobAdComponent } from './hero-job-ad.component';
import { HeroProfileComponent } from './hero-profile.component';
import { DynamicComponentComponent } from './dynamic-component.component';
import { AdService } from "./ad.service";

@NgModule({
  providers: [
    AdService
  ],
  declarations: [ DynamicComponentComponent,
    AdDirective,
    AdBannerComponent,
    HeroJobAdComponent,
    HeroProfileComponent
  ],
  entryComponents: [
    HeroJobAdComponent,
    HeroProfileComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DynamicComponentModule {
}
