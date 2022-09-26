<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Cookie;
use App\Http\Controllers\Controller;

class RootController extends Controller
{
    public function show(Request $request)
    {
        return view('welcome', [
            'assetUrl' => rtrim(asset('/'), '/'),
            //https use: secure_asset
        ]);
    }
}
