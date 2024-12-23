<template>
  <div class="h-auto w-full flex flex-col space-y-6 text-base md:text-lg">
    <div class="flex h-auto w-full flex-col space-y-4 md:space-y-0 md:flex-row items- justify-between bg-zinc-800 py-4 text-zinc-600">
      <div class="flex justify- pl-6 pr-6 md:pl-12"><p class="text-2xl md:text-4xl font-extrabold italic tracking-widest">#NEWTRIBECONNECT</p></div>
      <div class="w-full md:w-1/2 pr-6 pl-6 md:pr-16 flex flex-row space-x-2 md:space-x-4 items-center justify- md:justify-end">
        <div class="flex flex-row justify-end items-center space-x-2">
          <!-- Telegram -->
          <a href="https://t.me/NewTribeCap" target="_blank" class="hidden md:block flex w-8 md:w-12 h-8 md:h-12 p-2 justify-center items-center rounded-full bg-zinc-600 hover:bg-sky-400 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" class="w-5 md:w-8 h-5 md:h-8" viewBox="0 0 50 50">
              <path d="M46.137,6.552c-0.75-0.636-1.928-0.727-3.146-0.238l-0.002,0C41.708,6.828,6.728,21.832,5.304,22.445	c-0.259,0.09-2.521,0.934-2.288,2.814c0.208,1.695,2.026,2.397,2.248,2.478l8.893,3.045c0.59,1.964,2.765,9.21,3.246,10.758	c0.3,0.965,0.789,2.233,1.646,2.494c0.752,0.29,1.5,0.025,1.984-0.355l5.437-5.043l8.777,6.845l0.209,0.125	c0.596,0.264,1.167,0.396,1.712,0.396c0.421,0,0.825-0.079,1.211-0.237c1.315-0.54,1.841-1.793,1.896-1.935l6.556-34.077	C47.231,7.933,46.675,7.007,46.137,6.552z M22,32l-3,8l-3-10l23-17L22,32z"></path>
            </svg>
          </a>
          <!-- medium -->
          <a href="https://medium.com/@NewTribeCapital" target="_blank" class="w-8 md:w-12 h-8 md:h-12 p-2 flex justify-center items-center rounded-full bg-zinc-600 hover:bg-sky-400 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" class="w-5 md:w-8 h-5 md:h-8" viewBox="0 0 50 50">
              <path d="M15 12A13 13 0 1015 38 13 13 0 1015 12zM35.5 13c-3.59 0-6.5 5.373-6.5 12 0 1.243.102 2.441.292 3.568.253 1.503.662 2.879 1.192 4.065.265.593.56 1.138.881 1.627.642.978 1.388 1.733 2.202 2.201C34.178 36.811 34.827 37 35.5 37s1.322-.189 1.933-.539c.814-.468 1.56-1.223 2.202-2.201.321-.489.616-1.034.881-1.627.53-1.185.939-2.562 1.192-4.065C41.898 27.441 42 26.243 42 25 42 18.373 39.09 13 35.5 13zM45.5 14c-.259 0-.509.173-.743.495-.157.214-.307.494-.448.833-.071.169-.14.353-.206.551-.133.395-.257.846-.37 1.343-.226.995-.409 2.181-.536 3.497-.063.658-.112 1.349-.146 2.065C43.017 23.499 43 24.241 43 25s.017 1.501.051 2.217c.033.716.082 1.407.146 2.065.127 1.316.31 2.501.536 3.497.113.498.237.948.37 1.343.066.198.135.382.206.551.142.339.292.619.448.833C44.991 35.827 45.241 36 45.5 36c1.381 0 2.5-4.925 2.5-11S46.881 14 45.5 14z"></path>
            </svg>
          </a>
          <!-- twitter -->
          <a href="https://twitter.com/NewTribeCap?t=3bW1MTZVzXz_gzS-H5nsoA&s=09" target="_blank" class="w-8 md:w-12 h-8 md:h-12 p-2 flex justify-center items-center rounded-full bg-zinc-600 hover:bg-sky-400 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" class="w-5 md:w-8 h-5 md:h-8" viewBox="0 0 50 50">
              <path d="M 6.9199219 6 L 21.136719 26.726562 L 6.2285156 44 L 9.40625 44 L 22.544922 28.777344 L 32.986328 44 L 43 44 L 28.123047 22.3125 L 42.203125 6 L 39.027344 6 L 26.716797 20.261719 L 16.933594 6 L 6.9199219 6 z"></path>
            </svg>
          </a>
          <!-- instagram -->
          <a href="https://www.instagram.com/newtribe_capital/" target="_blank" class="w-8 md:w-12 h-8 md:h-12 p-2 flex justify-center items-center rounded-full bg-zinc-600 hover:bg-sky-400 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" class="w-5 md:w-8 h-5 md:h-8" viewBox="0 0 24 24">
              <path d="M 8 3 C 5.239 3 3 5.239 3 8 L 3 16 C 3 18.761 5.239 21 8 21 L 16 21 C 18.761 21 21 18.761 21 16 L 21 8 C 21 5.239 18.761 3 16 3 L 8 3 z M 18 5 C 18.552 5 19 5.448 19 6 C 19 6.552 18.552 7 18 7 C 17.448 7 17 6.552 17 6 C 17 5.448 17.448 5 18 5 z M 12 7 C 14.761 7 17 9.239 17 12 C 17 14.761 14.761 17 12 17 C 9.239 17 7 14.761 7 12 C 7 9.239 9.239 7 12 7 z M 12 9 A 3 3 0 0 0 9 12 A 3 3 0 0 0 12 15 A 3 3 0 0 0 15 12 A 3 3 0 0 0 12 9 z"></path>
            </svg>
          </a>
          <!-- linkdin -->
          <a href="https://www.linkedin.com/company/newtribe-capital" target="_blank" class="w-8 md:w-12 h-8 md:h-12 p-2 flex justify-center items-center rounded-full bg-zinc-600 hover:bg-sky-400 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" class="w-5 md:w-8 h-5 md:h-8" viewBox="0 0 24 24">
              <path d="M19,3H5C3.895,3,3,3.895,3,5v14c0,1.105,0.895,2,2,2h14c1.105,0,2-0.895,2-2V5C21,3.895,20.105,3,19,3z M9,17H6.477v-7H9 V17z M7.694,8.717c-0.771,0-1.286-0.514-1.286-1.2s0.514-1.2,1.371-1.2c0.771,0,1.286,0.514,1.286,1.2S8.551,8.717,7.694,8.717z M18,17h-2.442v-3.826c0-1.058-0.651-1.302-0.895-1.302s-1.058,0.163-1.058,1.302c0,0.163,0,3.826,0,3.826h-2.523v-7h2.523v0.977 C13.93,10.407,14.581,10,15.802,10C17.023,10,18,10.977,18,13.174V17z"></path>
            </svg>
          </a>
        </div>
        <div class="h-10 w-0.5 hidden md:block rounded-full bg-sky-400"></div>
        <div class="w-16 flex flex-row text-zinc-400 justify-between">
          <!-- mail -->
          <a href="mailto:marketing@newtribe.capital" target="_blank" class="w-8 md:w-12 h-8 md:h-12 p-2 flex justify-center items-center rounded-full bg-zinc-600 hover:bg-sky-400 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"  class="w-5 md:w-6 h-5 md:h-6 text-black">
              <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
              <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
            </svg>
          </a>
          <!-- Telegram -->
          <a href="https://t.me/NewTribeCap" target="_blank" class="block md:hidden w-8 ml-2 md:w-12 h-8 md:h-12 p-2 flex justify-center items-center rounded-full bg-zinc-600 hover:bg-sky-400 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" class="w-5 md:w-8 h-5 md:h-8" viewBox="0 0 50 50">
              <path d="M46.137,6.552c-0.75-0.636-1.928-0.727-3.146-0.238l-0.002,0C41.708,6.828,6.728,21.832,5.304,22.445	c-0.259,0.09-2.521,0.934-2.288,2.814c0.208,1.695,2.026,2.397,2.248,2.478l8.893,3.045c0.59,1.964,2.765,9.21,3.246,10.758	c0.3,0.965,0.789,2.233,1.646,2.494c0.752,0.29,1.5,0.025,1.984-0.355l5.437-5.043l8.777,6.845l0.209,0.125	c0.596,0.264,1.167,0.396,1.712,0.396c0.421,0,0.825-0.079,1.211-0.237c1.315-0.54,1.841-1.793,1.896-1.935l6.556-34.077	C47.231,7.933,46.675,7.007,46.137,6.552z M22,32l-3,8l-3-10l23-17L22,32z"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
    <div class="flex h-auto w-full flex-col space-y-4 md:space-y-0 md:flex-row items-center justify-between bg-zinc-800 py-8 md:py-4 text-zinc-400">
      <div class="w-full md:w-1/2 flex flex-col ">
        <a href="/" class="h-6 md:h-8 pl-6 md:pl-12 justify- md:justify-normal flex pr-6"><img class="h-full" src="https://res.cloudinary.com/dezmjeesi/image/upload/v1693047234/svg%20items/logo_big_ctilkk.svg" alt=""></a>
        <div class="h-[1px] mt-4 w-full rounded-full bg-sky-400 block md:hidden"></div>
        <div class="flex flex-col w-full md:items-start items-center space-y-4 md:space-y-0 justify-start text-base  md:text-left mt-4 pl-6 md:pl-12 pr-6">
          <div class="md:w-full "><p><span class="text-sky-500">UAE</span> <span class="text-emerald-500">|</span>  Office A, RAK DAO Business Centre, RAK BANK ROC Office, Ground Floor, Al Rifaa, Sheikh Mohammed Bin Zayed Road, Ras Al Khaimah</p></div>
          <div class="md:w-full "><p><span class="text-sky-500">Singapore</span> <span class="text-emerald-500"> |</span>  20A, Tanjong Pagar Road, Singapore (088443)</p></div>
        </div>
      </div>
      <div class="flex h-full w-full md:w-1/2 items-center flex-col space-y-4 md:space-y-0 md:flex-row justify-end space-x-4 pr-0 md:pr-16">
        <div class="flex h-full w-full px-6 md:w-full flex-col items- text-base md:items-end">
          <!-- <p>Dubai | Gate Avenue, Zone D - Level 1 Al Mustaqbal St - Dubai - United Arab Emirates</p>
          <p>Singapore  | 20A, Tanjong Pagar Road, Singapore (088443)</p> -->
          <p class="hidden md:block"> © 2023 Newtribe Capital</p>
          <p class="hidden md:block">All Rights Reserved.</p>
          <p class="block md:hidden"> © 2023 Newtribe Capital <br> All Rights Reserved.</p>
          <a href="https://www.ortigan.com/" target="_blank"><p>Designed and Developed by <span class="font-semibold"> Ortigan</span></p></a>
          <p>Privacy Policy | Terms & Conditions</p>
        </div>
        <div class="h-32 w-0.5 rounded-full bg-sky-400 hidden md:block"></div>
        <div class="w-16 text-base flex-col text-zinc-500 hidden md:block">
          <p><a href="/#about" class="hover:text-zinc-400">About</a></p>
          <p><a href="/#portfolio" class="hover:text-zinc-400">Portfolio</a></p>
          <p><a href="/#team" class="hover:text-zinc-400">Team</a></p>
          <p><a href="/insights" class="hover:text-zinc-400">Insights</a></p>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
</script>
<style></style>