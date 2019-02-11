import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { VideogameService } from '../videogame.service';

@Component({
  selector: 'app-formadd',
  templateUrl: './formadd.component.html',
  styleUrls: ['./formadd.component.css']
})
export class FormaddComponent implements OnInit {

  @Input() boolViewAdd;

  @Output()
  boolViewAddChange = new EventEmitter<boolean>();


  form = new FormGroup({
    name: new FormControl(),
    type: new FormControl(),
    description: new FormControl(),
    price: new FormControl()
  });

  constructor(private service : VideogameService) { 
  }

  onSubmit(){
    this.service.add(this.form.value);
    this.boolViewAddChange.emit(this.boolViewAdd = false);
  }

  ngOnInit() {
  }

}
