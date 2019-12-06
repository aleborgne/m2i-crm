import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Prestation } from 'app/shared/models/prestation';
import { Observable } from 'rxjs/internal/Observable';
import { State } from './../../../shared/enums/state.enum';
import { PrestationsService } from './../../services/prestations.service';

@Component({
  selector: 'app-page-list-prestations',
  templateUrl: './page-list-prestations.component.html',
  styleUrls: ['./page-list-prestations.component.scss']
})
export class PageListPrestationsComponent implements OnInit {
  public collection$: Observable<Prestation[]>;
  public states = State;
  public headers = ['Type', 'Client', 'Nb Jours', 'TJM HT', 'Total HT', 'Total TTC', 'State'];
  public route = 'add';
  public label = 'Ajouter une prestation';


  constructor(private prestationService: PrestationsService, private cdr: ChangeDetectorRef, private router: Router) { }

  ngOnInit() {
    this.collection$ = this.prestationService.collection;
  }

  changeState(item: Prestation, event) {
    this.prestationService.update(item, event.target.value).subscribe((res: Prestation) => {
      // item = res; doesn't emit ngOnChanges event
      item.state = res.state;
      this.cdr.markForCheck(); // Redemander un Change detection pour éviter un bug de décalage asynchrone.
      // Le bug en question: https://netbasal.com/a-comprehensive-guide-to-angular-onpush-change-detection-strategy-5bac493074a4
    });
  }

  delete(item) {
    console.log(item);
    this.prestationService.delete(item).subscribe((res) => {
      // traiter la response de l'api
      this.prestationService.initCollection();
      this.collection$ = this.prestationService.collection;
      this.cdr.markForCheck();
    });
  }

  edit(item) {
    console.log(item);
    this.router.navigate(['prestations/edit', item.id]);
  }
}
