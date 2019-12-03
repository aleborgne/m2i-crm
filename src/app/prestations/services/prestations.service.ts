import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Prestation } from 'src/app/shared/models/prestation';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PrestationsService {
  private pCollection: Observable<Prestation[]>;

  constructor(private http: HttpClient) {
    this.collection = this.http.get<Prestation[]>('http://localhost:3000/prestations');
  }

  get collection(): Observable<Prestation[]> {
    return this.pCollection;
  }

  set collection(param: Observable<Prestation[]>) {
    this.pCollection = param;
  }
}
