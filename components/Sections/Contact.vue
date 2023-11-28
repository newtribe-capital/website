<template>
    <div class="h-auto w-full text-sm md:text-lg text-zinc-400 flex flex-col px-6 md:px-20">
        <div class="w-full md:w-4/5 flex flex-col">
            <span v-for="(item, index) in items" :key="index">
              <div :class="`relative`">
                <div @click="toggleAcco(item.id)" role="accordion" class="border sticky top-0 cursor-pointer border-zinc-700 p-4 md:p-9 flex flex-row justify-between items-center" :class="activeAccoID == item.id? `bg-zinc-900`:``">
                    <p class="text-xl font-extralight md:text-5xl">{{item.question}}</p>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" :class="activeAccoID==item.id? 'transform rotate-180' : ''" class="text-sky-500 w-12 h-12">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                    </div>
                </div>
                <div v-show="activeAccoID == item.id" class="mt-5">
                  <span class="flex w-full flex-row justify-between">
                    <div class="border border-zinc-700 p-4 md:p-9 w-full flex flex-col justify-between items-center">
                        <div class="w-full flex flex-col md:flex-row space-x-0 md:space-x-9">
                            <div class="w-full md:w-1/2 flex flex-col space-y-4 text-justify">
                                <p>Thank you so much for reaching out and considering us out of all the VCs out there. We have a lot of projects that are under consideration at the moment, and our team will have a look at the information shared at the earliest.</p>
                                <p>Meanwhile, just to make things quicker, we would greatly appreciate if you can fill in the following details:</p>
                            </div>
                            <div class="w-full md:w-1/2 flex justify-center"><img src="https://res.cloudinary.com/dezmjeesi/image/upload/v1693047234/svg%20items/newtribe_rqqufq.svg" alt=""></div>
                        </div>
                        <form @submit.prevent="largeFormSub" class="w-full flex flex-col mt-10">
                            <div class="w-full flex flex-col md:flex-row space-x-0 md:space-x-9">
                                <div class="w-full md:w-1/2 flex flex-col space-y-5 justify-between">
                                    <div class="flex flex-col space-y-2">
                                        <label for="email">Email</label>
                                        <input v-model="data.email" type="email" id="email" class="w-full bg-zinc-700 focus:bg-zinc-800 px-4 py-2 text-zinc-400 placeholder:text-zinc-500 focus:border-0 focus:outline-none" placeholder="*Enter Email" required />
                                    </div>
                                    <div class="flex flex-col space-y-2">
                                        <label for="msg">Please provide the project summary in 2 to 3 sentences.</label>
                                        <input v-model="data.summary" type="text" id="msg" class="w-full h-32 md:h-24 bg-zinc-700 focus:bg-zinc-800 px-4 py-2 text-zinc-400 placeholder:text-zinc-500 focus:border-0 focus:outline-none" placeholder="Message or Note to Team NewTribe" required />
                                    </div>
                                    <div class="flex flex-col space-y-2">
                                        <div class="flex flex-row space-x-2 items-center">
                                            <input v-model="data.defi" type="checkbox" @change="chkstatus(data.defi)" value="DeFi" id="defi" class="w-5 h-5 accent-zinc-700 focus:accent-zinc-800 text-zinc-400 placeholder:text-zinc-500 focus:border-0 focus:outline-none"  />
                                            <label for="defi">DeFi</label>
                                        </div>
                                        <div class="flex flex-row space-x-2 items-center">
                                            <input v-model="data.smedia" @change="chkstatus(data.smedia)" value="Social Media" type="checkbox" id="smedia" class="w-5 h-5 accent-zinc-700 focus:accent-zinc-800 text-zinc-400 placeholder:text-zinc-500 focus:border-0 focus:outline-none"  />
                                            <label for="smedia">Social Media</label>
                                        </div>
                                        <div class="flex flex-row space-x-2 items-center">
                                            <input v-model="data.nft" @change="chkstatus(data.nft)" value="NFT" type="checkbox" id="nft" class="w-5 h-5 accent-zinc-700 focus:accent-zinc-800 text-zinc-400 placeholder:text-zinc-500 focus:border-0 focus:outline-none"  />
                                            <label for="nft">NFT</label>
                                        </div>
                                        <div class="flex flex-row space-x-2 items-center">
                                            <input v-model="data.gamefi" @change="chkstatus(data.gamefi)" value="GameFi" type="checkbox" id="gamefi" class="w-5 h-5 accent-zinc-700 focus:accent-zinc-800 text-zinc-400 placeholder:text-zinc-500 focus:border-0 focus:outline-none"  />
                                            <label for="gamefi">GameFi</label>
                                        </div>
                                        <div class="flex flex-row space-x-2 items-center">
                                            <input v-model="data.metaverse" @change="chkstatus(data.metaverse)" value="Metaverse" type="checkbox" id="met.metaverse" class="w-5 h-5 accent-zinc-700 focus:accent-zinc-800 text-zinc-400 placeholder:text-zinc-500 focus:border-0 focus:outline-none"  />
                                            <label for="met.metaverse">Metaverse</label>
                                        </div>
                                        <div class="flex flex-row space-x-2 items-center">
                                            <input v-model="data.dsecurity" @change="chkstatus(data.dsecurity)" value="Data Security" type="checkbox" id="dsecurity" class="w-5 h-5 accent-zinc-700 focus:accent-zinc-800 text-zinc-400 placeholder:text-zinc-500 focus:border-0 focus:outline-none"  />
                                            <label for="dsecurity">Data Security</label>
                                        </div>
                                        <div class="flex flex-row space-x-2 items-center">
                                            <input v-model="data.infraprotocol" @change="chkstatus(data.infraprotocol)" value="Infrastucture Protocol" type="checkbox" id="inf.infraprotocol" class="w-5 h-5 accent-zinc-700 focus:accent-zinc-800 text-zinc-400 placeholder:text-zinc-500 focus:border-0 focus:outline-none"  />
                                            <label for="inf.infraprotocol">Infrastucture Protocol</label>
                                        </div>
                                        <div class="flex flex-row space-x-2 items-center">
                                            <input v-model="data.layerzero" @change="chkstatus(data.layerzero)" value="Layer Zero" type="checkbox" id="layerzero" class="w-5 h-5 accent-zinc-700 focus:accent-zinc-800 text-zinc-400 placeholder:text-zinc-500 focus:border-0 focus:outline-none" />
                                            <label for="layerzero">Layer Zero/Layer One Protocol</label>
                                        </div>
                                        <input v-model="data.other" type="text" id="other" class="w-full bg-zinc-700 focus:bg-zinc-800 px-4 py-2 text-zinc-400 placeholder:text-zinc-500 focus:border-0 focus:outline-none" placeholder="Other then what is mentioned above" />
                                        <div class="flex flex-col space-y-2">
                                            <label for="protocol">Upload Pitch here</label>
                                            <!-- <input @change="uploadFile(data.file)" type="file" id="other" class="w-full bg-zinc-700 focus:bg-zinc-800 px-4 py-2 text-zinc-400 placeholder:text-zinc-500 focus:border-0 focus:outline-none" placeholder="Upload your Pitch here" required /> -->
                                            <div class="w-full bg-zinc-700 focus:bg-zinc-800 px-4 py-2 text-zinc-400 placeholder:text-zinc-500 focus:border-0 focus:outline-none flex flex-row"><input type="file" v-on:change="onFileChange" id="file" title="Choose upto 5mb docs, pptx, pdf." class=""><p>*Choose upto 5mb file.</p> </div>
                                        </div>
                                </div>
                            </div>
                                <div class="w-full md:w-1/2 flex flex-col space-y-5 mt-4 md:mt-0">
                                    <div class="flex flex-col space-y-2">
                                        <label for="protocol">Blockchain/Protocol on which it will be built?*</label>
                                        <input v-model="data.protocol" type="text" id="protocol" class="w-full bg-zinc-700 focus:bg-zinc-800 px-4 py-2 text-zinc-400 placeholder:text-zinc-500 focus:border-0 focus:outline-none" placeholder="*Your answer" required />
                                    </div>
                                    <div class="flex flex-col space-y-2">
                                        <label for="teamdetails">Team details (LinkedIn/Portfolio preferred)*</label>
                                        <input v-model="data.team_details" type="text" id="teamdetails" class="w-full bg-zinc-700 focus:bg-zinc-800 px-4 py-2 text-zinc-400 placeholder:text-zinc-500 focus:border-0 focus:outline-none" placeholder="*Your answer" required />
                                    </div>
                                    <div class="flex flex-col space-y-2">
                                        <label for="investors">Backers Investors onboarded so far?</label>
                                        <input v-model="data.investors" type="text" id="investors" class="w-full bg-zinc-700 focus:bg-zinc-800 px-4 py-2 text-zinc-400 placeholder:text-zinc-500 focus:border-0 focus:outline-none" placeholder="*Your answer" required />
                                    </div>
                                    <div class="flex flex-col space-y-2">
                                        <label for="stage">What is the current stage of development of the project?*</label>
                                        <input v-model="data.stage" type="text" id="stage" class="w-full bg-zinc-700 focus:bg-zinc-800 px-4 py-2 text-zinc-400 placeholder:text-zinc-500 focus:border-0 focus:outline-none" placeholder="*Your answer" required />
                                    </div>
                                    <div class="flex flex-col space-y-2">
                                        <label for="IDOtimeline">IDO Timeline & Launch plans*</label>
                                        <input v-model="data.IDOtimeline" type="text" id="IDOtimeline" class="w-full bg-zinc-700 focus:bg-zinc-800 px-4 py-2 text-zinc-400 placeholder:text-zinc-500 focus:border-0 focus:outline-none" placeholder="*Your answer" required />
                                    </div>
                                    <div class="flex flex-col space-y-2">
                                        <label for="Tokenomics">Please provide detailed Tokenomics including vesting details and calculations of Market Cap at TGE and FDV.</label>
                                        <input v-model="data.Tokenomics" type="text" id="Tokenomics" class="w-full bg-zinc-700 focus:bg-zinc-800 px-4 py-2 text-zinc-400 placeholder:text-zinc-500 focus:border-0 focus:outline-none" placeholder="*Your answer" required />
                                    </div>
                                    <div class="flex flex-col space-y-2">
                                        <label for="socials">Social Presence (Twitter, Telegram, etc.)*</label>
                                        <input v-model="data.sociallink" type="text" id="socials" class="w-full bg-zinc-700 focus:bg-zinc-800 px-4 py-2 text-zinc-400 placeholder:text-zinc-500 focus:border-0 focus:outline-none" placeholder="*Your answer" required />
                                    </div>
                                </div>
                            </div>
                            <div class="mt-6">
                              <vue-turnstile site-key="0x4AAAAAAANpV7aLw5FZjpay" v-model="mytoken" />
                            </div>
                            <button :class="mytoken==null?'hidden':'block'" class="flex flex-row w-3/4 h-12 bg-zinc-800 hover:bg-zinc-900 mt-8 rounded-sm px-8 py-4 text-zinc-400 items-center justify-between">
                                <p>Submit</p>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                  <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
                                </svg>
                            </button>
                        </form>
                    </div>
                  </span>
                </div>
              </div>
            </span>        
        </div>
        <div class="w-full md:w-4/5 flex flex-col mt-10">
            <div class="border border-zinc-700 flex flex-col md:flex-row justify-start md:justify-between items-center">
                <div class="w-full md:w-1/2 h-full border-r border-zinc-700 py-4 md:py-9 flex flex-col">
                    <div class="px-4 md:px-9 pb-4 md:pb-9 border-b border-zinc-700 flex flex-col text-2xl font-extralight md:text-5xl">
                        <p>Drop your </p>
                        <p>message below</p>
                    </div>
                    <div class="px-4 md:px-9 pt-4 md:pt-9 flex flex-col">                        
                        <p>We’d love to hear from you,<br> use the fields below to get in touch with us </p>
                        <div>
                            <form @submit.prevent="smallFormSub()" class="w-full flex flex-col space-y-4 mt-4">
                                <div class=""><input v-model="data.name" type="text" id="name" class="w-full bg-zinc-700 focus:bg-zinc-800 px-8 py-2 text-zinc-400 placeholder:text-zinc-500 focus:border-0 focus:outline-none" placeholder="*Enter Name" required /></div>
                                <div class=""><input v-model="data.email" type="email" id="name" class="w-full bg-zinc-700 focus:bg-zinc-800 px-8 py-2 text-zinc-400 placeholder:text-zinc-500 focus:border-0 focus:outline-none" placeholder="*Enter Email" required /></div>
                                <div class=""><input v-model="data.message" type="text" id="name" class="w-full bg-zinc-700 focus:bg-zinc-800 px-8 py-4 text-zinc-400 placeholder:text-zinc-500 focus:border-0 focus:outline-none" placeholder="Message" required /></div>
                                <div class="mb-4">
                                  <vue-turnstile site-key="0x4AAAAAAANpV7aLw5FZjpay" v-model="mytoken" />
                                </div>
                                <button :class="mytoken==null?'hidden':'block'" type="submit" class="flex flex-row w-full rounded-sm bg-zinc-800 hover:bg-zinc-900 px-8 py-4 text-zinc-400 items-center justify-between">
                                    <p>Submit</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                      <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
                                    </svg>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="w-full md:w-1/2 h-auto md:h-[540px] p-4 md:p-9 overflow-hidden">
                    <img class="h-full w-full object-cover" src="https://res.cloudinary.com/dezmjeesi/image/upload/v1694168116/svg%20items/design_qndptj.png" alt="">
                </div>
            </div>            
        </div>
    </div>
</template>
<script lang="ts" setup>
// import { useToast } from "vue-toastification";
import { useToast } from "vue-toastification"
import VueTurnstile from 'vue-turnstile';
// const turnstile = VueTurnstile()
const mytoken = ref('')


const toast = useToast()
const data = reactive({
    name:"",
    message: "", 
    summary: "", 
    email:"",
    protocol:"",
    team_details:"",
    investors:"",
    stage:"",
    IDOtimeline:"",
    Tokenomics:"",
    sociallink:"",
    defi:"",
    smedia:"",
    nft:"",
    file:"",
    gamefi:"",
    metaverse:"",
    dsecurity:"",
    infraprotocol:"",
    layerzero:"",
    other:"",
    otherArr:[]
})


// const formdata = new FormData()
async function smallFormSub(){
    try{
        let formdata = new FormData()
        formdata.append("body[name]",data.name)
        formdata.append("body[email]",data.email)
        formdata.append("body[message]",data.message)
        formdata.append("token",mytoken.value)
        formdata.append("subject", `Hey there, you've got a new inquiry`)
        console.log(formdata, "vfhsnj")
        await useFetch(`https://formail-api.ortigan.dev/api/send`, {
            method: 'POST',
            body: formdata,
            headers: {
                // apikey: `noMx182WEgB63OKn`
                apikey: `8OTQVvhkJkxTQLQ8`
            }
        })
        toast.success("Form submitted successfully", {timeout: 2000});
        data.name="",
        data.email="",
        data.message="",
        mytoken.value=''

    }
    catch(error){
        toast.error("Problem submitting form", {timeout: 2000});
        console.log("some problem sending data")
    }
}
function chkstatus(e:string){
    data.otherArr.push(e)
}
async function onFileChange(e: any){
    data.file = e.target.files[0]
}
async function largeFormSub(){
    try{
    // function resetFile() {
    //     const file = document.querySelector('.file');
    //     var emptyFile = document.createElement('input');
    //     emptyFile.type = 'file';
    //     file.files = emptyFile.files;
    // }
        var formdata =new FormData();
        formdata.append("body[email]",data.email)
        formdata.append("body[summary]",data.summary)
        formdata.append("body[other]",data.other)
        formdata.append("body[other_array[]]",JSON.stringify(data.otherArr))
        formdata.append("body[protocol]",data.protocol)
        formdata.append("body[team_details]",data.team_details)
        formdata.append("attachments[]", data.file)
        formdata.append("body[investors]",data.investors)
        formdata.append("body[stage]",data.stage)
        formdata.append("body[IDOtimeline]",data.IDOtimeline)
        formdata.append("body[Tokenomics]",data.Tokenomics)
        formdata.append("body[sociallink]",data.sociallink)
        formdata.append("token",mytoken.value)
        formdata.append("subject", `Hey there, you've got a new inquiry`)
        // console.log(formdata, "vfhsnj")
        await useFetch(`https://formail-api.ortigan.dev/api/send`, {
            method: 'POST',
            body: formdata,
            headers: {
                apikey: `8OTQVvhkJkxTQLQ8`
                // apikey: `noMx182WEgB63OKn`
            }
        })
        toast.success("Form Submitted", {timeout: 2000});
        data.email="",
        data.summary="",
        data.other="",
        data.otherArr=[],
        data.protocol="",
        data.team_details="",
        data.file="",
        data.investors="",
        data.stage="",
        data.IDOtimeline="",
        data.Tokenomics="",
        data.sociallink=""
    }
    catch(error){
        toast.error("File size too large", {timeout: 2000});
        console.log("some problem sending data")
    }
}
const activeAccoID= ref(0)
const isOpen= ref(false)
const items  = [
   {
    id:1,
    question: `Project Form`,
    question2: `entrepreneurial journey?`,
    answer: ``
   },
]
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
</script>