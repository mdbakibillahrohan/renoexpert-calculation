<script setup>
import { ref, reactive } from "vue";
import PropertyType from "../components/HouseDetails/PropertyType.vue";
import NewOrResale from "../components/HouseDetails/NewOrResale.vue";
import RoomChoose from "../components/HouseDetails/RoomChoose.vue";

const tab = ref([PropertyType, NewOrResale, RoomChoose]);
const activeTab = ref(2);
</script>

<template>
  <component :is="tab[activeTab]" />
</template>
