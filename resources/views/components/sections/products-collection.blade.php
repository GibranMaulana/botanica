@props([
   'products'
])

<section class="bg-background sm:mx-auto w-full sm:w-auto sm:max-w-160 lg:max-w-5xl xl:max-w-7xl sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:overflow-hidden
                overflow-x-auto snap-x snap-mandatory no-scrollbar flex" id="products-collection">
   @foreach ($products as $p)

   {{-- versi grid --}}
   <div class="relative max-w-xs w-xs mx-auto sm:flex flex-col p-4 m-2 col-span-1 rounded-lg product-card hover:cursor-pointer
               snap-center shrink-0 min-w-[85%] ">
      <div class="aspect-square sm:aspect-3/4 w-full overflow-hidden product-image-container">
         <img src="{{ asset('storage/' . $p->images()->first()?->path) }}" alt="" 
         class="object-cover self-center w-full h-full rounded-md product-image">
      </div>
      <div class="my-3 product-content">
         <div class="flex flex-row rounded-sm border border-accent text-accent text-sm w-fit items-center">
            <p class="py-1 px-2">Available: </p>
            @foreach ($p->variants()->get() as $variant)
            <p class=" py-1 px-2">{{ $variant->size }}</p>
            @endforeach
         </div>
         <h3 class="text-3xl font-headings italic uppercase min-h-12">{{ $p->name }}</h3>
         <div class="flex flex-row justify-end gap-2 text-primary mt-auto">
            <p class="">{{ "$" . $p->variants->min('price') }}</p>
            @if ($p->variants->count() > 1)
            <p class="">~</p>
            <p class="">{{ "$" . $p->variants->max('price') }}</p>
            @endif
         </div>
         <div class="flex justify-end w-full mt-auto text-accent">
            <a href="" class="font-headings text-xl w-fit buy-button">[ BUY NOW ]</a>
         </div>
      </div>
   </div> 
   @endforeach
</section>