<?php
require_once('classes/connect.php');
require_once('classes/api.php');

$db = new connect();
$api = new API($db, 'products');

$method = $_SERVER['REQUEST_METHOD'];
$request = explode('/', trim($_SERVER['REQUEST_URI'],'/'));
$key = intval(array_shift($request));

switch ($method) {
    case 'GET':
        $api->showProduct($key);
        break;
    case 'POST':
        $data = json_decode(file_get_contents('php://input'), true);
        $api->createData($data);
        break;
    case 'DELETE':
        $api->deleteData($key);
        break;
    default:
        // Retornar um erro 405 - Método não permitido
        break;
}
