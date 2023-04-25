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
                "attribute"=>$Fetch['attribute']
            ];
            $I++;
        }

        echo json_encode($J);
    }

    public function createData()
        {
        $body = json_decode(file_get_contents('php://input'), true);

        $sql = "INSERT INTO products (sku, name, price, type, attribute) VALUES (";

        $bodyValues = "'".implode("', '", array_values($body))."'";
        $sql .= $bodyValues.");";

        $db =$this->connectDB();
        $query = $db->prepare($sql);
        $queryResponse = $query->execute();

        if($queryResponse){
            echo json_encode(["data" => "success"]);
            http_response_code(200);
        } else {
            echo json_encode(["data" => "error"]);
            http_response_code(500);
        }
    }

    public function deleteData($id) {
        // Delete the id requested
    }
}
?>