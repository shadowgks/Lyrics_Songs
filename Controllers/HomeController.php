<?php

require_once 'ArtistControlller.php';
require_once 'GenerController.php';
require_once 'SongController.php';
require_once 'UserController.php';
class HomeController{
    function index($page){
        include 'views/'.$page.'.php';
    }
}