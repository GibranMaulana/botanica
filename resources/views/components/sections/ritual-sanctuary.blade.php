@props(['products'])
<section class="relative min-h-screen flex flex-row p-20" id="ritual-sanctuary">
   
   <div class="flex flex-col flex-1/3 min-h-full justify-end">
      <p class="text-justify description1 max-w-sm text-pretty">
         {{ $products[0]->description }}
      </p>
      <p class="text-justify description2 max-w-sm text-pretty">
         {{ $products[1]->description }}
      </p>
   </div>

   <div class="flex flex-col flex-1/3 min-h-full items-center img-container1 overflow-hidden">
      <img src="{{ asset('storage/' . $products[0]->images->first()->path ) }}" alt="" class="">
   </div>

   <div class="flex flex-col flex-1/3 min-h-full justify-center img-container2 overflow-hidden">
      <img src="{{ asset('storage/' . $products[1]->images->first()->path ) }}" alt="" class="">
   </div>

   <div class="flex flex-col flex-1/3 min-h-full justify-between items-end">
      <h2 class="italic text-4xl font-headings text-pretty text-end text-primary headings uppercase">RITUAL 01 • {{ $products[0]->variants->first()->sku }}</h2>
      <h2 class="italic text-4xl font-headings text-pretty text-end text-primary headings2 uppercase">RITUAL 02 • {{ $products[1]->variants->first()->sku }} </h2>
      <div class="flex flex-col items-end text-gr headings">
         <a href="" class="text-3xl font-headings text-end text-accent">[ VIEW THE RITUAL -> ]</a>
         <h1 class="italic text-8xl font-headings text-pretty text-end uppercase">{{ $products[0]->name }}</h1>
      </div>

      <div class="flex flex-col items-end text-gr headings2">
         <a href="" class="text-3xl font-headings text-end text-accent">[ VIEW THE RITUAL -> ]</a>
         <h1 class="italic text-8xl font-headings text-pretty text-end uppercase">{{ $products[1]->name }}</h1>
      </div>
   </div>
</section>