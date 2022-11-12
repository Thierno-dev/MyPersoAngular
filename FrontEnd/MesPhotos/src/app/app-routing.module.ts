import { NgModule } from "@angular/core";
import { Routes,RouterModule } from "@angular/router";
import { ListeUtilisateurComponent } from "./liste-utilisateur/liste-utilisateur.component";
import { Maphotodynamique1Component } from "./maphotodynamique1/maphotodynamique1.component";
import { RouteVideComponent } from "./route-vide/route-vide.component";
import { UtilisateurComponent } from "./utilisateur/utilisateur.component";



const routes:Routes=[
{
    path:'users',component:ListeUtilisateurComponent
},{
    path:'',component:RouteVideComponent
},{
    path:'users/:id', component:UtilisateurComponent
}

];
@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule
    ]
})
export class AppRoutingModule{

}