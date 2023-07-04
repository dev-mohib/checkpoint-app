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
            $table->string('id', 36)->primary()->default(Uuid::uuid4()->toString());
            $table->string('user_id', 36)->default(Uuid::uuid4()->toString());
            $table->string('created_by')->nullable();
            $table->string('name')->nullable();
            $table->string('logo')->nullable();
            $table->string('registration_doc')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('organization');
    }
};
