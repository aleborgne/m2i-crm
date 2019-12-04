import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TableauLightComponent } from './components/tableau-light/tableau-light.component';
import { TotalPipe } from './pipes/total.pipe';



@NgModule({
  declarations: [TotalPipe, TableauLightComponent],
  imports: [
    CommonModule
  ],
  exports: [TotalPipe, TableauLightComponent]
})
export class SharedModule { }
