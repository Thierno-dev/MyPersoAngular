import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ma-photo-statique',
  templateUrl: './ma-photo-statique.component.html',
  styleUrls: ['./ma-photo-statique.component.scss']
})
export class MaPhotoStatiqueComponent implements OnInit {

  title !:string;
  description !: string;
  dateCreation !:Date;

  NombreLike!:number;

  imagephotoUrl !: string;

  boutonReaction !:string;
  NombreLikeReaction!:number;

  ngOnInit(): void {

    this.title=" Mon paysage adore";
    this.NombreLike=6;
    this.dateCreation=new Date();
    this.description="Une prise de vue lors de mon voyage en Afrique";
    this.imagephotoUrl="https://voyagerloin.com/wp-content/uploads/2014/01/2fbf809423b14e3bfb78f27bd0effde6.jpg";
  
    this.NombreLikeReaction=3;
    this.boutonReaction="like";
  }

  AddLike():void{
    this.NombreLike++;
  }

  ManageLike():void{
    
    if(this.boutonReaction==="like"){
      this.NombreLikeReaction++;
      this.boutonReaction="unlike";
    }
    else{
      this.NombreLikeReaction--;
      this.boutonReaction="like";
    }
  }

  



}
