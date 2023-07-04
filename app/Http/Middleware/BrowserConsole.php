<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Monolog\Handler\BrowserConsoleHandler;
use Symfony\Component\HttpFoundation\Response;

class BrowserConsole
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $response = $next($request);
        BrowserConsoleHandler::send();
        return $response;
    }
}
