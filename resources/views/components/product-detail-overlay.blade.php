@props([
   'products'
])

<div class="fixed inset-0 flex flex-col justify-end z-50" 
     id="product-detail-overlay"
     style="visibility: hidden; opacity: 0;">
   <div class="absolute inset-0 bg-black/50" onclick="closeOverlay()"></div>
   {{-- @dd($products) --}}
   <div class="relative w-full max-h-[60dvh] h-[60dvh] flex flex-col bg-background rounded-t-xl p-4 shadow-2xl"
        id="product-detail-overlay-sheet"
        style="transform: translateY(100%)">
      
      <div class="relative w-full mb-2 flex justify-between">
         <h1 id="modal-name" class="text-2xl font-headings w-[50%]"></h1>
         <button onclick="closeOverlay()" class="text-lg font-headings text-gray-500">[ <- Back ]</button>
      </div>

      <div class="relative flex flex-row w-full gap-2">

         <div class="w-[50%] min-h-57">
            <div class="w-full aspect-3/4">
               <img src=""
                    id="modal-img" 
                    alt="product detail image"
                    class="object-cover w-full h-full rounded-md shadow-2xl">
            </div>
         </div>

         <div class="w-[50%] flex flex-col justify-between">
           
            <div class="w-full flex flex-col items-end">
               <h3 class="w-fit italic">Size</h3>
                
               <div id="modal-variants-container" class="relative flex border border-accent overflow-hidden">
                  {{-- @foreach ($products[0]['variants'] as $v)
                     <button class="text-sm z-51">
                        {{ $v['size'] }}
                     </button>
                  @endforeach --}}
                  {{-- <div class="absolute inset-0 max-w-[50%] bg-accent"></div> --}}
               </div>
            </div>

            <div class="w-full flex flex-col items-end">
               <h3 class="w-fit italic">Price</h3>
               <p id="modal-price" class="text-sm text-primary"></p>
            </div>

            <div class="w-full flex flex-col items-end">
               <h3 class="w-fit italic">Description</h3>
               <p id="modal-description" class="text-xs text-pretty text-end w-fit"></p>
            </div>
            
            <div class="w-full flex justify-end">
               <button 
                  class="font-headings text-2xl self-center text-accent disabled:text-red-400"
                  id="modal-buy-button"
               >
                  [ Buy Now ]
               </button>
            </div>

         </div>

      </div>

   </div>
</div>