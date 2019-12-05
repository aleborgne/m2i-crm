import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Client } from 'app/shared/models/client';
import { Observable } from 'rxjs';
import { StateClient } from './../../../shared/enums/state-client.enum';
import { ClientsService } from './../../services/clients.service';

@Component({
  selector: 'app-page-list-clients',
  templateUrl: './page-list-clients.component.html',
  styleUrls: ['./page-list-clients.component.scss']
})
export class PageListClientsComponent implements OnInit {
  public collection$: Observable<Client[]>;
  public headers = ['Nom', 'Email', 'State'];
  public states = StateClient;
  public route = 'add';
  public label = 'Ajouter un client';

  constructor(private clientService: ClientsService, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.collection$ = this.clientService.collection;

    // Async add loader
    // https://ultimatecourses.com/blog/angular-ngif-async-pipe
  }

  changeState(item: Client, event) {
    this.clientService.updateState(item, event.target.value).subscribe((res: Client) => {
      item.state = res.state;
      this.cdr.markForCheck();
    });
  }
}
