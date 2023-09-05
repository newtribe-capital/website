<template>
<div id='portfolio' class="h-auto w-full px-6 md:px-20 text-sm md:text-lg text-zinc-400">
    <a name="portfolio" class="w-full h-full">
        <div class="w-full md:w-4/5 flex flex-col">
            <div><p class="text-3xl font-extralight md:text-6xl">Our Portfolio</p></div>
            <div><p class="w-full text-justify mt-5 md:mt-10">At NewTribe Capital, our portfolio is a testimony to the future we envision. Spanning a diverse range of domains from the virtual expanses of Metaverse & NFTs, the explosive growth sectors of Gaming and DeFi, the foundational blocks of Infrastructure, to the advanced realms of AI and the promising avenues of Launchpads, our investments are strategic, forward-thinking, and encompass the full spectrum of the digital revolution.</p></div>
            <div class="flex w-full bg- flex-col mt-5 md:mt-10">
                <Swiper            
                :modules="[SwiperAutoplay, SwiperEffectCards]"
                :slides-per-view="1"
                :loop="true"
                :autoplay="{
                  delay: 1000,
                  // disableOnInteraction: true
                }" 
                   class="w-full h- flex">
                  <SwiperSlide v-for="(item, index) in categories" :key="index" class="h-52 w-full flex flex-col bg- text-zinc-400 pb-1 shadow-b-md">
                    <!-- <div><p>{{ item.name }}</p></div> -->
                    <div class="flex w-full h-40 justify- items-center">
                      <div v-for="(it, i) in item.arr" :key="i" class="flex w- flex-col h-full  md:px-0">
                        <div class="bg- w-full h-full flex flex-row space-x-2">
                            <div class="h-40 bg-black mr-4"><img :src="it.src" alt="" class="h-full w-full"></div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>            
                </Swiper>
            </div>
        </div>
    </a>
</div>
</template>
<style>
.swiper {
    margin-left: auto;
    margin-right: auto;
    position: relative;
    overflow: hidden;
    height: 200px;
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
}</style>
<script lang="ts" setup>
 import { Pagination } from 'swiper/modules';
const categories:any = [
    {
        id:1,
        name:`Metaverse & NFT`,
        path:`#metaverse`,
        src:`https://res.cloudinary.com/dezmjeesi/image/upload/v1693647842/client%20categories/metaverse_mtsqse.svg`,
        arr:[
        {src:`https://res.cloudinary.com/dezmjeesi/image/upload/v1693650659/client%20categories/matterless_pwaiwg.svg`},
        {src:`https://res.cloudinary.com/dezmjeesi/image/upload/v1693650659/client%20categories/bondly_dvwkky.svg`},
        {src:`https://res.cloudinary.com/dezmjeesi/image/upload/v1693650659/client%20categories/SecondLive_u6f7jq.svg`}
        ]
    },
    {
        id:2,
        name:`Launchpads`,
        path:`#launchpads`,
        src:`https://res.cloudinary.com/dezmjeesi/image/upload/v1693647842/client%20categories/launchpads_khjfdi.svg`,
        arr:[
            {
                src:`https://res.cloudinary.com/dezmjeesi/image/upload/v1693650961/client%20categories/Suipad_qmgnww.svg`,
            },
            {
                src:`https://res.cloudinary.com/dezmjeesi/image/upload/v1693650961/client%20categories/Singularity_DAO_xz4wyq.svg`,
            },
            {
                src:`https://res.cloudinary.com/dezmjeesi/image/upload/v1693650960/client%20categories/poolz_mgychc.svg`,
            },
            {
                src:`https://res.cloudinary.com/dezmjeesi/image/upload/v1693650959/client%20categories/launchpadxunknown_ym4c2c.svg`,
            },
            {
                src:`https://res.cloudinary.com/dezmjeesi/image/upload/v1693650959/client%20categories/paid_dxhabi.svg`,
            },
        ]
    },
    {
        id:3,
        name:`Gaming`,
        path:`#gaming`,
        src:`https://res.cloudinary.com/dezmjeesi/image/upload/v1693647842/client%20categories/gaming_jxgwoz.svg`,
        arr:[
            {
            src:`https://res.cloudinary.com/dezmjeesi/image/upload/v1693650854/client%20categories/Cross_the_Ages_e9geln.svg`,
            },
            {
                src:`https://res.cloudinary.com/dezmjeesi/image/upload/v1693650855/client%20categories/Sidus_heroes_nweluo.svg`,
            },
            {
                src:`https://res.cloudinary.com/dezmjeesi/image/upload/v1693650856/client%20categories/Sidus_heroes-1_lbhxik.svg`,
            },
            {
                src:`https://res.cloudinary.com/dezmjeesi/image/upload/v1693650856/client%20categories/Ready_Games_Network_iisw7f.svg`,
            },
            {
                src:`https://res.cloudinary.com/dezmjeesi/image/upload/v1693650854/client%20categories/Engines_of_Fury_nrdewf.svg`,
            },
            {
                src:`https://res.cloudinary.com/dezmjeesi/image/upload/v1693650853/client%20categories/Blockus_gnad59.svg`,
            },
        ]
    },
    {
        id:4,
        name:`Defi`,
        path:`#defi`,
        src:`https://res.cloudinary.com/dezmjeesi/image/upload/v1693647842/client%20categories/defi_hu83rh.svg`,
        arr:[
            {
                src:`https://res.cloudinary.com/dezmjeesi/image/upload/v1693651074/client%20categories/portal_iwomt3.svg`,
            },
            {
                src:`https://res.cloudinary.com/dezmjeesi/image/upload/v1693651074/client%20categories/Ovix_v1atui.svg`,
            },
            {
                src:`https://res.cloudinary.com/dezmjeesi/image/upload/v1693651073/client%20categories/defi_qhomp1.svg`,
            },
            {
                src:`https://res.cloudinary.com/dezmjeesi/image/upload/v1693651073/client%20categories/fluid_lcgbag.svg`,
            },
            {
                src:`https://res.cloudinary.com/dezmjeesi/image/upload/v1693651072/client%20categories/equifi_qkoxys.svg`,
            },
        ]
    },
    {
        id:5,
        name:`Infrastructure`,
        path:`#infrastructure`,
        src:`https://res.cloudinary.com/dezmjeesi/image/upload/v1693647842/client%20categories/infrastructure_vpb5l4.svg`,
        arr:[
            {
                src:`https://res.cloudinary.com/dezmjeesi/image/upload/v1693651328/client%20categories/Casper_ksbcy6.svg`,
            },
            {
                src:`https://res.cloudinary.com/dezmjeesi/image/upload/v1693651328/client%20categories/hapi_fwx9hv.svg`,
            },
            {
                src:`https://res.cloudinary.com/dezmjeesi/image/upload/v1693651329/client%20categories/Group_481555_l8gef8.svg`,
            },
            {
                src:`https://res.cloudinary.com/dezmjeesi/image/upload/v1693651331/client%20categories/intution_kxfz0a.svg`,
            },
            {
                src:`https://res.cloudinary.com/dezmjeesi/image/upload/v1693651331/client%20categories/Group_481553_bmeinj.svg`,
            },
            {
                src:`https://res.cloudinary.com/dezmjeesi/image/upload/v1693651332/client%20categories/Nulink_iucpyj.svg`,
            },
            {
                src:`https://res.cloudinary.com/dezmjeesi/image/upload/v1693651333/client%20categories/smooth_on2owy.svg`,
            },
            {
                src:`https://res.cloudinary.com/dezmjeesi/image/upload/v1693651334/client%20categories/w_tqayqg.svg`,
            },
            {
                src:`https://res.cloudinary.com/dezmjeesi/image/upload/v1693651335/client%20categories/ArchwayLogo_3_xvb8of.svg`,
            },
        ]
    },
    {
        id:6,
        name:`AI`,
        path:`#ai`,
        src:`https://res.cloudinary.com/dezmjeesi/image/upload/v1693647842/client%20categories/aiicon_anncxw.svg`,
        arr:[
            {
                src:`https://res.cloudinary.com/dezmjeesi/image/upload/v1693651240/client%20categories/i_me_dzko3w.svg`,
            },
            {
                src:`https://res.cloudinary.com/dezmjeesi/image/upload/v1693651241/client%20categories/Sophia_Verse_bpxubk.svg`,
            },
            {
                src:`https://res.cloudinary.com/dezmjeesi/image/upload/v1693651241/client%20categories/Group_481557_r070sr.svg`,
            },
            {
                src:`https://res.cloudinary.com/dezmjeesi/image/upload/v1693651242/client%20categories/Group_481556_tu9xbb.svg`,
            },
        ]
    },
]

</script>