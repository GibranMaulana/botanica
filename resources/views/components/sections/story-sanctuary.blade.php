@props([
    'processes',
    'rituals'
])

<section
    id='story-sanctuary'
    class="relative min-h-[300dvh] bg-linear-to-b from-background to-background-1"
    >
    <div
        id="dim-offset-story-sanctuary"
        class="absolute inset-0 z-10"
        >
    </div>
    <div
        id="wrapper-story-sanctuary"
        class="sticky top-0 left-0 min-h-screen w-full flex items-center justify-center z-2"
        >
        <div class="relative flex flex-col items-center justify-center w-full min-h-screen gap-5 overflow-x-clip">

            <h1
                id="title-story-sanctuary"
                class="flex flex-col text-center font-headings text-[clamp(2.5rem,8vmin,10rem)]
                       overflow-x-clip uppercase z-10 leading-none"
            >
                <span class="block">From Living Earth</span>
                <span class="block lowercase">to</span>
                <span class="block">Living Skin</span>
            </h1>
            <div class="relative sm:absolute px-2 gap-2 flex flex-row inset-0">

                <div class="aspect-3/4 sm:aspect-4/3 relative sm:absolute
                            sm:top-[50%] left-0 sm:-left-[10%] max-h-[40vmin] overflow-hidden"
                    id="img-container1-story-sanctuary">
                    <img src="{{ asset($rituals[2]->imgurl)}}" class="w-full h-full object-cover rounded-lg first"/>
                    <img src="{{ asset($rituals[0]->imgurl)}}" class="absolute inset-0 w-full h-full object-cover rounded-lg second"/>
                </div>
                <div class="aspect-3/4 sm:aspect-4/3 relative sm:absolute
                            sm:top-[20%] right-0 sm:-right-[10%] max-h-[40vmin] overflow-hidden"
                    id="img-container2-story-sanctuary">
                    <img src="{{ asset($rituals[4]->imgurl)}}" class="w-full h-full object-cover rounded-lg first"/>
                    <img src="{{ asset($rituals[1]->imgurl)}}" class="absolute inset-0 w-full h-full object-cover rounded-lg second"/>
                </div>
            </div>
        </div>
    </div>

</section>
