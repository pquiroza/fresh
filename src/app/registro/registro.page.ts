import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';


import * as firebase from "firebase";
@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
    item: any;
  constructor(private router: Router,public alertController: AlertController) {
      this.item = [];
  }
    

  ngOnInit() {
      
  }

    backLogin(){
        this.router.navigate(['/login'])   
    
    } 
    registro(){
    this.validation(this.item.email,this.item.password,this.item.password2).then(val => {
        console.log("son iguales")
                    
            firebase.auth().createUserWithEmailAndPassword(this.item.email,this.item.password).then(newUser => {
                console.log(newUser)
                this.presentarAlertaSuccess("Recibirás un correo para confirmar tu cuenta")
                
                this.router.navigate(['/login'])

            }).catch((err) => {  
                
                    this.presentarAlerta(err.message)
            })
    }).catch((err) => {
        this.presentarAlerta("Las Contraseñas no coinciden")
    })
        
      
}


async presentarAlertaSuccess(mensaje){
    const alert = await this.alertController.create({
                    header:'Registro Exitoso',
                    subHeader: 'Ya te encuentras registrado',
                    message: mensaje,
                    buttons: ['OK']
    })
}

async presentarAlerta(mensaje){
                const alert = await this.alertController.create({
                    header:'Error',
                    subHeader: 'Error en el registro',
                    message: mensaje,
                    buttons: ['OK']
                });

                await alert.present()
}
    
    validation(email,password1,password2){
 
        return new Promise((resolve, reject) => {



            if (password1==password2){
                resolve()
            }
            else{
                reject()
            }
        })
}
}