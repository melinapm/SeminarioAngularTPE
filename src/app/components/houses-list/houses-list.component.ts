import { Component, OnInit } from '@angular/core';
import { HousesListService } from 'src/app/services/houses-list/houses-list.service';
import { Inmueble } from './../../Inmueble';

@Component({
  selector: 'app-houses-list',
  templateUrl: './houses-list.component.html',
  styleUrls: ['./houses-list.component.css']
})
export class HousesListComponent implements OnInit {
  inmuebles : Inmueble[] = [];

  constructor(private housesListService : HousesListService) { 
    this.inmuebles = [];
  }

  ngOnInit(): void {
    // this.inmuebles_array = this.housesListService.getAll();
    this.housesListService.getAll().subscribe(res => this.inmuebles=res);
  }

}
