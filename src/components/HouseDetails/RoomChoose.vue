<script setup>
import CounterTile from "../../components/others/CounterTile.vue";
</script>
<template>
  <div class="min-h-[400px] flex justify-center items-center">
    <div class="">
      <h2 class="text-center text-[2.24vw] mb-[3.281vw] mt-[4.844vw]">
        Choose the rooms you want to renovate
      </h2>
      <div class="">
        <CounterTile class="mb-[1.719vw] w-[62.604vw]" title="Living Room" />
        <CounterTile class="mb-[1.719vw] w-[62.604vw]" title="Kitchen" />
        <CounterTile class="mb-[1.719vw] w-[62.604vw]" title="Bedroom" />
        <CounterTile class="mb-[1.719vw] w-[62.604vw]" title="Bathroom" />
      </div>
    </div>
  </div>
</template>
