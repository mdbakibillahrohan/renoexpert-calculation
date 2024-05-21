<script setup></script>
<template>
  <div class="min-h-[400px] flex justify-center items-center">
    <div class="">
      <h2 class="text-center text-[2.24vw] mb-[3.281vw]">
        Is it a new or resale unit?
      </h2>
      <div class="flex gap-x-[3.125vw]">
        <div
          class="border w-[38.021vw] aspect-[730/425] border-[#BEB8AE] rounded-[0.781vw] overflow-hidden"
        >
          <div
            class="w-[38.021vw] aspect-[730/355] flex justify-center items-center border border-[#BEB8AE] rounded-[0.781vw]"
          >
            <img
              class="w-[10.26vw] aspect-[197/184]"
              src="/public/NewHouseIcon.png"
              alt=""
            />
          </div>

          <h1 class="text-center text-[1.875vw] text-[#291E18]">New</h1>
        </div>

        <div
          class="border w-[38.021vw] aspect-[730/425] border-[#BEB8AE] rounded-[0.781vw] overflow-hidden"
        >
          <div
            class="w-[38.021vw] aspect-[730/355] flex justify-center items-center border border-[#BEB8AE] rounded-[0.781vw]"
          >
            <img
              class="w-[10.26vw] aspect-[197/184]"
              src="/public/ResaleHouseIcon.png"
              alt=""
            />
          </div>

          <h1 class="text-center text-[1.875vw] text-[#291E18]">Resale</h1>
        </div>
      </div>
    </div>
  </div>
</template>
