import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { VideoGame } from './VideoGame';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

@Injectable({
  providedIn: 'root'
})
export class VideogameService {

  constructor() { }

  init(){
    if (localStorage.length < 2){
      let game1 : VideoGame = { id : "0", name: 'Battlefield 3', type: 'FPS', description : 'Battlefield 3 is a first-person shooter video game developed by EA DICE and published by Electronic Arts. It is a direct sequel to 2005s Battlefield 2, and the eleventh installment in the Battlefield franchise.', price : 60 };
      let game2 : VideoGame = { id:"1", name: 'Dark Souls 3', type: 'RPG', description : 'Dark Souls III is an action role-playing video game developed by FromSoftware and published by Bandai Namco Entertainment for PlayStation 4, Xbox One, and Microsoft Windows. The fourth entry in the Souls series, Dark Souls III was released in Japan in March 2016 and worldwide in April 2016.Dark Souls III was critically and commercially successful, with critics calling it a worthy and fitting conclusion to the series. It was the fastest-selling game in Bandai Namco\'s history, shipping over three million copies worldwide within the first two months after release. A complete version containing the base game and both downloadable content expansions, titled Dark Souls III: The Fire Fades, was released in April 2017.', price : 39.99 };

      localStorage.setItem(game1.id, JSON.stringify(game1));
      localStorage.setItem(game2.id, JSON.stringify(game2));

      let shoppingCart = [];
      localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
    }
  }

  getVideoGames(){
    let videoGames : VideoGame[] = [];
    for (let i = 0; i < localStorage.length; i++){
      let key = localStorage.key(i);
      if (key != "shoppingCart"){
      let value : VideoGame = JSON.parse(localStorage.getItem(key));
      videoGames.push(value);   
      } 
    }
    return new BehaviorSubject(videoGames);;
  }

  delete(videoGame : VideoGame){
    localStorage.removeItem(videoGame.id );
  }

  change(videoGame: VideoGame, form){
      form.id = videoGame.id;
      localStorage.setItem(videoGame.id, JSON.stringify(form));  
  }

  add(form){
    let id : string = localStorage.length.toString();
    form.id = id;
    form.price = parseInt(form.price);
    localStorage.setItem(id, JSON.stringify(form));  
  }

  getShoppingCart(){
    let shoppingCart = JSON.parse(localStorage.getItem("shoppingCart"));
    let total = 0;

    for(let i=0; i < shoppingCart.length; i++){
      total += shoppingCart[i].price
    }

    return new BehaviorSubject(total);;
  }

  shoppingCart(item){
    let shoppingCart = JSON.parse(localStorage.getItem("shoppingCart"));
    shoppingCart.push(item);
    localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
  }

  removeShoppingCart(item){
    let shoppingCart = JSON.parse(localStorage.getItem("shoppingCart"));
    for(let i=0; i < shoppingCart.length; i++){
      if (shoppingCart[i].name==item.name){
        let deletedElements = shoppingCart.splice(i, 1);
      }
    }
    
    localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
  }
}
