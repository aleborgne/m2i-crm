import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'total'
})
export class TotalPipe implements PipeTransform {

  transform(value: any, arg?: number): any {
    if (value) { // Si la db plante par exemple, on évite de planter l'application
      if (arg) {
        return value.totalTtc(arg);
      }
      return value.totalHt();
    }
    return null;
  }

}
