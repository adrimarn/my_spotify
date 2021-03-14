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
     * @return \Illuminate\Contracts\Pagination\LengthAwarePaginator
     */
    public function index()
    {
        return Album::with('track', 'genre', 'artist')->paginate(50);
    }

    /**
     * Display the specified resource.
     *
     * @param $id
     * @return Album|Collection
     */
    public function show($id)
    {
        return Album::with('artist', 'genre', 'track')->find($id);
    }
}
