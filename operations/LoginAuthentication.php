<?php
require "./Controller/DBConnection.php";
require "./utils/sanitizer.php";

$request = json_decode(file_get_contents("php://input"));
if(notEmpty($request)){
    $result = $conn->query(
        "Select * from users 
         where user_name = '$request[0]' and user_pass = '$request[1]' and user_type = '$request[2]' ");
    if($result->fetch_array(MYSQLI_NUM) != null){
        header("location: https://www.facebook.com");
    }else{
        echo json_encode(["Type" => "Error", "Message" => "User does not exist!"]);
    }
}else{
    echo json_encode(["Type" => "Error", "Message" => "Empty fields!"]);
}
