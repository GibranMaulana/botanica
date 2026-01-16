@props([
   'color' => '#D9D9D9',
   'className' => 'min-h-screen'
])

<svg id="loader-overlay" className="{{ $className }}" width="100%" height="100%" viewBox="0 0 1440 1024" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
   
    <path 
        id="loader-first-state" 
        fill-rule="evenodd" 
        clip-rule="evenodd" 
        d="M0 0 L1440 0 L1440 1024 L0 1024 Z M720 512 L720 512 L720 512 Z" 
        fill="{{ $color }}"
    />

    <path 
        id="loader-second-state" 
        style="display: none;" 
        fill-rule="evenodd" 
        clip-rule="evenodd" 
        d="M1440 1024H0V0H1440V1024ZM719.5 382C670.07 382 630 422.071 630 471.5V638H809V471.5C809 422.071 768.93 382 719.5 382Z" 
        fill="{{ $color }}"
    />
</svg>