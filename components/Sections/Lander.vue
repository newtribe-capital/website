<template>
    <div class="relative h-auto  w-full text-zinc-400 flex flex-col text-sm md:text-lg">
  
      <!-- Supposed to be fixed Lander -->
      <div class="h-screen relative">
        <!-- <div class="absolute w-20 z-10 h-full hidden md:block right-16"><hr class="w-0.5 h-full bg-zinc-700"></div> -->
          <!-- <div  class="absolute bg-gradient-to-br from-zinc-800 blur-md to-black rounded-full shadow-[30px_35px_30px_-2px_rgba(0,0,0,0.3)] shadow-black top-8 md:top-20  w-56 md:w-72 h-56 md:h-72 -z-10 "></div> -->
          <particles id="particles-js" class="absolute bg-gradient-to-b from-zinc-800 to-zinc-950" />
          <ClientOnly>
          <div class="flex text-center text-white justify-center items-center flex-col w-full h-full px-6 md:px-20 ">     
                  <div data-aos="fade-down" data-aos-duration="300"><p class="text-xs md:text-xl">INVESTING IN</p></div>
                <div data-aos="fade-down" data-aos-duration="300" data-aos-delay="300" ><p class="text-3xl mt-0 md:mt-1 md:text-7xl font-extralight">PEOPLE,</p></div>
                <div data-aos="fade-down" data-aos-duration="300" data-aos-delay="600" ><p class="text-3xl md:text-7xl font-medium ">INNOVATION &</p></div>
                <div data-aos="fade-down" data-aos-duration="300" data-aos-delay="900"><p class="text-3xl md:text-7xl font-extrabold ">TECHNOLOGY</p></div>
                <div data-aos="fade-down" data-aos-duration="300" data-aos-delay="1300" class="mt-[30px] md:mt-9 w-1/3 md:w-1/2 flex justify-center "><img src="https://res.cloudinary.com/dezmjeesi/image/upload/v1693047234/svg%20items/newtribe_rqqufq.svg" alt=""></div>
                <!-- <div data-aos="zoom-in" data-aos-duration="500" data-aos-anchor-placement="top" class="flex text-center text-white justify-center items-center flex-col  px-6 md:px-20 ">
               </div> -->
            </div>
          </ClientOnly>
            
        </div>
        <div class="flex text-center text-white justify-center items-center flex-col w-full h-full px-6 md:p-24 ">
          <div data-aos="zoom-out" data-aos-duration="700" class="hidden md:block"><p class="text-2xl md:text-5xl" >NewTribe Capital is a <span class="text-sky-500">blockchain-oriented Web3 <br/> Venture Capital firm</span> that invests in early-stage<br/> blockchain and crypto projects. We invest in<br/> <span class="text-emerald-500"> People, Innovation & Technology.</span> </p></div>
                    <div data-aos="zoom-out" data-aos-duration="700" class="block md:hidden" ><p class="text-xl md:text-5xl" >NewTribe Capital is a <span class="text-sky-500">blockchain-oriented Web3 Venture Capital firm</span> that invests in early-stage blockchain and crypto projects. We invest in <span class="text-emerald-500"> People, Innovation & Technology.</span> </p></div>
                    <!-- <div data-aos="zoom-in" data-aos-duration="600" class="mt-[30px] md:mt-9 w-1/3 md:w-1/2 flex justify-center" ><img src="https://res.cloudinary.com/dezmjeesi/image/upload/v1693047234/svg%20items/newtribe_rqqufq.svg" alt=""></div> -->
                
        </div>
        <!-- Trusted Projects -->
        <div class="relative flex flex-col w-full h-auto mt-10 bg-zinc-900/70 backdrop-blur-sm">
          <div  class="flex flex-col w-full h-auto bg-zinc-900/70 py-8 md:py-16">
            <!-- chendu blue -->
            <div data-aos="slide-right" data-aos-duration="600" data-aos-mirror="true" style="z-index: -999;" class="absolute bg-gradient-to-br hidden md:block blu from-sky-400 to-sky-950 rounded-full shadow-[20px_20px_20px_-4px_rgba(0,0,0,0.3)] shadow-sky-900/90 -top-24 left-0 md:left-16 w-56 h-56"></div>
            <div class="px-8 flex justify-center md:px-24 mb-8 text-sm md:text-xl"><p>Trusted by over a 100+ Projects </p></div>
            <!-- chendu green -->
            <div data-aos="slide-left" data-aos-duration="600" data-aos-mirror="true" style="z-index: -999;" class="absolute -bottom-24 md:right-16 hidden md:block w-44 h-44"><div class="h-full w-full bg-gradient-to-br from-emerald-400 to-black rounded-full shadow-[30px_35px_30px_-6px_rgba(0,0,0,0.3)] shadow-emerald-950/90"></div></div>
              <div class="absolute hidden md:block w-full -z-10 -top-20 overflow-hidden"><img src="https://res.cloudinary.com/dezmjeesi/image/upload/v1693047233/svg%20items/Vector_3_Stroke_rangay_bae_rangy_wb3jgz.svg" alt="" class="w-full"></div>
              <!-- <div class="absolute hidden md:block left-0 h-3/4 bottom-8 blur-md z-40 w-24 bg-zinc-900/90"></div> -->
              <!-- <div class="absolute hidden md:block right-0 h-3/4 bottom-8 blur-md z-10 w-24 bg-zinc-900/90"></div> -->
              <div class="w-full h-full hidden md:block">
                  <Swiper
                    :modules="[SwiperAutoplay, SwiperEffectCards]"
                    :loop="true"
                    :speed="2200"
                    :slides-per-view="6"
                    :autoplay="{
                      delay: 50,
                      disableOnInteraction: false
                    }" class="w-full h-full flex items-end mb-4">
                    <SwiperSlide v-for="(item, index) in cards" :key="index" class="h- flex items-end pb-1 shadow-b-md">
                      <div class="flex w-56 bg-zinc-700/80 backdrop-blur-sm h-28 justify-center items-center">
                        <div class="flex w-1/2 flex-col h-1/2 text-slate-600 md:px-0">
                          <img :src="item.link" alt="" class="h-full">
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                  <!-- <Swiper
                    :modules="[SwiperAutoplay, SwiperEffectCards]"
                    :slides-per-view="6"
                    :loop="true"
                    :autoplay="{
                      delay: 1000,
                      disableOnInteraction: false,
                      reverseDirection: true,
                    }" class="w-full h- flex">
                    <SwiperSlide v-for="(item, index) in cards2" :key="index" class="h-52 bg- pb-1 shadow-b-md">
                      <div class="flex w-64 bg-zinc-700/80 backdrop-blur-sm h-28 justify-center items-center">
                        <div class="flex w-1/2 flex-col h-1/2 text-slate-600 md:px-0">
                          <img :src="item.link" alt="" class="h-full">
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper> -->
              </div>
              <div class="w-full h-full block md:hidden">
                  <Swiper
                    :modules="[SwiperAutoplay, SwiperEffectCards]"
                    :slides-per-view="2"
                    :loop="true"
                    :autoplay="{
                      delay: 500,
                      // disableOnInteraction: true
                    }" class="w-full mb-4">
                    <SwiperSlide v-for="(item, index) in cards" :key="index" class="\shadow-b-md">
                      <div class="flex w-full h-full justify-center items-center">
                        <div class="flex w-full flex-col justify-center h-16 text-slate-600 md:px-0">
                          <img :src="item.link" alt="" class="h-1/2">
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                  <!-- <Swiper
                    :modules="[SwiperAutoplay, SwiperEffectCards]"
                    :slides-per-view="2"
                    :loop="true"
                    :autoplay="{
                      delay: 500,
                      reverseDirection: true,
                    }" class="w-full h- flex">
                    <SwiperSlide v-for="(item, index) in cards2" :key="index" class="h- bg- pb-1 shadow-b-md">
                      <div class="flex w-full h-full justify-center items-center">
                        <div class="flex w-full flex-col h-24 text-slate-600 md:px-0">
                          <img :src="item.link" alt="" class="h-1/2">
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper> -->
              </div>
          </div>
        </div>
        <!-- About us -->
        <div id='about' class="relative py-14 md:py-28 text-sm md:text-lg flex flex-col md:flex-row w-full text-zinc-400">
          <div class="absolute hidden md:block h-64 w-24 right-3 top-3"><div><p class="mt-28 text-6xl font-bold text-zinc-800 transform rotate-90 bg-">#ABOUT</p></div></div>
            <!-- desktop -->
            <a data-aos="fade-right" name="about" class="w-full hidden md:block px-6 md:px-20">
                <div class="flex flex-row w-full space-x-0 md:space-x-32">
                    <div class="w-1/2 h-auto flex flex-col text-justify text-lg">
                        <div ><p class="text-3xl font-extralight md:text-6xl mb-10">About us</p></div>
                        <div><p class="mb-6">NewTribe Capital is more than just a Web3 venture firm; we're architects of the future network state.</p></div>
                        <div><p class="mb-6">Specializing in early-stage Web3 investments, we're committed to powering the next wave of open, secure, and decentralized technology.</p></div>
                        <div><p class="mb-6">We’re smart money. Our support goes far beyond financial investment. We equip our portfolio companies with unparalleled access to our vast industry network and vital resources, acting as catalysts for their success and growth.</p></div>
                        <div><p class="mb-6">Our strategic focus centers on early-stage blockchain and Web3 initiatives poised to shape the future of the protocol-driven economy. Our investment scope is broad and dynamic, encompassing sectors like infrastructure, web3 gaming, AI, DeFi, NFTs, Middleware, and Multichain Platforms.</p></div>
                        <div><p class="mb-6">With a keen eye for opportunities in Asia, Europe, and MENA, we're particularly dedicated to boosting the Web3 ecosystem in the Middle East, all without geographical constraints.</p></div>
                    </div>
                    <div  class="w-full md:w-1/2 pt-16">
                        <div class="w-full md:w-1/2 h-full flex flex-col space-y-5">
                          <div  @mouseover="upHere = false" @mouseleave="upHere = true" class="bg-zinc-800 cursor-pointer flex justify-center items-center h-full w-ful px-8">
                            <div v-if="upHere" data-aos="zoom-in" data-aos-duration="400"  class="w-full flex flex-row items-center space-x-10">
                              <div  class="w-20">
                                  <img src="https://res.cloudinary.com/dezmjeesi/image/upload/v1693204772/icons/Uae_base_kukfvk.svg" alt="">
                              </div>
                              <div>UAE <br>Base</div>
                            </div>
                            <div v-else data-aos="zoom-in" data-aos-duration="400"  class="w-full text-sm justify-center items-center">
                              <span><p>With over three years as a leading force in the UAE's ecosystem, we offer in-depth market insights and specialized support to help you establish a strong local presence.</p></span>
                            </div>
                          </div>
                          <div @mouseover="upHere1 = false" @mouseleave="upHere1 = true" class="bg-zinc-800 h-full w-full px-9">
                            <div data-aos="zoom-in" data-aos-duration="400" v-if="upHere1" class="w-full h-full flex flex-row items-center space-x-10">
                              <div class="w-20">
                                  <img src="https://res.cloudinary.com/dezmjeesi/image/upload/v1693204772/icons/techincal_ozr1vy.svg" alt="">
                              </div>
                              <div>Technical <br>Expertise</div>
                            </div>
                            <div data-aos="zoom-in" data-aos-duration="400" v-else class="w-full h-full text-sm flex justify-center items-center">
                              <span><p>Recognising the critical role of branding, we deliver comprehensive go-to-market strategies equipped with all the necessary resources, whether you're looking to launch in the UAE or expand globally.</p></span>
                            </div>
                          </div>
                          <div @mouseover="upHere2 = false" @mouseleave="upHere2 = true" class="bg-zinc-800 h-full w-full px-9">
                            <div data-aos="zoom-in" data-aos-duration="400" v-if="upHere2" class="w-full h-full flex flex-row items-center space-x-10">
                              <div class="w-20">
                                  <img src="https://res.cloudinary.com/dezmjeesi/image/upload/v1693204772/icons/endtoend_ghe4pr.svg" alt="">
                              </div>
                              <div>End-to-End <br>Support</div>
                            </div>
                            <div data-aos="zoom-in" data-aos-duration="400" v-else class="w-full h-full text-sm flex justify-center items-center">
                              <span><p>We thrive in partnerships with hands-on builders and developers, adeptly addressing any gaps or challenges they may face with our exceptional technical support</p></span>
                            </div>
                          </div>
                        </div>
                    </div>
                </div>
            </a>
            <!-- mobile -->
            <div class="w-full block md:hidden">
                <a name="about" class="flex flex-col text-justify w-full relative overflow-hidden px-6 md:px-20">
                    <div class="flex justify-end items-end -z-10 absolute -right-32 h-[330px] w-full"><img src="https://res.cloudinary.com/dezmjeesi/image/upload/v1693047234/svg%20items/greenball_tdc2cz.svg" alt="" class="w-1/2"></div>
                    <div><p class="text-3xl font-extralight mb-5">About us</p></div>
                    <span v-for="(item, index) in items" :key="index" class="mb-3">
                      <div class="relative">
                        <div @click="toggleAcco(item.id)" role="accordion" class="sticky top-0 ">
                          <div class="w-full p-2 flex flex-row space-x-4 bg-zinc-800/80 backdrop-blur-sm items-center">
                              <div><img :src="item.src" alt=""></div>
                              <div><p>{{ item.question }}</p></div>
                          </div>
                        </div>
                        <div v-show="activeAccoID == item.id" class="mt-2 bg-zinc-900/80 backdrop-blur-sm p-2 text-xs text-justify">
                          <span>{{ item.answer }}</span>
                        </div>
                      </div>
                    </span>
                    <div class="mt-5"><p>NewTribe Capital is more than just a Web3 venture firm; we're architects of the future network state.</p></div>
                    <div class="mt-4"><p>Specializing in early-stage Web3 investments, we're committed to powering the next wave of open, secure, and decentralized technology.</p></div>
                    <div class="mt-4"><p>We’re smart money. Our support goes far beyond financial investment. We equip our portfolio companies with unparalleled access to our vast industry network and vital resources, acting as catalysts for their success and growth.</p></div>
                    <div class="mt-4"><p>Our strategic focus centers on early-stage blockchain and Web3 initiatives poised to shape the future of the protocol-driven economy. Our investment scope is broad and dynamic, encompassing sectors like infrastructure, web3 gaming, AI, DeFi, NFTs, Middleware, and Multichain Platforms.</p></div>
                    <div class="mt-4"><p>With a keen eye for opportunities in Asia, Europe, and MENA, we're particularly dedicated to boosting the Web3 ecosystem in the Middle East, all without geographical constraints.</p></div>
                </a>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import AOS from 'aos';
import { vShow } from 'nuxt/dist/app/compat/capi';
onMounted(() => {
  AOS.init({
    easing: 'ease-in-out-cosine',
    // debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    anchorPlacement: 'top-bottom',

// Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
once: false, // whether animation should happen only once - while scrolling down
mirror: true
  })

}


);
const upHere= ref(true)
const upHere1= ref(true)
const upHere2= ref(true)
const cards : {
    id: number;
    link: string;
  }[]=[
    {
      id: 1,
      link:`https://res.cloudinary.com/dezmjeesi/image/upload/v1693572070/projects/Secondlive_mutigi.svg`,
    },
    {
      id: 2,
      link:`https://res.cloudinary.com/dezmjeesi/image/upload/v1693572070/projects/archway_axkfsm.svg`,
    },
    {
      id: 3,
      link:`https://res.cloudinary.com/dezmjeesi/image/upload/v1693572083/projects/intution_jja7lg.svg`,
    },
    {
      id: 4,
      link:`https://res.cloudinary.com/dezmjeesi/image/upload/v1693572082/projects/him_rpdxot.svg`,
    },
    // {
    //   id: 4,
    //   link:`https://res.cloudinary.com/dezmjeesi/image/upload/v1693568370/projects/sinverse_i9cbwu.png`,
    // },
    {
      id: 5,
      link:`https://res.cloudinary.com/dezmjeesi/image/upload/v1693572082/projects/sinverse_mrw6kf.svg`,
    },
    {
      id: 6,
      link:`https://res.cloudinary.com/dezmjeesi/image/upload/v1693572073/projects/suipad_l2gepf.svg`,
    },
    {
      id: 7,
      link:`https://res.cloudinary.com/dezmjeesi/image/upload/v1693572073/projects/enginesoffury_jft24g.svg`,
    },
    {
      id: 8,
      link:`https://res.cloudinary.com/dezmjeesi/image/upload/v1693572074/projects/gr_fbsfu9.svg`,
    },
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
const activeAccoID= ref(0)
const isOpen= ref(false)
function toggleAcco(id:number){
    if (isOpen.value === false) {
          activeAccoID.value = id;
        //for opening accordion
        isOpen.value = true;
         
    } else if (activeAccoID.value === id) {
      //for closing
      isOpen.value = false;
      activeAccoID.value = 0;
    } else if(isOpen.value === true) {
        activeAccoID.value = id;
    }
}
const items = [
   {
    id:1,
    question: `UAE Base`,
    src: `https://res.cloudinary.com/dezmjeesi/image/upload/v1693213697/icons/uaemobile_aoftg4.svg`,
    answer: `With over three years as a leading force in the UAE's ecosystem, we offer in-depth market insights and specialized support to help you establish a strong local presence.`
   },
   {
    id:2,
    question: `Technical Expertise`,
    src: `https://res.cloudinary.com/dezmjeesi/image/upload/v1693213697/icons/techincalmob_xlh3ok.svg`,
    answer: `Recognising the critical role of branding, we deliver comprehensive go-to-market strategies equipped with all the necessary resources, whether you're looking to launch in the UAE or expand globally.`
   },
   {
    id:3,
    question: `End-to-End Support`,
    src: `https://res.cloudinary.com/dezmjeesi/image/upload/v1693213697/icons/endtoendmobile_f1kcym.svg`,
    answer: `We thrive in partnerships with hands-on builders and developers, adeptly addressing any gaps or challenges they may face with our exceptional technical support`
   },
]
const cards2 : {
    id: number;
    link: string;
  }[]=[
]
</script>
<style scoped>
#particles-js {
    width: 100%;
    height: 100%;
    z-index: -1;
    /* background-size: cover; */
    /* background-position: 50% 50%; */
    /* background-repeat: no-repeat; */
}

.swiper-wrapper {
    transition-timing-function: linear;
}
.c--anim-btn span2 {
text-decoration: none;
text-align: center;
display: flex;
align-items: center;
justify-content: center;
height: 20px;
cursor: pointer;
}

.c--anim-btn, .c-anim-btn {
transition: 0.3s;   
}

.c--anim-btn {
overflow: hidden;
}

.c-anim-btn{
margin-top: 0em; 
}

.c--anim-btn:hover .c-anim-btn{
margin-top: -6.5em;
}
.swiper {
    margin-left: auto;
    margin-right: auto;
    position: relative;
    overflow: hidden;
    /* height: 100px; */
    width: 90%;
    overflow: clip;
    list-style: none;
    padding: 0;
    z-index: 1;
    display: flex;
    flex-direction: row;
}
.swiper-slide{
  flex-shrink: 0;
  height: 100%;
}
.swiper-wrapper {
    position: relative;
    width: auto;
    height: 60%;
    z-index: 1;
    display: flex;
    gap: 10px;
    transition-property: transform;
    transition-timing-function: var(--swiper-wrapper-transition-timing-function, initial);
    box-sizing: content-box;
}
</style>