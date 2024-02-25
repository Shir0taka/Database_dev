<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Customer;
use Carbon\Carbon;

class CustomerController extends Controller
{
    public function reg_customer(Request $request)
    {
        try {
            $customer = new Customer;

            $customer->name = $request->name;
            $customer->email = $request->email;
            $customer->password = $request->password;
            $customer->address = $request->address;
            $customer->city = $request->city;
            $customer->phone = $request->phone;
            $customer->created_at = Carbon::now();
            $customer->updated_at = Carbon::now();

            $customer->save();

            return response()->json([
                'message' => 'API is working',
                'customer' => $customer,
                'status' => 'success',
            ]);
        } catch (\Exception $e) {
            // Handle the exception here
            return response()->json([
                'message' => 'Error in API',
                'customer' => $customer,
                'status' => 'error',
                'error' => $e->getMessage(),
            ]);
        }
    }

    public function login_customer(Request $request)
    {
        try {
            $customer = Customer::where('email', $request->email)->where('password', $request->password)->first();

            if ($customer && \Hash::check($request->password, $customer->password)) {
                return response()->json([
                    'message' => 'API is working',
                    'customer' => $customer,
                    'status' => 'success',
                ]);
            } else {
                return response()->json([
                    'message' => 'API is working',
                    'customer' => $customer,
                    'status' => 'error',
                ]);
            }
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Error in API',
                'customer' => $customer,
                'status' => 'error',
                'error' => $e->getMessage(),
            ]);
        }
    }
}
