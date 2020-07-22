import { Component, OnInit} from '@angular/core';
import { Howl } from 'howler';


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
  pista= Math.trunc((Math.random() * (6 - 1) + 1));
 folder = './assets/audio/Dictation/30 ';
 name=this.folder.concat (this.pista.toString(),'.mp3');

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
chooseRandomTrack(tracks: track[]): track {
  return tracks[Math.floor(Math.random() * tracks.length)];
  
}
  //Current Track details
  constructor() {
 
   }
  ngOnInit() {}

Play(track: track) 
  {this.play = new Howl ({src: [this.name], 
    onplay: () => {
      this.isplaying = true;
      this.activateTrack = track}
    },);
  this.play.play();
}

}