import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { State } from 'app/shared/enums/state.enum';
import { Prestation } from 'app/shared/models/prestation';

@Component({
  selector: 'app-form-prestation',
  templateUrl: './form-prestation.component.html',
  styleUrls: ['./form-prestation.component.scss']
})
export class FormPrestationComponent implements OnInit {
  @Input() item: Prestation;
  @Output() nItem: EventEmitter<any> = new EventEmitter();
  public states = State;
  public form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  private createForm() {
    this.form = this.fb.group({
      typePresta: [
        this.item.typePresta ? this.item.typePresta : '',
        Validators.required
      ],
      client: [
        this.item.client ? this.item.client : '',
        Validators.compose([Validators.required, Validators.minLength(3)])
      ],
      nbJours: [this.item.nbJours ? this.item.nbJours : ''],
      tjmHt: [this.item.tjmHt ? this.item.tjmHt : ''],
      tauxTva: [this.item.tauxTva ? this.item.tauxTva : ''],
      state: [this.item.state ? this.item.state : '']
    });
  }

  onSubmit() {
    this.nItem.emit(this.form.value);
  }

}
