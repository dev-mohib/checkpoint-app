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
        // instructor is created by organization
        Schema::create('instructors', function (Blueprint $table) {
            $table->string('id', 36)->primary()->default(Uuid::uuid4()->toString());
            $table->string('created_by', 36)->default(Uuid::uuid4()->toString());
            $table->string('access_start_date')->nullable();
            $table->string('access_end_date')->nullable();
            $table->string('qualification')->nullable();
            $table->string('organizations')->nullable();
            $table->string('photo_id_front')->nullable();
            $table->string('photo_id_back')->nullable();
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
