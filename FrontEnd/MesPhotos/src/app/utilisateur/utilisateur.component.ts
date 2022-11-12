import { Component, OnInit,Input } from '@angular/core';
import { User } from '../models/UserPhoto.model';
import { UserService } from '../services/Users.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.scss']
})
export class UtilisateurComponent implements OnInit {

 // @Input()  MonUser!:User;

  MonUsr!:User;



  constructor(private userservice:UserService,private route:ActivatedRoute) { }

  ngOnInit(): void {

    const userId=+this.route.snapshot.params['id'];//cette permet le parametre d'une url
    this.MonUsr=this.userservice.getUser(userId);
  }

}
