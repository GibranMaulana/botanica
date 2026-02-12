@props([
   'namespace' => 'default'
])

<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
   <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">

      <title>{{ config('app.name', 'Laravel') }}</title>

      <!-- Fonts -->
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300..700;1,300..700&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet">

      <!-- Styles / Scripts -->
      {{-- @if (file_exists(public_path('build/manifest.json')) || file_exists(public_path('hot'))) --}}
      @vite(['resources/css/app.css', 'resources/js/app.js'])
      {{-- @else
         <style>

         </style>
      @endif --}}
   </head>
   <body class="bg-background text-text antialiased font-body overflow-x-hidden">
      <!-- <div class="fixed inset-0 z-[9999] hidden bg-black text-white landscape:flex flex-col items-center justify-center lg:landscape:hidden">
         <svg class="w-12 h-12 animate-spin-slow" ...>...</svg>
         <p class="mt-4 text-sm font-light uppercase tracking-widest">
            Please rotate your device for better experiences
         </p>
      </div> -->
      <x-preloader />
      <x-header />
      <x-transition-overlay />
      <div data-barba="wrapper" class="relative">
         <main data-barba="container" data-barba-namespace="{{ $namespace }}" class="bg-background">
            {{-- <x-header /> --}}
            {{ $slot  }}
         </main>
      </div>
   </body>
</html>
