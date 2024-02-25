<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Test;
use Carbon\Carbon;

class TestController extends Controller
{
    public function test2(Request $request)
    {
        try {
            //Based on Model
            $test = new Test;
            //Book fields
            $test->stat = $request->stat;
            $test->created_at = Carbon::now();
            $test->updated_at = Carbon::now();
            //Save the book
            $test->save();
            //Return the response
            return response()->json([
                'message' => 'API is working',
                'test' => $test,
                'status' => 'success',
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Error in API',
                'test' => $test,
                'status' => 'error',
                'error' => $e->getMessage(),
            ]);
        }
    }
}
