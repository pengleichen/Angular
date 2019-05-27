import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from "./heroes/heroes.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { HeroDetailsComponent } from "./hero-details/hero-details.component";
import { PipeDemoComponent } from "./pipe-demo/pipe-demo.component";
import { DirectiveDemoComponent } from "./directive-demo/directive-demo.component";
import { SizerComponent } from "./sizer/sizer.component";
import { ModelBindingDemoComponent } from "./model-binding-demo/model-binding-demo.component";
import { ComponentInteractionComponent } from "./component-interaction/component-interaction.component";
import { DynamicComponentComponent } from "./dynamic-component/dynamic-component.component";
import { FormDemoComponent } from "./form-demo/form-demo.component";

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'detail/:id', component: HeroDetailsComponent },
  {
    path: 'demo', children: [
      { path: 'directive', component: DirectiveDemoComponent },
      { path: 'pipe', component: PipeDemoComponent },
      { path: 'sizer', component: SizerComponent },
      { path: 'model-binding', component: ModelBindingDemoComponent },
      { path: 'component-interaction', component: ComponentInteractionComponent },
      { path: 'dynamic-component', component: DynamicComponentComponent },
      { path: 'form', component: FormDemoComponent }
    ]
  }

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}
