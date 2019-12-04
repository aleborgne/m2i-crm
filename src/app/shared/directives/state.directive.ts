import { Directive, HostBinding, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appState]'
})
export class StateDirective implements OnChanges {
  @Input() appState: any; // any car State Prestation <> State Client
  @HostBinding('class') hostClassName: string; // hostClassName représente l'attribut "class" de notre host (ex: <td>)

  constructor() {
    // this.appState = undefined car les attributs sont interprétés que dans le lifeCycle "OnInit"
  }

  ngOnChanges() {
    this.hostClassName = this.formatClass(this.appState);
  }

  private formatClass(state: any): string {
    return `state-${state.normalize('NFD').replace(/[\u0300-\u036f\s]/g, '').toLowerCase()}`;
  }
}
