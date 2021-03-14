<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Genre;
use Illuminate\Database\Eloquent\Collection;

class GenreController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Contracts\Pagination\LengthAwarePaginator
     */
    public function index()
    {
        return Genre::with('album')->paginate(50);
    }

    /**
     * Display the specified resource.
     *
     * @param $id
     * @return Genre|Collection
     */
    public function show($id)
    {
        return Genre::with('album')->find($id);
    }
}
