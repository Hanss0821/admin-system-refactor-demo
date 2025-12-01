<template>
<div class="han-hamburger" @click="toggleClick"> 
    <component :is="iconName" />
     <!-- <i-ep-fold v-if="!isActive" />
     <i-ep-expand v-else /> -->
    <span>{{isActive ? '收缩' : '展开'}}</span>
</div>
</template>

<script setup lang="ts">
// 若要使用动态组件渲染,则需要手动导入对应的图片,因为动态组件会把自动导入的组件当成是字符串在渲染
import IconExpand from '~icons/ep/expand'
import IconFold from '~icons/ep/fold'
import {computed} from 'vue'
const props = defineProps<{
  isActive: boolean
}>()
const iconName = computed(() => {
    return props.isActive ? IconExpand : IconFold
})
// const emits = defineEmits(['toggleClick'])
// 是一个interface
const emit = defineEmits<{
  (e: 'toggleClick'): void
}>()

const toggleClick = () => {
  emit('toggleClick')
}
</script>
<style lang="scss" scoped>
.han-hamburger {
  display: flex;
  align-items: center;
}
</style> 