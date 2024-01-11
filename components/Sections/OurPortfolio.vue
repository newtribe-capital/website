<template>
<div  class="h-auto w-full bg-black mt-8 md:mt-16 py-12 px-0 text-sm text-zinc-400 md:px-20 md:text-lg">
  <div class="flex w-full flex-col md:w-4/5">
    <div><p class="text-3xl md:text-6xl px-6">Our Portfolio</p></div>
    <div><p class="mt-5 w-full text-justify md:mt-10 px-6">At NewTribe Capital, our portfolio is a testimony to the future we envision. Spanning a diverse range of domains from the virtual expanses of Metaverse & NFTs, the explosive growth sectors of Gaming and DeFi, the foundational blocks of Infrastructure, to the advanced realms of AI and the promising avenues of Launchpads, our investments are strategic, forward-thinking, and encompass the full spectrum of the digital revolution.</p></div>
    <div class="mt-5 flex w-full flex-col md:mt-10 bg-black md:bg-zinc-700 py-4 px-0 md:px-8">
        <!-- Desktop -->
        <div class="hidden md:block">
            <div class="flex flex-row space-x-8 w-full justify- items-center">
              <span v-for="(item, index) in categories" :key="index" class="">
                <div @click="selectcategories(item.id)" class="flex flex-row cursor-pointer space-x-2 items-center">
                  <div><img :src="item.src" alt=""></div>
                  <div  class="relative">
                      <p class="">{{ item.name }}</p>
                      <div v-if="selectedCat ==item.id" class="absolute flex w-full justify-center">
                          <p class="h-1 w-4 rounded-full bg-sky-500"></p>
                      </div>
                      <div v-else></div>
                  </div>
                </div>
                  <!-- <p class="text-green-400">{{ selectedCat }}{{ categories[selectedCat-1].id  }}</p> -->
                  <!-- <div class="flex flex-wrap gap-2 h-auto w-full items-center ">
            <div v-for="(it, i) in cat.arr" :key="i" class="md:px-0">
              
              <div class="flex h-full w-full flex-row space-x-2">
                <div class="h-24 w-full"><img :src="it.src" alt="" class="h-full w-full object-cover" /></div>
              </div>
            </div>
          </div> -->
              </span>
            </div>            
        </div>
        <!-- Mobile -->
        <div class="block md:hidden px-6">
            <div class="flex w-full bg- flex-col mt-5 md:mt-10 bg-black">
                <Swiper            
                :modules="[SwiperAutoplay, SwiperEffectCards]"
                :slides-per-view="1"
                :loop="true"
                :autoplay="{
                  delay: 1500,
                  // disableOnInteraction: true
                }" 
                   class="w-full h- flex">                
                  <SwiperSlide v-for="(item, index) in categories" :key="index" class="h-auto w-full flex flex-col text-zinc-400 pb-1 shadow-b-md">
                    <div class="flex flex-row h-16 items-center justify-between space-x-3 py-4 bg-zinc-700 px-4">
                        <div class="flex flex-row items-center space-x-3">
                            <div><img :src="item.src" alt=""></div>
                            <p>{{ item.name }}</p>
                        </div>
                        <div class="">
                            <Controls/>
                        </div>
                    </div>
                    <div class="flex p-4 w-full h-auto flex-row flex-wrap gap-2">
                      <div v-for="(it, i) in item.arr" :key="i" class="flex h-16 flex-row h-  md:px-0">
                        <div class="w-full h-full flex flex-row space-x-2">
                            <div class="h-full w-full bg-black"><img :src="it.src" alt="" class="h-full md:w-full"></div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>            
                </Swiper>
            </div>
        </div>
    </div>
    <div class="h-auto w-full hidden md:block">
        <div class="shadow-b-md b bg-black flex h-auto md:h-80 w-full flex-col text-zinc-400 p-8">
          <div class="flex flex-wrap gap-2 h-auto w-full items-center ">
            <span  v-for="(it, i) in cat.arr" :key="i" class="md:px-0">
              <div  class="flex h-full w-full flex-row space-x-2">
                <div class="h-20 w-full"><img :src="it.src" alt="" class="h-full w-full object-cover"  /></div>
              </div>
            </span>
          </div>
        </div>        
    </div>
  </div>
  <div class="w-full flex px-8 md:px-0 -mt-4 md:mt-5"><p class="text-sm md:text-lg font-extralight">+120 WEB3 Projects</p></div>
  <!-- <div><hr class="w-full border border-zinc-700"></div> -->
</div>
</template>
<style>
.swiper {
    /* margin-left: auto;
    margin-right: auto;
    position: relative;
    overflow: hidden; */
    /* height: 100px; */
    /* width: 100%;
    overflow: clip;
    list-style: none;
    padding: 0;
    z-index: 1;
    display: flex;
    flex-direction: row; */
}
/* .swiper-slide{
  flex-shrink: 0;
  height: 100%;
} */
.swiper-wrapper {
    position: relative;
    /* width: auto;
    height: 100%;
    z-index: 1;
    display: flex;
    transition-property: transform;
    transition-timing-function: var(--swiper-wrapper-transition-timing-function, initial);
    box-sizing: content-box; */
}
</style>
<script lang="ts" setup>
import { Pagination } from 'swiper/modules';

const selectedCat = ref(1)
const cat = ref({})

function selectcategories(id)  {
   selectedCat.value = id
   cat.value = {}
   cat.value = categories.find((category) => category.id ==id )
}

const i = ref(0)

onMounted( () =>  {

  setInterval(() => {
    setTimeout(() => {
       selectcategories(i.value)
     }, 200);
      i.value++;
      if (i.value > categories.length) {
        i.value = 1;
      }
    }, 4000);

})
const categories:any = [
{
    id:1,
    name:`Metaverse & NFT`,
    path:`#metaverse`,
    src:`https://res.cloudinary.com/dezmjeesi/image/upload/v1693647842/client%20categories/metaverse_mtsqse.svg`,
    arr:[
    {src:`https://res.cloudinary.com/dezmjeesi/image/upload/v1698823742/Our%20Portfolio%20Logos/Matterless_uvfefl.svg`},
    {src:`https://res.cloudinary.com/dezmjeesi/image/upload/v1694073804/Our%20Portfolio%20Logos/Bondly_a8btjt.svg`},
    {src:`https://res.cloudinary.com/dezmjeesi/image/upload/v1694073805/Our%20Portfolio%20Logos/SecondLive_fvxk8d.svg`}
    ]
},
{
    id:2,
    name:`Launchpads`,
    path:`#launchpads`,
    src:`https://res.cloudinary.com/dezmjeesi/image/upload/v1693647842/client%20categories/launchpads_khjfdi.svg`,
    arr:[
        {src:`https://res.cloudinary.com/dezmjeesi/image/upload/v1698824971/Our%20Portfolio%20Logos/Paid_Network_tpd8dq.svg`,},
        {src:`https://res.cloudinary.com/dezmjeesi/image/upload/v1694073792/Our%20Portfolio%20Logos/Poolz_w1a2sa.svg`,},
        {src:`https://res.cloudinary.com/dezmjeesi/image/upload/v1694073793/Our%20Portfolio%20Logos/Suipad_gvtmg2.svg`,},
        {src:`https://res.cloudinary.com/dezmjeesi/image/upload/v1694073793/Our%20Portfolio%20Logos/Singularity_DAO_d6nn07.svg`,},
    ]
},
{
    id:3,
    name:`Gaming`,
    path:`#gaming`,
    src:`https://res.cloudinary.com/dezmjeesi/image/upload/v1693647842/client%20categories/gaming_jxgwoz.svg`,
    arr:[
        {src:`https://res.cloudinary.com/dezmjeesi/image/upload/v1694073768/Our%20Portfolio%20Logos/Cross_the_Ages_g5pj6k.svg`,},
        {src:`https://res.cloudinary.com/dezmjeesi/image/upload/v1698823744/Our%20Portfolio%20Logos/Sidus_heroes_s9jsbz.svg`,},
        {src:`https://res.cloudinary.com/dezmjeesi/image/upload/v1694073769/Our%20Portfolio%20Logos/Ready_Games_Network_gebazk.svg`,},
        {src:`https://res.cloudinary.com/dezmjeesi/image/upload/v1694073768/Our%20Portfolio%20Logos/Engines_of_Fury_sfdinj.svg`,},
        {src:`https://res.cloudinary.com/dezmjeesi/image/upload/v1694073769/Our%20Portfolio%20Logos/Blockus_ryramz.svg`,},
    ]
},
{
    id:4,
    name:`Defi`,
    path:`#defi`,
    src:`https://res.cloudinary.com/dezmjeesi/image/upload/v1693647842/client%20categories/defi_hu83rh.svg`,
    arr:[
        { src:`https://res.cloudinary.com/dezmjeesi/image/upload/v1698838396/Our%20Portfolio%20Logos/Equifi_cifnjp.svg`,},            
        { src:`https://res.cloudinary.com/dezmjeesi/image/upload/v1694073760/Our%20Portfolio%20Logos/FluidAI_e4zl9e.svg`,},            
        { src:`https://res.cloudinary.com/dezmjeesi/image/upload/v1694073760/Our%20Portfolio%20Logos/Portal_DeFi_kvrwnc.svg`,},            
        { src:`https://res.cloudinary.com/dezmjeesi/image/upload/v1694073759/Our%20Portfolio%20Logos/DeFi_lkaqcy.svg`,},            
        { src:`https://res.cloudinary.com/dezmjeesi/image/upload/v1694073760/Our%20Portfolio%20Logos/Ovix_l6qvpt.svg`,},            
        ]
    },
    {
        id:5,
        name:`Infrastructure`,
        path:`#infrastructure`,
        src:`https://res.cloudinary.com/dezmjeesi/image/upload/v1693647842/client%20categories/infrastructure_vpb5l4.svg`,
        arr:[
        {src:`https://res.cloudinary.com/dezmjeesi/image/upload/v1704874600/Our%20Portfolio%20Logos/inspect_uwiy0w.svg`,},
        {src:`https://res.cloudinary.com/dezmjeesi/image/upload/v1694073778/Our%20Portfolio%20Logos/Casper_wgkync.svg`,},
        {src:`https://res.cloudinary.com/dezmjeesi/image/upload/v1694073783/Our%20Portfolio%20Logos/Smooth_Labs_vehm3e.svg`,},
        {src:`https://res.cloudinary.com/dezmjeesi/image/upload/v1698825004/Our%20Portfolio%20Logos/Web3Auth_qzz6ya.svg`,},
        {src:`https://res.cloudinary.com/dezmjeesi/image/upload/v1694073780/Our%20Portfolio%20Logos/Kilt_l1ipca.svg`,},
        {src:`https://res.cloudinary.com/dezmjeesi/image/upload/v1694073780/Our%20Portfolio%20Logos/Intuition_kwdqiz.svg`,},
        {src:`https://res.cloudinary.com/dezmjeesi/image/upload/v1698827454/Our%20Portfolio%20Logos/HAPI_tyrr5t.svg`,},
        {src:`https://res.cloudinary.com/dezmjeesi/image/upload/v1694073778/Our%20Portfolio%20Logos/Archway_sx4pvg.svg`,},
        {src:`https://res.cloudinary.com/dezmjeesi/image/upload/v1698823742/Our%20Portfolio%20Logos/Nulink_hylpxn.svg`,},
        {src:`https://res.cloudinary.com/dezmjeesi/image/upload/v1704871968/Our%20Portfolio%20Logos/Subsquid_mytrnv.svg`,},
        {src:`https://res.cloudinary.com/dezmjeesi/image/upload/v1698828208/Our%20Portfolio%20Logos/Fractal_w4v0ef.svg`,},
        {src:`https://res.cloudinary.com/dezmjeesi/image/upload/v1698737094/Our%20Portfolio%20Logos/Linera_yo4uhr.svg`,},
    ]
},
{
    id:6,
    name:`AI`,
    path:`#ai`,
    src:`https://res.cloudinary.com/dezmjeesi/image/upload/v1693647842/client%20categories/aiicon_anncxw.svg`,
    arr:[
        {src:`https://res.cloudinary.com/dezmjeesi/image/upload/v1704874596/Our%20Portfolio%20Logos/chainml_o7jmbz.svg`,},
        {src:`https://res.cloudinary.com/dezmjeesi/image/upload/v1704874595/Our%20Portfolio%20Logos/Hyper_Oracle_pmoqu3.svg`,},
        {src:`https://res.cloudinary.com/dezmjeesi/image/upload/v1694073743/Our%20Portfolio%20Logos/iMe_od1f7q.svg`,},
        {src:`https://res.cloudinary.com/dezmjeesi/image/upload/v1698823742/Our%20Portfolio%20Logos/Rejuve_w1wseh.svg`,},
        {src:`https://res.cloudinary.com/dezmjeesi/image/upload/v1698823743/Our%20Portfolio%20Logos/NuNet_lmniz8.svg`,},
        {src:`https://res.cloudinary.com/dezmjeesi/image/upload/v1694073743/Our%20Portfolio%20Logos/Sophia_Verse_ojvtdl.svg`,},            
    ]
},
{
    id:7,
    name:`Ordinals`,
    path:`#ordinals`,
    src:`https://res.cloudinary.com/dezmjeesi/image/upload/v1704878477/Vector_fiotox.svg`,
    arr:[
        {src:`https://res.cloudinary.com/dezmjeesi/image/upload/v1704874596/Our%20Portfolio%20Logos/tap_yugbbj.svg`,},        
        {src:`https://res.cloudinary.com/dezmjeesi/image/upload/v1704956187/Our%20Portfolio%20Logos/baxter_scyf1l.svg`,},        
    ]
},
]

</script>