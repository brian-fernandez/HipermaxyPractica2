<?php

include_once 'users.php';

class ApiPeliculas{

    function getAll(){
        $pelicula = new Pelicula();
        $peliculas = array();
        $peliculas["items"] = array();

        $res = $pelicula->obtenerPersonas();

        if($res->rowCount()){
            while ($row = $res->fetch(PDO::FETCH_ASSOC)){

                $item=array(
                    "id" => $row['id'],
                    "nombre" => $row['nombre'],
                    "apellido_paterno" => $row['apellido_paterno'],
                    "apellido_materno" => $row['apellido_materno'],
                    "email" => $row['email'],
                    "password" => $row['password'],
                    "telefono" => $row['telefono'],
                    "direccion" => $row['direccion'],
                    "num_de_casa" => $row['num_de_casa'],
                );
                array_push($peliculas["items"], $item);
            }

            echo json_encode($peliculas);
        }else{
            echo json_encode(array('mensaje' => 'No hay elementos'));
        }
    }

    function getById($id){
        $pelicula = new Pelicula();
        $peliculas = array();
        $peliculas["items"] = array();

        $res = $pelicula->obtenerPersona($id);
        
        if($res){
            $row = $res->fetch();
            
            $item=array(
                "id" => $row['id'],
                    "nombre" => $row['nombre'],
                    "apellido_paterno" => $row['apellido_paterno'],
                    "apellido_materno" => $row['apellido_materno'],
                    "email" => $row['email'],
                    "password" => $row['password'],
                    "telefono" => $row['telefono'],
                    "direccion" => $row['direccion'],
                    "num_de_casa" => $row['num_de_casa'],
            );
            
            array_push($peliculas["items"], $item);


           
            $cad = json_encode($peliculas);

            

            echo json_encode($peliculas);
            return $cad;
        }else{
            echo json_encode(array('mensaje' => 'No hay elementos'));
        }
    }



    function add ($item)
    {
        $pelicula = new Pelicula();

        $res = $pelicula->InsertarUsuario($item);
        $this->exito($item);


        
    }

    function update($item)
    {
        $pelicula = new Pelicula();
        
        $res = $pelicula->actualizar($item);
        $this->exito($item);
        
    } 




    function loginuser($item)
    {
        $pelicula = new Pelicula();

        $res = $pelicula->login($item);
        
           
        
       if ($res==true) {
        echo json_encode(array('mensaje' => "true"));
        
           return true;
       }else
       {
        echo json_encode(array('mensaje' => "false"));
           return false;
       }
        
        
    }





    function exito($mensaje)
    {
        echo json_encode(array('mensaje' => $mensaje));
    }

    function error($mensaje){
        echo json_encode(array('mensaje' => $mensaje));
    }

    function printJSON($array){
        echo '<code>'.json_encode($array).'</code>';
    }
}
