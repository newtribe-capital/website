<template>
    <div data-aos="fade-right" class="h-auto w-full flex flex-col text-zinc-400 text-sm md:text-lg">
        <div ><p class="text-3xl md:text-6xl font-extralight px-6 md:px-20">Ecosystem Support</p></div>
        <div><p class="text-sm md:text-lg mt-5 md:mt-10 w-full md:w-1/2 text-justify px-6 md:px-20">As a standout leader in the Web3 investment space, we've successfully established a global footprint. Our thriving ecosystem includes partnerships with industry-leading companies across blockchain and Web3 space.</p></div>
        <div><p class="text-sm md:text-lg mt-2 md:mt-5 w-full md:w-1/2 text-justify px-6 md:px-20">This expansive network empowers us to offer unparalleled value to our portfolio companies, significantly boosting their growth and long-term success.</p></div>
        <!-- for desktop -->
        <div class="mt-28 w-4/5 hidden md:block px-6 md:px-20">
          <div class="w-full grid grid-flow-row grid-cols-4 gap-12">
            <div v-for="(i,index) in menuitems" :key="index" class="w-full flex flex-row space-x-6">
              <div><img :src="i.src" alt=""></div>
              <div><p>{{ i.des1 }} <br>{{ i.des2 }}</p></div>
            </div>
          </div>
        </div>
        <!-- for mobile -->
        <div class="mt-8 md:mt-10 w-full block md:hidden px-6 md:px-20">
          <Swiper
            :modules="[SwiperAutoplay, SwiperEffectCards]"
            :slides-per-view="3"
            :loop="true"
            :autoplay="{
              delay: 1000,
              disableOnInteraction: false
            }" class="w-full h- mb-4">
            <SwiperSlide v-for="(i, index) in menuitems" :key="index" class="w-full justify-center items-center flex flex-col space-y-3">
              <div class=" justify-center items-center flex"><img :src="i.src" alt=""></div>
              <div class=" justify-center items-center flex text-center"><p>{{ i.des1 }} <br>{{ i.des2 }}</p></div>
            </SwiperSlide>
          </Swiper>
          <!-- <div class="w-full grid grid-flow-row grid-cols-4 gap-12">
            <div v-for="(i,index) in menuitems" :key="index" class="w-full flex flex-row space-x-6">
              <div><img :src="i.src" alt=""></div>
              <div><p>{{ i.des1 }} <br>{{ i.des2 }}</p></div>
            </div>
          </div> -->
        </div>
        <!-- Ecosystem Partners -->
        <div class="w-full bg-[#1B1B1B] mt-8 md:mt-24 pt-12 pb-12 md:pt-24 md:pb-24">
          <div><p class="text-3xl md:text-6xl font-extralight px-6 md:px-20">Who we work with</p></div>
          <div class="mt-5 md:mt-10">
            <div class="w-full marquee h-full">                
              <div class="track h-full">
                <div class="content h-full">
                  <div class="flex flex-row space-x-5 h-28 md:h-32 w-max overflow-hidden">
                    <div class="h-auto md:h-full"><img class="h-full object-cover" src="https://res.cloudinary.com/dezmjeesi/image/upload/v1693993814/ecosystem%20partners/Group_481662_opvtat.png" alt=""></div>
                    <!-- <div class="h-full"><img class="h-full object-cover" src="https://res.cloudinary.com/dezmjeesi/image/upload/v1693994319/ecosystem%20partners/Group_481663_el8j9i.png" alt=""></div> -->
                    <div class="h-full"><img class="h-full object-cover" src="https://res.cloudinary.com/dezmjeesi/image/upload/v1698650244/ecosystem%20partners/sosv_zrty6s.png" alt=""></div>
                    <div class="h-full"><img class="h-full object-cover" src="https://res.cloudinary.com/dezmjeesi/image/upload/v1698650536/ecosystem%20partners/dfinity_pxjlnz.png" alt=""></div>
                    <div class="h-full"><img class="h-full object-cover" src="https://res.cloudinary.com/dezmjeesi/image/upload/v1698736989/ecosystem%20partners/RAK_DAO_Logo_1_qkjovy.png" alt=""></div>
                    <!-- <div class="h-full"><img class="h-full object-cover" src="https://res.cloudinary.com/dezmjeesi/image/upload/v1698736989/ecosystem%20partners/Cointelegraph_Acceleration_nrzc8b.png" alt=""></div> -->
                    <div class="h-full"><img class="h-full object-cover" src="https://res.cloudinary.com/dezmjeesi/image/upload/v1693993810/ecosystem%20partners/Group_481661_iqghdf.png" alt=""></div>
                    <div class="h-full"><img class="h-full object-cover" src="https://res.cloudinary.com/dezmjeesi/image/upload/v1693994354/ecosystem%20partners/Group_481668_wsz1lb.png" alt=""></div>
                    <div class="h-full"><img class="h-full object-cover" src="https://res.cloudinary.com/dezmjeesi/image/upload/v1693994348/ecosystem%20partners/Group_481664_jzhxu3.png" alt=""></div>
                    <div class="h-full"><img class="h-full object-cover" src="https://res.cloudinary.com/dezmjeesi/image/upload/v1693994351/ecosystem%20partners/Group_481666_ofj1ja.png" alt=""></div>
                    <div class="h-full"><img class="h-full object-cover" src="https://res.cloudinary.com/dezmjeesi/image/upload/v1693994352/ecosystem%20partners/Group_481667_ett1ae.png" alt=""></div>
                    <div class="h-full"><img class="h-full object-cover" src="https://res.cloudinary.com/dezmjeesi/image/upload/v1693994353/ecosystem%20partners/Group_481659_nsxrof.png" alt=""></div>
                    <div class="h-full"><img class="h-full object-cover" src="https://res.cloudinary.com/dezmjeesi/image/upload/v1693993738/ecosystem%20partners/Group_481660_z6el6d.png" alt=""></div>
                    <div class="h-full"><img class="h-full object-cover" src="https://res.cloudinary.com/dezmjeesi/image/upload/v1693994350/ecosystem%20partners/Group_481665_fqfu9w.png" alt=""></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full flex -mt-4 md:mt-5"><p class="text-sm md:text-lg font-extralight px-6 md:px-20">+300 more ecosystem partners</p></div>
        </div>
        <!-- next sec -->
        <div class="pt-6 md:pt-36 w-full md:w-4/5 h-auto relative">
            <div class="absolute left-0 bottom-10 -z-20 h-auto w-full hidden md:block opacity-50"><img src="https://res.cloudinary.com/dezmjeesi/image/upload/v1693209138/svg%20items/crosslines_sutpwn.svg" alt="" class="w-full"></div>
            <div data-aos="slide-up" data-aos-duration="600" data-aos-mirror="true"  class="absolute bg-gradient-to-bl hidden md:block from-zinc-700 m to-black rounded-full shadow-[0px_35px_30px_-2px_rgba(0,0,0,0.3)] shadow-black top-8 right-0 md:-right-12 w-56 h-56 -z-10 "></div>
            <!-- <div class="absolute -right-16 top-0 -z-10 h-full w-56"><img src="https://res.cloudinary.com/dezmjeesi/image/upload/v1693209916/svg%20items/Rectangle_1480_xhthfk.svg" alt="" class="w-full"></div> -->
            <div data-aos="fade-right" data-aos-duration="400" class="w-full flex flex-col md:flex-row space-y-2 md:space-y-0 space-x-0 md:space-x-5 px-6 md:px-20">
                <div data-aos="fade-right" data-aos-duration="400" class="w-full bg-gradient-to-b from-zinc-800/40 to-black/60 px-10 py-8 md:py-10 flex flex-row md:items-start space-x-5 md:space-x-0 items-center md:flex-col space-y-0 md:space-y-4 backdrop-blur-sm">
                    <div><img src="https://res.cloudinary.com/dezmjeesi/image/upload/v1693208995/ecosystem%20support%20icons/pie-chart-04_shqjxm.svg" alt=""></div>
                    <div class="flex flex-col">                      
                      <div><p class="text-3xl md:text-6xl text-sky-500">$50 Mn+</p></div>
                      <div><p class="hidden md:block">Funds  <br>Deployed</p></div>
                      <div><p class="block md:hidden">Funds Deployed</p></div>
                    </div>
                </div>
                <div class="w-full bg-gradient-to-b from-zinc-800/40 to-black/60 px-10 py-8 md:py-10 flex flex-row md:items-start space-x-5 md:space-x-0 items-center md:flex-col space-y-0 md:space-y-4 backdrop-blur-sm">
                    <div><img src="https://res.cloudinary.com/dezmjeesi/image/upload/v1693208995/ecosystem%20support%20icons/chart-breakout-circle_k9m1ao.svg" alt=""></div>
                    <div class="flex flex-col">
                      <div><p class="text-3xl md:text-6xl text-sky-500">200+</p></div>
                      <div><p class="hidden md:block">Projects in <br>Portfolio</p></div>
                      <div><p class="block md:hidden">Projects in Portfolio</p></div>
                    </div>
                </div>
                <div data-aos="fade-right" data-aos-duration="400" class="w-full bg-gradient-to-b from-zinc-800/40 to-black/60 px-10 py-8 md:py-10 flex flex-row md:items-start space-x-5 md:space-x-0 items-center md:flex-col space-y-0 md:space-y-4 backdrop-blur-sm">
                    <div><img src="https://res.cloudinary.com/dezmjeesi/image/upload/v1693208995/ecosystem%20support%20icons/line-chart-up-05_zsodw0.svg" alt=""></div>
                    <div class="flex flex-col">
                      <div><p class="text-3xl md:text-6xl text-sky-500">$200k</p></div>
                      <div><p class="hidden md:block">Average <br>Ticket Size</p></div>
                      <div><p class="block md:hidden">Average Ticket Size</p></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
const menuitems : {
    id: number;
    src: string; 
    des1: string; 
    des2: string; 
  }[]=[
    {
      id: 1,
      des1: `Advisory`,
      des2: `Support`,
      src:  `https://res.cloudinary.com/dezmjeesi/image/upload/v1693207258/ecosystem%20support%20icons/Advisory_Support_cuabuj.svg`
    },
    {
      id: 1,
      des1: `Pitch Deck & `,
      des2: `Whitepaper`,
      src:  `https://res.cloudinary.com/dezmjeesi/image/upload/v1693207259/ecosystem%20support%20icons/Pitch_Deck_Whitepaper_n4po64.svg`
    },
    {
      id: 1,
      des1: `Legal`,
      des2: `Support`,
      src:  `https://res.cloudinary.com/dezmjeesi/image/upload/v1693207256/ecosystem%20support%20icons/legalsupport_szbjmo.svg`
    },
    {
      id: 1,
      des1: `Resourcing &`,
      des2: `Recruitment`,
      src:  `https://res.cloudinary.com/dezmjeesi/image/upload/v1693207259/ecosystem%20support%20icons/Resourcing_Recruitment_ixrnvs.svg`
    },
    {
      id: 1,
      des1: `Token`,
      des2: `Economics`,
      src:  `https://res.cloudinary.com/dezmjeesi/image/upload/v1693207259/ecosystem%20support%20icons/star-06_o7kn4j.svg`
    },
    {
      id: 1,
      des1: `Competitor`,
      des2: `Review`,
      src:  `https://res.cloudinary.com/dezmjeesi/image/upload/v1693207258/ecosystem%20support%20icons/Competitor_Review_i9o6ls.svg`
    },
    {
      id: 1,
      des1: `Market`,
      des2: `Making`,
      src:  `https://res.cloudinary.com/dezmjeesi/image/upload/v1693207258/ecosystem%20support%20icons/Market_Making_gwpz7f.svg`
    },
    {
      id: 1,
      des1: `Launchpads,`,
      des2: `CEX Guidance`,
      src:  `https://res.cloudinary.com/dezmjeesi/image/upload/v1693207258/ecosystem%20support%20icons/launchpads_clefxs.svg`
    },
    {
      id: 1,
      des1: `KOL &`,
      des2: `Influencers`,
      src:  `https://res.cloudinary.com/dezmjeesi/image/upload/v1693207256/ecosystem%20support%20icons/KOL_Influencers_h7tmnz.svg`
    },
    {
      id: 1,
      des1: `KYC/KYB`,
      des2: `Support`,
      src:  `https://res.cloudinary.com/dezmjeesi/image/upload/v1693207256/ecosystem%20support%20icons/KYB_Support_y78nef.svg`
    },
    {
      id: 1,
      des1: `Growth`,
      des2: `Hacking`,
      src:  `https://res.cloudinary.com/dezmjeesi/image/upload/v1693207256/ecosystem%20support%20icons/Growth_Hacking_zx1it3.svg`
    },
    {
      id: 1,
      des1: `Smart Contract `,
      des2: `Auditing`,
      src:  `https://res.cloudinary.com/dezmjeesi/image/upload/v1693207256/ecosystem%20support%20icons/smartcontract_r4k637.svg`
    },
    {
      id: 1,
      des1: `PR & `,
      des2: `Publications`,
      src:  `https://res.cloudinary.com/dezmjeesi/image/upload/v1693207256/ecosystem%20support%20icons/rss-02_lvrwf6.svg`
    },
    {
      id: 1,
      des1: `Technical`,
      des2: `Support`,
      src:  `https://res.cloudinary.com/dezmjeesi/image/upload/v1693207258/ecosystem%20support%20icons/bezier-curve-03_tab1in.svg`
    },
    {
      id: 1,
      des1: `Project`,
      des2: `Partnerships`,
      src:  `https://res.cloudinary.com/dezmjeesi/image/upload/v1693207258/ecosystem%20support%20icons/atom-02_lbzpmo.svg`
    },
    {
      id: 1,
      des1: `Strategic Investor `,
      des2: `Partnerships`,
      src:  `https://res.cloudinary.com/dezmjeesi/image/upload/v1693207259/ecosystem%20support%20icons/Strategic_Investor_Partnerships_bvokge.svg`
    },    
  ]
</script>
<style scoped>
.swiper {
    /* margin-left: auto;
    margin-right: auto;
    position: relative;
    overflow: hidden; */
    /* height: 100px; */
    width: 100%;
    overflow: clip;
    list-style: none;
    padding: 0;
    z-index: 1;
    display: flex;
    flex-direction: column;
}
/* .swiper-slide{
  flex-shrink: 0;
  height: 100%;
} */
.swiper-wrapper {
    position: relative;
    width: auto;
    height: 100%;
    z-index: 1;
    display: flex;
    flex-direction: column;
    transition-property: transform;
    transition-timing-function: var(--swiper-wrapper-transition-timing-function, initial);
    box-sizing: content-box;
  }
  .marquee {
  position: relative;
  width: 100vw;
  max-width: 100%;
  height: 160px;
  overflow-x: hidden;
}

.track {
  position: absolute;
  white-space: nowrap;
  height: 100%;
  will-change: transform;
  /* width: 300%; */
  overflow: hidden;
  animation: marquee 25s linear infinite;
}

@keyframes marquee {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}
</style>