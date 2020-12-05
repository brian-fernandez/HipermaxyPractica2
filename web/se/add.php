<?php 

include_once 'apipersonas.php';

$api = new ApiPeliculas();

if(isset($_POST['correo']) && isset($_POST['password'])&& isset($_POST['cargo']))
{
        $item = array(
            'email' =>$_POST['correo'],
            'password' =>$_POST['password'],
            'cargo' =>$_POST['cargo'],
        );
        
          $api->add($item);


}else{
    $api -> error('Error al llamar a la API');
}


 
?>