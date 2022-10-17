import { Component, OnInit } from '@angular/core';
import { InfoVisita } from 'src/app/InfoVisita';
import { HousesListService } from 'src/app/services/houses-list/houses-list.service';
import { VisitListService } from 'src/app/services/visit-list/visit-list.service';
import { Inmueble } from './../../Inmueble';

@Component({
  selector: 'app-houses-list',
  templateUrl: './houses-list.component.html',
  styleUrls: ['./houses-list.component.css']
})
export class HousesListComponent implements OnInit {
  inmuebles : Inmueble[] = [];
  isShowDiv = true
  newInfoVisita = {} as InfoVisita;

  constructor(private housesListService : HousesListService, private visitListService : VisitListService) { 
    this.inmuebles = [];
  }

  ngOnInit(): void {
    // this.inmuebles_array = this.housesListService.getAll();
    this.housesListService.getAll().subscribe(res => this.inmuebles=res);
  }
  
  displayDays() {  
    this.isShowDiv = !this.isShowDiv;  
  }  

  reservarDiaVisita(inmuebleVisita:Inmueble, dia:string){
    this.newInfoVisita.fecha = dia;
    this.newInfoVisita.direccion = inmuebleVisita.direccion;
    this.newInfoVisita.inmobiliaria = inmuebleVisita.inmobiliaria;
    this.visitListService.reservarDiaVisita(this.newInfoVisita);
  }  

}
