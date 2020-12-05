<?php 

include_once 'apipersonas.php';

$api = new ApiPeliculas();

if(isset($_POST['correo']) && isset($_POST['password']))
{
        $item = array(
            'nombre' => $_POST['nombre'],
            'apellido_paterno' => $_POST['apellido_paterno'],
            'apellido_materno' => $_POST['apellido_materno'],
            'email' => $_POST['correo'],
            'password' => $_POST['password'],
            'telefono' => $_POST['telefono'],
            'direccion' => $_POST['direccion'],
            'num_de_casa' => $_POST['numdecasa'],
            
        );
        
       
           $api->add($item);




}else{
    $api -> error('Error al llamar a la API');
}


 
?>