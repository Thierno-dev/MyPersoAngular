import { Component ,OnInit} from '@angular/core';

import { MaPhoto } from './models/UnePhoto.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'MesPhotos';
  photo!:MaPhoto;
  photo2!:MaPhoto;


  ngOnInit():void{
    this.photo={ 
      letitles:'Une vue de la foret amazonie',
      ladescriptions:"Un voyage unique dans la plusgrande des foret amazonienne",
      limagephotoUrl:"https://static.nationalgeographic.fr/files/styles/image_3200/public/bigstock-aerial-photo-609884.jpg?w=1600&h=900"
      ,ladateCreations:new Date(),
      leNombreLikes:1,

    };
    this.photo2={ 
      letitles:"Bourgogne university",
      ladescriptions: "La splendeur de l'universite de bourgogne dans la ville de dijon",
      limagephotoUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdgLYxGNp8auP6ZLbx4p6qnl0M5zc3o0xomyRqoZdJew&s"
    ,ladateCreations:new Date(),
    leNombreLikes:1,

    localisation:'Dijon'

  };
  }


}
