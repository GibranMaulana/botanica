@props([
   'points' => [
      [
         'no' => '1',
         'title' => 'VOLCANIC EARTH',
         'body' => 'Our roots dig deep into the mineral-dense highlands of West Java. Land that has never touched industrial fertilizer. We source from the wild, where the soil is black, heavy, and alive.'
      ],
      [
         'no' => '2',
         'title' => 'THE 40-DAY STEEP',
         'body' => 'We reject the microwave culture. Our oils are steeped in glass vessels under the sun for 40 full days. No artificial heat. No mechanics. Just the slow, heavy extraction of time.'
      ],
      [
         'no' => '3',
         'title' => 'RADICAL SILENCE',
         'body' => 'True luxury is the absence of noise. Zero fillers. Zero synthetic fragrance. We strip away the unnecessary to leave only the raw, potent soul of the plant. A ritual of subtraction.'
      ],
   ]
])

<section class="relative py-20 px-20 flex flex-col gap-24" id="manifesto-sanctuary">
   <div class="relative flex flex-col w-fit">
      <h1
         id="title-manifesto-sanctuary"
         class="reveal-title text-9xl font-headings leading-none">
            NATURE DOES NOT HURRY
         </h1>
         <div 
            class="reveal-title text-4xl font-headings text-gray-700 self-end uppercase"
            >
            [ View Manifesto -> ]
         </div>
   </div>


   <div class="grid grid-cols-3 w-full">
      @foreach ($points as $p)
      <div class="flex flex-col w-fit h-full gap-12 justify-self-center first:justify-self-start last:justify-self-end">
         <div class="flex flex-col gap-2" >
            <p 
               class="reveal-sub text-4xl text-accent font-headings leading-none">{{ "[" . $p['no'] . "]"  }}</p>
            <h2
               class="reveal-sub text-4xl text-black font-headings leading-none">
               {{ $p['title']  }}
            </h2>
         </div>
         <p class="reveal-blur w-0 min-w-full text-gray-700 text-pretty text-justify">
            {{ $p['body']  }}
         </p>
      </div>
      @endforeach
   </div>
</section>
