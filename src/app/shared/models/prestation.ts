import { State } from './../enums/state.enum';
import { PrestationI } from './../interfaces/prestation-i';

export class Prestation implements PrestationI {
  id: number;
  typePresta: string;
  client: string;
  nbJours = 0;
  tjmHt = 1000;
  tauxTva = 20;
  state = State.OPTION;

  constructor(obj?: Partial<Prestation>) { // obj?: Partial<Prestation> car obj n'aura pas de valeurs sur toutes les propriétés
    if (obj) {
      Object.assign(this, obj);
    }
  }

  totalHt(): number {
    return this.tjmHt * this.nbJours;
  }

  totalTtc(tva?: number): number {
    if (tva) {
      if (tva < 0) {
        return this.totalHt();
      }
      return this.totalHt() * (1 + tva / 100);
    }
    return this.totalHt() * (1 + this.tauxTva / 100);
  }
}
