<?php


header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Credentials: true');
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");


include_once 'db.php';

class Pelicula extends DB{

    function obtenerPersonas(){
        $query = $this->connect()->query('SELECT * FROM usuarios');
        return $query;
    }

    function obtenerPersona($id){
        $query = $this->connect()->prepare('SELECT * FROM usuarios WHERE email = :id');
        $query->execute(['id' => $id]);
        return $query;
    }


   
    function InsertarUsuario($datos){
        $query = $this->connect()->prepare(' INSERT INTO usuarios (nombre, apellido_paterno, apellido_materno, email, password, telefono, direccion, num_de_casa)  VALUES (:nombre, :apellido_paterno, :apellido_materno, :email, :password, :telefono, :direccion, :num_de_casa)');
        
     
        $query->execute(['nombre' => $datos['nombre'] ,'apellido_paterno' => $datos['apellido_paterno'], 'apellido_materno' => $datos['apellido_materno'], 'email' => $datos['email'], 'password' => $datos['password'], 'telefono' => $datos['telefono'], 'direccion' => $datos['direccion'], 'num_de_casa' => $datos['num_de_casa']]);
        return $query;
        
     
    } 

    function actualizar($datos)
    {
        $query = $this->connect()->prepare(' UPDATE  usuarios SET nombre =:nombre,apellido_paterno=:apellido_paterno,apellido_materno=:apellido_materno,telefono=:telefono, direccion=:direccion, num_de_casa=:num_de_casa WHERE id=:id');
        
     
        $query->execute(['nombre' => $datos['nombre'] ,'apellido_paterno' => $datos['apellido_paterno'], 'apellido_materno' => $datos['apellido_materno'], 'telefono' => $datos['telefono'], 'direccion' => $datos['direccion'], 'num_de_casa' => $datos['num_de_casa'] , 'id' => $datos['id']]);
        return $query;
    } 






    function login($datos)
    {
        $query = $this->connect()->prepare('SELECT * from usuarios WHERE email =:email and password = :password');
        $query->execute(['email' => $datos['email'] , 'password' => $datos['password']]);
          
        if ($query->rowCount()) {
            return true;
        }else{
            return false;
        }
    }
    }

  






?>
