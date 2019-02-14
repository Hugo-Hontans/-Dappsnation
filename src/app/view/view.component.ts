import { Component, OnInit, Input } from '@angular/core';
import { VideoGame } from '../VideoGame';
import { VideogameService } from '../videogame.service';

import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr, 'fr');

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  @Input() videoGame : VideoGame;

  constructor(private service : VideogameService) { }

  shoppingCart(){
    this.service.shoppingCart(this.videoGame);
  }



  ngOnInit() {
  }

}
