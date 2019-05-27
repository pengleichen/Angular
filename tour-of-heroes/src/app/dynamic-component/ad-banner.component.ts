import { Component, ComponentFactoryResolver, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { AdItem } from "./ad-item";
import { AdDirective } from "./ad.directive";
import { AdComponent } from "./ad.component";

@Component({
  selector: 'app-ad-banner',
  template: `
    <div class="ad-banner-example">
      <h3>Advertisements</h3>
      <ng-template ad-host></ng-template>
    </div>
  `,
  styles: [ `
    .ad-banner-example {
      width: 400px;
    }
  ` ]
})
export class AdBannerComponent implements OnInit, OnDestroy {

  constructor(private componentFactorResolver: ComponentFactoryResolver) {
  }

  @Input() ads: AdItem[];
  currentAdIndex = -1;
  @ViewChild(AdDirective) adHost: AdDirective;
  interval: any;

  ngOnInit() {
    this.loadComponent();
    this.getAds();
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  loadComponent() {
    this.currentAdIndex = (this.currentAdIndex + 1) % this.ads.length;
    let adItem = this.ads[ this.currentAdIndex ];

    let componentFactory = this.componentFactorResolver.resolveComponentFactory(adItem.component);
    let viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();

    let componentRef = viewContainerRef.createComponent(componentFactory);
    (<AdComponent>componentRef.instance).data = adItem.data;
  }

  getAds() {
    this.interval = setInterval(() => this.loadComponent(), 3000);
  }

}
