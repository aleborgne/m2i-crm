import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';
import { ActionBarComponent } from './components/action-bar/action-bar.component';
import { ButtonComponent } from './components/button/button.component';
import { TableauDarkComponent } from './components/tableau-dark/tableau-dark.component';
import { TableauLightComponent } from './components/tableau-light/tableau-light.component';
import { StateDirective } from './directives/state.directive';
import { TotalPipe } from './pipes/total.pipe';



@NgModule({
  declarations: [TotalPipe, TableauLightComponent, TableauDarkComponent, StateDirective, ButtonComponent, ActionBarComponent],
  imports: [
    CommonModule, RouterModule, NgbPopoverModule, FontAwesomeModule
  ],
  exports: [TotalPipe, TableauLightComponent, TableauDarkComponent, StateDirective, ButtonComponent, ActionBarComponent]
})
export class SharedModule { }
