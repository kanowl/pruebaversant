import { Component, OnInit} from '@angular/core';
import { Howl } from 'howler';
import {Audio} from '../Modelo/Audio';
import { stringify } from 'querystring';


export interface track {
  Name: any;
  Level: any;
  GSE: any;
  Path: any,
  Text: any;
}

@Component({
  selector: 'app-dictation',
  templateUrl: './dictation.page.html',
  styleUrls: ['./dictation.page.scss'],
})
export class DictationPage implements OnInit {
 texto;
 answer;
 respuesta: String;
 pista= Math.trunc((Math.random() * (6 - 1) + 1));
 track = '30';
 folder = './assets/audio/Dictation/'





 audio: Audio = new Audio (this.pista,this.texto, this.track, 30, 'A1' );

 Playlist: track [] = [
    {
      Name: '30.1',
      Level: 'A2',
      GSE: '30',
      Path: './assets/audio/Dictation/30 2.mp3',
      Text: 'The game is at midnight',
    },
  

  ]

 
activateTrack: track = null;
play: Howl = null;
isplaying = false;




//To play Random Tracks according to GSE

  //Current Track details
  constructor() {
        
   }
  ngOnInit() {
    
    
  }
  
  name=this.folder.concat (this.audio.track,' ',this.pista.toString(),'.mp3');
 
 
Play(track: track) 
  {    
    this.play = new Howl ({src: [this.name], 
    onplay: () => {
      this.isplaying = true;
      this.activateTrack = track}
    },);
  this.play.play();
}

Submit(submit){
  
  if (submit == this.audio.texto){
    this.respuesta = 'Respuesta correcta has ganado puntos';
  }
  else {
    this.respuesta = 'Respuesta incorrecta has perdido puntos';
  }
 

}

}