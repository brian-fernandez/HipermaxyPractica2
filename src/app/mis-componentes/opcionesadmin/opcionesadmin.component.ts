import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-opcionesadmin',
  templateUrl: './opcionesadmin.component.html',
  styleUrls: ['./opcionesadmin.component.css']
})
export class OpcionesadminComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  tab1() {



    document.getElementById('usuario-caja').style.display = 'block';

    document.getElementById('compra-caja').style.display = 'none';

    document.getElementById('editar-caja').style.display = 'none';

    document.getElementById('tarjeta-caja').style.display = 'none';

    document.getElementById('añadir-caja').style.display = 'none';

    document.getElementById('lista-producto-caja').style.display = 'none';


    document.getElementById('tab-1').style.backgroundColor = '#ff7712';

    document.getElementById('tab-2').style.backgroundColor = 'white';


    document.getElementById('tab-3').style.backgroundColor = 'white';

    document.getElementById('tab-4').style.backgroundColor = 'white';


    document.getElementById('tab-5').style.backgroundColor = 'white';

    document.getElementById('tab-6').style.backgroundColor = 'white';









  }


  tab2() {
    document.getElementById('tab-1').style.backgroundColor = 'white';
    document.getElementById('tab-2').style.backgroundColor = '#ff7712';
    document.getElementById('tab-3').style.backgroundColor = 'white';
    document.getElementById('tab-4').style.backgroundColor = 'white';
    document.getElementById('tab-5').style.backgroundColor = 'white';
    document.getElementById('tab-6').style.backgroundColor = 'white';



    document.getElementById('usuario-caja').style.display = 'none';
    document.getElementById('compra-caja').style.display = 'block';
    document.getElementById('editar-caja').style.display = 'none';
    document.getElementById('tarjeta-caja').style.display = 'none';
    document.getElementById('añadir-caja').style.display = 'none';
    document.getElementById('lista-producto-caja').style.display = 'none';



  }

  tab3() {
    document.getElementById('tab-1').style.backgroundColor = 'white';
    document.getElementById('tab-2').style.backgroundColor = 'white';
    document.getElementById('tab-3').style.backgroundColor = '#ff7712';
    document.getElementById('tab-4').style.backgroundColor = 'white';
    document.getElementById('tab-5').style.backgroundColor = 'white';
    document.getElementById('tab-6').style.backgroundColor = 'white';



    document.getElementById('usuario-caja').style.display = 'none';
    document.getElementById('compra-caja').style.display = 'none';
    document.getElementById('editar-caja').style.display = 'block';
    document.getElementById('tarjeta-caja').style.display = 'none';
    document.getElementById('añadir-caja').style.display = 'none';
    document.getElementById('lista-producto-caja').style.display = 'none';




  }
  tab4() {
    document.getElementById('tab-1').style.backgroundColor = 'white';
    document.getElementById('tab-2').style.backgroundColor = 'white';
    document.getElementById('tab-3').style.backgroundColor = 'white';
    document.getElementById('tab-4').style.backgroundColor = '#ff7712';
    document.getElementById('tab-5').style.backgroundColor = 'white';
    document.getElementById('tab-6').style.backgroundColor = 'white';



    document.getElementById('usuario-caja').style.display = 'none';
    document.getElementById('compra-caja').style.display = 'none';
    document.getElementById('editar-caja').style.display = 'none';
    document.getElementById('tarjeta-caja').style.display = 'block';
    document.getElementById('añadir-caja').style.display = 'none';
    document.getElementById('lista-producto-caja').style.display = 'none';



  }
  tab5() {
    document.getElementById('tab-1').style.backgroundColor = 'white';
    document.getElementById('tab-2').style.backgroundColor = 'white';
    document.getElementById('tab-3').style.backgroundColor = 'white';
    document.getElementById('tab-4').style.backgroundColor = 'white';
    document.getElementById('tab-5').style.backgroundColor = '#ff7712';
    document.getElementById('tab-6').style.backgroundColor = 'white';



    document.getElementById('usuario-caja').style.display = 'none';
    document.getElementById('compra-caja').style.display = 'none';
    document.getElementById('editar-caja').style.display = 'none';
    document.getElementById('tarjeta-caja').style.display = 'none';
    document.getElementById('añadir-caja').style.display = 'block';
    document.getElementById('lista-producto-caja').style.display = 'none';



  }
  tab6() {
    document.getElementById('tab-1').style.backgroundColor = 'white';
    document.getElementById('tab-2').style.backgroundColor = 'white';
    document.getElementById('tab-3').style.backgroundColor = 'white';
    document.getElementById('tab-4').style.backgroundColor = 'white';
    document.getElementById('tab-5').style.backgroundColor = 'white';
    document.getElementById('tab-6').style.backgroundColor = '#ff7712';



    document.getElementById('usuario-caja').style.display = 'none';
    document.getElementById('compra-caja').style.display = 'none';
    document.getElementById('editar-caja').style.display = 'none';
    document.getElementById('tarjeta-caja').style.display = 'none';
    document.getElementById('añadir-caja').style.display = 'none';
    document.getElementById('lista-producto-caja').style.display = 'block';



  }
  boton5() {
    document.getElementById('tab-1').style.backgroundColor = 'white';
    document.getElementById('tab-2').style.backgroundColor = 'white';
    document.getElementById('tab-3').style.backgroundColor = 'white';
    document.getElementById('tab-4').style.backgroundColor = 'white';
    document.getElementById('tab-5').style.backgroundColor = '#ff7712';
    document.getElementById('tab-6').style.backgroundColor = 'white';



    document.getElementById('usuario-caja').style.display = 'none';
    document.getElementById('compra-caja').style.display = 'none';
    document.getElementById('editar-caja').style.display = 'none';
    document.getElementById('tarjeta-caja').style.display = 'none';
    document.getElementById('añadir-caja').style.display = 'block';
    document.getElementById('lista-producto-caja').style.display = 'none';



  }

  boton6() {
    document.getElementById('tab-1').style.backgroundColor = 'white';
    document.getElementById('tab-2').style.backgroundColor = 'white';
    document.getElementById('tab-3').style.backgroundColor = 'white';
    document.getElementById('tab-4').style.backgroundColor = 'white';
    document.getElementById('tab-5').style.backgroundColor = 'white';
    document.getElementById('tab-6').style.backgroundColor = '#ff7712';




    document.getElementById('usuario-caja').style.display = 'none';
    document.getElementById('compra-caja').style.display = 'none';
    document.getElementById('editar-caja').style.display = 'none';
    document.getElementById('tarjeta-caja').style.display = 'none';
    document.getElementById('añadir-caja').style.display = 'none';
    document.getElementById('lista-producto-caja').style.display = 'block';



  }


  edit1() {
    document.getElementById('content-1').style.display = 'none';
    document.getElementById('content-2').style.display = 'none';
    document.getElementById('content-3').style.display = 'none';
    document.getElementById('content-4').style.display = 'none';
    document.getElementById('content-5').style.display = 'none';
    document.getElementById('content-6').style.display = 'none';




    document.getElementById('nombre').style.display = 'block';
    document.getElementById('apellp').style.display = 'block';
    document.getElementById('apellm').style.display = 'block';
    document.getElementById('tel').style.display = 'block';
    document.getElementById('vivienda').style.display = 'block';
    document.getElementById('numvivienda').style.display = 'block';


    document.getElementById('exampleFormControlFile1').style.display = 'block';

    document.getElementById('form2').style.display = 'block';

    document.getElementById('edit').style.display = 'none';
    document.getElementById('fin').style.display = 'block';
    document.getElementById('cancelar').style.display = 'block';
  }



  fin() {
    location.reload();
    alert('CAMBIO REALIZADO');
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

producto_tab_1()
{
  document.getElementById('Categoria').innerHTML = 'Frutas y verduras';

  document.getElementById('frutas').style.display = 'block';
  document.getElementById('Bebidas').style.display = 'none';
  document.getElementById('Carne').style.display = 'none';
  document.getElementById('cantidad').style.display = 'block';
  document.getElementById('nombrepr').style.display = 'block';

}

producto_tab_2()
{
  document.getElementById('Categoria').innerHTML = 'Bebidas';

  document.getElementById('frutas').style.display = 'none';
  document.getElementById('Bebidas').style.display = 'block';
  document.getElementById('Carne').style.display = 'none';
  document.getElementById('cantidad').style.display = 'block';
  document.getElementById('nombrepr').style.display = 'block';
}

producto_tab_3()
{
  document.getElementById('Categoria').innerHTML = 'Carne y Embutidos';

  document.getElementById('frutas').style.display = 'none';
  document.getElementById('Bebidas').style.display = 'none';
  document.getElementById('Carne').style.display = 'block';
  document.getElementById('cantidad').style.display = 'block';
  document.getElementById('nombrepr').style.display = 'block';
}

v_1()
{
  document.getElementById('subcategoria').innerHTML = 'Hortalizas';
}
v_2()
{
  document.getElementById('subcategoria').innerHTML = 'Tomates';
}
v_3()
{
  document.getElementById('subcategoria').innerHTML = 'Papa';
}
v_4()
{
  document.getElementById('subcategoria').innerHTML = 'Lechuga';
}
v_5()
{
  document.getElementById('subcategoria').innerHTML = 'Cebolla';
}

f_1()
{
  document.getElementById('subcategoria').innerHTML = 'Citricos';
}
f_2()
{
  document.getElementById('subcategoria').innerHTML = 'Melones';
}
f_3()
{
  document.getElementById('subcategoria').innerHTML = 'Frutas Secas';
}
f_4()
{
  document.getElementById('subcategoria').innerHTML = 'Platanos';
}
f_5()
{
  document.getElementById('subcategoria').innerHTML = 'Manzana';
}
f_6()
{
  document.getElementById('subcategoria').innerHTML = 'Uva';
}

r_1()
{
  document.getElementById('subcategoria').innerHTML = 'Coca cola';
}
r_2()
{
  document.getElementById('subcategoria').innerHTML = 'Jugos del valle';
}
r_3()
{
  document.getElementById('subcategoria').innerHTML = 'Jugos tampico';
}
r_4()
{
  document.getElementById('subcategoria').innerHTML = 'Agua vital';
}
r_5()
{
  document.getElementById('subcategoria').innerHTML = 'Fanta & Sprite';
}


b_1()
{
  document.getElementById('subcategoria').innerHTML = 'Cerveza';
}
b_2()
{
  document.getElementById('subcategoria').innerHTML = 'SixPack';
}
b_3()
{
  document.getElementById('subcategoria').innerHTML = 'Smirnoff';
}
b_4()
{
  document.getElementById('subcategoria').innerHTML = 'Tragos';
}
b_5()
{
  document.getElementById('subcategoria').innerHTML = 'Vinos';
}
b_6()
{
  document.getElementById('subcategoria').innerHTML = 'Tequila';
}


c_1()
{
  document.getElementById('subcategoria').innerHTML = 'Lomo';
}
c_2()
{
  document.getElementById('subcategoria').innerHTML = 'Chuletas';
}
c_3()
{
  document.getElementById('subcategoria').innerHTML = 'Costillar';
}
c_4()
{
  document.getElementById('subcategoria').innerHTML = 'Cuadril';
}
c_5()
{
  document.getElementById('subcategoria').innerHTML = 'Carne Molida';
}

e_1()
{
  document.getElementById('subcategoria').innerHTML = 'Chorizo empaquetado';
}
e_2()
{
  document.getElementById('subcategoria').innerHTML = 'Chorizo p granel';
}
e_3()
{
  document.getElementById('subcategoria').innerHTML = 'Salchichas';
}
e_4()
{
  document.getElementById('subcategoria').innerHTML = 'Jamon en barra';
}
e_5()
{
  document.getElementById('subcategoria').innerHTML = 'Mortadela empaquetada';
}
e_6()
{
  document.getElementById('subcategoria').innerHTML = 'Paté de higado';
}

anadirproducto()
{
  location.reload();
  alert('Producto Añadido');




}

}
