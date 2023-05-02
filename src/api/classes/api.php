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
        $stmt=$this->connectDB()->prepare("select * from products");
        $stmt->execute();

        $J=[];
        $I=0;

        while($Fetch=$stmt->fetch(PDO::FETCH_ASSOC)){
            $J[$I]=[
                "id"=>$Fetch['id'],
                "sku"=>$Fetch['sku'],
                "name"=>$Fetch['name'],
                "price"=>$Fetch['price'],
                "type"=>$Fetch['type'],
                "attribute"=>$Fetch['attribute'],
                "attribute2"=>$Fetch['attribute2'],
                "attribute3"=>$Fetch['attribute3']
            ];
            $I++;
        }

        echo json_encode($J);
    }

    public function createData()
        {
        $body = json_decode(file_get_contents('php://input'), true);

        $sql = "INSERT INTO products (sku, name, price, type, attribute, attribute2, attribute3) VALUES (";

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

    public function deleteData($ids) {
        $ids = json_decode(file_get_contents("php://input"));

        $sql_ids = implode(",", array_values($ids["ids"]));

        $stmt=$this->connectDB()->prepare("DELETE FROM products WHERE id IN (". $sql_ids . ")");
        $stmt->execute();

        header("Content-Type: application/json");
        echo json_encode(["success" => true]);
    }
}
?>