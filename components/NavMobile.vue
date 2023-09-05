<template>
<div class="h-20 w-full">
  <div class="flex h-full w-full flex-row items-center bg-transparent text-4xl text-violet-700">
    <div class="flex w-full flex-row items-center justify-between px-12 py-6 md:px-24">
      <div @click="home" class="cursor-pointer"><p>TeOra.</p></div>
      <div class="flex items-end justify-end border-0 bg-violet-100 py-6">
        <svg @click="hamborgir()" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-8 w-8 cursor-pointer hover:text-violet-800">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </div>
      <!--  -->
      <NewModal v-show="showModal" @close-newmodal="showModal = false">
        <template v-slot:body>
          <!-- <MobileHamburger/> -->
          <div class="flex h-full w-full justify-center items-center text-violet-600 overflow-hidden bg-violet-200 example">
        <div class="flex justify-center items-center w-1/2 h-auto">
            <div class="flex flex-col w-full justify-end space-y-3 items-center text-xl">
            <span v-for="(item, index) in menuitems" :key="index">
                <a :href="item.path" @click="close" class="relative">
                <p>{{item.name}}</p>
                <div v-if="'/'+route.name == item.path" class="absolute -bottom-1 flex w-full justify-center">
                    <p class="bg-violet-600 h-1 w-4 rounded-full"></p>
                </div>
                <div v-else class=""></div>
                </a>
            </span>
        </div>
        </div>
    </div>
        </template>
      </NewModal>
    </div>
  </div>
</div>
</template>

<style>
.navBg {
  backdrop-filter: saturate(180%) blur(12px);
  background-color: #F1EAFF;
}
</style>

<script  lang="ts" setup>
// import Modal from '~/utils/Modal.vue';
// scrollToTop: true
const { $event } = useNuxtApp();
const showModal = ref(false);
function hamborgir(){
    // console.log(showModal.value); 
    showModal.value = true;
}

const isOpen= ref(false)
const activeTab= ref(0)
const router = useRouter()

function home(){
  if (activeTab.value!=0) {
        //for de-assigning
        isOpen.value = false;
        activeTab.value = 0;
  }
  router.push({path:'/'})
}
function close(){
  // $emit('close-newmodal')
  showModal.value = false;
}
function toggleTab(id:number){
    if (isOpen.value === false) {
          activeTab.value = id;
        //for assigning current id
        isOpen.value = true;
         
      } else if(isOpen.value === true) {
          activeTab.value = id;
      }
}
const route = useRoute()
const menuitems : {
    id: number;
    path: string; 
    name: string; 
  }[]=[
    {
      id: 0,
      path: `/`,
      name: `Home`,
    },
    {
      id: 4,
      path: `/#about`,
      name: `About`,
    },
    {
      id: 6,
      path: `/#portfolio`,
      name: `Portfolio`,
    },
    {
      id: 5,
      path: `/#team`,
      name: `Team`,
    },
    {
      id: 1,
      path: `/insights`,
      name: `Insights`
    },
  ]
</script>