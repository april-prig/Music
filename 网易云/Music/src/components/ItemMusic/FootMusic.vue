<template>
  <div class="footMusic">
    <div class="footLeft">
      <img :src="store.state.playlist[store.state.playListIndex].al.picUrl" alt="">
      <div>
        <p>{{store.state.playlist[store.state.playListIndex].name}}</p>
        <span>横滑切换上下首</span>
      </div>
    </div>
    <div class="footRight">
      <svg v-if="store.state.showAudio"  class="icon" aria-hidden="true">
        <use  xlink:href="#icon-bofang_o" @click="playAudio()"></use>
      </svg>
      <svg v-else class="icon" aria-hidden="true">
        <use xlink:href="#icon-bofang2" @click="playAudio()"></use>
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-caidan"></use>
      </svg>
    </div>
    <audio ref="audio" :src='`https://music.163.com/song/media/outer/url?id=${store.state.playlist[store.state.playListIndex].id}.mp3`'></audio>
  </div>
</template>

<script setup>
import {useStore} from "vuex";
import {ref} from 'vue'

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

</script>

<style scoped>
.footMusic{
  width: 100%;
  height: 1.4rem;
  background-color: #fff;
  position: sticky;
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