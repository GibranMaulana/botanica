@props([
   'headers' => [
      [
         'title' => "sanctuary",
         'description' => "Discover our retreat. An immersive guide to our grounds, suites, and the natural landscape that surrounds us"
      ],
      [
         'title' => "collection",
         'description' => "Explore our full range of offerings, from signature treatments to exclusive botanical products."
      ],
      [
         'title' => "philosophy",
         'description' => "Understanding our approach. Learn about the sustainable practices and ancient wisdom that guide Botanica."
      ],  
   ]
])

<header class="fixed inset-x-0 top-0 z-999 mix-blend-difference" id="header-section">
   <div class="flex flex-row px-8 py-6 justify-center items-center gap-10">
      <h2 class="font-headings text-white text-xl header-links">
         BOTA<span class="inline-block scale-x-[-1]" >N</span>I<span class="inline-block scale-x-[-1]">C</span>A
      </h2>

      <div class="text-white flex overflow-y-hidden menu-icon">
         <x-svgs.menu classname="text-white size-10 header-links"/>
      </div>
   </div>
</header>

<section id="menu-section" class="fixed inset-0 z-100 overflow-hidden pointer-events-auto"
         style="transform: translateX(100%);">
   <div class="relative min-h-screen h-full flex flex-col font-headings text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl justify-center bg-background-1">
      @foreach ($headers as $h)
      <div class="relative overflow-hidden link-container border-b"
           style="transform: translateX(100%);">
         <div class="absolute inset-0 bg-accent link-bg" style="transform: translateY(-100%)"></div>
         <a href="{{ route($h['title']) }}" class="flex flex-col gap-5 hover:cursor-pointer pt-10 thelink"
            style="transform: translateY(100%);">
            <p class="text-xs md:text-base text-end font-body max-w-[50%] self-end italic px-2 link-description">
               {{ $h['description']  }}
            </p>
            <h2 class="px-2 uppercase link-title">
               {{ $h['title'] }}
            </h2>
         </a>
      </div>
      @endforeach
      <h3 class="absolute bottom-3 w-fit text-sm self-center font-body">Est. 2024 • Organic Skincare & Tea</h3>
   </div>
</section>