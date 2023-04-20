<?php
include("classes/product.php");
$product=new product();
$product->showProduct();

if(isset($path[0])) { $action = $path[0]; } else { $action = ""; }

$method = $_SERVER["REQUEST_METHOD"];

if($method == "GET" && $action == "products") {
    showProduct();
}
else if ($method == "POST" && $action == "products") {
    addProduct();
}
?>