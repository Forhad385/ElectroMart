<?php
$mysqli = new mysqli("localhost", "root", "", "electromart");

// CREATE
if(isset($_POST['add'])){
    $name = $_POST['name'];
    $price = $_POST['price'];
    $desc = $_POST['desc'];
    $img = $_POST['img'];
    $mysqli->query("INSERT INTO products (name, price, description, img) 
                    VALUES ('$name','$price','$desc','$img')");
}

// READ
$result = $mysqli->query("SELECT * FROM products");

// UPDATE
if(isset($_POST['update'])){
    $id = $_POST['id'];
    $name = $_POST['name'];
    $price = $_POST['price'];
    $desc = $_POST['desc'];
    $mysqli->query("UPDATE products SET 
                    name='$name', price='$price', description='$desc' 
                    WHERE id=$id");
}

// DELETE
if(isset($_GET['delete'])){
    $id = $_GET['delete'];
    $mysqli->query("DELETE FROM products WHERE id=$id");
}
?>
