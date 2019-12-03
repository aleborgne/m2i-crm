import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { UiComponent } from './components/ui/ui.component';
import { CoderbaseUiModule } from '@coderbase/ui';


@NgModule({
  declarations: [UiComponent, HeaderComponent, NavComponent, FooterComponent],
  exports: [UiComponent],
  imports: [
    CoderbaseUiModule,
    CommonModule
  ]
})
export class UiModule { }
