<template>
    <div class="h-auto w-full flex flex-col text-zinc-400 text-sm md:text-lg">
        <div><p class="text-3xl md:text-6xl px-6 md:px-20">Ecosystem Support</p></div>
        <div><p class="text-sm md:text-lg mt-5 md:mt-10 w-full md:w-1/2 text-justify px-6 md:px-20">We have grown as one of the leading Web3 proprietary investment firms while maintaining a global presence. Our ecosystem comprises multiple partner companies that are leaders in their respective sectors. We leverage this network to give premium value-add to our portfolio companies and help in their overall growth and development.</p></div>
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
        <div class="w-full"></div>
        <!-- next sec -->
        <div class="pt-36 w-4/5 h-auto relative">
            <div class="absolute left-0 bottom-10 -z-20 h-auto w-full opacity-50"><img src="https://res.cloudinary.com/dezmjeesi/image/upload/v1693209138/svg%20items/crosslines_sutpwn.svg" alt="" class="w-full"></div>
            <div class="absolute -right-16 top-0 -z-10 h-full w-56"><img src="https://res.cloudinary.com/dezmjeesi/image/upload/v1693209916/svg%20items/Rectangle_1480_xhthfk.svg" alt="" class="w-full"></div>
            <div class="w-full flex flex-col md:flex-row space-x-0 md:space-x-5 px-6 md:px-20">
                <div class="w-full bg-gradient-to-b from-zinc-800/40 to-black/60 px-10 py-10 flex flex-col space-y-4 backdrop-blur-sm">
                    <div><img src="https://res.cloudinary.com/dezmjeesi/image/upload/v1693208995/ecosystem%20support%20icons/chart-breakout-circle_k9m1ao.svg" alt=""></div>
                    <div><p class="text-3xl md:text-6xl text-sky-500">170+</p></div>
                    <div><p class="">Projects in <br>Portfolio</p></div>
                </div>
                <div class="w-full bg-gradient-to-b from-zinc-800/40 to-black/60 px-10 py-10 flex flex-col space-y-4 backdrop-blur-sm">
                    <div><img src="https://res.cloudinary.com/dezmjeesi/image/upload/v1693208995/ecosystem%20support%20icons/pie-chart-04_shqjxm.svg" alt=""></div>
                    <div><p class="text-3xl md:text-6xl text-sky-500">$100 Mn+</p></div>
                    <div><p class="">Assets Under  <br>Management</p></div>
                </div>
                <div class="w-full bg-gradient-to-b from-zinc-800/40 to-black/60 px-10 py-10 flex flex-col space-y-4 backdrop-blur-sm">
                    <div><img src="https://res.cloudinary.com/dezmjeesi/image/upload/v1693208995/ecosystem%20support%20icons/line-chart-up-05_zsodw0.svg" alt=""></div>
                    <div><p class="text-3xl md:text-6xl text-sky-500">$200k</p></div>
                    <div><p class="">Average <br>Ticket Size</p></div>
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
<style>
</style>