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
        Schema::create('students', function (Blueprint $table) {
            $table->id();
            // $table->string('id', 36)->primary()->default(Uuid::uuid4()->toString());
            $table->bigInteger('users_id')->nullable();
            $table->bigInteger('created_by')->nullable();
            $table->bigInteger('organization_id')->nullable();
            $table->string('parent_name')->nullable();
            $table->string('parent_relationship')->nullable();
            $table->string('photo_id_front')->nullable();
            $table->string('photo_id_back')->nullable();
            $table->string('status')->default('active');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('students');
    }
};
