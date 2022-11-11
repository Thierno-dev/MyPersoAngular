import { NgModule } from "@angular/core";
import { Routes,RouterModule } from "@angular/router";
import { ListeUtilisateurComponent } from "./liste-utilisateur/liste-utilisateur.component";



const routes:Routes=[
{
    path:'users',component:ListeUtilisateurComponent
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