@props([
   'nav' => ['SHOP', 'JOURNAL','CONTACT '],
   'social' => ['INSTAGRAM', "X", "PINTEREST"],
   'location' => ['JAKARTA', "BALI", "BANDUNG"],
])

<section class="relative bg-text text-background px-20" id="footer-section">
   <div class="flex flex-col">
      <div class="flex flex-row justify-end gap-20 py-10">
         <div class="flex flex-col">
            <h3 class="">SOCIALS</h3>
            @foreach ($social as $s)
               <a href="" class="font-headings text-xl">{{ $s }}</a>
            @endforeach
         </div>
         <div class="flex flex-col">
            <h3 class="">
               NAVIGATIONS
            </h3>
            @foreach ($nav as $n)
               <a href="" class="font-headings text-xl">{{ $n }}</a>
            @endforeach
         </div>
         <div class="flex flex-col">
            <h3 class="">
               LOCATIONS
            </h3>
            @foreach ($location as $l)
               <a href="" class="font-headings text-xl">{{ $l }}</a>
            @endforeach
         </div>
      </div>

      <hr />

      <div class="flex flex-row justify-between py-5">
         <div class="flex flex-row gap-3 items-baseline">
            <h1 class="font-headings text-9xl leading-none text-end">BOTANICA</h1>
            <p class="text-4xl">Rooted in the Earth.</p>
         </div>
         <div class="flex flex-row items-end gap-3">
            <span>2026 Botanica Studio</span>
            <span> | </span>
            <span>All Rights Reserved</span>
         </div>
      </div>
   </div>
</section>