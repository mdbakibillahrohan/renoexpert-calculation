<script setup>
import Navbar from "./components/Navbar.vue";
</script>
<template>
  <a-config-provider
    :theme="{
      token: {
        colorPrimary: '#FF6D43',
      },
    }"
  >
    <Navbar />
    <RouterView />
    <div class="flex justify-center w-full">
      <div class="flex gap-[1.563vw]">
        <button
          class="flex items-center gap-[1.198vw] py-[0.938vw] px-[1.51vw] border border-[#00000033] rounded-[5.938vw]"
        >
          Back
          <svg
            width="103"
            height="7"
            viewBox="0 0 103 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.5 2.525V0L0 3.03L4.5 6.06V3.535H103V2.525H4.5Z"
              fill="#291E18"
            />
          </svg>
        </button>
        <button
          class="flex items-center gap-[1.198vw] py-[0.938vw] px-[1.51vw] border border-[#00000033] rounded-[5.938vw]"
        >
          Next
          <svg
            width="103"
            height="7"
            viewBox="0 0 103 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M98.5 2.525V0L103 3.03L98.5 6.06V3.535H0V2.525H98.5Z"
              fill="#291E18"
            />
          </svg>
        </button>
      </div>
    </div>
  </a-config-provider>
</template>
