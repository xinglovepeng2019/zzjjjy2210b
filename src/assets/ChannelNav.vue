<script setup lang="ts">
import axios from 'axios';
import { onMounted, ref } from 'vue';
import { useChannelStore } from '@/stores';
import { ChannelItem, ChannelResData } from '../types/data'
// 创建响应式数据
const channels = ref<ChannelItem[]>([])
onMounted(async ()=>{
  const res = await axios.get<ChannelResData>('http://geek.itheima.net/v1_0/channels')
  // 给响应式数据赋值
  channels.value = res.data.data.channels
})

// defineProps<{channelId:number}>()

// const emit = defineEmits<{
//   (e:'changeChannel',id:number):void
// }>()

const store =useChannelStore()

</script>

<template>
  <!-- <div class="channel-nav">
    <nav class="list">
      <a
        :class="{active:channelId===item.id}"
        class="item"
        href="javascript:;"
        v-for="(item, i) in channels"
        :key="item.id"
        @click="emit('changeChannel',item.id)"
      >
        {{item.name}}
      </a>
    </nav>
  </div> -->
  <div class="channel-nav">
    <nav class="list">
      <a
        :class="{active:store.channelId===item.id}"
        class="item"
        href="javascript:;"
        v-for="(item, i) in channels"
        :key="item.id"
        @click="store.changeChannel(item.id)"
      >
        {{item.name}}
      </a>
    </nav>
  </div>
</template>
