<template>
  <div class="h-auto z-40 flex w-full flex-row items-center justify-between md:justify-center bg-neutral-800/80 py-4 text-neutral-300 backdrop-blur-md">
    <div class="w-1/2 md:w-2/3 h-full pl-6 md:pl-12">
      <a href="/" class=" flex items-center"><img src="https://res.cloudinary.com/dezmjeesi/image/upload/v1693047234/svg%20items/logo_big_ctilkk.svg" alt=""></a>
    </div>
    <!-- for desktop -->
    <div class="w-1/3 hidden md:block pr-16">
      <div class="flex w-full h-full flex-row space-x-4 justify-end items-center text-lg">
        <div class="flex flex-row space-x-4 justify-end">
          <span v-for="(item, index) in menuitems" :key="index" class="w-full flex items-center flex-row space-x-4 justify-end">
            <a :href="item.path" class="cursor-pointer hover:text-white relative">
              <p>{{item.name}}</p>
              <div v-if="route.path+route.hash == item.path && '/'+route.hash == item.path && route.path+route.hash!='/'" class="absolute -bottom-1 flex w-full justify-center">
                <p class="h-1 w-2 rounded-full bg-sky-400"></p>
              </div>
              <div v-else-if="route.name == 'index' && item.path == route.path && route.path+route.hash==item.path && '/'+route.hash == '/'" class="absolute -bottom-1 flex w-full justify-center">
                <p class="h-1 w-2 rounded-full bg-sky-400"></p>
              </div>
              <div v-else class="absolute -bottom-1 flex w-full justify-center"></div>
            </a>
          </span>
        </div>
        <div class="h-4 w-0.5 rounded-full bg-sky-400"></div>
        <div class="w-20 bg- flex flex-col text-zinc-500">
          <span v-for="(item, index) in insightful" :key="index" class="w-full flex items-center flex-row space-x-4 justify-end">
            <a href="/insights" class="cursor-pointer hover:text-white relative">
              <p>Insights</p>
              <div v-if="route.name =='insights' && item.path == route.path && route.path+route.hash==item.path" class="absolute -bottom-1 flex w-full justify-center">
                <p class="h-1 w-2 rounded-full bg-sky-400"></p>
              </div>
              <div v-else class=""></div>
            </a>
          </span>
        </div>
      </div>
    </div>
    <!-- for mobile -->
    <div class="w-1/2 block md:hidden pr-6">
      <div class="w-full flex justify-end">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-sky-500">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute()
const isOpen= ref(false)
const menuitems : {
    id: number;
    path: string; 
    name: string; 
  }[]=[
    {
      id: 4,
      path: `/`,
      name: `Home`,
    },
    {
      id: 6,
      path: `/#about`,
      name: `About`,
    },
    {
      id: 5,
      path: `/#portfolio`,
      name: `Portfolio`,
    },
    {
      id: 1,
      path: `/#team`,
      name: `Team`
    },
  ]
const insightful : {
    id: number;
    path: string; 
    name: string; 
  }[]=[
    {
      id: 1,
      path: `/insights`,
      name: `Insights`
    },
  ]
</script>

<style>

</style>