<template>
  <div class="wrapper">
    <div class="top">
      <div class="topLeft" v-if="props.musiclist.songs">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-bofang"></use>
        </svg>
        <span>播放全部</span><span class="playTime">({{ props.musiclist.songs.length }})</span>
      </div>
      <div class="topRight">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-xiazai"></use>
        </svg>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-duoxuanliebiao"></use>
        </svg>
      </div>
    </div>
    <div class="list">
      <div class="left">
        <ul>
          <li v-for="(i,index) in props.musiclist.songs" @click="updatePlayList()">
            <span class="Sequences">{{index+1}}</span>
            <div class="musicInfo">
              <span class="title">{{i.name}}</span>
              <div class="songerName">
                <span v-for="songer in i.ar">{{ songer.name }}<span v-if="i.ar.length>1">/</span></span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import store from "@/store";
import {onMounted} from "vue";

const props = defineProps({
  musiclist:{},
})

function updatePlayList(){
  store.commit('updatePlayList',props.musiclist.songs)
}

</script>

<style scoped>
.wrapper{
  box-sizing: border-box;
  width: 100%;
  padding: 0.2rem;
  background-color: #fff;
  border-radius: 15px;
}
.top .icon{
  width: 0.5rem;
  height: 0.5rem;
}
.top{
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: black;
}
.top .topLeft{
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.top .topLeft .playTime{
  margin-left: 2px;
  font-size: 13px;
}
.top .topRight{
  width: 25%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.list li{
  display: flex;
  align-items: baseline;
  width: 100%;

  height: 15px;
}
.list{
  width: 100%;
  height: 45vh;
  margin-top: 0.2rem;
  display: flex;
  justify-content: space-around;
  font-size: 0.3rem;
}
.list .left{
  width: 95%;
  display: flex;
  overflow: hidden;
  overflow-y: auto;
}
.list .left li{
  width: 100%;
  height: 0.9rem;
  white-space: nowrap;
}
.list .icon{
  width: 0.2rem;
  height: 0.2rem;
  fill: darkgray;
}
.list .left .Sequences{
  font-size: 0.3rem;
  margin-right: 0.2rem;
  color: darkgray;
}
.list .left .musicInfo{
  line-height: 0.35rem;
}
.list .left .musicInfo .songerName{
  font-size: 0.2rem;
}
</style>