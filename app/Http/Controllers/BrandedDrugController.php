<?php

namespace App\Http\Controllers;

use App\BrandedDrug;
use Illuminate\Http\Request;

class BrandedDrugController extends Controller
{


    public function getBrandedDrugs(Request $request)
    {
        if($request->has('name')){
            $medname = $request->get('name');
            $result = BrandedDrug::where('medicine',$medname)->first();
            
            $drugname = $result->medicine;
            
            $brandedDrugs = explode(';',$result->brands);
            
            return response()->json(["medicine_name"=>$drugname,"branded_drugs"=>$brandedDrugs]);
        }

        // dd([$drugname,$brandedDrugs]);

        return response()->json(["error"=>"wrong request format please see documentation",
                                "fixes"=>["specify medicine name ?name=<medicine>","check documentation"]]);
    }


    public function store(Request $request)
    {
        $result = BrandedDrug::where('medicine', $request->get('medicine'))->first();

        if(!$result){   
            $drugs = BrandedDrug::create([
                'medicine' => $request->get('medicine'),
                'brands' => $request->get('brands'),
                ]);
            return true;
        } else {
            return false;
        }
    }
    
}
