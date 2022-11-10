import { Component, OnInit,Input } from '@angular/core';
import { MaPhoto } from '../models/UnePhoto.model';

@Component({
  selector: 'app-ma-liste-photo1',
  templateUrl: './ma-liste-photo1.component.html',
  styleUrls: ['./ma-liste-photo1.component.scss']
})
export class MaListePhoto1Component implements OnInit {
@Input() LaPhoto!:MaPhoto;

boutonReaction !:string;

constructor() { }

ngOnInit(): void {
  this.boutonReaction='liker'
}
ManageLike():void{
    
  if(this.boutonReaction==="liker"){
    this.LaPhoto.leNombreLikes++;
    this.boutonReaction="unliker";
  }
  else{
    this.LaPhoto.leNombreLikes--;
    this.boutonReaction="liker";
  }
}
}
