import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroChildComponent } from './hero-child/hero-child.component';
import { HeroParentComponent } from './hero-parent/hero-parent.component';
import { ComponentInteractionComponent } from './component-interaction.component';
import { NameChildComponent } from './name-child/name-child.component';
import { NameParentComponent } from './name-parent/name-parent.component';
import { VersionChildComponent } from './version-child/version-child.component';
import { VersionParentComponent } from './version-parent/version-parent.component';
import { VoterComponent } from './voter/voter.component';
import { VoteTakerComponent } from './vote-taker/vote-taker.component';
import { CountdownTimerComponent } from './countdown-timer/countdown-timer.component';
import { CountdownParentLvComponent } from './countdown-parent-lv/countdown-parent-lv.component';
import { CountdownParentVcComponent } from './countdown-parent-vc/countdown-parent-vc.component';
import { MissionsControlComponent } from './missions-control/missions-control.component';
import { AstronautComponent } from './astronaut/astronaut.component';

@NgModule({
  declarations: [
    HeroChildComponent,
    HeroParentComponent,
    ComponentInteractionComponent,
    NameChildComponent,
    NameParentComponent,
    VersionChildComponent,
    VersionParentComponent,
    VoterComponent,
    VoteTakerComponent,
    CountdownTimerComponent,
    CountdownParentLvComponent,
    CountdownParentVcComponent,
    MissionsControlComponent,
    AstronautComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentInteractionModule {
}
