<template>
    <div id="team" class="h-auto w-full px-6 md:px-20 text-sm md:text-lg text-zinc-400">
      <a name="team" class="w-full h-full">
        <div class="w-full md:w-4/5 flex flex-col">
            <div><p class="text-3xl font-extralight md:text-6xl">The Team</p></div>
            <div><p class="w-full text-justify md:w-2/3 mt-5 md:mt-10">The team's strength lies in the collective international expertise, as well as the diverse and complementary skills of our fund partners, who have up to a decade of investment experience.</p></div>
            <div class="grid w-full grid-flow-row grid-cols-2 md:grid-cols-3 gap-6 md:gap-12 mt-5 md:mt-10">
              <span v-for="(i, index) in team" :key="index">
                <div class="w-full flex flex-col text-sm md:text-base">
                    <div class="h-52 md:h-96 w-full"><img class="w-full h-full object-cover" :src="i.src" alt=""></div>
                    <div class="font-medium mt-2 md:mt-5">{{i.name}}</div>
                    <div class="">{{i.designation}}</div>
                </div>
              </span>
            </div>            
        </div>
      </a>
    </div>
</template>
<script lang="ts" setup>
const team : {
    id: number;
    name: string; 
    designation: string;
    src:string 
  }[]=[
    {
      id: 1,
      name: `Dhaval Parikh`,
      designation: `Partner & Investment Lead`,
      src:`https://res.cloudinary.com/dezmjeesi/image/upload/v1693553569/team/Dhaval_fslpb5.png`
    },    
    {
      id: 2,
      name: `Juliet Su`,
      designation: `Partner & Ecosystem Lead`,
      src:`https://res.cloudinary.com/dezmjeesi/image/upload/v1693553569/team/Juliet_uwpfkt.png`
    },    
    {
      id: 3,
      name: `Prashant C`,
      designation: `Partner & Tech Lead`,
      src:`https://res.cloudinary.com/dezmjeesi/image/upload/v1693553569/team/Prashant_rqlymb.png`
    },    
    {
      id: 4,
      name: `Victor Olmo`,
      designation: `Partner`,
      src:`https://res.cloudinary.com/dezmjeesi/image/upload/v1693553571/team/Victor_v4udr7.png`
    },    
    {
      id: 5,
      name: `Mikita Gandhi`,
      designation: `Investment Associate`,
      src:`https://res.cloudinary.com/dezmjeesi/image/upload/v1693553570/team/Mikita_rs3m48.png`
    },    
    {
      id: 6,
      name: `Monika Modi`,
      designation: `Investment Associate`,
      src:`https://res.cloudinary.com/dezmjeesi/image/upload/v1693553571/team/Monika_zlenaf.png`
    },    
    {
      id: 7,
      name: `Irina Heaver`,
      designation: `Legal Counsel`,
      src:`https://res.cloudinary.com/dezmjeesi/image/upload/v1693553570/team/Irina_kz7ptg.png`
    },    
    {
      id: 8,
      name: `Viivek Mehata`,
      designation: `Marketing Manager`,
      src:`https://res.cloudinary.com/dezmjeesi/image/upload/v1693553571/team/Vivek_darplk.png`
    },    
    {
      id: 9,
      name: `Alvaro Molina`,
      designation: `Ecosystem Manager`,
      src:`https://res.cloudinary.com/dezmjeesi/image/upload/v1693553570/team/Alvaro_jqnr37.png`
    },    
  ]
</script>