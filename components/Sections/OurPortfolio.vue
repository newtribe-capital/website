<template>
<div id="portfolio" class="h-auto w-full bg-black py-12 px-0 text-sm text-zinc-400 md:px-20 md:text-lg">
  <div class="flex w-full flex-col md:w-4/5">
    <div><p class="text-3xl md:text-6xl px-6">Our Portfolio</p></div>
    <div><p class="mt-5 w-full text-justify md:mt-10 px-6">At NewTribe Capital, our portfolio is a testimony to the future we envision. Spanning a diverse range of domains from the virtual expanses of Metaverse & NFTs, the explosive growth sectors of Gaming and DeFi, the foundational blocks of Infrastructure, to the advanced realms of AI and the promising avenues of Launchpads, our investments are strategic, forward-thinking, and encompass the full spectrum of the digital revolution.</p></div>
    <div class="mt-5 flex w-full flex-col md:mt-10 bg-black md:bg-zinc-700 py-4 px-0 md:px-8">
        <!-- Desktop -->
        <div class="hidden md:block">
            <div class="flex flex-row space-x-8 w-full justify- items-center">
              <span v-for="(item, index) in categories" :key="index" class="flex flex-row w- space-x-2 items-center">
                  <div><img :src="item.src" alt=""></div>
                  <div  class="relative" @click="selectcategories(item.id)">
                      <p class="cursor-pointer">{{ item.name }}</p>
                      <div v-if="selectedCat ==item.id" class="absolute flex w-full justify-center">
                          <p class="h-1 w-4 rounded-full bg-sky-500"></p>
                      </div>
                      <div v-else></div>
                  </div>
                  <!-- <p class="text-green-400">{{ selectedCat }}{{ categories[selectedCat-1].id  }}</p> -->
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
                            <div class="h-full w-full bg-black"><img :src="it.src" alt="" class="h-full w-full"></div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>            
                </Swiper>
            </div>
        </div>
    </div>
    <div class="h-auto w-full hidden md:block">
        <div class="shadow-b-md bg-black flex h-auto md:h-80 w-full flex-col text-zinc-400 p-8">
          <div class="flex flex-wrap gap-2 h-auto w-full items-center ">
            <div v-for="(it, i) in cat.arr" :key="i" class="md:px-0">
              <div class="flex h-full w-full flex-row space-x-2">
                <div data-aos="fade-right" data-aos-duration="400" class="h-24 w-full"><img :src="it.src" alt="" class="h-full w-full object-cover" /></div>
              </div>
            </div>
          </div>
        </div>        
    </div>
  </div>
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
   cat.value = categories.find((category) => category.id ==id )
}

onMounted( () =>  {

    //  let i=1
    //   for(let i=1;i<categories.length;i++) {
    //     setInterval(() => {
     
    //  if(i<=categories.length){
    //   i=1
    //  }
    //  else{
      selectcategories(1)
    //  }
    // }, 1000)
    //   }
   
        // selectcategories(i)
        // i=i+1
        // console.log(i)
  
   
        


//    for(var i=0; i<categories.length; i++)
//    { 
//     console.log(categories[i].id, "meow")
//     categories[0].name
//    }
})
const categories:any = [
    {
        id:1,
        name:`Metaverse & NFT`,
        path:`#metaverse`,
        src:`https://res.cloudinary.com/dezmjeesi/image/upload/v1693647842/client%20categories/metaverse_mtsqse.svg`,
        arr:[
        {src:`https://res.cloudinary.com/dezmjeesi/image/upload/v1693983474/client%20categories/Matterless_qbey9w.png`},
        {src:`https://res.cloudinary.com/dezmjeesi/image/upload/v1693983474/client%20categories/bondly_wigla5.png`},
        {src:`https://res.cloudinary.com/dezmjeesi/image/upload/v1693983474/client%20categories/SecondLive_vfypgj.png`}
        ]
    },
    {
        id:2,
        name:`Launchpads`,
        path:`#launchpads`,
        src:`https://res.cloudinary.com/dezmjeesi/image/upload/v1693647842/client%20categories/launchpads_khjfdi.svg`,
        arr:[
            {src:`https://res.cloudinary.com/dezmjeesi/image/upload/v1693983535/client%20categories/Padi_Ntework_vztcsm.png`,},
            {src:`https://res.cloudinary.com/dezmjeesi/image/upload/v1693983534/client%20categories/poolz_uu1qnx.png`,},
            {src:`https://res.cloudinary.com/dezmjeesi/image/upload/v1693983534/client%20categories/Unkown_u6o5uo.png`,},
            {src:`https://res.cloudinary.com/dezmjeesi/image/upload/v1693983534/client%20categories/Suipad_loqk3a.png`,},
            {src:`https://res.cloudinary.com/dezmjeesi/image/upload/v1693983534/client%20categories/Singularity_DAO_z8qk7o.png`,},
        ]
    },
    {
        id:3,
        name:`Gaming`,
        path:`#gaming`,
        src:`https://res.cloudinary.com/dezmjeesi/image/upload/v1693647842/client%20categories/gaming_jxgwoz.svg`,
        arr:[
            {src:`https://res.cloudinary.com/dezmjeesi/image/upload/v1693983689/client%20categories/Cross_the_Ages_xkjjxr.png`,},
            {src:`https://res.cloudinary.com/dezmjeesi/image/upload/v1693983690/client%20categories/Sidus_heroes_fhu4d8.png`,},
            {src:`https://res.cloudinary.com/dezmjeesi/image/upload/v1693983691/client%20categories/Sidus_heroes-1_he5lsa.png`,},
            {src:`https://res.cloudinary.com/dezmjeesi/image/upload/v1693983690/client%20categories/Ready_Games_Network_m88nmf.png`,},
            {src:`https://res.cloudinary.com/dezmjeesi/image/upload/v1693983689/client%20categories/Engines_of_Fury_c8hifr.png`,},
            {src:`https://res.cloudinary.com/dezmjeesi/image/upload/v1693983689/client%20categories/Blockus_qitueb.png`,},
        ]
    },
    {
        id:4,
        name:`Defi`,
        path:`#defi`,
        src:`https://res.cloudinary.com/dezmjeesi/image/upload/v1693647842/client%20categories/defi_hu83rh.svg`,
        arr:[
            { src:`https://res.cloudinary.com/dezmjeesi/image/upload/v1693985573/client%20categories/Frame_129_miqbfv.png`,},            
            { src:`https://res.cloudinary.com/dezmjeesi/image/upload/v1693985573/client%20categories/FluidAI_x8nuur.png`,},            
            { src:`https://res.cloudinary.com/dezmjeesi/image/upload/v1693985575/client%20categories/Portal_DeFi_a0thnt.png`,},            
            { src:`https://res.cloudinary.com/dezmjeesi/image/upload/v1693985573/client%20categories/defi_usjjwn.png`,},            
            { src:`https://res.cloudinary.com/dezmjeesi/image/upload/v1693985574/client%20categories/Ovix_lcbk0f.png`,},            
            ]
        },
        {
            id:5,
            name:`Infrastructure`,
            path:`#infrastructure`,
            src:`https://res.cloudinary.com/dezmjeesi/image/upload/v1693647842/client%20categories/infrastructure_vpb5l4.svg`,
            arr:[
            {src:`https://res.cloudinary.com/dezmjeesi/image/upload/v1693984267/client%20categories/Casper_wwdlzp.png`,},
            {src:`https://res.cloudinary.com/dezmjeesi/image/upload/v1693984268/client%20categories/smooth_ureqpk.png`,},
            {src:`https://res.cloudinary.com/dezmjeesi/image/upload/v1693984270/client%20categories/Web3Auth_cwweoh.png`,},
            {src:`https://res.cloudinary.com/dezmjeesi/image/upload/v1693984974/client%20categories/kilt_dybytt.png`,},
            {src:`https://res.cloudinary.com/dezmjeesi/image/upload/v1693984268/client%20categories/intution_gxtiu9.png`,},
            {src:`https://res.cloudinary.com/dezmjeesi/image/upload/v1693984265/client%20categories/hapi_nab1bx.png`,},
            {src:`https://res.cloudinary.com/dezmjeesi/image/upload/v1693984266/client%20categories/ArchwayLogo_3_bldt5w.png`,},
            {src:`https://res.cloudinary.com/dezmjeesi/image/upload/v1693984269/client%20categories/Nulink_txwo16.png`,},
            {src:`https://res.cloudinary.com/dezmjeesi/image/upload/v1693984267/client%20categories/Dojima_Network_hqyylo.png`,},
        ]
    },
    {
        id:6,
        name:`AI`,
        path:`#ai`,
        src:`https://res.cloudinary.com/dezmjeesi/image/upload/v1693647842/client%20categories/aiicon_anncxw.svg`,
        arr:[
            {src:`https://res.cloudinary.com/dezmjeesi/image/upload/v1693985026/client%20categories/i_me_px00di.png`,},
            {src:`https://res.cloudinary.com/dezmjeesi/image/upload/v1693985026/client%20categories/Rejuve_ar7zjm.png`,},
            {src:`https://res.cloudinary.com/dezmjeesi/image/upload/v1693985027/client%20categories/NuNet_zlfpyo.png`,},
            {src:`https://res.cloudinary.com/dezmjeesi/image/upload/v1693985025/client%20categories/Sophia_Verse_fglvsn.png`,},            
        ]
    },
]

</script>