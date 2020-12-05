import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscriber } from 'rxjs';
import { CargarScriptsService } from "src/app/cargar-scripts.service";
declare  var jQuery:  any;




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hipermaxi';
  email:any;
  login =
  {
    usuario: null,
    contraseña: null,
    cargo: null
  }


  constructor( private _CargaScripts:CargarScriptsService,public router:Router) {
    _CargaScripts.Carga([' carrito '] )



  }

  ngOnInit(){
    console.log("hola");
    this.email = localStorage.getItem("email");
    console.log(this.email);

    if (localStorage.getItem("email")) {

      this.router.navigate("");
    } else {

      this.router.navigate("/login");

    }
  }







}
