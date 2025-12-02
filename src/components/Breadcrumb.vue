<template>
  <div class="container">
    <div class="router-link" 
    v-for="(item, index) in  links" 
    :key="item.path">
     <router-link :to="item.path" v-if="index !== links.length - 1">{{item.meta.title + '/'}}</router-link>
     <span v-else >{{item.meta.title}}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, type RouteLocationMatched} from 'vue-router';
const route = useRoute();
// computed 返回的是一个ref,需要指定的是被computed所包裹的元素类型,所以应该是传入对应的泛型
const links = computed<RouteLocationMatched[]>(()=>{
    return route.matched
})

</script>

<style lang="scss" scoped>
.container {
  display: flex;
  align-items: center;
}
</style>