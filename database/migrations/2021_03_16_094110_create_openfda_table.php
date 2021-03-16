<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOpenfdaTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('openfda', function (Blueprint $table) {
            $table->bigInteger('user_id');
            $table->id();
            $table->text('Brand_Name');
            $table->text('Generic_Name');
            $table->text('Description');
            $table->text('Ask_Doctor');
            $table->text('Dosage');
            $table->text('Pregnant');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('openfda');
    }
}
