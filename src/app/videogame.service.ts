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
    localStorage.clear();
    let jeux1 : VideoGame = { id : "0", name: 'Battlefield 3', type: 'FPS', description : 'Battlefield 3 is a first-person shooter video game developed by EA DICE and published by Electronic Arts. It is a direct sequel to 2005s Battlefield 2, and the eleventh installment in the Battlefield franchise.', price : 60 };
    let jeux2 : VideoGame = { id:"1", name: 'Dark Souls 3', type: 'RPG', description : 'Dark Souls III est un jeu vidéo d\'Action-RPG de dark fantasy développé par FromSoftware. Ce troisième opus de la série Souls est sorti sur Microsoft Windows, PlayStation 4 et Xbox One en mars 2016 au Japon et en avril en Amérique du Nord et en Europe.', price : 40 };

    localStorage.setItem(jeux1.id, JSON.stringify(jeux1));
    localStorage.setItem(jeux2.id, JSON.stringify(jeux2));

    let panier = [];
    localStorage.setItem("panier", JSON.stringify(panier));
  }

  getVideoGames(){
    let videoGames : VideoGame[] = [];
    for (let i = 0; i < localStorage.length; i++){
      let key = localStorage.key(i);
      if (key != "panier"){
      let value : VideoGame = JSON.parse(localStorage.getItem(key));
      videoGames.push(value);   
      } 
    }
    return new BehaviorSubject(videoGames);;
  }

  delete(videoGame : VideoGame){
    localStorage.removeItem(videoGame.name);
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

  getPanier(){
    let panier = JSON.parse(localStorage.getItem("panier"));
    let total = 0;

    for(let i=0; i < panier.length; i++){
      total += panier[i].price
    }

    return new BehaviorSubject(total);;
  }

  panier(item){
    let panier = JSON.parse(localStorage.getItem("panier"));
    panier.push(item);
    localStorage.setItem("panier", JSON.stringify(panier));
  }

  removePanier(item){
    let panier = JSON.parse(localStorage.getItem("panier"));
    for(let i=0; i < panier.length; i++){
      if (panier[i].name==item.name){
        let elementsSupprimes = panier.splice(i, 1);
      }
    }
    
    localStorage.setItem("panier", JSON.stringify(panier));
  }
}
