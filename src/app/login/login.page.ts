import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import {AuthCredential} from '@firebase/auth-types';

import * as firebase from "firebase";
import { Router } from '@angular/router';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule,AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

export interface User {
    id: string;
    nombre: string;
    email: string;
    foto: string;
}


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
item:any;
        private userDoc: AngularFirestoreDocument<User>;
        itemadd: Observable<User>;
  constructor(private router: Router,public alertController: AlertController, public afs: AngularFirestore) {
        this.item = [];
   }

  ngOnInit() {

    firebase.auth().onAuthStateChanged(usuario => {
        console.log(usuario)
        if (usuario) {
         this.router.navigate(['/main'])

        }
    })
  }

async presentarAlertaSuccess(mensaje){
    const alert = await this.alertController.create({
                    header:'Email No Verificado',
                    subHeader: 'Tu Email no se encuentra verificado',
                    message: mensaje,
                    buttons: ['OK']
    })
}

  login(){
              console.log(this.item.email)
        console.log(this.item.password)

      firebase.auth().signInWithEmailAndPassword(this.item.email,this.item.password).then(user => {
        firebase.auth().onAuthStateChanged(usuario => {
            if (!usuario.emailVerified){
                usuario.sendEmailVerification();
                this.presentarAlertaSuccess("Hemos enviado un correo de verificación a tu Correo Electrónico")
            }
            else {
                        this.router.navigate(['/main'])


            }
        })


      }).catch(err =>{
          console.log(err)
      })




      console.log("logueando")
  }

googleLogin(){
    console.log("Google Login")
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result){
        var token = result.credential;
        console.log(token)
        var user = result.user
        console.log(user)
    }).catch(function(error){
        console.log(error)
    })
}

twitterLogin(){
    console.log("Twitter Login")
    var provider = new firebase.auth.TwitterAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result){
        var token = result.credential
        console.log(token)
        var user = result.user
        console.log(user)

    }).catch(function(error){
        console.log(error)
    })
}


facebookLogin(){
    var provider = new firebase.auth.FacebookAuthProvider();
    provider.addScope('email')

    console.log("Facebook Login")
    firebase.auth().signInWithPopup(provider).then(result =>  {
        var token = result.credential;
        var user = result.user;
        console.log(token);
        console.log(user);

    console.log(user['uid'])
          this.userDoc = this.afs.doc<User>('af_userdata/'+user['uid']);
          this.userDoc.snapshotChanges().subscribe(datos => {

        if (datos.payload.exists){
            this.router.navigate(['/main'])
        }
              else {

                this.afs.collection('af_userdata').doc(user['uid']).set({
            userId: user['uid'],
            nombre: user['displayName'],
            email: user['email'],
            foto: user['photoURL'],
            valid: false
        })
this.router.navigate(['/perfil'])
        }

        });





    this.router.navigate(['/registro'])

    }).catch(function(err) {
        console.log(err)
    })
}










    goRegistro(){
        this.router.navigate(['/registro'])

}
    }
