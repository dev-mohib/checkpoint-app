<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('checkpoints', function (Blueprint $table) {
            $table->id();
            $table->string('name')->nullable();
            $table->string('description')->nullable();
            $table->string('status')->default('active');
            $table->string('type')->default('General');
            $table->bigInteger('organization_id')->nullable();
            $table->bigInteger('instructor_id')->nullable();
            $table->bigInteger('student_id')->nullable();
            $table->string('instructor_input')->nullable();
            $table->string('instructor_recommendation')->nullable();
            $table->string('validity_period')->nullable();
            $table->json('images')->nullable();
            $table->string('badge')->nullable();
            $table->string('certificate')->nullable();
            $table->integer('achieved_gradepoints')->nullable();
            $table->integer('total_gradepoints')->nullable();
            $table->boolean('is_approved')->nullable();
            $table->boolean('has_submitted')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('checkpoints');
    }
};
