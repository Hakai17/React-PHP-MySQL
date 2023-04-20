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
}
?>