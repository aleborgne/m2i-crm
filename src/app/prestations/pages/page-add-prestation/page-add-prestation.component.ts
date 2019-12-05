import { Component, OnInit } from '@angular/core';
import { Prestation } from 'app/shared/models/prestation';

@Component({
  selector: 'app-page-add-prestation',
  templateUrl: './page-add-prestation.component.html',
  styleUrls: ['./page-add-prestation.component.scss']
})
export class PageAddPrestationComponent implements OnInit {
  public init = new Prestation();
  constructor() { }

  ngOnInit() {
  }

}
