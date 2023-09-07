<template>
    <div class="relative h-auto w-full flex flex-col">
        <div class="absolute w-20 -z-10 h-full hidden md:block right-16"><hr class="w-0.5 h-full bg-zinc-700"></div>
        <div class="h-full w-full flex flex-col py-8">
            <div class="">
                <SectionsLander/>
            </div>
            <div class="relative pb-14 md:pb-28">                
                <div class="absolute hidden md:block h-64 w-24 right-3 top-3"><div><p class="mt-10 text-6xl font-bold text-zinc-800 transform rotate-90 bg-">#SUPPORT</p></div></div>
                <SectionsEcosystemSupport />
            </div>
            <div class="relative pb-14 md:pb-28">
                <div class="absolute hidden md:block h-64 w-24 right-3 top-3"><div><p class="mt-10 text-6xl font-bold text-zinc-800 transform rotate-90 bg-">#FOLIO</p></div></div>
                <SectionsOurPortfolio />
            </div>
            <div class="relative pb-14 md:pb-28">                
                <div class="absolute hidden md:block h-64 w-24 right-3 top-3"><div><p class="mt-10 text-6xl font-bold text-zinc-800 transform rotate-90 bg-">#OURPEOPLE</p></div></div>
                <SectionsTeam />
            </div>
            <div class="relative pb-14 md:pb-28">                
                <div class="absolute hidden md:block h-64 w-24 right-3 top-3"><div><p class="mt-10 text-6xl font-bold text-zinc-800 transform rotate-90 bg-">#VIBES</p></div></div>
                <SectionsCulture />
            </div>
            <div class="relative pb-14 md:pb-28">                
                <!-- <div class="absolute z-50 h-64 w-24 right-3 top-3"><div><p class="mt-10 text-6xl font-bold text-zinc-800 transform rotate-90 bg-">#FOLIO</p></div></div> -->
                <SectionsOurPresence />
            </div>
            <div class="relative pb-14 md:pb-28">                
                <div class="absolute hidden md:block h-64 w-24 right-3 top-3"><div><p class="mt-10 text-6xl font-bold text-zinc-800 transform rotate-90 bg-">#CONNECT</p></div></div>
                <SectionsContact />
            </div>
        </div>
        
    </div>
</template>
<script lang="ts" setup>
</script>
<style>
</style>