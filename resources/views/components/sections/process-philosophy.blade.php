@props([
    'imgContainerClass' => "aspect-3/4 max-w-[clamp(7.5rem,35vmin,20rem)] relative overflow-hidden rounded-2xl",
    'imgClass' => "w-full h-auto object-cover",
])

<section
    id="process-philosophy"
    class="relative min-h-screen w-full bg-primary flex flex-col"
>
    <div
        id="dim-offset-process-philosophy"
        class="absolute inset-0 z-10 pointer-events-none"
    ></div>
    <div
        id="wrapper-process-philosophy"
        class="sticky top-0 left-0 min-h-screen w-full flex flex-col py-20 px-2 z-2"
    >
        <div id="process-img-row" class="relative flex flex-row flex-1 justify-evenly min-h-[60vh] lg:min-h-[80vh]">
            <div data-process-img class="{{ $imgContainerClass }} self-start">
                <img src="{{ asset('storage/process/06-microscopic-leaf.jpg') }}"
                        class="{{ $imgClass }}">
            </div>
            <div data-process-img class="{{ $imgContainerClass }} self-center">
                <img src="{{ asset('storage/process/07-oil-flask.jpg') }}"
                        class="{{ $imgClass }}">
            </div>
            <div data-process-img class="{{ $imgContainerClass }} self-end">
                <img src="{{ asset('storage/process/08-serum-result.jpg') }}"
                        class="{{ $imgClass }}">
            </div>
            <svg
                id="process-svg"
                class="absolute inset-0 w-full h-full pointer-events-none overflow-visible"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    id="process-path"
                    fill="none"
                    stroke-opacity="0.7"
                    stroke-width="2"
                    class="stroke-background"
                />
            </svg>
        </div>
        <div class="flex flex-col justify-center md:px-10">
            <h2 class="text-background/70 uppercase text-[clamp(0.875rem,2vmin,1.5rem)] tracking-widest leading-none mb-2">Green Chemistry</h2>
            <h1 class="text-background font-headings text-[clamp(2.25rem,8vw,8rem)] italic leading-none mb-4">
                The Art of Extraction
            </h1>
            <p class="text-xs 2xl:text-lg text-background/60 max-w-none md:max-w-1/2 text-justify">
                Nature provides the raw data. we provide the algorithm. Our cold-press extraction and bio-fermentation processes respect the molecular integrity of every botanical active. We don't change nature—we simply translate it into a language your skin understands.
            </p>
        </div>
    </div>
</section>
