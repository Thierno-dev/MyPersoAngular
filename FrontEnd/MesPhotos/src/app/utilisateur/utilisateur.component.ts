import { Component, OnInit,Input } from '@angular/core';
import { User } from '../models/UserPhoto.model';
import { UserService } from '../services/Users.service';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.scss']
})
export class UtilisateurComponent implements OnInit {

  @Input()  MonUser!:User;

  MonUsr!:User;



  constructor(private userservice:UserService) { }

  ngOnInit(): void {

    this.MonUsr=this.userservice.getUser(7);
  }

}
