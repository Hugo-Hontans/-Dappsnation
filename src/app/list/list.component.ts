import { Component, OnInit } from '@angular/core';
import { VideogameService } from '../videogame.service';
import { VideoGame } from '../VideoGame';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  columnsToDisplay = ['name', 'type', 'view', 'delete'];

  boolView = false;
  videoGame : VideoGame;

  constructor(private service : VideogameService) { }

  ngOnInit() {
    this.service.init();
  }

  delete(videoGame){
    this.service.delete(videoGame);
  }
  
  viewDetail(videoGame){
    if(this.boolView){ 
      this.videoGame = videoGame;
    }
    else {
      this.boolView = true;
      this.videoGame = videoGame;
    }
  }
}
