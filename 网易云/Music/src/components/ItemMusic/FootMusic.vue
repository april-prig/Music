<template>
  <div class="footMusic">
    <div class="footLeft" @click="showDetail">
      <img :src="store.state.playlist[store.state.playListIndex].al.picUrl" alt="">
      <div>
        <p>{{store.state.playlist[store.state.playListIndex].name}}</p>
        <span>横滑切换上下首</span>
      </div>
    </div>
    <div class="footRight">
      <svg @click="playAudio()" v-if="store.state.showAudio"  class="icon" aria-hidden="true">
        <use  xlink:href="#icon-bofang_o"></use>
      </svg>
      <svg @click="playAudio()" v-else class="icon" aria-hidden="true">
        <use xlink:href="#icon-bofang2" ></use>
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-caidan"></use>
      </svg>
    </div>
    <audio ref="audio" :src='`https://music.163.com/song/media/outer/url?id=${store.state.playlist[store.state.playListIndex].id}.mp3`'></audio>
    <van-popup v-model:show="store.state.detailShow" :position="'bottom'" :style="{ width:'100%',height:'100%'}">
      <MusicDetail></MusicDetail>
    </van-popup>
  </div>
</template>

<script setup>
import {mapState, useStore} from "vuex";
import {ref, watch, watchEffect} from 'vue'
import MusicDetail from "@/components/ItemMusic/MusicDetail.vue";

const store = useStore()

const audio = ref()

function playAudio(){
  if (audio.value.paused){
    store.commit("showAudio")
    audio.value.play()
  } else{
    store.commit("showAudio")
    audio.value.pause()
  }
}

watch(
    () => store.state.playListIndex,
    () => {
      audio.value.autoplay = true
      store.state.showAudio = false
    },
)

watch(
    ()=>store.state.playlist,
    ()=>{
      if(store.state.showAudio){
        audio.value.autoplay = true
        store.state.showAudio = false
      }
  }
)

// 显示歌曲播放页面
function showDetail(){
  store.state.detailShow = true
}


</script>

<style scoped>
.footMusic{
  width: 100%;
  height: 1.4rem;
  background-color: #fff;
  position: fixed;
  bottom: 0;
  box-shadow: 0 -2px 7px darkgray ;
  display: flex;
  justify-content: space-evenly;
  padding: 0.05rem;
  box-sizing: border-box;
}
.footLeft{
  font-size: 0.23rem;
  width: 60%;
  display: flex;
  align-items: center;
}
.footLeft span{
  color: darkgray;
  font-size: 0.2rem;
}
.footLeft img{
  width: .8rem;
  height: .8rem;
  border-radius: 50%;
  margin-right: 0.1rem;
}
.footRight{
  width: 20%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.footRight .icon{
  width: 0.6rem;
  height: 0.6rem;
}
</style>