<?php
include("connect.php");

class product extends connect{

    public function showProduct()
    {
        $BFetch=$this->connectDB()->prepare("select * from products");
        $BFetch->execute();

        $J=[];
        $I=0;

        while($Fetch=$BFetch->fetch(PDO::FETCH_ASSOC)){
            $J[$I]=[
                "id"=>$Fetch['id'],
                "sku"=>$Fetch['sku'],
                "name"=>$Fetch['name'],
                "price"=>$Fetch['price'],
                "type"=>$Fetch['type'],
                "atributte"=>$Fetch['atributte']
            ];
            $I++;
        }

        header("Access-Control-Allow-Origin:*");
        header("Content-type: application/json");
        echo json_encode($J);
    }

    function addProduct(){
        $body = json_decode(file_get_contents('php://input'), true);

        $sql = "INSERT INTO products (sku, name, price, type, atributte) VALUES (";


        $bodyValues = "'".implode("', '", array_values($body))."'";
        $sql .= $bodyValues.");";

        $db = DB::connect();
        $query = $db->prepare($sql);
        $queryResponse = $query->execute();
    }

    /* public function create()
    {
        $request = $_REQUEST;
        $product = $this->model(ucfirst($request['productType']));
        $product->add($request);
        $this->redirect('/');
    }

    public function delete()
    {
        $request = $_REQUEST;
        $product = new Product();
        $product->delete($request);
        $this->redirect('/');
    } */
}
?>