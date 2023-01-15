<?php

class GenerController{
    function getAllGeners(){
        $data_geners = Gener::getAll();
        return $data_geners;
    }
}