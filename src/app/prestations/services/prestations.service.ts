import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { State } from 'app/shared/enums/state.enum';
import { Prestation } from 'app/shared/models/prestation';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PrestationsService {
  private pCollection: Observable<Prestation[]>;
  private urlApi = environment.urlApi;

  constructor(private http: HttpClient) {
    this.initCollection();
  }

  public initCollection() {
    this.collection = this.http.get<Prestation[]>(`${this.urlApi}prestations`).pipe(
      map(arr => arr.map(item => new Prestation(item)))
    );
  }

  get collection(): Observable<Prestation[]> {
    return this.pCollection;
  }

  set collection(param: Observable<Prestation[]>) {
    this.pCollection = param;
  }

  public update(item: Prestation, state?: State) {
    // on ne modifie pas item directement pour ne pas altérer l'instance Prestation sur le front.
    // On attend la réponse du serveur qui retourne l'objet modifé récupéré dans le subscribe()
    const obj = {...item};
    if (state) {
      obj.state = state;
    }
    return this.http.put(`${this.urlApi}prestations/${item.id}`, obj);
  }

  public add(item: Prestation) {
    return this.http.post(`${this.urlApi}prestations`, item);
  }

  public delete(item: any) {
    return this.http.delete(`${this.urlApi}prestations/${item.id}`);
  }

  public getItemById(id: number): Observable<Prestation> {
    return this.http.get(`${this.urlApi}prestations/${id}`).pipe(
      map(item => new Prestation(item))
    );
  }
}
