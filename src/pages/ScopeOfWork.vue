
<script setup>
import { onMounted, ref } from 'vue';
import NewOrResaleUnitWork from '../components/ScopeOfWork/NewOrResaleUnitWork.vue';
import { step } from '../store';
const tab = ref([NewOrResaleUnitWork]);
const activeTab = ref(0);

onMounted(()=>{
    step.value = 4;
})
</script>
<template>
    <component :is="tab[activeTab]" />
</template>