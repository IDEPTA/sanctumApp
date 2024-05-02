<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class getController extends Controller
{
    public function __invoke()
    {
        return response()->json(['msg' => "ты авторизован"]);
    }
}
