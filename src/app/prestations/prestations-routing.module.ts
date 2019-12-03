import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageListPrestationsComponent } from './pages/page-list-prestations/page-list-prestations.component';



const routes: Routes = [
  { path: 'prestations', component: PageListPrestationsComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class PrestationsRoutingModule { }
