<template>
    <div class=" h-auto w-full text-sm md:text-lg text-zinc-400">        
        <div class="w-full bg-zinc-700/40 backdrop-blur-sm flex flex-col px-6 md:px-20 py-12 md:py-28">
            <div><p class="text-3xl font-extralight md:text-6xl">Our Presence, Events & Collaborations  </p></div>
            <div><p class="w-full text-justify md:w-1/2 mt-5 md:mt-10">We are an award-winning firm with a global presence. We have participated in events and conferences all over the world including France, Thailand, UAE, USA, and many more countries scouting for talented promising entrepreneurs.</p></div>
            <div><p class="w-full text-justify md:w-1/2 mt-5 md:mt-10">We participate in panel discussions and keynote speeches with other industry leaders. We also host webinars, hackathons, and other such events to bring together like-minded people that can connect and build cutting-edge technology together.</p></div>
        </div>
        <div class="flex h-auto flex-col -mt-8 w-full z-50 space-y-5">
            <div class="w-full marquee h-full -mt-9">                
                <div class="track h-full">
                    <div class="content h-full">
                        <div class="flex flex-row space-x-5 h-full w-max overflow-hidden">
                            <div class="w-full h-full"><img class="h-full w-full object-cover" src="https://res.cloudinary.com/dezmjeesi/image/upload/v1693913745/team/t1_g3na3q.png" alt=""></div>
                            <div class="h-full w-full"><img class="h-full w-full object-cover" src="https://res.cloudinary.com/dezmjeesi/image/upload/v1693913828/team/t11_wlgfuc.png" alt=""></div>
                            <!-- <div class="flex w-full space-y-5 h-full flex-col">
                                <div class="h-1/2 w-full"><img class="h-full w-full object-cover" src="https://res.cloudinary.com/dezmjeesi/image/upload/v1693913827/team/t9_fah1gn.png" alt=""></div>
                                <div class="h-1/2 w-full"><img class="h-full w-full object-cover" src="https://res.cloudinary.com/dezmjeesi/image/upload/v1693913827/team/t10_r6xkc4.png" alt=""></div>
                            </div> -->
                            <div class="flex w-full h-full space-y-5 flex-col">
                                <div class="h-1/2 w-full"><img class="h-full w-full object-cover" src="https://res.cloudinary.com/dezmjeesi/image/upload/v1693913744/team/t2_ww9lvu.png" alt=""></div>
                                <div class="h-1/2 w-full"><img class="h-full w-full object-cover" src="https://res.cloudinary.com/dezmjeesi/image/upload/v1693913744/team/t6_uarupd.png" alt=""></div>
                            </div>
                            <div class="flex w-full h-full flex-col space-y-5">
                                <div class="h-1/2 w-full flex space-x-5 flex-row">
                                    <div class="w-1/2 h-full"><img class="h-full w-full object-cover" src="https://res.cloudinary.com/dezmjeesi/image/upload/v1693913744/team/t3_ovkezy.png" alt=""></div>
                                    <div class="w-1/2 h-full"><img class="h-full w-full object-cover" src="https://res.cloudinary.com/dezmjeesi/image/upload/v1693913744/team/t5_tqcyer.png" alt=""></div>
                                </div>
                                <div class="h-1/2 w-full"><img class="h-full w-full object-cover" src="https://res.cloudinary.com/dezmjeesi/image/upload/v1693913745/team/t7_y2lgah.png" alt=""></div>
                            </div>
                            <div class="h-full w-full"><img class="h-full w-full object-cover" src="https://res.cloudinary.com/dezmjeesi/image/upload/v1693913744/team/t4_go3yiz.png" alt=""></div>
                            <div class="h-full w-full"><img class="h-full w-full object-cover" src="https://res.cloudinary.com/dezmjeesi/image/upload/v1693913745/team/t8_msbzmn.png" alt=""></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import AOS from 'aos';
onMounted(() => AOS.init());

</script>
<style scoped>
.marquee {
  position: relative;
  width: 100vw;
  max-width: 100%;
  height: 460px;
  overflow-x: hidden;
}

.track {
  position: absolute;
  white-space: nowrap;
  height: 100%;
  will-change: transform;
  /* width: 300%; */
  overflow: hidden;
  animation: marquee 20s linear infinite;
}

@keyframes marquee {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}
</style>