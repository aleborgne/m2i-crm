import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client } from 'app/shared/models/client';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'environments/environment';
import { StateClient } from 'app/shared/enums/state-client.enum';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  private urlApi = environment.urlApi;
  private pCollection$: Observable<Client[]>;

  constructor(private http: HttpClient) {
    this.collection = this.http.get<Client[]>(`${this.urlApi}clients`).pipe(
      map(res => res.map(item => new Client(item))
    ));
  }

  get collection(): Observable<Client[]> {
    return this.pCollection$;
  }

  set collection(param: Observable<Client[]>) {
    this.pCollection$ = param;
  }

  updateState(param: Client, state: StateClient): Observable<Client> {
    const obj = {...param};
    obj.state = state;
    return this.http.put<Client>(`${this.urlApi}clients/${obj.id}`, obj);
  }
}
