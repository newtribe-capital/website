<script setup lang="ts">
const swiper = useSwiper()
</script>

<template>
    <div class="flex bg-zinc-700 flex-row w-1/3 space-x-5">
        <div class="flex bg-zinc-700  justify-center cursor-pointer items-center" @click="swiper.slidePrev()">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-sky-500">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </div>
        <div class="flex bg-zinc-700 justify-center cursor-pointer items-center" @click="swiper.slideNext()">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-sky-500">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </div>
    </div>
</template>