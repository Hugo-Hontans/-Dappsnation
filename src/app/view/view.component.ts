import { Component, OnInit, Input } from '@angular/core';
import { VideoGame } from '../VideoGame';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  @Input() videoGame : VideoGame;

  constructor() { }

  ngOnInit() {
  }

}
