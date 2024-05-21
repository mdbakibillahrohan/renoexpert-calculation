<script setup>
import { ref, reactive, computed } from "vue";
import PropertyType from "../components/HouseDetails/PropertyType.vue";
import NewOrResale from "../components/HouseDetails/NewOrResale.vue";
import RoomChoose from "../components/HouseDetails/RoomChoose.vue";
import {step} from "../store";

const tab = ref([PropertyType, NewOrResale, RoomChoose]);
const activeTab = computed(step.value);
</script>

<template>
  <component :is="tab[step]" />
</template>
