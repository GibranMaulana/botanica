<header class="fixed inset-x-0 top-0 z-100 mix-blend-difference" id="header-section">
   <div class="flex flex-row px-8 py-6 justify-between items-center">
      <h2 class="font-headings text-white text-xl header-links">
         BOTA<span class="inline-block scale-x-[-1]" >N</span>I<span class="inline-block scale-x-[-1]">C</span>A
      </h2>

      <div class="hidden gap-10 text-white sm:flex overflow-y-hidden">
         <a href="{{ route('sanctuary')  }}" class="header-links">SANCTUARY</a>
         <a href="{{ route('collection')  }}" class="header-links">COLLECTION</a>
         <a href="{{ route('philosophy')  }}" class="header-links">PHILOSOPHY</a>
      </div>
      <div class="text-white flex sm:hidden overflow-y-hidden">
         <x-svgs.menu classname="text-white size-10 header-links"/>
      </div>
   </div>
</header>