import { Component, OnInit ,Input} from '@angular/core';
import { MaPhoto } from '../models/UnePhoto.model';

@Component({
  selector: 'app-maphotodynamique1',
  templateUrl: './maphotodynamique1.component.html',
  styleUrls: ['./maphotodynamique1.component.scss']
})
export class Maphotodynamique1Component implements OnInit {

  @Input() maphoto!:MaPhoto;
  boutonReaction !:string;

  constructor() { }

  ngOnInit(): void {
    this.boutonReaction='liker'
  }

  ManageLike():void{
    
    if(this.boutonReaction==="liker"){
      this.maphoto.leNombreLikes++;
      this.boutonReaction="unliker";
    }
    else{
      this.maphoto.leNombreLikes--;
      this.boutonReaction="liker";
    }
  }

}
