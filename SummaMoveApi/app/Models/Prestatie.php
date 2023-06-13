<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Prestatie extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $fillable = ['aantal', 'van', 'tot', 'datum','user_id','oefeningen_id'];

    public function Oefeningen()
    {
        return $this->BelongsTo(Oefeningen::class);
    }

    public function User()
    {
        return $this->BelongsTo(User::class);
    }
}
