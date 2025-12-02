<template>
<div class="han-hamburger" @click="toggleClick"> 
    <div class="icon" >
        <component :is="iconName"/>
    </div>
     <!-- <i-ep-fold v-if="!isActive" />
     <i-ep-expand v-else /> -->
    <span>{{isActive ? '收缩' : '展开'}}</span>
    <!-- <input :value="title" @input="handleInput" ></input> -->
</div>
</template>

<script setup lang="ts">
// 若要使用动态组件渲染,则需要手动导入对应的图片,因为动态组件会把自动导入的组件当成是字符串在渲染
import IconExpand from '~icons/ep/expand'
import IconFold from '~icons/ep/fold'
import {computed} from 'vue'
const isCollaspe = defineModel<boolean>({default:false})
// const title = defineModel<string>('title', { default: '' })
// const props = defineProps<{
// //   isActive: boolean,
// //   modelValue: boolean
// //   title: String
// }>()
// console.log('prop', props.modelValue)
const iconName = computed(() => {
    return isActive.value ? IconExpand : IconFold
})
const isActive = computed({
    get() {
        return isCollaspe.value
    },
    set(val:boolean) {
        isCollaspe.value = !val
    }
})
// const emits = defineEmits(['toggleClick'])
// 是一个interface
const emit = defineEmits<{
  (e: 'toggleClick', val:boolean): void,
//   (e: 'update:title', val:string):void
//   (e: 'update:modelValue', val:boolean) :void
}>()

const toggleClick = () => {
    isCollaspe.value = !isCollaspe.value
    emit('toggleClick', isCollaspe.value )
}

// const handleInput = (e: Event) => {
//     const value = (e.target as HTMLInputElement).value
//     title.value = value
//     // emit('update:title', value)
// }
</script>
<style lang="scss" scoped>
.han-hamburger {
  display: flex;
  align-items: center;
  .icon {
    height: 18px;
    transform: v-bind("isCollaspe ? 'rotate(180deg)' : 'rotate(0)'");
    transition: transform .3s;
  }
}
</style> 