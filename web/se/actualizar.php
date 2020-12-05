<?php 

include_once 'apipersonas.php';

$api = new ApiPeliculas();

if(isset($_POST['nombre']) && isset($_POST['direccion']))
{
        $item = array(
            'id' => $_POST['id'],
            'nombre' => $_POST['nombre'],
            'apellido_paterno' => $_POST['apellido_paterno'],
            'apellido_materno' => $_POST['apellido_materno'],
            'telefono' => $_POST['telefono'],
            'direccion' => $_POST['direccion'],
            'num_de_casa' => $_POST['numdecasa'],
            
        );
        
            
           $api->update($item);




}else{
    $api -> error('Error al llamar a la API');
}


 
?>