import { Injectable } from "@angular/core";
import { User } from "../models/UserPhoto.model";

@Injectable({
    providedIn:'root'
})

export class UserService{
  private listUsers:User[]=[
        {
            id:2,
          nom:"Diallos",
          prenom:"Iliassou",
          age:18
        },
        {
            id:3,
          nom:"Requin",
          prenom:"Sebastien",
          age:26
        },
        {
            id:7,
          nom:"BARRY",
          prenom:"Thierno",
          age:50
        }
      ];

      getAllUsers():User[]{
        return this.listUsers;
      }

      getUser(user:number):User{
            const use=this.listUsers.find(use=>use.id===user);

            if(use)
            {
               

                return use;
            }
            else{
              throw new Error('utilisateur non trouve');
            }
           
      }


}