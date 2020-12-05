import { Component, OnInit } from '@angular/core';
import { CargarScriptsService } from "src/app/cargar-scripts.service";

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  constructor( private _CargaScripts:CargarScriptsService) {
    _CargaScripts.Carga(["carrito"])
   }
   
  ngOnInit(): void {
  }

}
