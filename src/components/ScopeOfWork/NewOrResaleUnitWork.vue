<script setup>
import { reactive, ref } from 'vue';


const options = reactive([
    {
        price: "SGD 1800 - SGD 2400",
        features: ["Tv Console", "Storage/Shoe Cabinet"]
    },
    {
        price: "SGD 4800 - SGD 5800",
        features: ["Tv Console", "Storage/Shoe Cabinet", "Feature and Wall"]
    },
    {
        price: "SGD 1800 - SGD 2400",
        features: ["Tv Console", "Storage/Shoe Cabinet", "Feature and Wall", "Island Cabinet", "Settee"]
    },
])

const selected = ref(0);

</script>

<template>
    <div class="min-h-[400px] flex justify-center items-center">
        <div class="">
            <h2 class="text-center text-[2.24vw] mb-[3.281vw]">
                Is it a new or resale unit?
            </h2>
            <div class="flex flex-col gap-[1.719vw]">
                <div class="border-[2px] border-[#291E18] w-[62.604vw] rounded-[0.781vw] overflow-hidden">
                    <div class="border-b-[2px] border-[#291E18] p-[1.667vw] flex items-center justify-between">
                        <div class="flex gap-[2.76vw]  items-center">
                            <img class="w-[5.20vw] aspect-[84/68]" src="/public/carpentry-icon.png" alt="">
                            <span class="text-[1.875vw]">Carpentry</span>
                        </div>
                        <div>
                            <input class="appearance-none w-[2.188vw] aspect-[1/1] border-2 border-[#FF6D43] checked:bg-[#FF6D43]" type="checkbox" name="" id="">
                        </div>
                    </div>
                    <div class="p-[2.396vw]">
                        <div class="w-full flex justify-center gap-[1.146vw]">
                            <span @click="selected=0" class="px-[1.51vw] py-[0.5vw] border-[#BEB8AE] border-[1px] rounded-[0.781vw] cursor-pointer" :class="selected===0?'active':''">Light</span>
                            <span @click="selected=1" class="px-[1.51vw] py-[0.5vw] border-[#BEB8AE] border-[1px] rounded-[0.781vw] cursor-pointer" :class="selected===1?'active':''">Moderate</span>
                            <span @click="selected=2" class="px-[1.51vw] py-[0.5vw] border-[#BEB8AE] border-[1px] rounded-[0.781vw] cursor-pointer" :class="selected===2?'active':''">Extensive</span>
                        </div>
                        <ul>
                            <li v-for="item in options[selected].features"> <span class="w-2 h-2 rounded-full bg-black inline-block" :class="selected===0?'active':''"></span> {{ item }}</li>
                        </ul>
                    </div>
                    <div class="border-t-[2px] border-[#291E18] p-[1.667vw] flex items-center justify-center bg-[#FF6D43]">
                        <div class="text-center text-[#fff]">
                            <div class="text-[1.146vw]">APPROX BUDGET:</div>
                            <div class="text-[1.458vw]">{{ options[selected].price }}</div>
                        </div>
                    </div>
                </div>
                <!-- here ended the bigone -->

                <div class="border-[2px] border-[#291E18] w-[62.604vw] rounded-[0.781vw] p-[1.667vw] flex items-center justify-between">
                        <div class="flex gap-[2.76vw]  items-center">
                            <img class="w-[5.20vw] aspect-[84/68]" src="/public/ceiling_and_partition_icon.png" alt="">
                            <span class="text-[1.875vw]">Ceiling and Partition</span>
                        </div>
                        <div>
                            <input class="appearance-none w-[2.188vw] aspect-[1/1] border-2 border-[#FF6D43] checked:bg-[#FF6D43]" type="checkbox" name="" id="">
                        </div>
                    </div>

                    <div class="border-[2px] border-[#291E18] w-[62.604vw] rounded-[0.781vw] p-[1.667vw] flex items-center justify-between">
                        <div class="flex gap-[2.76vw]  items-center">
                            <img class="w-[5.20vw] aspect-[84/68]" src="/public/floring_works_icon.png" alt="">
                            <span class="text-[1.875vw]">Flooring Works</span>
                        </div>
                        <div>
                            <input class="appearance-none w-[2.188vw] aspect-[1/1] border-2 border-[#FF6D43] checked:bg-[#FF6D43]" type="checkbox" name="" id="">
                        </div>
                    </div>
            </div>
        </div>
    </div>

</template>

<style scoped>
.active{
    border-color: #FF6D43;
    background-color: #FF6D431A;
}
</style>