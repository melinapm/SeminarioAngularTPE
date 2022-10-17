import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';
import { InfoVisita } from 'src/app/InfoVisita';

@Injectable({
  providedIn: 'root'
})
export class VisitListService {

  private _calendar: InfoVisita[] = [];
  private _calendarSubject: BehaviorSubject<InfoVisita[]> = new BehaviorSubject(this._calendar);
  public calendar: Observable<InfoVisita[]> = this._calendarSubject.asObservable();

  constructor() { }

  reservarDiaVisita(dia:InfoVisita){  

    let newDia = Object.assign({}, dia);

    let alreadyInCart = false;
    this._calendar.forEach( 
      (d: InfoVisita) => {
        if (d.fecha == newDia.fecha) {
          alreadyInCart = true;
        }
        if (d.direccion == newDia.direccion) {
          alreadyInCart = true;
        }
    });

    if (!alreadyInCart)
      this._calendar.push(newDia);

    this._calendarSubject.next(this._calendar);

  }  

  borrarVisita(info:InfoVisita){
    this._calendar.forEach((calendar,index)=>{
      if(calendar.direccion==info.direccion) this._calendar.splice(index,1);
  });
  }
  

}
