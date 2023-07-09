<template>
  <div class="wrapper">
    <MusicListTop :playlist="state.playList"></MusicListTop>
    <ItemMusicList :musiclist="state.musicList"></ItemMusicList>
  </div>
</template>

<script setup>
// 歌单详情页
import MusicListTop from "@/components/ItemMusic/MusicListTop.vue";
import ItemMusicList from "@/components/ItemMusic/ItemMusicList.vue";


import {useRoute} from "vue-router";
import {onMounted,reactive} from "vue";

const route = useRoute()

const state = reactive({
  playList:{},
  musicList:{}
})

import {getItemMusic} from "@/network/ItemMusic";
import {getMusicList} from "@/network/ItemMusic";

onMounted(async ()=>{
  await getItemMusic(route.query.id).then((res)=>{
   state.playList = res.playlist

  //   防止页面刷新丢失数据，可以将数据保存到sessionStorage中
    sessionStorage.setItem('itemDetail',JSON.stringify(state))
  })

  await getMusicList(state.playList.id).then((res)=>{
    state.musicList = res
  })
})


</script>

<style scoped>

</style>