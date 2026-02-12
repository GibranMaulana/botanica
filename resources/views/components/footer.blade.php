@props([
   'footerelement' =>[
      [
         'name' => 'NAVIGATIONS',
         'links' => ['SHOP', 'JOURNAL','CONTACT ']
      ],
      [
         'name' => 'SOCIALS',
         'links' => ['INSTAGRAM', "X (TWITTER)", "PINTEREST"],
      ],
      [
         'name' => 'LOCATIONS',
         'links' => ['JAKARTA', "BALI", "BANDUNG"]
      ]
   ],

])

<section class="relative px-8 md:px-20 bg-linear-to-b from-background-3 to-background overflow-hidden -mt-px" id="footer-section">
   <div class="flex flex-col gap-3 w-full items-end justify-end">
      <div class="grid md:grid-cols-3 grid-cols-2 gap-y-10 gap-x-20 w-full lg:w-fit items-end">
         @foreach ($footerelement as $fe)
         <div class="flex flex-col gap-10 items-center lg:items-end lg:w-fit overflow-hidden {{ $loop->last ? 'col-span-2 md:col-span-1' : '' }}">
            <h3 class="text-accent">
               {{ $fe['name'] }}
            </h3>
            <div class="flex flex-col gap-3 items-center lg:items-end overflow-hidden">
               @foreach ($fe['links'] as $l)
               <div class="overflow-y-hidden">
                  <a href="" class="links inline-block">{{ $l }}</a>
               </div>
               @endforeach
            </div>
         </div>
         @endforeach
      </div>

      <hr class="w-full"/>

      <div class="relative flex flex-col lg:flex-row justify-between py-5 gap-3 lg:gap-0 items-baseline w-full">
         <div class="flex flex-col md:flex-row gap-0 md:gap-3 items-center lg:items-baseline self-center lg:self-start">
            <h1 class="font-headings text-4xl md:text-6xl lg:text-7xl 2xl:text-9xl leading-[0.7] text-end headings">BOTANICA</h1>
            <p class="text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-4xl leading-none  headings">Rooted in the Earth.</p>
         </div>
         <div class="flex flex-row items-center gap-3 text-xs lg:text-sm  self-center lg:self-end">
            <span class="leading-none headings">2026 Botanica Studio</span>
            <span class="leading-none headings"> | </span>
            <span class="leading-none headings">All Rights Reserved</span>
         </div>
      </div>
   </div>
</section>
