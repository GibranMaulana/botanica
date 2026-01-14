<x-layouts.app namespace="collection">
   <div class="absolute inset-0 z-0">
      <video 
      class="w-full h-full object-cover"
      autoplay 
      muted 
      loop 
      playsinline
      >
      <source src="{{ asset('hero-vid.webm') }}" type="video/webm">
      </video>
      <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.6)_100%)]"></div>
   </div>
</x-layouts.app>