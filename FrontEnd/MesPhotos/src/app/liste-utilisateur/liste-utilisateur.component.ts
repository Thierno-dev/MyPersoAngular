import { Component, OnInit } from '@angular/core';
import { User } from '../models/UserPhoto.model';
import { UserService } from '../services/Users.service';

@Component({
  selector: 'app-liste-utilisateur',
  templateUrl: './liste-utilisateur.component.html',
  styleUrls: ['./liste-utilisateur.component.scss']
})
export class ListeUtilisateurComponent implements OnInit {

    listUser!:User[];

  constructor(private userservice:UserService) { }

  ngOnInit(): void {

    this.listUser=this.userservice.getAllUsers();
  }

}
