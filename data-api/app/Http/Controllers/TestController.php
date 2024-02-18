<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Test;

class TestController extends Controller
{
    public function testing(Request $request)
    {
        try {
            $test = new Test;
            $test->status = $request->status;
            $test->save();
            return response()->json([
                "message" => "Test record created"
            ], 201);
        } catch (\Exception $e) {
            return response()->json([
                "message" => "Error in API"
            ], 500);
        }
        
    }
}
