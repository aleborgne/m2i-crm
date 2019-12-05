import { StateClient } from './../../../shared/enums/state-client.enum';
import { Observable } from 'rxjs';
import { ClientsService } from './../../services/clients.service';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Client } from 'app/shared/models/client';

@Component({
  selector: 'app-page-list-clients',
  templateUrl: './page-list-clients.component.html',
  styleUrls: ['./page-list-clients.component.scss']
})
export class PageListClientsComponent implements OnInit {
  public collection$: Observable<Client[]>;
  public headers = ['Nom', 'Email', 'State'];
  public states = StateClient;

  constructor(private clientService: ClientsService, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.collection$ = this.clientService.collection;
  }

  changeState(item: Client, event) {
    this.clientService.updateState(item, event.target.value).subscribe((res: Client) => {
      item.state = res.state;
      this.cdr.markForCheck();
    });
  }
}
