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

        $db = $this->connectDB();
        $sku = $body['sku'];
        $query = $db->prepare("SELECT COUNT(*) FROM products WHERE sku = ?");
        $query->execute([$sku]);
        $result = $query->fetch(PDO::FETCH_NUM);
        if ($result[0] > 0) {
            echo json_encode(["data" => "SKU already exists"]);
            http_response_code(400);
            return;
        }

        if (!isset($body['sku']) || !isset($body['name']) || !isset($body['price']) || !isset($body['attribute']) || !isset($body['attribute2']) || !isset($body['attribute3'])) {
            echo json_encode(["error" => "Input fields missing"]);
            http_response_code(400);
            return;
        }

        $type = $body['type'];
        switch ($type) {
        case 'DVD':
        case 'Book':
            if (empty($body['sku']) || empty($body['name']) || empty($body['price']) || empty($body['attribute'])) {
                echo json_encode(["error" => "Input fields empty"]);
                http_response_code(400);
                return;
            }
            break;
        case 'Furniture':
            if (empty($body['sku']) || empty($body['name']) || empty($body['price']) || empty($body['attribute']) || empty($body['attribute2']) || empty($body['attribute3'])) {
                echo json_encode(["error" => "Input fields empty"]);
                http_response_code(400);
                return;
            }
            break;
        default:
            // Invalid type
            echo json_encode(["data" => "Invalid type"]);
            http_response_code(400);
            return;
        }

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
        $sql_ids = trim($ids, '[]');

        $stmt=$this->connectDB()->prepare("DELETE FROM products WHERE id IN (". $sql_ids . ")");
        $stmt->execute();

        header("Content-Type: application/json");
        echo json_encode(["success" => true]);
    }
}
?>