import { Component, OnInit, Input } from '@angular/core';
import { VideoGame } from '../VideoGame';
import { VideogameService } from '../videogame.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  @Input() videoGame : VideoGame;

  constructor(private service : VideogameService) { }

  panier(){
    this.service.panier(this.videoGame);
  }

  removePanier(){
    this.service.removePanier(this.videoGame);
  }

  ngOnInit() {
  }

}
