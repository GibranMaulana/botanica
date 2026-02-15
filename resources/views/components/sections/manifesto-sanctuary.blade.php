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

<section class="relative py-20 px-4 lg:px-20 flex flex-col gap-24 bg-linear-to-b from-background-1 to-background-2" id="manifesto-sanctuary">
   <div class="relative flex flex-col overflow-hidden" id="title-container">
      <h1
         id="title-manifesto-sanctuary"
         class="reveal-title text-[clamp(2.25rem,12vmin,8rem)] text-center font-headings leading-none">
         NATURE DOES NOT HURRY
      </h1>
      <a
         href="{{ route('philosophy')  }}"
         id="manifesto-button"
         class="reveal-title button text-xl sm:text-3xl font-headings text-gray-700 self-center uppercase"
         >
         [ View Manifesto -> ]
      </a>
   </div>


   <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 w-full justify-center gap-10 md:gap-0">
      @foreach ($points as $p)
      <div class="flex flex-col w-fit h-full gap-12 mx-auto point-container">
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
