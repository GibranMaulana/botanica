<x-layouts.app namespace="collection">
   <section class="min-h-[75dvh] bg-linear-to-b from-background-1 to-background" id="hero-collection">
      <div class="">
         
      </div>
   </section>
   <section class="bg-background min-h-screen mx-auto max-w-90 sm:max-w-160 lg:max-w-5xl xl:max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 overflow-hidden" id="products-collection">
      @foreach ($products as $p)
      <div class="relative max-w-xs w-xs mx-auto flex flex-col p-4 m-2 col-span-1 rounded-lg product-card hover:cursor-pointer">
         <div class="aspect-3/4 w-full overflow-hidden product-image-container">
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
</x-layouts.app>