import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seccion2',
  templateUrl: './seccion2.component.html',
  styleUrls: ['./seccion2.component.css']
})
export class Seccion2Component implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }



 boton1()
 {
    document.getElementById("btn-hortalizas").style.backgroundColor="#737373";
    document.getElementById("btn-tomates").style.backgroundColor="#ff8800";
    document.getElementById("btn-papas").style.backgroundColor="#ff8800";
    document.getElementById("btn-lechugas").style.backgroundColor="#ff8800";
    document.getElementById("btn-cebollas").style.backgroundColor="#ff8800";



    document.getElementById("hortalizas").style.display="flex";
    document.getElementById("tomates").style.display="none";
    document.getElementById("papas").style.display="none";
    document.getElementById("lechugas").style.display="none";
    document.getElementById("cebollas").style.display="none";

 }
 boton2()
 {

    document.getElementById("btn-hortalizas").style.backgroundColor="#ff8800";
    document.getElementById("btn-tomates").style.backgroundColor="#737373";
    document.getElementById("btn-papas").style.backgroundColor="#ff8800";
    document.getElementById("btn-lechugas").style.backgroundColor="#ff8800";
    document.getElementById("btn-cebollas").style.backgroundColor="#ff8800";



    document.getElementById("hortalizas").style.display="none";
    document.getElementById("tomates").style.display="flex";
    document.getElementById("papas").style.display="none";
    document.getElementById("lechugas").style.display="none";
    document.getElementById("cebollas").style.display="none";

 }
 boton3()
 {

    document.getElementById("btn-hortalizas").style.backgroundColor="#ff8800";
    document.getElementById("btn-tomates").style.backgroundColor="#ff8800";
    document.getElementById("btn-papas").style.backgroundColor="#737373";
    document.getElementById("btn-lechugas").style.backgroundColor="#ff8800";
    document.getElementById("btn-cebollas").style.backgroundColor="#ff8800";


    document.getElementById("hortalizas").style.display="none";
    document.getElementById("tomates").style.display="none";
    document.getElementById("papas").style.display="flex";
    document.getElementById("lechugas").style.display="none";
    document.getElementById("cebollas").style.display="none";

 }
 boton4()
 {
  document.getElementById("btn-hortalizas").style.backgroundColor="#ff8800";
  document.getElementById("btn-tomates").style.backgroundColor="#ff8800";
  document.getElementById("btn-papas").style.backgroundColor="#ff8800";
  document.getElementById("btn-lechugas").style.backgroundColor="#737373";
  document.getElementById("btn-cebollas").style.backgroundColor="#ff8800";

    document.getElementById("hortalizas").style.display="none";
    document.getElementById("tomates").style.display="none";
    document.getElementById("papas").style.display="none";
    document.getElementById("lechugas").style.display="flex";
    document.getElementById("cebollas").style.display="none";

 }

 boton5()
 {
  document.getElementById("btn-hortalizas").style.backgroundColor="#ff8800";
  document.getElementById("btn-tomates").style.backgroundColor="#ff8800";
  document.getElementById("btn-papas").style.backgroundColor="#ff8800";
  document.getElementById("btn-lechugas").style.backgroundColor="#ff8800";
  document.getElementById("btn-cebollas").style.backgroundColor="#737373";

    document.getElementById("hortalizas").style.display="none";
    document.getElementById("tomates").style.display="none";
    document.getElementById("papas").style.display="none";
    document.getElementById("lechugas").style.display="none";
    document.getElementById("cebollas").style.display="flex";

 }

//frutas

boton6()
{
   document.getElementById("btn-citricos").style.backgroundColor="#737373";
   document.getElementById("btn-melones").style.backgroundColor="#ff8800";
   document.getElementById("btn-frutas-secas").style.backgroundColor="#ff8800";
   document.getElementById("btn-platanos").style.backgroundColor="#ff8800";
   document.getElementById("btn-manzanas").style.backgroundColor="#ff8800";
   document.getElementById("btn-uvas").style.backgroundColor="#ff8800";



   document.getElementById("citricos").style.display="flex";
   document.getElementById("melones").style.display="none";
   document.getElementById("frutas-secas").style.display="none";
   document.getElementById("platanos").style.display="none";
   document.getElementById("manzanas").style.display="none";
   document.getElementById("uvas").style.display="none";

}
boton7()
{

  document.getElementById("btn-citricos").style.backgroundColor="#ff8800";
   document.getElementById("btn-melones").style.backgroundColor="#737373";
   document.getElementById("btn-frutas-secas").style.backgroundColor="#ff8800";
   document.getElementById("btn-platanos").style.backgroundColor="#ff8800";
   document.getElementById("btn-manzanas").style.backgroundColor="#ff8800";
   document.getElementById("btn-uvas").style.backgroundColor="#ff8800";


   document.getElementById("citricos").style.display="none";
   document.getElementById("melones").style.display="flex";
   document.getElementById("frutas-secas").style.display="none";
   document.getElementById("platanos").style.display="none";
   document.getElementById("manzanas").style.display="none";
   document.getElementById("uvas").style.display="none";

}
boton8()
{

  document.getElementById("btn-citricos").style.backgroundColor="#ff8800";
  document.getElementById("btn-melones").style.backgroundColor="#ff8800";
  document.getElementById("btn-frutas-secas").style.backgroundColor="#737373";
  document.getElementById("btn-platanos").style.backgroundColor="#ff8800";
  document.getElementById("btn-manzanas").style.backgroundColor="#ff8800";
  document.getElementById("btn-uvas").style.backgroundColor="#ff8800";


  document.getElementById("citricos").style.display="none";
  document.getElementById("melones").style.display="none";
  document.getElementById("frutas-secas").style.display="flex";
  document.getElementById("platanos").style.display="none";
  document.getElementById("manzanas").style.display="none";
  document.getElementById("uvas").style.display="none";

}
boton9()
{
  document.getElementById("btn-citricos").style.backgroundColor="#ff8800";
  document.getElementById("btn-melones").style.backgroundColor="#ff8800";
  document.getElementById("btn-frutas-secas").style.backgroundColor="#ff8800";
  document.getElementById("btn-platanos").style.backgroundColor="#737373";
  document.getElementById("btn-manzanas").style.backgroundColor="#ff8800";
  document.getElementById("btn-uvas").style.backgroundColor="#ff8800";


  document.getElementById("citricos").style.display="none";
  document.getElementById("melones").style.display="none";
  document.getElementById("frutas-secas").style.display="none";
  document.getElementById("platanos").style.display="flex";
  document.getElementById("manzanas").style.display="none";
  document.getElementById("uvas").style.display="none";

}

boton10()
{
  document.getElementById("btn-citricos").style.backgroundColor="#ff8800";
  document.getElementById("btn-melones").style.backgroundColor="#ff8800";
  document.getElementById("btn-frutas-secas").style.backgroundColor="#ff8800";
  document.getElementById("btn-platanos").style.backgroundColor="#ff8800";
  document.getElementById("btn-manzanas").style.backgroundColor="#737373";
  document.getElementById("btn-uvas").style.backgroundColor="#ff8800";


  document.getElementById("citricos").style.display="none";
  document.getElementById("melones").style.display="none";
  document.getElementById("frutas-secas").style.display="none";
  document.getElementById("platanos").style.display="none";
  document.getElementById("manzanas").style.display="flex";
  document.getElementById("uvas").style.display="none";


}

boton11()
{
  document.getElementById("btn-citricos").style.backgroundColor="#ff8800";
  document.getElementById("btn-melones").style.backgroundColor="#ff8800";
  document.getElementById("btn-frutas-secas").style.backgroundColor="#ff8800";
  document.getElementById("btn-platanos").style.backgroundColor="#ff8800";
  document.getElementById("btn-manzanas").style.backgroundColor="#ff8800";
  document.getElementById("btn-uvas").style.backgroundColor="#737373";


  document.getElementById("citricos").style.display="none";
  document.getElementById("melones").style.display="none";
  document.getElementById("frutas-secas").style.display="none";
  document.getElementById("platanos").style.display="none";
  document.getElementById("manzanas").style.display="none";
  document.getElementById("uvas").style.display="flex";


}

}
