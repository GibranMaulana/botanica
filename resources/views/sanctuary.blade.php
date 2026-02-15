<x-layouts.app namespace="sanctuary">
    <x-sections.hero-sanctuary />
    <x-sections.story-sanctuary
        :rituals="$rituals"
        :processes="$processes"
    />
    <x-sections.manifesto-sanctuary />
    <x-sections.ritual-sanctuary :products="$products" />
    <x-footer />
</x-layouts.app>
