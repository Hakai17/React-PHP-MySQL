<?php
abstract class connect{

    protected function connectDB()
    {
         try{
             $Con=new PDO("mysql:host=localhost;dbname=scandiweb","root","");
             return $Con;
         }catch (PDOException $Erro){
             return $Erro->getMessage();
         }
    }
}
?>