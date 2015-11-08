<?php

$key=$_GET['key'];

if($key=='home')
{
include('home.php'); 
}
else if($key=='login')
{
include('login.php');
} 
else if($key=='signup')
{
include('signup.php');
}
else 
{
include('home.php'); 
}
?>