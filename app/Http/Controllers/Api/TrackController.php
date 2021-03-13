<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Track;
use Illuminate\Database\Eloquent\Collection;

class TrackController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Track|Collection
     */
    public function index()
    {
        return Track::with('album')->get();
    }

    /**
     * Display the specified resource.
     *
     * @param Track $track
     * @return Track|Collection
     */
    public function show(Track $track)
    {
        return Track::with('album')->find($track);
    }
}
