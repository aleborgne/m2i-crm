import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageListClientsComponent } from './pages/page-list-clients/page-list-clients.component';



const routes: Routes = [
  { path: 'clients', component: PageListClientsComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class ClientsRoutingModule { }
