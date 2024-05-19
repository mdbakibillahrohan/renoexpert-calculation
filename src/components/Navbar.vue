<script setup>
import { ref } from "vue";
const events = ref(["HOUSE DETAILS", "SCOPE OF WORK", "GET QUOTE"]);
</script>

<template>
  <header
    class="header_wrapper aspect-[1840/103] flex items-center w-full box-border bg-[#EEECE8] md:px-[2.083vw] border-b-[0.1rem] border-[#BEB8AE] z-50 hover:bg-white duration-300"
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
          :current="0"
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
      <div class="w-1/4 text-right pr-4">1/3</div>
    </nav>
    <!-- desktop navbar ended here  -->

    <!-- Mobile navbar started  -->

    <!-- Mobile navbar ended  -->
  </header>
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
