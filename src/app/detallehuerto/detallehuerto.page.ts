import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-detallehuerto',
  templateUrl: './detallehuerto.page.html',
  styleUrls: ['./detallehuerto.page.scss'],
})
export class DetallehuertoPage implements OnInit {
   private datos: any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {   
      this.route.queryParams.subscribe(params => {
  this.datos = params['idh'] 
          console.log(this.datos)
      })
    

}
    }
