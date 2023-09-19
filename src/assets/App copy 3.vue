<script setup lang="ts">
import ChannelNav from './components/ChannelNav.vue';
import ArticleList from './components/ArticleList.vue'
import type { ChannelItem, ChannelResData } from '@/types/data'
import {onMounted,ref} from 'vue'
// 数据App维护，因为切换频道ID的时候 列表需要根据频道ID更新
// const channelId = ref(0)
</script>

<template>
  <!-- <ChannelNav  :channelId="channelId"></ChannelNav>
  <ArticleList :channelId="channelId"></ArticleList> -->
  <ChannelNav  ></ChannelNav>
  <ArticleList ></ArticleList>

</template>
