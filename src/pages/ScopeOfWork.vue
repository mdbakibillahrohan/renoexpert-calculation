
<script setup>
import { ref } from 'vue';
import NewOrResaleUnitWork from '../components/ScopeOfWork/NewOrResaleUnitWork.vue';
const tab = ref([NewOrResaleUnitWork]);
const activeTab = ref(0);
</script>
<template>
    <component :is="tab[activeTab]" />
</template>