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
            $table->id();
            // $table->string('id', 36)->primary()->default(Uuid::uuid4()->toString());
            $table->bigInteger('users_id')->nullable();
            $table->bigInteger('created_by')->nullable();
            $table->bigInteger('organization_id')->nullable();
            $table->string('status')->default('active');
            $table->string('access_start_date')->nullable();
            $table->string('access_end_date')->nullable();
            $table->string('qualification')->nullable();
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
        Schema::dropIfExists('instructors');
    }
};
