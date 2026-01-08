<x-layouts.app namespace="sanctuary">
   <section class="relative min-h-screen" id="sanctuary-section">
      {{-- <div class="absolute top-0 left-0 max-h-screen z-0 overflow-hidden">
         <img src="{{ asset('images/hero-image.jpg')  }}" alt="" class="min-h-screen">
      </div> --}}
      <video 
         class="absolute inset-0 w-full h-full object-cover"
         autoplay 
         muted 
         loop 
         playsinline
      >
         <source src="{{ asset('hero-vid.webm') }}" type="video/webm">
      </video>

      <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.6)_100%)]"></div>
 
      <div class="absolute inset-0 flex justify-center items-center">
         <div class="overflow-hidden">
            <div class="loader-text relative flex flex-row items-center justify-center">
               <x-svgs.curve-line class="absolute inset-0 w-full h-full"/>
               <h1 class="text-8xl font-headings text-white uppercase leading-none z-10 mix-blend-difference">Return To Your Roots</h1>
            </div>
         </div>
      </div>

      <div class="absolute bottom-8 inset-x-8 flex flex-row justify-between items-center">
         <div class="overflow-hidden">
            <a href="" class="block loader-text font-headings text-white text-4xl">[ Begin The Journey ]</a>
         </div>
         <div class="overflow-hidden">
            <h3 class="loader-text text-white tracking-wide border-b-2">Est. 2024 • Organic Skincare & Tea</h3>
         </div>
         <div class="overflow-hidden">
            <h2 class="loader-text text-white tracking-wide max-w-2xs text-pretty text-justify">Heavy glass. Cold stone. Raw clay. A collection of grounding elements designed to pull you out of your head and back into your body</h2>
         </div>
      </dev>

   </section>
   <section class="relative min-h-screen">
     <div class="overflow-y-hidden">
         <h1 class="block text-7xl font-headings reveal-text text-white">TESTING</h1>
      </div>
   </section>
</x-layouts.app>