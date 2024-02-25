<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Comment;
use Carbon\Carbon;

class CommentController extends Controller
{
    public function comment(Request $request)
    {
        try {
            //Based on Model
            $comment = new Comment;
            //Book fields
            $comment->title = $request->title;
            $comment->description = $request->description;
            $comment->status = $request->status;
            $comment->image = $request->image;
            $comment->rate = $request->rate;
            $comment->created_at = Carbon::now();
            $comment->updated_at = Carbon::now();
            $comment->Customer_id = '1';
            $comment->Order_id = '1';
            //Save the book
            $comment->save();
            //Return the response
            return response()->json([
                'message' => 'API is working',
                'comment' => $comment,
                'status' => 'success',
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Error in API',
                'comment' => $comment,
                'status' => 'error',
                'error' => $e->getMessage(),
            ]);
        }
    }
}
