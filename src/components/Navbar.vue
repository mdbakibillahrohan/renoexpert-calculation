<script setup>
import { computed, ref } from "vue";
import {step} from "../store";
const events = ref(["HOUSE DETAILS", "SCOPE OF WORK", "GET QUOTE"]);
const masterStep = computed(()=>{
  if(step.value>0 && step.value<3){
    return 0;
  }else if(step.value===4){
    return 1;
  }else if(step.value===5){
    return 2;
  }else{
    return 0;
  }
});
</script>

<template>
  <header
    class="header_wrapper aspect-[1840/103] flex items-center w-full box-border bg-[#EEECE8] md:px-[2.083vw] border-b-[0.1rem] border-[#BEB8AE] z-50 hover:bg-white duration-300 fixed"
  >
    <!-- desktop navbar started here  -->
    <nav class="justify-between w-full items-center hidden md:flex">
      <div class="logo w-1/4">
        <a href="/">
          <img
            class="w-[10.781vw] aspect-[207/40]"
            src="https://sgrenoexpert.com/asset/img/reno_logo.png"
            alt="Reno Expert"
          />
        </a>
      </div>
      <div class="">
        <a-steps
          progress-dot
          :current="masterStep"
          size="small"
          :items="[
            {
              title: 'House Details',
            },
            {
              title: 'Scope of Work',
            },
            {
              title: 'Get a Quote',
            },
          ]"
        ></a-steps>
      </div>
      <div class="w-1/4 text-right pr-4">{{masterStep+1}}/3</div>
    </nav>
    <!-- desktop navbar ended here  -->

    <!-- Mobile navbar started  -->

    <!-- Mobile navbar ended  -->
  </header>
  <div class="aspect-[1840/103] w-full mb-[4.844vw]"></div>
</template>

<style>
.ant-steps-item-title,
:where(
    .css-dev-only-do-not-override-2ntbjj
  ).ant-steps.ant-steps-dot.ant-steps-small
  .ant-steps-item-title {
  line-height: 0;
}
</style>
