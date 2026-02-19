@props([
    'bodyText' => "Every drop has an origin. We source ingredients that have survived the harshest climates,
                believing that resilience in nature translates to resilience for your skin. No fillers, no synthetics—just
                the concentrated intelligence of plants.",
    'processAssets'
])
<section
    class="relative z-10 min-h-screen bg-linear-to-b from-background-1 to-background-3
           flex flex-col py-20"
    id="source-philosophy"
>
    <div class="relative z-1 m-auto w-full max-w-[clamp(20rem,50vw,36rem)]">
        <div class="absolute -inset-1 rounded-3xl bg-accent/30 blur-xl"></div>

        <div class="relative flex flex-col gap-6 rounded-3xl bg-accent p-8
                    text-background shadow-2xl
                    outline outline-1 outline-background/15 outline-offset-[-8px]">

            <p class="text-center font-body text-[0.6rem] md:text-xs uppercase tracking-[0.3em] opacity-60">
                Sourcing Philosophy
            </p>

            <div class="text-center leading-none">
                <span class="block font-headings text-[clamp(2rem,10vmin,8rem)] italic">Harvested,</span>
                <span class="block font-headings text-[clamp(1.5rem,3vmin,3.75rem)] uppercase tracking-[0.2em]">Not Just</span>
                <span class="block font-headings text-[clamp(2rem,10vmin,8rem)] italic">Picked</span>
            </div>

            <div class="flex items-center gap-3 opacity-40">
                <div class="h-px flex-1 bg-background"></div>
                <span class="font-headings text-base">✦</span>
                <div class="h-px flex-1 bg-background"></div>
            </div>

            <p class="text-center font-body text-xs md:text-sm xl:text-base leading-relaxed opacity-80">
                {{ $bodyText }}
            </p>
        </div>
    </div>
    <div class="absolute inset-0 z-0">
        <div class="absolute top-0 left-1 md:left-[10%] img-container-unique1">
            <div class="relative aspect-square w-[clamp(10rem,30vmin,20rem)] h-auto md:aspect-3/4 overflow-hidden rounded-2xl">
                <img src="{{ asset($processAssets[0])}}"
                    class="img-asset w-full h-full object-cover scale-125"
                />
            </div>
        </div>

        <div class="absolute top-[10%] right-1 img-container-move1">
            <div class="relative aspect-square md:aspect-3/4 w-[clamp(10rem,30vmin,20rem)] h-auto overflow-hidden rounded-2xl">
                <img src="{{ asset($processAssets[1])}}"
                    class="img-asset w-full h-full object-cover scale-125"
                />
            </div>
        </div>
        <div class="absolute bottom-[10%] left-1 img-container-move1">
            <div class="relative aspect-square w-[clamp(10rem,30vmin,20rem)] h-auto md:aspect-3/4 overflow-hidden rounded-2xl">
                <img src="{{ asset($processAssets[4])}}"
                    class="img-asset w-full h-full object-cover scale-125"
                />
            </div>
        </div>

        <div class="absolute bottom-0 right-1 md:right-[10%] img-container-unique2">
            <div class="relative aspect-square w-[clamp(10rem,30vmin,20rem)] h-auto md:aspect-3/4 overflow-hidden rounded-2xl">
                <img src="{{ asset($processAssets[3])}}"
                    class="img-asset w-full h-full object-cover scale-125"
                />
            </div>
        </div>
    </div>
</section>
