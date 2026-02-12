<section class="sticky top-0 min-h-screen flex flex-col z-0" id="hero-sanctuary">
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
      <div id="hero-dimmer" class="absolute inset-0 bg-black opacity-0 z-1 pointer-events-none"></div>
      <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.6)_100%)]"></div>
   </div>

   <div class="relative flex flex-col justify-between items-center min-h-screen z-10 p-10">
      <div class=""></div>
      <div class="overflow-hidden">
         <div
            id="title-hero-sanctuary"
            class="loader-text relative flex flex-row items-center justify-center">
            <x-svgs.curve-line
               class="absolute inset-0 w-full h-full" />
            <h1
                class="hover-text text-center overflow-hidden text-[clamp(3.75rem,12vmin,8rem)]
                font-headings text-white uppercase leading-none z-10 mix-blend-difference"
                >
                    Return To Your Roots
            </h1>
         </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 w-full items-end justify-between space-y-10 sm:space-y-0">
         <div class="overflow-hidden flex justify-center sm:justify-start">
            <h2 class="explanation-text text-white tracking-wide max-w-2xs text-pretty text-justify
                text-[clamp(0.875rem,2vmin,1rem)]"
                >
                    Heavy glass. Cold stone. Raw clay. A collection of grounding elements designed to pull you out of your head and back into your body
            </h2>
         </div>
         <div class="overflow-hidden flex justify-center sm:justify-end xl:justify-center">
            <h3 class="est-text text-white tracking-wide border-b-2 text-center
                text-[clamp(0.875rem,2vmin,1.25rem)]"
                >
                    Est. 2024 • Organic Skincare & Tea
            </h3>
         </div>
         <div class="overflow-hidden flex justify-center sm:col-span-2 xl:col-auto xl:justify-end">
            <a href="#origin-sanctuary" class="block hero-button font-headings text-white text-[clamp(1.875rem,5vmin,4rem)]">[ Begin The Journey ]</a>
         </div>
      </div>
   </div>

</section>
