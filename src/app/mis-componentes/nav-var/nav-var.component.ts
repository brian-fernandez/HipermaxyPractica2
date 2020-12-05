import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-var',
  templateUrl: './nav-var.component.html',
  styleUrls: ['./nav-var.component.css']
})
export class NavVarComponent implements OnInit {

  constructor(private rutalogin: Router) { }

  ngOnInit(): void {
  }

  opciones(){
    // this.rutalogin.navigate('inicio/opciones');
  }

salir()
{



      this.rutalogin.navigate(['login']);

      localStorage.removeItem('email');
      console.log(localStorage);
      const ocultar = document.getElementById('navv');
      ocultar.style.display = 'none';
      const mostrar = document.getElementById('foot');
      mostrar.style.display = 'none';

}

}
