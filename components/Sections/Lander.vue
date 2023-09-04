<template>
    <div class="relative h-auto w-full text-zinc-400 flex flex-col">
        <div class="absolute top-16 left-8 md:left-24 h-64 md:h-96 -z-10 "><img src="https://res.cloudinary.com/dezmjeesi/image/upload/v1693047233/svg%20items/blackball_qecfav.svg" alt="" class="h-full w-full"></div>
        <div class=" flex flex-col w-full h-full my-24 md:my-40 px-6 md:px-20 bg-">
            <div class="mb-[50px] md:mb-9 w-1/2"><img src="https://res.cloudinary.com/dezmjeesi/image/upload/v1693047234/svg%20items/newtribe_rqqufq.svg" alt=""></div>
            <div><p class="text-2xl md:text-5xl">NewTribe Capital is a <span class="text-sky-500">blockchain-oriented Web3 <br/> Venture Capital fund</span> that invests in early-stage<br/> blockchain and crypto projects. We invest in<br/> <span class="text-emerald-500"> People, Innovation & Technology.</span> </p></div>
        </div>
        <div  class="relative z-20 flex flex-col w-full md:w-4/5 h-auto my-10 py-24 bg-zinc-900/70 backdrop-blur-sm">
            <div class="px-24 mb-2 text-sm md:text-lg"><p>Trusted by over a 100+ Projects </p></div>
            <div class="absolute w-full -300 -z-10 -top-20 h-[700px] overflow-hidden"><img src="https://res.cloudinary.com/dezmjeesi/image/upload/v1693047233/svg%20items/Vector_3_Stroke_rangay_bae_rangy_wb3jgz.svg" alt="" class="w-full"></div>
            <div class="absolute hidden md:block left-0 h-3/4 bottom-8 blur-md z-40 w-24 bg-zinc-900/90"></div>
            <div class="absolute hidden md:block right-0 h-3/4 bottom-8 blur-md z-40 w-24 bg-zinc-900/90"></div>
            <div class="w-full h-full hidden md:block">
                <Swiper
                  :modules="[SwiperAutoplay, SwiperEffectCards]"
                  :loop="true"
                  :slides-per-view="6"
                  :autoplay="{
                    delay: 500,
                    disableOnInteraction: false
                  }" class="w-full h- mb-4">
                  <SwiperSlide v-for="(item, index) in cards" :key="index" class="h-40 bg- pb-1 shadow-b-md">
                    <div class="flex w-56 bg-zinc-700 h-full justify-center items-center">
                      <div class="flex w-1/2 flex-col h-1/2 text-slate-600 md:px-0">
                        <img :src="item.link" alt="" class="h-full">
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
                <Swiper
                  :modules="[SwiperAutoplay, SwiperEffectCards]"
                  :slides-per-view="6"
                  :loop="true"
                  :autoplay="{
                    delay: 1000,
                    disableOnInteraction: false,
                    reverseDirection: true,
                  }" class="w-full h- flex bg--500">
                  <SwiperSlide v-for="(item, index) in cards2" :key="index" class="h-52 bg- pb-1 shadow-b-md">
                    <div class="flex w-56 bg-zinc-700 h-full justify-center items-center">
                      <div class="flex w-1/2 flex-col h-1/2 text-slate-600 md:px-0">
                        <img :src="item.link" alt="" class="h-full">
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
            </div>
            <div class="w-full h-full block md:hidden">
                <Swiper
                  :modules="[SwiperAutoplay, SwiperEffectCards]"
                  :slides-per-view="2"
                  :loop="true"
                  :autoplay="{
                    delay: 500,
                    // disableOnInteraction: true
                  }" class="w-full h- mb-4">
                  <SwiperSlide v-for="(item, index) in cards" :key="index" class="h-52 bg- pb-1 shadow-b-md">
                    <div class="flex w-full h-full justify-center items-center">
                      <div class="flex w-full flex-col h-full text-slate-600 md:px-0">
                        <img :src="item.link" alt="" class="h-full">
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
                <Swiper
                  :modules="[SwiperAutoplay, SwiperEffectCards]"
                  :slides-per-view="2"
                  :loop="true"
                  :autoplay="{
                    delay: 500,
                    // disableOnInteraction: true,
                    reverseDirection: true,
                  }" class="w-full h- flex bg--500">
                  <SwiperSlide v-for="(item, index) in cards2" :key="index" class="h-52 bg- pb-1 shadow-b-md">
                    <div class="flex w-full h-full justify-center items-center">
                      <div class="flex w-full flex-col h-full text-slate-600 md:px-0">
                        <img :src="item.link" alt="" class="h-full">
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
            </div>
        </div>
        <div id='about' class="py-28 text-sm md:text-lg flex flex-col md:flex-row w-full text-zinc-400">
            <!-- desktop -->
            <a name="about" class="w-full hidden md:block px-6 md:px-20">
                <div class="flex flex-row w-full space-x-0 md:space-x-32">
                    <div class="w-1/2 h-auto flex flex-col text-justify text-lg">
                        <div ><p class="text-3xl md:text-6xl mb-10">About us</p></div>
                        <div><p class="mb-6">NewTribe Capital is a venture firm specializing in early-stage Web3 investments that aims to support the next generation of permissionless, trustless, and decentralized technology.</p></div>
                        <div><p class="mb-6">NewTribe Capital’s support extends beyond the capital, offering portfolio companies access to an extensive network of industry connections and resources, fostering their growth and development.</p></div>
                        <div><p class="mb-6">Our vision  Driven by the 'Investing in People” philosophy, we bet on the visionary founders that thrive to add value to the WEB3 ecosystem. We unite the 'new tribe' of innovators and demonstrate a comprehensive understanding of the crypto space, spanning tokenomics, macroeconomics, go-to-market strategies, and legal compliance.</p></div>
                        <div><p class="mb-6">New Tribe Capital specializes in identifying opportunities across Asia, Europe, and MENA, focusing on fostering the Web3 ecosystem's growth in the Middle East without geographical limitations.</p></div>
                    </div>
                    <div  class="w-full md:w-1/2 pt-16">
                        <div class="w-full md:w-1/2 h-full flex flex-col space-y-5">
                            <div class="bg-zinc-800 h-full w-full flex flex-row px-9 items-center space-x-10">
                                <div class="w-20">
                                    <img src="https://res.cloudinary.com/dezmjeesi/image/upload/v1693204772/icons/endtoend_ghe4pr.svg" alt="">
                                </div>
                                <div>End-to-End <br>Support</div>
                            </div>
                            <div class="bg-zinc-800 h-full w-full flex flex-row px-9 items-center space-x-10">
                                <div class="w-20">
                                    <img src="https://res.cloudinary.com/dezmjeesi/image/upload/v1693204772/icons/techincal_ozr1vy.svg" alt="">
                                </div>
                                <div>Technical <br>Expertise</div>
                            </div>
                            <div class="bg-zinc-800 h-full w-full flex flex-row px-9 items-center space-x-10">
                                <div class="w-20">
                                    <img src="https://res.cloudinary.com/dezmjeesi/image/upload/v1693204772/icons/Uae_base_kukfvk.svg" alt="">
                                </div>
                                <div>UAE <br>Base</div>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
            <!-- mobile -->
            <div class="w-full block md:hidden">
                <a name="about" class="flex flex-col w-full relative overflow-hidden px-6 md:px-20">
                    <div class="flex justify-end items-end -z-10 absolute -right-32 h-[330px] w-full"><img src="https://res.cloudinary.com/dezmjeesi/image/upload/v1693047234/svg%20items/greenball_tdc2cz.svg" alt="" class="w-1/2"></div>
                    <div><p class="text-3xl mb-5">About us</p></div>
                    <div class="my-2 w-full p-2 flex flex-row space-x-4 bg-zinc-800/80 backdrop-blur-sm items-center">
                        <div><img src="https://res.cloudinary.com/dezmjeesi/image/upload/v1693213697/icons/uaemobile_aoftg4.svg" alt=""></div>
                        <div><p>UAE Base</p></div>
                    </div>
                    <div class="my-2 w-full p-2 flex flex-row space-x-4 bg-zinc-800/80 backdrop-blur-sm items-center">
                        <div><img src="https://res.cloudinary.com/dezmjeesi/image/upload/v1693213697/icons/techincalmob_xlh3ok.svg" alt=""></div>
                        <div><p>Technical Expertise</p></div>
                    </div>
                    <div class="my-2 w-full p-2 flex flex-row space-x-4 bg-zinc-800/80 backdrop-blur-sm items-center">
                        <div><img src="https://res.cloudinary.com/dezmjeesi/image/upload/v1693213697/icons/endtoendmobile_f1kcym.svg" alt=""></div>
                        <div><p>End-to-End Support</p></div>
                    </div>
                    <div class="mt-20"><p>NewTribe Capital is a venture firm specializing in early-stage Web3 investments that aims to support the next generation of permissionless, trustless, and decentralized technology.</p></div>
                    <div class="mt-4"><p>NewTribe Capital’s support extends beyond the capital, offering portfolio companies access to an extensive network of industry connections and resources, fostering their growth and development.</p></div>
                </a>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import AOS from 'aos';
onMounted(() => AOS.init());
const cards : {
    id: number;
    link: string;
  }[]=[
    {
      id: 0,
      link:`https://res.cloudinary.com/dezmjeesi/image/upload/v1693572070/projects/Secondlive_mutigi.svg`,
    },
    {
      id: 1,
      link:`https://res.cloudinary.com/dezmjeesi/image/upload/v1693572070/projects/archway_axkfsm.svg`,
    },
    {
      id: 2,
      link:`https://res.cloudinary.com/dezmjeesi/image/upload/v1693572083/projects/intution_jja7lg.svg`,
    },
    {
      id: 3,
      link:`https://res.cloudinary.com/dezmjeesi/image/upload/v1693572082/projects/him_rpdxot.svg`,
    },
    // {
    //   id: 4,
    //   link:`https://res.cloudinary.com/dezmjeesi/image/upload/v1693568370/projects/sinverse_i9cbwu.png`,
    // },
    {
      id: 4,
      link:`https://res.cloudinary.com/dezmjeesi/image/upload/v1693572082/projects/sinverse_mrw6kf.svg`,
    },
    {
      id: 5,
      link:`https://res.cloudinary.com/dezmjeesi/image/upload/v1693572073/projects/suipad_l2gepf.svg`,
    },
    {
      id: 6,
      link:`https://res.cloudinary.com/dezmjeesi/image/upload/v1693572073/projects/enginesoffury_jft24g.svg`,
    },
    {
      id: 7,
      link:`https://res.cloudinary.com/dezmjeesi/image/upload/v1693572074/projects/gr_fbsfu9.svg`,
    }
]
const cards2 : {
    id: number;
    link: string;
  }[]=[
    {
      id: 8,
      link:`https://res.cloudinary.com/dezmjeesi/image/upload/v1693572069/projects/ime_czoerr.svg`,
    },
    {
      id: 9,
      link:`https://res.cloudinary.com/dezmjeesi/image/upload/v1693572070/projects/smooth_qixrzr.svg`,
    },
    {
      id: 10,
      link:`https://res.cloudinary.com/dezmjeesi/image/upload/v1693572069/projects/readygames_rgsbpc.svg`,
    },
    {
      id: 11,
      link:`https://res.cloudinary.com/dezmjeesi/image/upload/v1693572084/projects/casper_ple4up.svg`,
    },
    {
      id: 12,
      link:`https://res.cloudinary.com/dezmjeesi/image/upload/v1693572081/projects/ovix_gughcy.svg`,
    },
    {
      id: 13,
      link:`https://res.cloudinary.com/dezmjeesi/image/upload/v1693572070/projects/singularitydao_fo3jd6.svg`,
    },
    {
      id: 14,
      link:`https://res.cloudinary.com/dezmjeesi/image/upload/v1693572080/projects/bondly_rogygt.svg`,
    },
    {
      id: 15,
      link:`https://res.cloudinary.com/dezmjeesi/image/upload/v1693572072/projects/poolz_yxiail.svg`,
    },
    {
      id: 16,
      link:`https://res.cloudinary.com/dezmjeesi/image/upload/v1693572080/projects/blockus_oxkb2r.svg`,
    },
]
</script>
<style>
.swiper {
    margin-left: auto;
    margin-right: auto;
    position: relative;
    overflow: hidden;
    height: 120px;
    width: 90%;
    overflow: clip;
    list-style: none;
    padding: 0;
    z-index: 1;
    display: flex;
    flex-direction: row;
}
.swiper-wrapper {
    position: relative;
    width: auto;
    height: 100%;
    z-index: 1;
    display: flex;
    gap: 30px;
    transition-property: transform;
    transition-timing-function: var(--swiper-wrapper-transition-timing-function, initial);
    box-sizing: content-box;
}
</style>