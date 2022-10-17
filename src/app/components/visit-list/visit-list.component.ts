import { Component, OnInit } from '@angular/core';
import { InfoVisita } from 'src/app/InfoVisita';
import { VisitListService } from 'src/app/services/visit-list/visit-list.service';

@Component({
  selector: 'app-visit-list',
  templateUrl: './visit-list.component.html',
  styleUrls: ['./visit-list.component.css']
})
export class VisitListComponent implements OnInit {

  infoVisita: InfoVisita[] = [];

  constructor(private visitListService: VisitListService) { }

  ngOnInit(): void {
      this.visitListService.calendar.subscribe(data => {
      this.infoVisita = data;
      });
  }

  borrarVisita(info:InfoVisita){
      this.visitListService.borrarVisita(info);
  }

}
