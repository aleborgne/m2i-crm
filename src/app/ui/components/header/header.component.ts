import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { VersionService } from './../../../shared/services/version.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public title: string;
  public version$: BehaviorSubject<number>;
  constructor(private vs: VersionService) {

  }

  ngOnInit() {
    this.title = 'Awesome App';
    this.version$ = this.vs.version$;
  }

}
