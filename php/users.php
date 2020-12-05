<?php





include_once 'db.php';

class Pelicula extends DB{

    function obtenerPersonas(){
        $query = $this->connect()->query('SELECT * FROM usuarios');
        return $query;
    }

    function obtenerPersona($id){
        $query = $this->connect()->prepare('SELECT * FROM usuarios WHERE id = :id');
        $query->execute(['id' => $id]);
        return $query;
    }


   
    function InsertarUsuario($datos){
        $query = $this->connect()->prepare('INSERT INTO usuarios (email, password, cargo)  VALUES (:email, :password, :cargo)');
        $query->execute(['email' => $datos['email'] , 'password' => $datos['password'], 'cargo' => $datos['cargo']]);
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
