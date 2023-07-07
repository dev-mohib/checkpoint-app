<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Ramsey\Uuid\Uuid;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('checkpoints', function (Blueprint $table) {
            $table->string('id', 36)->primary()->default(Uuid::uuid4()->toString());
            $table->string('name')->nullable();
            $table->string('description')->nullable();
            $table->string('type')->nullable();
            $table->string('created_by', 36)->default(Uuid::uuid4()->toString());
            $table->string('org_id', 36)->default(Uuid::uuid4()->toString());
            $table->string('instructor_id', 36)->default(Uuid::uuid4()->toString());
            $table->string('validity_period')->nullable();
            $table->string('assigned_instructor')->nullable();
            $table->string('assigned_students')->nullable();
            $table->string('badge')->nullable();
            $table->string('instructor_input')->nullable();
            $table->integer('achieved_gradepoints')->nullable();
            $table->integer('total_gradepoints')->nullable();
            $table->boolean('is_approved')->nullable();
            $table->boolean('has_submitted')->nullable();
            $table->string('instructor_recommendation')->nullable();
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
