import { Component, OnInit } from '@angular/core';
import * as firebase from "firebase";
import { Router } from '@angular/router';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule,AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


export interface Huerto {
    nombre: string;
    producto: string;
    
    foto: string;

}

export interface HuertoId extends Huerto {
    id: string;    
}


@Component({
  selector: 'app-huertos',
  templateUrl: './huertos.page.html',
  styleUrls: ['./huertos.page.scss'],
})
export class HuertosPage implements OnInit {
    private huertosCollection: AngularFirestoreCollection<Huerto>;
    huertos: Observable<HuertoId[]>;
    
  constructor(private afs: AngularFirestore,private router: Router) { }

  ngOnInit() {   
       console.log("huertos")
      this.huertosCollection = this.afs.collection<Huerto>('af_huertos');
      this.huertos = this.huertosCollection.snapshotChanges().pipe(map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Huerto;
          
        const id = a.payload.doc.id;
          console.log(a.payload.doc.data())
        return { id, ...data };
      })     
             
          )
)

    this.huertos.forEach(function(hu){
        console.log(hu)    
    
    } )
      }


detalleHuerto(id){  
    this.router.navigate(['/detallehuerto'],{queryParams:{idh:id}})
  
}


    }



