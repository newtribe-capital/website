<template>
  <div class="h-auto w-full flex flex-col space-y-6 text-base md:text-lg">
    <div class="flex h-auto w-full flex-col space-y-4 md:space-y-0 md:flex-row items-center justify-between bg-zinc-800 py-4 text-zinc-600">
      <div class="flex justify-center pl-0 md:pl-12"><p class="text-2xl md:text-4xl font-extrabold italic tracking-widest">#NEWTRIBECONNECT</p></div>
      <div class="w-full md:w-1/2 pr-16 flex flex-row space-x-4 items-center justify-center md:justify-end">
        <div class="flex flex-row justify-end items-center space-x-2">
          <div class="w-8 md:w-12 h-8 md:h-12 p-2 flex justify-center items-center rounded-full bg-zinc-600 hover:bg-sky-400 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" class="w-5 md:w-8 h-5 md:h-8" viewBox="0 0 24 24">
              <path d="M12,2C6.477,2,2,6.477,2,12c0,5.013,3.693,9.153,8.505,9.876V14.65H8.031v-2.629h2.474v-1.749 c0-2.896,1.411-4.167,3.818-4.167c1.153,0,1.762,0.085,2.051,0.124v2.294h-1.642c-1.022,0-1.379,0.969-1.379,2.061v1.437h2.995 l-0.406,2.629h-2.588v7.247C18.235,21.236,22,17.062,22,12C22,6.477,17.523,2,12,2z"></path>
            </svg>
          </div>
          <div class="w-8 md:w-12 h-8 md:h-12 p-2 flex justify-center items-center rounded-full bg-zinc-600 hover:bg-sky-400 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" class="w-5 md:w-8 h-5 md:h-8" viewBox="0 0 24 24">
              <path d="M22,3.999c-0.78,0.463-2.345,1.094-3.265,1.276c-0.027,0.007-0.049,0.016-0.075,0.023c-0.813-0.802-1.927-1.299-3.16-1.299 c-2.485,0-4.5,2.015-4.5,4.5c0,0.131-0.011,0.372,0,0.5c-3.353,0-5.905-1.756-7.735-4c-0.199,0.5-0.286,1.29-0.286,2.032 c0,1.401,1.095,2.777,2.8,3.63c-0.314,0.081-0.66,0.139-1.02,0.139c-0.581,0-1.196-0.153-1.759-0.617c0,0.017,0,0.033,0,0.051 c0,1.958,2.078,3.291,3.926,3.662c-0.375,0.221-1.131,0.243-1.5,0.243c-0.26,0-1.18-0.119-1.426-0.165 c0.514,1.605,2.368,2.507,4.135,2.539c-1.382,1.084-2.341,1.486-5.171,1.486H2C3.788,19.145,6.065,20,8.347,20 C15.777,20,20,14.337,20,8.999c0-0.086-0.002-0.266-0.005-0.447C19.995,8.534,20,8.517,20,8.499c0-0.027-0.008-0.053-0.008-0.08 c-0.003-0.136-0.006-0.263-0.009-0.329c0.79-0.57,1.475-1.281,2.017-2.091c-0.725,0.322-1.503,0.538-2.32,0.636 C20.514,6.135,21.699,4.943,22,3.999z"></path>
            </svg>
          </div>
          <div class="w-8 md:w-12 h-8 md:h-12 p-2 flex justify-center items-center rounded-full bg-zinc-600 hover:bg-sky-400 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" class="w-5 md:w-8 h-5 md:h-8" viewBox="0 0 24 24">
              <path d="M 8 3 C 5.239 3 3 5.239 3 8 L 3 16 C 3 18.761 5.239 21 8 21 L 16 21 C 18.761 21 21 18.761 21 16 L 21 8 C 21 5.239 18.761 3 16 3 L 8 3 z M 18 5 C 18.552 5 19 5.448 19 6 C 19 6.552 18.552 7 18 7 C 17.448 7 17 6.552 17 6 C 17 5.448 17.448 5 18 5 z M 12 7 C 14.761 7 17 9.239 17 12 C 17 14.761 14.761 17 12 17 C 9.239 17 7 14.761 7 12 C 7 9.239 9.239 7 12 7 z M 12 9 A 3 3 0 0 0 9 12 A 3 3 0 0 0 12 15 A 3 3 0 0 0 15 12 A 3 3 0 0 0 12 9 z"></path>
            </svg>
          </div>
          <div class="w-8 md:w-12 h-8 md:h-12 p-2 flex justify-center items-center rounded-full bg-zinc-600 hover:bg-sky-400 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" class="w-5 md:w-8 h-5 md:h-8" viewBox="0 0 24 24">
              <path d="M19,3H5C3.895,3,3,3.895,3,5v14c0,1.105,0.895,2,2,2h14c1.105,0,2-0.895,2-2V5C21,3.895,20.105,3,19,3z M9,17H6.477v-7H9 V17z M7.694,8.717c-0.771,0-1.286-0.514-1.286-1.2s0.514-1.2,1.371-1.2c0.771,0,1.286,0.514,1.286,1.2S8.551,8.717,7.694,8.717z M18,17h-2.442v-3.826c0-1.058-0.651-1.302-0.895-1.302s-1.058,0.163-1.058,1.302c0,0.163,0,3.826,0,3.826h-2.523v-7h2.523v0.977 C13.93,10.407,14.581,10,15.802,10C17.023,10,18,10.977,18,13.174V17z"></path>
            </svg>
          </div>
        </div>
        <div class="h-10 w-0.5 rounded-full bg-sky-400"></div>
        <div class="w-16 flex flex-row text-zinc-400 justify-between">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z" />
            </svg>
          </div>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
          </div>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0l-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
    <div class="flex h-auto w-full flex-col space-y-4 md:space-y-0 md:flex-row items-center justify-between bg-zinc-800 py-8 md:py-4 text-zinc-400">
      <div class="w-1/2 pl-0 md:pl-12"><img src="https://res.cloudinary.com/dezmjeesi/image/upload/v1693047234/svg%20items/logo_big_ctilkk.svg" alt=""></div>
      <div class="flex h-full w-full md:w-1/2 items-center flex-col space-y-4 md:space-y-0 md:flex-row justify-end space-x-4 pr-0 md:pr-16">
        <div class="h-0.5 w-full rounded-full bg-sky-400 block md:hidden"></div>
        <div class="flex h-full w-2/3 md:w-full flex-col items-center text-center md:items-end">
          <p>Singapore | 20A, Tanjong Pagar Road, Singapore (088443)</p>
          <p>Copyright © 2022 Newtribe Capital – All Rights Reserved.</p>
          <p>Designed and Developed by Ortigan</p>
          <p>Privacy Policy | Terms & Conditions</p>
        </div>
        <div class="h-32 w-0.5 rounded-full bg-sky-400 hidden md:block"></div>
        <div class="w-16 flex-col text-zinc-500 hidden md:block">
          <p>About</p>
          <p>Clients</p>
          <p>Team</p>
          <p>Insights</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
</script>
<style></style>