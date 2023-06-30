<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        // instructor is created by organization
        Schema::create('instructor', function (Blueprint $table) {
            $table->id();
            $table->string('user_id');
            $table->string('created_by');
            $table->string('access_start_date');
            $table->string('access_end_date');
            $table->string('qualification');
            $table->string('organizations');
            $table->string('photo_id_front');
            $table->string('photo_id_back');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('instructor');
    }
};
