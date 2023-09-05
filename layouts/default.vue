<template>
    <div class="h-screen w-full flex flex-col font-primary fixed text-white bg-zinc-950">
        <div class="fixed w-full" style="z-index: 999;">
          <div class="hidden md:block"><Navbar/></div>
          <!-- start of mobile nav -->
          <div class="w-full block md:hidden h-auto z-40 flex px-8 flex-row items-center justify-between bg-neutral-800/80 py-4 text-neutral-300 backdrop-blur-md">
            <div class="w-1/2 h-full flex items-center">
              <a href="/" class=" flex items-center"><img src="https://res.cloudinary.com/dezmjeesi/image/upload/v1693047234/svg%20items/logo_big_ctilkk.svg" alt=""></a>
            </div>
            <div class="w-1/2 h-full flex justify-end">
              <svg @click="hamborgir" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-sky-500">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </div>
          </div>
          <!-- end of it -->
          <NewModal v-show="showModal" @close-newmodal="showModal = false">
            <template v-slot:body>
              <div class="flex h-full w-full justify-center items-center text-zinc-400 overflow-hidden bg-zinc-700  example">
                <div class="flex justify-center items-center w-1/2 h-auto">
                  <div class="flex flex-col w-full justify-end space-y-3 items-center text-xl">
                    <span v-for="(item, index) in menuitems" :key="index" class="">
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
                </div>
              </div>
            </template>
          </NewModal>
        </div>
        <div id="scrollbar" class="w-full mt-16 h-full flex flex-col overflow-auto justify-">
            <div class="w-full relative">
             
                <div>
                    <slot />
                    
                </div>
              <div style="z-index: 9999;" class="hidden md:block h-36 w-20 fixed bottom-20 right-24">
                <div v-if="scrollPx > 300" class="bg-zinc-700/30 backdrop-blur-md rounded-md px-3 w-3/4 h-full flex flex-col items-center py-3 justify-between">
                    <div @click="scrollToTop" id="myBtn">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="cursor-pointer w-6 h-6 text-emerald-500 hover:text-emerald-700">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 6.75L12 3m0 0l3.75 3.75M12 3v18" />
                        </svg>
                    </div>
                    <a href=" https://api.whatsapp.com/send?phone=+6583572479&text=We%20would%20like%20to%20know%20more%20about%20Teora%20and%20get%20in%20touch!">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="cursor-pointer w-6 h-6 text-emerald-500">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z" />
                        </svg>
                    </a>
                    <a href="mailto:contact@teora.life">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="cursor-pointer w-6 h-6 text-emerald-500">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>
                    </a>
                </div>
              </div>
            </div>
            <div><Footer/></div>           
        </div> 
    </div>
</template>
<script lang="ts" setup>
import Vue from 'vue'
const showModal= ref(false)
function hamborgir(){
  showModal.value=true
  console.log(showModal.value, "kitthe")
}
const route = useRoute()
const scrollPx = ref(0)
import NewModal from '../utils/NewModal.vue';
// scrollToTop: true
onMounted(()=>{
  var sb = document.getElementById('scrollbar');
  sb?.addEventListener("scroll", (e) => {
      scrollPx.value = sb?.scrollTop??0;
  });
})
function scrollToTop() {
  var sb = document.getElementById('scrollbar');
  sb?.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
    // console.log("aala", sb)
}
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
    {
      id: 1,
      path: `/insights`,
      name: `Insights`
    },
  ]
const navbarstatus = useNavbar()
const activeTab= ref(0)
const router = useRouter()
const isOpen= ref(false)
function home(){
  if (activeTab.value!=0) {
        //for de-assigning
        isOpen.value = false;
        activeTab.value = 0;
  }
  router.push({path:'/'})
}
</script>