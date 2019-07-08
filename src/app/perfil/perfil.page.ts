import { Component, OnInit } from '@angular/core';
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
    telefofno: string;
    direccion: string;
    comuna: string
}

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
    private userDoc: AngularFirestoreDocument<User>;
        user: Observable<User>;
        usuario: any;
        item: any;
  constructor(private router: Router,public afs: AngularFirestore) {

    this.usuario = [];
    this.item = []
   }

  ngOnInit() {
      firebase.auth().onAuthStateChanged(usuario => {
        var uid = usuario['uid']
          this.userDoc = this.afs.doc<User>('af_userdata/'+uid);  
          this.userDoc.snapshotChanges().subscribe(datos => {
             this.usuario = datos.payload.data();
            console.log(this.usuario);
          });
          
  })

}

updatePerfil(){
    console.log(this.item)
    console.log(this.usuario)
        this.afs.collection('af_userdata').doc(this.usuario['userId']).set({
            userId: this.usuario['userId'],
            nombre: this.usuario['nombre'],
            email: this.usuario['email'],   
            foto: this.usuario['foto'],
            valid: true,
            telefono: this.item.telefono,
            direccion: this.item.direccion,
            comuna: this.item.comuna
        })

}
    
    }
