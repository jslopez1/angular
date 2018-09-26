import { Injectable } from "@angular/core";
import * as firebase from 'firebase';

import { Router } from "@angular/router";
@Injectable()
export class AuthService{
    constructor(private router:Router){}
    token:string;
    signup(email:string,password:string){
        firebase.auth().createUserWithEmailAndPassword(email,password).then(
            response=>{
                alert("El usuario con email: "+ email+" fue satisfactoriamente creado");
            }
        ).catch(error=>console.log(error));
    }
    signin(email:string,password:string){
        firebase.auth().signInWithEmailAndPassword(email,password).then(
            resonse=>{
                    firebase.auth().currentUser.getIdToken().then(
                        (token:string)=>{
                            this.token=token
                            this.router.navigate(['/']);
                        }
                    );

            }
        ).catch(error=>console.log(error));
    }
}
