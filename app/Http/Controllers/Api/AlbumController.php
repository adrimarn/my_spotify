<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Album;
use Illuminate\Database\Eloquent\Collection;

class AlbumController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Album|Collection
     */
    public function index()
    {
        return Album::with('track', 'genre', 'artist')->get();
    }

    /**
     * Display the specified resource.
     *
     * @param Album $album
     * @return Album|Collection
     */
    public function show(Album $album)
    {
        return Album::with('track', 'genre', 'artist')->find($album);
    }
}
