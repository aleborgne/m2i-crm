import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.scss']
})
export class ActionBarComponent implements OnInit {
  faTrashAlt = faTrashAlt;
  faEdit = faEdit;
  @Output() del: EventEmitter<boolean> = new EventEmitter<boolean>(null);
  @Output() editer: EventEmitter<boolean> = new EventEmitter<boolean>(null);

  constructor() { }

  ngOnInit() {}

  delete() {
    this.del.emit();
  }

  edit() {
    this.editer.emit();
  }
}
