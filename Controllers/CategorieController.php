<?php

class GenerController{
    function getAllGeners(){
        $data_geners = Categorie::getAll();
        return $data_geners;
    }
}