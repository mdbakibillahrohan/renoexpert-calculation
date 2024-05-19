<script setup>
import { ref } from "vue";
import { PlusCircleOutlined, MinusCircleOutlined } from "@ant-design/icons-vue";
const props = defineProps({
  title: String,
});
const emits = defineEmits(["getCount"]);
const count = ref(1);
const increment = () => {
  count.value++;
  emits("getCount", count.value);
};
const decrement = () => {
  if (count.value > 0) {
    count.value--;
    emits("getCount", count.value);
  }
};
</script>

<template>
  <div
    class="w-full flex justify-between items-center h-[6.354vw] border border-[#BEB8AE] px-[2.344vw] rounded-[0.781vw]"
  >
    <div>
      <span class="text-[1.875vw]">{{ title }}</span>
    </div>
    <div class="w-[20%] h-full flex justify-between items-center">
      <span class="text-[2.24vw]">{{ count }}</span>
      <div class="flex gap-[0.99vw] items-center h-full">
        <button @click="decrement">
          <MinusCircleOutlined
            :style="{ fontSize: '2.563vw', color: '#FF6D43' }"
          />
        </button>
        <button @click="increment">
          <PlusCircleOutlined
            :style="{ fontSize: '2.563vw', color: '#FF6D43' }"
          />
        </button>
      </div>
    </div>
  </div>
</template>
