import { Component } from '@angular/core';
import { Router } from '@angular/router';

import * as firebase from "firebase";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
slides: any;
    constructor(private router: Router){
        
      
  }
      ngOnInit() {
        console.log("HOMEPAGE ")
    firebase.auth().onAuthStateChanged(usuario => {
        console.log(usuario['providerData']);
        if (usuario['providerData'][0]['providerId']==="facebook.com"){
            console.log("FACEBOOK")
            this.router.navigate(['/main'])
        }
                if (usuario['providerData'][0]['providerId']==="twitter.com"){
            this.router.navigate(['/main'])
        } 
        if (usuario.emailVerified) {
         this.router.navigate(['/main'])

        }
    })
  }
    
    skipIntro(){
        console.log("Intro")
            this.router.navigate(['/login'])

        
    }
    
     navigate(){
    this.router.navigate(['/login'])
  }
}