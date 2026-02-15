@props(['products'])
<div class="relative h-[500vh]" id="ritual-sanctuary">

   <section class="sticky top-0 h-screen w-full overflow-hidden bg-linear-to-b from-background-2 to-background-3 z-10" id="ritual-sanctuary-content">

      <div id="ritual-intro" class="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none p-4">
         <h1 class="text-[12vw] md:text-[10vw] font-headings text-primary/20 uppercase leading-none tracking-widest mix-blend-multiply text-center">
            The Rituals
         </h1>
         <div class="mt-4 flex flex-col items-center gap-2 text-primary/60">
            <span class="text-xs md:text-sm tracking-[0.3em] md:tracking-[0.5em] uppercase text-center">Scroll to Discover</span>
            <div class="h-8 md:h-12 w-px bg-primary/40"></div>
         </div>
      </div>

      <div class="grid grid-cols-1 grid-rows-1 w-full h-full p-6 pt-28 md:p-10 xl:p-20 items-center justify-center">

         @foreach($products as $index => $product)
            <div class="product-wrapper col-start-1 row-start-1 w-full h-full grid grid-cols-1 xl:grid-cols-3 gap-4 md:gap-8 items-center max-w-full"
                 style="{{ $index === 1 ? 'visibility: hidden; opacity: 0;' : '' }}">

               <div class="flex flex-col h-full justify-start md:justify-end order-1 xl:order-none relative z-20">
                  <p class="text-justify description max-w-[90%] md:max-w-sm text-[clamp(0.875rem,2vmin,1rem)] text-pretty translate-y-10 opacity-0 text-text/80 leading-relaxed font-light">
                     {{ $product->description }}
                  </p>
               </div>

               <div class="flex flex-col h-full items-center justify-center img-container order-2 xl:order-none relative z-10 py-4 md:py-0">
                  <img src="{{ asset('storage/' . $product->images->first()->path ) }}"
                       class="theimg w-auto h-auto max-h-[40vh] md:max-h-[60vh] xl:max-h-[70vh] object-contain opacity-0 scale-90 translate-y-20">
               </div>

               <div class="flex flex-col h-full justify-end md:justify-between items-start md:items-end order-3 xl:order-none relative z-20 pb-10 md:pb-0">

                  <h2 class="sub-heading italic text-xl md:text-3xl font-headings text-primary uppercase opacity-0 -translate-x-10 mb-2 md:mb-0">
                     RITUAL 0{{ $loop->iteration }} • {{ $product->variants->first()->sku }}
                  </h2>

                  <div class="flex flex-col items-start md:items-end text-gr w-full">
                     <div class="button-container order-2 overflow-hidden mt-2 md:mt-0">
                        <a href="{{ route('collection') }}" class="button block text-xl md:text-3xl font-headings text-accent translate-y-full hover:text-primary transition-colors">
                           [ VIEW THE RITUAL -> ]
                        </a>
                     </div>

                     <h1 class="main-heading italic text-[clamp(2.5rem,5vw,7rem)] 2xl:text-8xl order-1 font-headings uppercase leading-[0.85] md:text-right w-full md:w-auto text-balance pr-1 md:pr-4">
                        {{ $product->name }}
                     </h1>
                  </div>
               </div>

            </div>
         @endforeach

      </div>
   </section>
</div>
