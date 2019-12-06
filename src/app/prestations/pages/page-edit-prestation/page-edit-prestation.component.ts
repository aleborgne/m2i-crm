import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { PrestationsService } from 'app/prestations/services/prestations.service';
import { Prestation } from 'app/shared/models/prestation';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-page-edit-prestation',
  templateUrl: './page-edit-prestation.component.html',
  styleUrls: ['./page-edit-prestation.component.scss']
})
export class PageEditPrestationComponent implements OnInit {
  public item$: Observable<Prestation>;
  public id: number;

  constructor(
    private ps: PrestationsService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.item$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        this.id = +params.get('id');
        return this.ps.getItemById(this.id);
      })
    );
  }

  update(item: Prestation) {
    item.id = this.id;
    this.ps.update(item).subscribe((res) => {
      this.router.navigate(['prestations']);
    });
  }

}
