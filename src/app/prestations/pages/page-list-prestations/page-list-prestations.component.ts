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

  constructor(private prestationService: PrestationsService) { }

  ngOnInit() {
    this.prestationService.collection.subscribe((data) => {
      console.log(data);
      this.collection = data;
    });
  }

}
