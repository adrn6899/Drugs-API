<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class rx extends Model
{
    //
    protected $fillable = ['brand_name','generic_name','description','ask_doctor','dosage','pregnant','is_branded','medcine_name','rxcui_id','interaction','severity'];
    protected $table = 'interaction';
}
