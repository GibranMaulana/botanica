@props(['products'])
<div class="relative min-h-[500dvh]" id="ritual-sanctuary">
   <section class="relative top-0 left-0 h-screen grid grid-cols-1 justify-center xl:justify-betweeen xl:grid-cols-3 px-10 xl:px-20 pt-20 pb-10 content-center gap-8 overflow-hidden 
                   bg-linear-to-b from-background-2 to-background-3" id="ritual-sanctuary-content">
      <div class="flex flex-col h-fit xl:h-full lg:justify-end text-xs sm:text-sm md:text-base">
         <p class="text-justify description1 sm:max-w-sm text-pretty">
            {{ $products[0]->description }}
         </p>
         <p class="text-justify description2 sm:max-w-sm text-pretty">
            {{ $products[1]->description }}
         </p>
      </div>
   
      <div class="flex flex-col h-fit xl:h-full items-center justify-center img-container1 overflow-hidden my-1">
         <img src="{{ asset('storage/' . $products[0]->images->first()->path ) }}" alt="" class="max-w-3xs 2xl:max-w-lg">
      </div>
   
      <div class="flex-col h-fit xl:h-full items-center justify-center img-container2 overflow-hidden my-1">
         <img src="{{ asset('storage/' . $products[1]->images->first()->path ) }}" alt="" class="max-w-3xs lg:max-w-md 2xl:max-w-lg">
      </div>
   
      <div class="flex flex-col h-fit xl:h-full justify-end xl:justify-between items-start sm:items-end">
         <h2 class="italic text-xl sm:text-2xl md:text-3xl lg:text-4xl font-headings text-pretty text-start sm:text-end text-primary headings uppercase" style="visibility: hidden;">RITUAL 01 • {{ $products[0]->variants->first()->sku }}</h2>
         <h2 class="italic text-xl sm:text-2xl md:text-3xl lg:text-4xl font-headings text-pretty text-start sm:text-end text-primary headings2 uppercase" style="visibility: hidden;">RITUAL 02 • {{ $products[1]->variants->first()->sku }} </h2>
         <div class="flex flex-col items-start sm:items-end text-gr">
            <div class="button1-container order-2">
               <a href="{{ route('collection')  }}" class="text-lg sm:text-xl md:text-2xl lg:text-3xl font-headings text-start sm:text-end text-accent button1">[ VIEW THE RITUAL -> ]</a>
            </div>
            <h1 class="italic text-4xl sm:text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl order-1 font-headings text-pretty text-start sm:text-end uppercase headings" style="visibility: hidden;">{{ $products[0]->name }}</h1>
         </div>
   
         <div class="flex flex-col items-start sm:items-end text-gr ">
            <div class="button2-container order-2">
               <a href="{{ route('collection')  }}" class="text-lg sm:text-xl md:text-2xl lg:text-3xl font-headings text-start sm:text-end text-accent button2">[ VIEW THE RITUAL -> ]</a>
            </div>
            <h1 class="italic text-4xl sm:text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl order-1 font-headings text-pretty text-start sm:text-end uppercase headings2" style="visibility: hidden;">{{ $products[1]->name }}</h1>
         </div>
      </div>
   </section>
</div>