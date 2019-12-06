import { Component, OnInit } from '@angular/core';
import { VersionService } from './../../../shared/services/version.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public version$: Observable<number>;
  constructor(private vs: VersionService) { }

  ngOnInit() {
    this.version$ = this.vs.version$;
  }

}
