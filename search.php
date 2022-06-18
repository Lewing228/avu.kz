<?php
$conn = new PDO("mysql:host=localhost;dbname=search;charset=UTF8", "root", "root", [
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
    ]);

$search = mb_strtolower($_GET["searchstring"]);
$query = $conn->query("SELECT * FROM catalog");
$resArray = $query->fetchAll();

$res = array();

for($i = 0; $i < count($resArray); $i++){
    $title = $resArray[$i]["title"];
    if(strpos(mb_strtolower($title), $search) !== false){
        $res[] = $resArray[$i];
    }
}

echo json_encode($res,JSON_UNESCAPED_UNICODE);
?>