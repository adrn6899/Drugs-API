<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateInteractionTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('interaction', function (Blueprint $table) {
            $table->id();
            $table->text('Brand_Name');
            $table->text('Generic_Name');
            $table->text('Description');
            $table->text('Ask_Doctor');
            $table->text('Dosage');
            $table->text('Pregnant');
            $table->text('Is_Branded');
            $table->text('Medicine_Name');
            $table->text('RXCUI_ID');
            $table->text('Interaction');
            $table->text('Severity');
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
        Schema::dropIfExists('interaction');
    }
}
