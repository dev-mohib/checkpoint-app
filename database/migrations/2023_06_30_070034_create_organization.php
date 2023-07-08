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
        Schema::create('organizations', function (Blueprint $table) {
            $table->id();
            // $table->string('id', 36)->primary()->default(Uuid::uuid4()->toString());
            $table->bigInteger('users_id')->nullable();
            $table->bigInteger('created_by')->nullable();
            $table->string('name')->nullable();
            $table->string('logo')->nullable();
            $table->string('registration_doc')->nullable();
            $table->string('status')->default('active');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('organizations');
    }
};
