import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/services.service';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  users: any;
  success: any;
  successLogin: any;

  constructor(private rutalogin: Router,
  private service:ServicesService) { }
  email: string;
  password: string;

  ngOnInit(): void {
      this.service.getUsers().subscribe(
        async data => {
          this.success = data;
          console.log(this.success);

        }, err => {
          console.log(err);

        }
      );

      const mostrarcarrito = document.getElementById('idVentanaCarrito');
      mostrarcarrito.style.display = 'none';
  }

  login()
  {
    // this.email="brian@gmail.com";
    // this.password = "123";
    this.service.login(this.email,this.password).subscribe(
      async data => {
        this.successLogin = data;

        if (this.successLogin.mensaje == "false") {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Usuario incorrecto!',
            // footer: '<a href>Why do I have this issue?</a>'
          })
        } else {
          location.reload();

          Swal.fire(
            'Bienvenido!',
            'Accediste al sistema',
            'success'
          )
          this.rutalogin.navigate(['/inicio']);
          localStorage.setItem('email', this.email);
          const ocultar = document.getElementById('navv');
            ocultar.style.display = 'flex';
            const mostrar = document.getElementById('foot');
            mostrar.style.display = 'block';


        }


      }, err => {
        console.log(err);

      }
    );
    // console.log(form.value);
    // if (form.value.email === 'brian@gmail.com' && form.value.contra === '123') {
    //   localStorage.setItem('email', form.value.email);
    //   this.rutalogin.navigate(['']);
    //   const ocultar = document.getElementById('navv');
    //   ocultar.style.display = 'flex';
    //   const mostrar = document.getElementById('foot');
    //   mostrar.style.display = 'block';

    //   console.log('hola');
    //   console.log(localStorage);





    //   const mostrarcarrito = document.getElementById('idVentanaCarrito');
    //   mostrarcarrito.style.display = 'block';
    // }
    // else{
    //   alert("No existe el usuario");
    // }

  }

  registro()
  {
    this.rutalogin.navigate(['registre']);
  }

}
