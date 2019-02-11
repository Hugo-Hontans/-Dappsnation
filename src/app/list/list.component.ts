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
  boolViewAdd = false;
  videoGame : VideoGame;

  constructor(private service : VideogameService) { }

  ngOnInit() {
    this.service.init();
  }

  delete(videoGame){
    this.service.delete(videoGame);
    this.boolView = false;
    this.boolViewAdd = false;
  }
  
  viewDetail(videoGame){
    this.boolViewAdd = false;
    if(this.boolView){ 
      this.boolView = false;
      this.videoGame = videoGame;
    }
    else {
      this.boolView = true;
      this.videoGame = videoGame;
    }
  }

  add(){
    this.boolViewAdd = true;
    this.boolView = false;
  }


  
}
