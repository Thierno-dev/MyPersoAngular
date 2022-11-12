import { Component, OnInit } from '@angular/core';
import { User } from '../models/UserPhoto.model';
import { UserService } from '../services/Users.service';
import { Router } from '@angular/router';//injection du routeur dans la liste user

@Component({
  selector: 'app-liste-utilisateur',
  templateUrl: './liste-utilisateur.component.html',
  styleUrls: ['./liste-utilisateur.component.scss']
})
export class ListeUtilisateurComponent implements OnInit {

    listUser!:User[];

  constructor(private userservice:UserService,private router:Router) { }

  ngOnInit(): void {

    this.listUser=this.userservice.getAllUsers();
  }
  
  Retour():void{

    this.router.navigateByUrl("");//Cette methode de naviguer d'une page de facon dynamique

  }
}
