<template>
  <div class="w-36 text-emerald-800">
    <button :class="props.isLoading? 'hidden':'block'" class=" border-2 bg-emerald-300 hover:bg-emerald-400 border-emerald-600 w-full flex flex-row space-x-3 items-center justify-center px-6 py-2">
      <slot />
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
        </svg>
      </div>
    </button>
    <div :class="props.isLoading==false? 'hidden':'block'" class="bg-emerald-400 border-2 border-emerald-600 cursor-not-allowed w-full flex flex-row space-x-3 items-center justify-center px-6 py-2">
      <slot />
      <div class="spinner"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps(['isLoading','color'])
</script>

<style>
.spinner {
  display: inline-block;
  width: 20px;
  height: 20px;
}
.spinner:after {
  content: " ";
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 3px solid #fff;
  border-color: #fff transparent ;
  animation: spinner 1.2s linear infinite;
}
@keyframes spinner {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>