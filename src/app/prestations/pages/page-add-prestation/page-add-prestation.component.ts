import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Prestation } from 'app/shared/models/prestation';
import { PrestationsService } from './../../services/prestations.service';

@Component({
  selector: 'app-page-add-prestation',
  templateUrl: './page-add-prestation.component.html',
  styleUrls: ['./page-add-prestation.component.scss']
})
export class PageAddPrestationComponent implements OnInit {
  public init = new Prestation();
  constructor(private ps: PrestationsService, private router: Router) { }

  ngOnInit() {
  }

  public add(item: any) {
    this.ps.add(item).subscribe((res: Prestation) => {
      this.router.navigate(['prestations']);
    });
  }
}
