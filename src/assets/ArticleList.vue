<script setup lang="ts">
import axios from 'axios';
import { ref, watch } from 'vue';
import { useChannelStore } from '@/stores';
import type { ArticleItem, ArticleResData } from '.@/types/data';

const props = defineProps<{channelId:number}>()
const store = useChannelStore()
const articles = ref<ArticleItem[]>([]);
watch(
  () => store.channelId,
  async () => {
    const res = await axios.get<ArticleResData>(
      `http://geek.itheima.net/v1_0/articles`,
      {
        params: {
          channel_id: store.channelId,
          timestamp: Date.now(),
        },
      },
    );
    articles.value = res.data.data.results;
  },
  { immediate: true }
);


</script>

<template>
  <div class="article-list">
    <div class="article-item" v-for="item in articles" :key="item.art_id">
      <p class="title">{{ item.title }}</p>
      <img
        v-for="(src, i) in item.cover.images"
        :key="i"
        class="img"
        :src="src"
        alt=""
      />
      <div class="info">
        <span>{{ item.aut_name }}</span>
        <span>{{ item.comm_count }}评论</span>
        <span>{{ item.pubdate }}</span>
      </div>
    </div>
  </div>
</template>
