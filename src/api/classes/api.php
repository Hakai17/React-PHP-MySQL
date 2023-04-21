<?php
class API extends connect {
    private $db;
    private $table;

    public function __construct($db, $table) {
        $this->db = $db;
        $this->table = $table;
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: GET, POST, DELETE");
        header("Access-Control-Allow-Headers: Content-Type");
        header('Content-Type: application/json');
    }

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

        echo json_encode($J);
    }


    public function createData($data) {
        // Insert the data on DB
    }

    public function deleteData($id) {
        // Delete the id requested
    }
}
?>