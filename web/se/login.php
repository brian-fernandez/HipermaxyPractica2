<?php 
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Credentials: true');
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
include_once 'apipersonas.php';

$api = new ApiPeliculas();

if(isset($_POST['correo']) && isset($_POST['password']))
{
        $item = array(
            'email' =>$_POST['correo'],
            'password' =>$_POST['password'],
            
        );
        // $res = json_encode(array("user" => $api->loginuser($item)));
       $res = $api->loginuser($item);
    //    echo($res);
    //     if($res > 0)
    //    {
    //     echo ("bienvenido");
       
    //    }
    //    else
    //    {
    //     echo("no");
    //    }
              
}        
     
       



 
?>