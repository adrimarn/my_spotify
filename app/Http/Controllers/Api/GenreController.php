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
     * @return Genre|Collection
     */
    public function index()
    {
        return Genre::with('album')->get();
    }

    /**
     * Display the specified resource.
     *
     * @param Genre $genre
     * @return Genre|Collection
     */
    public function show(Genre $genre)
    {
        return Genre::with('album')->find($genre);
    }
}
