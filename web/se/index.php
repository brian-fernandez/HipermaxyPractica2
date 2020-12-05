<?php
include 'apipersonas.php';



$api = new ApiPeliculas();

if (isset($_GET['email'])) {
    $id = $_GET['email'];

    if ($id) {
        $api -> getById($id);
    }else
    {
        $api -> error('Los parametros no existen');
    }
}else{
    $api->getAll();
}

/*



*/






?>