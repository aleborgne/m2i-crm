import { State } from './../../../shared/enums/state.enum';
import { Component, OnInit } from '@angular/core';
import { Prestation } from 'src/app/shared/models/prestation';
import { PrestationsService } from './../../services/prestations.service';

@Component({
  selector: 'app-page-list-prestations',
  templateUrl: './page-list-prestations.component.html',
  styleUrls: ['./page-list-prestations.component.scss']
})
export class PageListPrestationsComponent implements OnInit {
  public collection: Prestation[];
  public states = State;
  public headers = ['Type', 'Client', 'Nb Jours', 'TJM HT', 'Total HT', 'Total TTC', 'State'];

  constructor(private prestationService: PrestationsService) { }

  ngOnInit() {
    this.prestationService.collection.subscribe((data) => {
      console.log(data);
      this.collection = data;
    });
  }

  changeState(item: Prestation, event) {
    this.prestationService.update(item, event.target.value).subscribe((res: Prestation) => {
      // item = res; doesn't emit ngOnChanges event
      item.state = res.state;
    });
  }
}
