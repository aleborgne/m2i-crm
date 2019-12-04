import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TableauLightComponent } from './components/tableau-light/tableau-light.component';
import { TotalPipe } from './pipes/total.pipe';
import { TableauDarkComponent } from './components/tableau-dark/tableau-dark.component';
import { StateDirective } from './directives/state.directive';



@NgModule({
  declarations: [TotalPipe, TableauLightComponent, TableauDarkComponent, StateDirective],
  imports: [
    CommonModule
  ],
  exports: [TotalPipe, TableauLightComponent, TableauDarkComponent, StateDirective]
})
export class SharedModule { }
