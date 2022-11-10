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

  listPhoto!:MaPhoto[];



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

  this.listPhoto=[
      {
        letitles:"Le sahara",
        ladescriptions:"le desert du sahara est sacrement chaud",
        ladateCreations:new Date(),
        leNombreLikes:100,
         localisation:"Prise en Algerie",
        limagephotoUrl:"https://th.bing.com/th/id/R.3c7a9501b111fd1dc3b42f80f1e3839b?rik=lbUJLtpOl9kqeg&riu=http%3a%2f%2fwww.place-des-vacances.com%2fassets%2fimages%2fdossier%2f59-1455620617.jpg&ehk=fPafvHQDorcnvQaGfpzJArFAe74QJRixmJAt7Ta43w8%3d&risl=&pid=ImgRaw&r=0"
     
      },
      
        {
          letitles:"Ibiza",
          ladescriptions:"le voyage à ibiza sera du lourd",
          ladateCreations:new Date(),
          leNombreLikes:4,
           localisation:"Mallorque",
          limagephotoUrl:"https://th.bing.com/th/id/R.3576f134f74b4d0a9595cab6bacf68f1?rik=96iiZkTwXBcKkA&pid=ImgRaw&r=0"
        
      }

  ];
  }


}
