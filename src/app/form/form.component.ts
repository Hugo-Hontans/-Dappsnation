import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { VideoGame } from '../VideoGame';
import { VideogameService } from '../videogame.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Input() videoGame : VideoGame;
  
  @Input() boolView : boolean;
  
  @Output()
  boolViewChange = new EventEmitter<boolean>();

  
  form = new FormGroup({
    name: new FormControl(),
    type: new FormControl(),
    description: new FormControl(),
    price: new FormControl()
  });

  constructor(private service : VideogameService) { 
  }



  ngOnInit() {
      this.form.setValue({
        name: this.videoGame.name,
        type: this.videoGame.type,
        description: this.videoGame.description,
        price: this.videoGame.price
      });

  }

  onSubmit(){
    this.service.change(this.videoGame, this.form.value);
    this.boolViewChange.emit(this.boolView = false);
  }

}
