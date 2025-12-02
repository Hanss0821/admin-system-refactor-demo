<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import Hamburger from './components/Hamburger.vue'
import Breadcrumb from './components/Breadcrumb.vue';

import { ref } from 'vue'


const isCollaspe = ref(false);
const toggleClick = (value:boolean) => {
  console.log(value);
}

</script>

<template>
  <div>
    <Breadcrumb />
    <HelloWorld msg="Vite + Vue" />
    <Hamburger  v-model="isCollaspe"  @toggleClick="toggleClick" />
  </div>
  
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
