import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { VideoGame } from './VideoGame';

@Injectable({
  providedIn: 'root'
})
export class VideogameService {

  constructor() { }

  init(){
    localStorage.clear();
    let jeux1 : VideoGame = { name: 'Battlefield 3', type: 'FPS', description : 'Battlefield 3 is a first-person shooter video game developed by EA DICE and published by Electronic Arts. It is a direct sequel to 2005s Battlefield 2, and the eleventh installment in the Battlefield franchise.', price : 60 };
    let jeux2 : VideoGame = { name: 'Dark Souls 3', type: 'RPG', description : 'Dark Souls III est un jeu vidéo d\'Action-RPG de dark fantasy développé par FromSoftware. Ce troisième opus de la série Souls est sorti sur Microsoft Windows, PlayStation 4 et Xbox One en mars 2016 au Japon et en avril en Amérique du Nord et en Europe.', price : 40 };

    localStorage.setItem(jeux1.name, JSON.stringify(jeux1));
    localStorage.setItem(jeux2.name, JSON.stringify(jeux2));
  }

  getVideoGames(){
    let videoGames : VideoGame[] = [];
    for (let i = 0; i < localStorage.length; i++){
      let key = localStorage.key(i);
      let value : VideoGame = JSON.parse(localStorage.getItem(key));
      videoGames.push(value);    
    }
    return new BehaviorSubject(videoGames);;
  }

  delete(videoGame : VideoGame){
    localStorage.removeItem(videoGame.name);
  }
}
