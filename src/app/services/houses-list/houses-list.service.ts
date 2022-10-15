import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Inmueble } from './../../Inmueble';

const URL_HOUSES = 'https://633b859cc1910b5de0c6227f.mockapi.io/fh/inmuebles';

@Injectable({
  providedIn: 'root'
})
export class HousesListService {

  constructor(private http: HttpClient) { }
    
  public getAll(): Observable<Inmueble[]> {
    return this.http.get<Inmueble[]>(URL_HOUSES);
  } 

}
