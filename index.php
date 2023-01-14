<?php

require_once('autoload.php');

$obj = new HomeController();
$array_pages = ['dashboard','home','profile_song','sign_in','sign_up'];

if(isset($_GET['pages'])){
    if(in_array($_GET['pages'], $array_pages)){
        $page = $_GET['pages'];
        $obj->index($page);
    }else{
        include 'Views/includes/404.php';
    }
}else{
    include 'Views/home.php';
}