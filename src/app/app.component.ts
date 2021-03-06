import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

home(){
    this.router.navigate(['/main'])
}

  perfil(){
      this.router.navigate(['/perfil'])
  }

  comprar(){
    this.router.navigate(['/comprar'])
      console.log("coprando")
  }

    huertos(){
    this.router.navigate(['/huertos'])
    }

    pedidos(){
      this.router.navigate(['/pedidos'])
    }
}
