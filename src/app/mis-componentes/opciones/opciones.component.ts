import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-opciones',
  templateUrl: './opciones.component.html',
  styleUrls: ['./opciones.component.css'],
})
export class OpcionesComponent implements OnInit {
  email_storage: string;
  success: any;
  nombre: any;
  apellido_paterno: any;
  apellido_materno: any;
  telefono: any;
  direccion: any;
  num_de_casa: any;
  email: any;
  id: any;
  constructor(private service: ServicesService,public router:Router) {}

  ngOnInit(): void {
    this.email_storage = localStorage.getItem('email');
    this.service.perfil(this.email_storage).subscribe(
      async (data) => {
        this.success = data.items[0];
        console.log(this.success);
        this.id = this.success.id;
        this.nombre = this.success.nombre;
        this.apellido_paterno = this.success.apellido_paterno;
        this.apellido_materno = this.success.apellido_materno;
        this.email = this.success.email;
        this.telefono = this.success.telefono;
        this.direccion = this.success.direccion;
        this.num_de_casa = this.success.num_de_casa;
      },
      (err) => {
        console.log(err);
        Swal.fire({
          title: 'Error de conexion',
          text: "Nesecita iniciar sesion",
          icon: 'warning',
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Iniciar sesión'
        }).then((result) => {
          if (result.isConfirmed) {
           localStorage.clear();
           location.reload();
          }
        })
      }
    );
  }

  tab1() {
    console.log(1);
    document.getElementById('usuario-caja').style.display = 'block';
    document.getElementById('compra-caja').style.display = 'none';
    document.getElementById('editar-caja').style.display = 'none';
    document.getElementById('tarjeta-caja').style.display = 'none';

    document.getElementById('tab-1').style.backgroundColor = ' #ff7712';
    document.getElementById('tab-2').style.backgroundColor = 'white';
    document.getElementById('tab-3').style.backgroundColor = 'white';
    document.getElementById('tab-4').style.backgroundColor = 'white';

    console.log(13);
  }
  tab2() {
    document.getElementById('tab-1').style.backgroundColor = 'white';
    document.getElementById('tab-2').style.backgroundColor = '#ff7712';
    document.getElementById('tab-3').style.backgroundColor = 'white';
    document.getElementById('tab-4').style.backgroundColor = 'white';

    document.getElementById('usuario-caja').style.display = 'none';
    document.getElementById('compra-caja').style.display = 'block';
    document.getElementById('editar-caja').style.display = 'none';
    document.getElementById('tarjeta-caja').style.display = 'none';
  }

  tab3() {
    document.getElementById('tab-1').style.backgroundColor = 'white';
    document.getElementById('tab-2').style.backgroundColor = 'white';
    document.getElementById('tab-3').style.backgroundColor = '#ff7712';
    document.getElementById('tab-4').style.backgroundColor = 'white';

    document.getElementById('usuario-caja').style.display = 'none';
    document.getElementById('compra-caja').style.display = 'none';
    document.getElementById('editar-caja').style.display = 'block';
    document.getElementById('tarjeta-caja').style.display = 'none';
  }
  tab4() {
    document.getElementById('tab-1').style.backgroundColor = 'white';
    document.getElementById('tab-2').style.backgroundColor = 'white';
    document.getElementById('tab-3').style.backgroundColor = 'white';
    document.getElementById('tab-4').style.backgroundColor = '#ff7712';

    document.getElementById('usuario-caja').style.display = 'none';
    document.getElementById('compra-caja').style.display = 'none';
    document.getElementById('editar-caja').style.display = 'none';
    document.getElementById('tarjeta-caja').style.display = 'block';
  }
  boton5() {
    document.getElementById('tab-1').style.backgroundColor = 'white';
    document.getElementById('tab-2').style.backgroundColor = 'white';
    document.getElementById('tab-3').style.backgroundColor = 'white';
    document.getElementById('tab-4').style.backgroundColor = 'white';

    document.getElementById('usuario-caja').style.display = 'none';
    document.getElementById('compra-caja').style.display = 'none';
    document.getElementById('editar-caja').style.display = 'none';
    document.getElementById('tarjeta-caja').style.display = 'none';
  }

  boton6() {
    document.getElementById('tab-1').style.backgroundColor = 'white';
    document.getElementById('tab-2').style.backgroundColor = 'white';
    document.getElementById('tab-3').style.backgroundColor = 'white';
    document.getElementById('tab-4').style.backgroundColor = 'white';

    document.getElementById('usuario-caja').style.display = 'none';
    document.getElementById('compra-caja').style.display = 'none';
    document.getElementById('editar-caja').style.display = 'none';
    document.getElementById('tarjeta-caja').style.display = 'none';
  }

  edit1() {
    document.getElementById('content-1').style.display = 'none';
    document.getElementById('content-2').style.display = 'none';
    document.getElementById('content-3').style.display = 'none';
    document.getElementById('content-4').style.display = 'none';
    document.getElementById('content-5').style.display = 'none';
    document.getElementById('content-6').style.display = 'none';
    console.log(1);

    document.getElementById('nombre').style.display = 'block';
    document.getElementById('apellp').style.display = 'block';
    document.getElementById('apellm').style.display = 'block';
    document.getElementById('tel').style.display = 'block';
    document.getElementById('vivienda').style.display = 'block';
    document.getElementById('numvivienda').style.display = 'block';

    console.log(2);

    console.log(3);
    document.getElementById('form2').style.display = 'block';
    console.log(4);

    document.getElementById('edit').style.display = 'none';
    console.log(4);
    document.getElementById('fin').style.display = 'block';
    document.getElementById('cancelar').style.display = 'block';

  }

  fin() {
    this.service.editarPerfil(this.id,this.nombre,this.apellido_paterno,this.apellido_materno,this.telefono,this.direccion,this.num_de_casa).subscribe(
      async (data) => {
        this.success = data;
        Swal.fire(
          'Exito!',
          'Datos modificados',
          'success'
        )
        this.router.navigate(['/inicio']);
        console.log(this.success);

      },
      (err) => {
        console.log(err);
      }
    );
  }
  cancelar() {
    location.reload();
  }

  tarjeta() {
    document.getElementById('contenedor-form').style.display = 'block';
    document.getElementById('tarjetanombre').style.display = 'block';
    document.getElementById('tarjetaapellidop').style.display = 'block';
    document.getElementById('tarjetaapellidom').style.display = 'block';
    document.getElementById('tarjetacvc').style.display = 'block';
    document.getElementById('tarjetaf').style.display = 'block';
    document.getElementById('tarjetatipo').style.display = 'block';
    document.getElementById('tarjetanum').style.display = 'block';
  }

  anadir() {
    location.reload();
    alert('TARJETA AÑADIDA');
  }
}
