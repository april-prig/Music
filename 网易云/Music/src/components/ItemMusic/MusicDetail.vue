<template>
  <div class="wrapper">
    <img :src="store.state.playlist[store.state.playListIndex].al.picUrl" alt="" class="bg">
    <div class="top">
      <div class="left">
        <svg class="icon" aria-hidden="true" @click="fanhui">
          <use xlink:href="#icon-zuojiantou"></use>
        </svg>
        <div class="songName">
          <Vue3Marquee width="100px">{{ store.state.playlist[store.state.playListIndex].name }}</Vue3Marquee>
          <span v-for="i in store.state.playlist[store.state.playListIndex].ar">{{i.name}} > </span>
        </div>
      </div>
      <div class="right">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-fenxiang"></use>
        </svg>
      </div>
    </div>
    <div class="middle">
      <img src="@/assets/needle-ab.png" alt="" class="zz">
<!--      <img src="@/assets/disc_default.png" alt="">-->
      <img src="@/assets/cd.png" alt="" class="cd">
      <img :src="store.state.playlist[store.state.playListIndex].al.picUrl" alt="" class="cdbg">
    </div>
  </div>
</template>

<script setup>
import {useStore} from "vuex";
import {useRouter} from "vue-router";
import { Vue3Marquee } from 'vue3-marquee'

const router =useRouter()

const store = useStore()

function fanhui(){
  store.state.detailShow = false
}

</script>

<style scoped>
.wrapper{
  height: 100vh;
  overflow: hidden;
  padding: 0.1rem;
  position: relative;
}
.wrapper .bg{
  width: 100vw;
  height: 100vh;
  filter: blur(80px);
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}
.top{
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.icon{
  width: 0.6rem;
  height: 0.6rem;
  fill: #fff;
}
.top .left{
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}
.top .left .songName span{
  color: slategrey;
}
.middle .cd{
  width: 5.5rem;
  height: 5.5rem;
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  z-index: 1;

}
.middle .zz{
  width: 2.5rem;
  top: 1.5rem;
  position: absolute;
  left: 50%;
  /*transform: rotate(-25deg);*/
  z-index: 2;
  transform-origin: top;
  transition: all .2s;
}
.middle .cdbg{
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
}
/*.middle .zz:hover{*/
/*  transform: rotate(15deg);*/
/*}*/
</style>