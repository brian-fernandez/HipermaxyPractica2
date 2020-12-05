import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent implements OnInit {
  nombre: any;
  apellido_paterno: any;
  apellido_materno: any;
  correo: any;
  password: any;
  telefono: any;
  direccion: any;
  numdecasa: any;
  success: any;
  constructor(public service: ServicesService, public router: Router) {}

  ngOnInit(): void {}

  registrar() {
    this.service
      .registrarUsuario(
        this.nombre,
        this.apellido_paterno,
        this.apellido_materno,
        this.correo,
        this.password,
        this.telefono,
        this.direccion,
        this.numdecasa
      )
      .subscribe(
        async (data) => {
          this.success = data;
          Swal.fire('Exito!', 'Usuario registrado', 'success');
          localStorage.setItem('email', this.correo);
          this.router.navigate(['/inicio']);
          console.log(this.success);
          const ocultar = document.getElementById('navv');
          ocultar.style.display = 'flex';
          const mostrar = document.getElementById('foot');
          mostrar.style.display = 'block';
        },
        (err) => {
          console.log(err.error.text);
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Error!',
            // footer: '<a href>Why do I have this issue?</a>'
          })
        }
      );
  }
}
