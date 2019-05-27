import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailsComponent } from './hero-details/hero-details.component';
import { FormsModule } from "@angular/forms";
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InMemoryDataService } from "./in-memory-data.service";
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { HighlightDirective } from './highlight.directive';
import { DirectiveDemoComponent } from './directive-demo/directive-demo.component';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { SizerComponent } from './sizer/sizer.component';
import { ModelBindingDemoComponent } from './model-binding-demo/model-binding-demo.component';
import { ComponentInteractionModule } from './component-interaction/component-interaction.module';
import { DynamicComponentModule } from './dynamic-component/dynamic-component.module';
import { UnlessDirective } from './unless.directive';
import { ExponentialStrengthPipe } from './exponential-strength.pipe';
import { FormDemoModule } from './form-demo/form-demo.module';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailsComponent,
    MessagesComponent,
    DashboardComponent,
    HeroSearchComponent,
    HighlightDirective,
    DirectiveDemoComponent,
    PipeDemoComponent,
    SizerComponent,
    ModelBindingDemoComponent,
    UnlessDirective,
    ExponentialStrengthPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {dataEncapsulation: false}
    ),
    ComponentInteractionModule,
    DynamicComponentModule,
    FormDemoModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
