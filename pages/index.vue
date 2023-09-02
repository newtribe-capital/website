<template>
    <div class="relative h-auto w-full flex flex-col">
        <div class="absolute w-20 -z-10 h-full hidden md:block right-16"><hr class="w-0.5 h-full bg-zinc-700"></div>
        <div class="h-full w-full flex flex-col py-8">
            <SectionsLander/>
            <SectionsEcosystemSupport class="pb-12 md:pb-28"/>
            <SectionsOurPortfolio class="pb-12 md:pb-28"/>
            <SectionsCulture class="pb-12 md:pb-28"/>
            <SectionsTeam class="pb-12 md:pb-28"/>
            <SectionsOurPresence class="pb-12 md:pb-28"/>
            <SectionsContact class="pb-12 md:pb-28"/>
            <div class="-z-40"><particles /></div>
        </div>
    </div>
</template>
<script lang="ts" setup>
</script>
<style>
</style>