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
        Schema::create('checkpoint', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('description');
            $table->string('type');
            $table->string('created_by');
            // $table->string('instructor_name')->nullable();
            $table->string('validity_period')->nullable();
            $table->string('assigned_instructor');
            $table->string('assigned_students');
            $table->string('badge')->nullable();
            $table->string('instructor_input');
            $table->integer('achieved_gradepoints');
            $table->integer('total_gradepoints');
            $table->boolean('is_approved');
            $table->boolean('has_submitted');
            $table->string('instructor_recommendation');
            $table->string('certificate')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('checkpoint');
    }
};
