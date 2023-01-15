<?php

class UserController{
    function getAllUsers(){
        $data_Users = User::getAll();
        return $data_Users;
    }
}