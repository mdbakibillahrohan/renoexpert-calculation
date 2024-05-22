<script setup>
import {onMounted} from "vue";
import {step} from "../store";
onMounted(()=>{
    step.value = 5;
})

</script>

<template>
    <div class="h-[70vh] min-h-[400px] flex justify-center items-center">
        <div class="">
            <h2 class="text-center text-[2.24vw] mb-[3.281vw]">
                Your estimate is almost ready
            </h2>
            <div class="">
                <form>
                    <div
                        class="md:mb-[1.042vw] flex flex-col gap-[3.023vw] md:gap-[0.625vw] px-[2.326vw] md:px-0">
                        <input type="Name" name="name" id="email" placeholder="Name *"
                            class="w-full border border-[#e0e0e0] bg-[#FBFBFB] py-[3.256vw] md:py-[0.625vw] px-[7.674vw] md:px-[1.25vw] text-[4.651vw] md:mx-0 md:text-[0.833vw] font-medium text-[#BEB8AE] outline-none focus:border-[#FF6D43] focus:shadow-md">
                        <input type="email" name="email" id="email" placeholder="Email ID *"
                            class="w-full border border-[#e0e0e0] bg-[#FBFBFB] py-[3.256vw] md:py-[0.625vw] px-[7.674vw] md:px-[1.25vw] text-[4.651vw] md:mx-0 md:text-[0.833vw] font-medium text-[#BEB8AE] outline-none focus:border-[#FF6D43] focus:shadow-md">

                        <input type="number" name="number" id="number" placeholder="Phone number *"
                            class="w-full border border-[#e0e0e0] bg-[#FBFBFB] py-[3.256vw] md:py-[0.625vw] px-[7.674vw] md:px-[1.25vw] text-[4.651vw] md:mx-0 md:text-[0.833vw] font-medium text-[#BEB8AE] outline-none focus:border-[#FF6D43] focus:shadow-md">
                        <input type="number" name="number" id="number" placeholder="Property Name *"
                            class="w-full border border-[#e0e0e0] bg-[#FBFBFB] py-[3.256vw] md:py-[0.625vw] px-[7.674vw] md:px-[1.25vw] text-[4.651vw] md:mx-0 md:text-[0.833vw] font-medium text-[#BEB8AE] outline-none focus:border-[#FF6D43] focus:shadow-md">
                    </div>
                    
                    <div class="flex gap-2 mb-[1.042vw] justify-center md:justify-start px-[10vw] md:px-0">
                        <input type="checkbox"
                            class="before:content[''] peer relative h-4 w-5 md:h-5 md:w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-[#FF6D43] checked:bg-[#FF6D43] checked:before:bg-[#FF6D43] hover:before:opacity-10"
                            id="checkbox">
                        <p
                            class="text-[2.791vw] md:text-[0.833vw] font-normal md:leading-[1vw] leading-[3.349vw] tracking-normal text-left">
                            By sending a message, I agree to
                            <span class="text-[#FF6D43]"> the privacy policy </span>and
                            accept it.
                        </p>
                    </div>
                    <div>
                        <a
                            class="bg-[#FF6D43] py[14.186vw] md:py-[0.938vw] px-[4.884vw] md:px-[2.448vw] text-[#EEECE8] text-[3.256vw] md:text-[0.729vw] leading-[4.651vw] rounded-full cursor-pointer flex items-center md:w-[39.063vw] mx-[10.233vw] md:mx-0 h-[12.791vw] md:h-[2.865vw]  justify-between">
                            <span>Get a quote</span>

                            <svg class="ml-[1.042vw] hidden md:block" width="273" height="7" viewBox="0 0 273 7"
                                fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M268.5 2.525V0L273 3.03L268.5 6.06V3.535H0V2.525H268.5Z" fill="white"></path>
                            </svg>

                            
                        </a>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>