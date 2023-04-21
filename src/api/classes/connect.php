<?php
class connect{

    protected function connectDB()
    {
         try{
             $conn=new PDO("mysql:host=localhost;dbname=scandiweb","root","");
             return $conn;
         }catch (PDOException $Erro){
             return $Erro->getMessage();
         }
    }
}
?>