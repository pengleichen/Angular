import { Component, OnInit } from '@angular/core';
import { AdItem } from "./ad-item";
import { AdService } from "./ad.service";

@Component({
  selector: 'app-dynamic-component',
  template: `
    <div>
      <app-ad-banner [ads]="ads"></app-ad-banner>
    </div>
  `,
  styles: []
})
export class DynamicComponentComponent implements OnInit {

  constructor(private adService: AdService) {
  }

  ads: AdItem[];

  ngOnInit() {
    this.ads = this.adService.getAds();
  }

}
