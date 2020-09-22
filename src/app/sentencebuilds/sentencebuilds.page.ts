import { Component, OnInit } from '@angular/core';
import { Howl } from 'howler';
import {Audio} from '../Modelo/Audio';

export interface track {
  Name: any;
  Level: any;
  GSE: any;
  Path: any,
  Text: any;
}

@Component({
  selector: 'app-sentencebuilds',
  templateUrl: './sentencebuilds.page.html',
  styleUrls: ['./sentencebuilds.page.scss'],
})
export class SentencebuildsPage implements OnInit {
  texto;
  answer;
  respuesta: String;
  pista= Math.trunc((Math.random() * (6 - 1) + 1));
  track = '30';
  folder = './assets/audio/Sentence Builds/'

  audio: Audio = new Audio (this.pista,this.texto, this.track, 30, 'A1' );

  Playlist: track [] = [
    {
      Name: '30.1',
      Level: 'A2',
      GSE: '30',
      Path: './assets/audio/Sentence Builds/30 1.mp3',
      Text: 'He checks his email everyday',
    },
  ]


activateTrack: track = null;
play: Howl = null;
isplaying = false;


  constructor() { }

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
}

