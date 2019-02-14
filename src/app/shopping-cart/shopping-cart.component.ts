import { Component, OnInit } from '@angular/core';
import { VideogameService } from '../videogame.service';

import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr, 'fr');

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  columnsToDisplay = ['name', 'price', 'delete'];

  constructor(private service : VideogameService) { }

  ngOnInit() {
  }


}
