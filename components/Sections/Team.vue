<template>
    <div class="h-auto w-full px-6 md:px-20 text-sm md:text-lg text-zinc-400">
      <a name="team" class="w-full h-full">
        <div class="w-full md:w-4/5 flex flex-col">
            <div><p class="text-3xl font-extralight md:text-6xl">The Team</p></div>
            <div><p class="w-full text-justify md:w-2/3 mt-5 md:mt-10">The team's strength lies in the collective international expertise, as well as the diverse and complementary skills of our fund partners, who have up to a decade of investment experience.</p></div>
            <div class="grid w-full grid-flow-row grid-cols-2 md:grid-cols-3 gap-6 md:gap-12 mt-5 md:mt-10">
              <span v-for="(i, index) in team" :key="index">
                <div class="w-full flex flex-col text-sm md:text-base">
                    <div class="h-52 md:h-96 w-full"><img class="w-full h-full object-cover" :src="i.src" alt=""></div>
                    <div class="flex flex-col space-y-3 md:space-y-0 md:flex-row justify-between md:items-center mt-2 md:mt-5">
                      <div class="flex flex-col">                        
                        <div class="font-medium">{{i.name}}</div>
                        <div class="text-xs md:text-sm">{{i.designation}}</div>
                      </div>
                      <div class="flex flex-row md:justify-center md:items-center">
                        <!-- twitter -->
                        <div v-show="i.twitter!=``" class="mr-2">
                          <a :href="i.twitter" target="_blank" class="h-8 w-8 flex justify-center items-center bg-zinc-700 hover:bg-sky-500 cursor-pointer rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" class="w-5 md:w-6 h-5 md:h-6" viewBox="0 0 24 24">
                              <path d="M22,3.999c-0.78,0.463-2.345,1.094-3.265,1.276c-0.027,0.007-0.049,0.016-0.075,0.023c-0.813-0.802-1.927-1.299-3.16-1.299 c-2.485,0-4.5,2.015-4.5,4.5c0,0.131-0.011,0.372,0,0.5c-3.353,0-5.905-1.756-7.735-4c-0.199,0.5-0.286,1.29-0.286,2.032 c0,1.401,1.095,2.777,2.8,3.63c-0.314,0.081-0.66,0.139-1.02,0.139c-0.581,0-1.196-0.153-1.759-0.617c0,0.017,0,0.033,0,0.051 c0,1.958,2.078,3.291,3.926,3.662c-0.375,0.221-1.131,0.243-1.5,0.243c-0.26,0-1.18-0.119-1.426-0.165 c0.514,1.605,2.368,2.507,4.135,2.539c-1.382,1.084-2.341,1.486-5.171,1.486H2C3.788,19.145,6.065,20,8.347,20 C15.777,20,20,14.337,20,8.999c0-0.086-0.002-0.266-0.005-0.447C19.995,8.534,20,8.517,20,8.499c0-0.027-0.008-0.053-0.008-0.08 c-0.003-0.136-0.006-0.263-0.009-0.329c0.79-0.57,1.475-1.281,2.017-2.091c-0.725,0.322-1.503,0.538-2.32,0.636 C20.514,6.135,21.699,4.943,22,3.999z"></path>
                            </svg>
                          </a>
                        </div>
                        <!-- linkdin -->
                        <div v-show="i.linkdin!=``">
                          <a :href="i.linkdin" target="_blank" class="h-8 w-8 flex justify-center items-center bg-zinc-700 hover:bg-sky-500 cursor-pointer rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" class="w-5 md:w-6 h-5 md:h-6" viewBox="0 0 24 24">
                              <path d="M19,3H5C3.895,3,3,3.895,3,5v14c0,1.105,0.895,2,2,2h14c1.105,0,2-0.895,2-2V5C21,3.895,20.105,3,19,3z M9,17H6.477v-7H9 V17z M7.694,8.717c-0.771,0-1.286-0.514-1.286-1.2s0.514-1.2,1.371-1.2c0.771,0,1.286,0.514,1.286,1.2S8.551,8.717,7.694,8.717z M18,17h-2.442v-3.826c0-1.058-0.651-1.302-0.895-1.302s-1.058,0.163-1.058,1.302c0,0.163,0,3.826,0,3.826h-2.523v-7h2.523v0.977 C13.93,10.407,14.581,10,15.802,10C17.023,10,18,10.977,18,13.174V17z"></path>
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                </div>
              </span>
            </div>            
        </div>
      </a>
    </div>
</template>
<script lang="ts" setup>
const team = [
    {
      id: 1,
      name: `Dhaval Parikh`,
      designation: `Partner & Investment Lead`,
      twitter: `https://twitter.com/Dhaval_NTC`,
      linkdin: `https://www.linkedin.com/in/dhaval-parikh-418486224/`,
      // src:`https://res.cloudinary.com/dezmjeesi/image/upload/v1693553569/team/Dhaval_fslpb5.png`
      src:`https://res.cloudinary.com/dezmjeesi/image/upload/v1693912857/team/Dhaval_sjxkfz.png`
    },    
    {
      id: 2,
      name: `Juliet Su`,
      designation: `Partner & Ecosystem Lead`,
      twitter: `https://twitter.com/JulietSu`,
      linkdin: `https://www.linkedin.com/in/juliet-su-%E8%8B%8F%E4%B8%BD-438b3725/`,
      // src:`https://res.cloudinary.com/dezmjeesi/image/upload/v1693553569/team/Juliet_uwpfkt.png`
      src:`https://res.cloudinary.com/dezmjeesi/image/upload/v1693912857/team/Juliet_me4hzz.png`
    },    
    {
      id: 3,
      name: `Prashant C`,
      designation: `Partner & Tech Lead`,
      twitter: ``,
      linkdin: `https://www.linkedin.com/in/prashantchoudhary7/`,
      // src:`https://res.cloudinary.com/dezmjeesi/image/upload/v1693553569/team/Prashant_rqlymb.png`
      src:`https://res.cloudinary.com/dezmjeesi/image/upload/v1693912858/team/Prashant_qt2qbj.png`
    },    
    {
      id: 4,
      name: `Victor Olmo`,
      designation: `Partner`,
      twitter: `https://twitter.com/victorolmo_`,
      linkdin: ``,
      // src:`https://res.cloudinary.com/dezmjeesi/image/upload/v1693553571/team/Victor_v4udr7.png`
      src:`https://res.cloudinary.com/dezmjeesi/image/upload/v1693912858/team/Victor_tipl8t.png`
    },    
    {
      id: 5,
      name: `Mikita Gandhi`,
      designation: `Investment Associate`,
      twitter: `https://twitter.com/LetsTalkCrypto_`,
      linkdin: `https://www.linkedin.com/in/mikita-gagalani-maniar-28982699/`,
      // src:`https://res.cloudinary.com/dezmjeesi/image/upload/v1693553570/team/Mikita_rs3m48.png`
      src:`https://res.cloudinary.com/dezmjeesi/image/upload/v1693912858/team/Mikita_bgqahr.png`
    },    
    {
      id: 6,
      name: `Monika Modi`,
      designation: `Investment Associate`,
      twitter: ``,
      linkdin: `https://www.linkedin.com/in/monika-modi-47704445/`,
      // src:`https://res.cloudinary.com/dezmjeesi/image/upload/v1693553571/team/Monika_zlenaf.png`
      src:`https://res.cloudinary.com/dezmjeesi/image/upload/v1693912857/team/Monika_jk7lwc.png`
    },    
    {
      id: 7,
      name: `Irina Heaver`,
      designation: `Legal & Regulatory Advisor`,
      twitter: `https://twitter.com/IrinaHeaver`,
      linkdin: ``,
      // src:`https://res.cloudinary.com/dezmjeesi/image/upload/v1693553570/team/Irina_kz7ptg.png`
      src:`https://res.cloudinary.com/dezmjeesi/image/upload/v1693912858/team/Irina_w1opqf.png`
    },    
    {
      id: 8,
      name: `Viivek Mehata`,
      designation: `Marketing Manager`,
      twitter: `https://twitter.com/mehtaandmore`,
      linkdin: `https://www.linkedin.com/in/viivek-mehata16/`,
      // src:`https://res.cloudinary.com/dezmjeesi/image/upload/v1693553571/team/Vivek_darplk.png`
      src:`https://res.cloudinary.com/dezmjeesi/image/upload/v1693912857/team/Vivek_gfunu0.png`
    },    
    {
      id: 9,
      name: `Alvaro Molina`,
      designation: `Ecosystem Manager`,
      twitter: `https://twitter.com/Alvaro_Molre?s=09`,
      linkdin: `https://www.linkedin.com/in/molina-alvaro-71352817/`,
      // src:`https://res.cloudinary.com/dezmjeesi/image/upload/v1693553570/team/Alvaro_jqnr37.png`
      src:`https://res.cloudinary.com/dezmjeesi/image/upload/v1693912857/team/Alvaro_fnubj8.png`
    },    
  ]
</script>
