import { Component, OnInit } from '@angular/core';
import { VideogameService } from '../videogame.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private service : VideogameService) { }

  ngOnInit() {
    this.service.init();
  }

}
