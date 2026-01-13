<header class="fixed inset-x-0 top-0 z-100 mix-blend-difference" id="header">
   <div class="flex flex-row px-8 py-6 justify-between items-center">
      <h2 class="font-headings text-white text-xl">
         BOTA<span class="inline-block scale-x-[-1]" >N</span>I<span class="inline-block scale-x-[-1]">C</span>A
      </h2>

      <div class="hidden gap-10 text-white sm:flex">
         <a href="{{ route('sanctuary')  }}" class="">SANCTUARY</a>
         <a href="{{ route('collection')  }}" class="">COLLECTION</a>
         <a href="{{ route('philosophy')  }}" class="">PHILOSOPHY</a>
      </div>
      <div class="text-white">
         <x-svgs.menu classname="text-white size-10"/>
      </div>
   </div>
</header>