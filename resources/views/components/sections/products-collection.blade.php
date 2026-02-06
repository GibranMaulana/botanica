@props([
   'products'
])
<div class="relative w-full bg-linear-to-b from-background-1 to-background-3 pb-20">

   <section class=" sm:mx-auto w-full sm:w-auto sm:max-w-160 lg:max-w-5xl xl:max-w-7xl sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:overflow-hidden
                   overflow-x-auto snap-x snap-mandatory no-scrollbar flex" id="products-collection">
      @foreach ($products as $p)
      <div class="relative max-w-[400px] w-xs mx-auto sm:flex flex-col p-4 m-2 col-span-1 rounded-lg product-card hover:cursor-pointer
                  snap-center shrink-0 min-w-[85%] ">
         <div class="aspect-square sm:aspect-3/4 w-full overflow-hidden product-image-container rounded-t-lg">
            <img src="{{ asset('storage/' . $p->images()->first()?->path) }}" alt="" 
            class="object-cover self-center w-full h-full product-image scale-125 sm:scale-none">
         </div>
         <div class="relative product-content flex flex-col grow bg-[#FAFAF5] px-3 pt-4 pb-3 rounded-lg -mt-2 z-20 overflow-hidden">
            <div class="product-content-bg absolute inset-0 bg-accent" style="transform: translateY(100%)"></div>
            <div class="flex flex-row rounded-md border border-accent text-accent text-sm w-fit items-center px-2 z-21">
               <p class="py-1 pr-1">AVAILABLE: </p>
               @foreach ($p->variants()->get() as $variant)
               <p class=" py-1 pr-1">{{ $variant->size . ($loop->last ? "" : ",") }}</p>
               @endforeach
            </div>
            <h3 class="text-3xl font-headings italic uppercase min-h-12 mt-2 z-21">{{ $p->name }}</h3>
            <div class="flex flex-row justify-end gap-2 text-primary mt-auto z-21">
               <p class="">{{ "$" . $p->variants->min('price') }}</p>
               @if ($p->variants->count() > 1)
               <p class="">~</p>
               <p class="">{{ "$" . $p->variants->max('price') }}</p>
               @endif
            </div>
            <div class="flex justify-end w-full text-accent z-21">
               <a href="" class="font-headings text-xl w-fit buy-button">[ BUY NOW ]</a>
            </div>
         </div>
      </div> 
      @endforeach
   </section>
</div>