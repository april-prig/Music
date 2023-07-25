<script setup>
import {useRouter,useRoute} from "vue-router";

const router = useRouter()
const route = useRoute()
function toMine(){
  router.push('/Mine')
}

function toDiscover(){
  router.push('/')
}



</script>

<template>
  <div class="topNav">
    <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-caidan"></use>
    </svg>
    <div class="content">
      <span :class="{active:route.path==='/Mine'}" @click="toMine()">我的</span>
      <span :class="{active:route.path==='/'}" @click="toDiscover()">发现</span>
      <span @click="toMine()">云村</span>
      <span @click="toMine()">视频</span>
    </div>
    <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-sousuo1"></use>
    </svg>
  </div>
</template>

<style scoped>
.icon {
  width: 0.6rem;
  height: 0.6rem;
}
.topNav{
  display: flex;
  padding: 10px;
  justify-content: space-between;
  align-items: center;
}
.topNav .content{
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  font-size: 0.35rem;
}
.active{
  font-weight: bolder;
}
</style>