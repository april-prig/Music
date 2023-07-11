<script setup>
import {reactive,onMounted} from "vue";

import {getMusicList} from "@/network/home";

const state = reactive({
  musicList:[
    'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
    'https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg',
  ]
})

onMounted(()=>{
  getMusicList(9).then((res)=>{
    state.musicList = res.result
  })
})

function changeCount(num){
  if(num=>10000000){
    return (num/10000000).toFixed(1)+'亿'
  }else if(num=>10000){
    return (num/10000).toFixed(1) + '万'
  }else if(num=>1000){
    return (num/1000)
  }
}

import {useRoute,useRouter} from "vue-router";
const route = useRoute()
const router = useRouter()
function toItemMusic(id){
  router.push({
    path:'/ItemMusic',
    query:{
      id
    }
  })
}

</script>

<template>
  <div class="musicList">
    <div class="listTop">
      <h2>推荐歌单></h2>
      <span>查看更多</span>
    </div>
    <div class="listMain">
      <van-swipe width="140" :loop="false" :show-indicators="false" class="list">
        <van-swipe-item style="width: 2.3rem" v-for="i in state.musicList" :key="i.id" class="listItem" @click="toItemMusic(i.id)">
          <img style="width: 2.1rem" :src="i.picUrl" alt="">
          <span>{{i.name}}</span>
          <div class="playCount">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-bofang1"></use>
            </svg>
            <span>{{ changeCount(i.playCount) }}</span>
          </div>
          <div class="listIcon">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-bofang1"></use>
            </svg>
          </div>
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>

<style scoped>
.musicList{
  width: 100%;
  margin-top: 0.05rem;
  box-sizing: border-box;
  padding: 10px;
}
.listTop{
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.listTop h2{
  font-size: 0.2rem;
}
.listTop span{
  box-sizing: border-box;
  padding: 0.03rem;
  font-size: 0.2rem;
  display: block;
  /*border: 1px solid #a6a3a3;*/
  /*border-radius: 10px;*/
  color: darkgray;
}
.listTop span:active{
  color: brown;
}
.listTop .icon{
  width: 0.2rem;
  height: 0.2rem;
}
.listMain{
  margin-top: 0.1rem;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
}
.listMain .list{
  width: 100%;
}
.listMain .listItem{
  width: 110px;
  /*box-sizing: border-box;*/
  position: relative;

}
.listMain .listItem .listIcon{
  width: 0.15rem;
  height: 0.15rem;
  position: absolute;
  right: 0.35rem;
  bottom: 1.5rem;
}
.listMain .listItem .listIcon .icon{
  width: 10px;
  height: 10px;
  margin-right: 5px;
}
.listMain .listItem .playCount{
  display: flex;
  position: absolute;
  top: 0.1rem;
  right: 0.35rem;
  color: #fff;
}
.listMain .listItem .playCount .icon{
  width: 0.2rem;
  height: 0.2rem;
}
.listMain .listItem span{
  font-size: 0.28rem;
  line-height: 0.25rem;
}
.listMain .listItem img{
  width: 1rem;
  border-radius: 0.1rem;
  /*box-shadow: 10px 10px 5px #888888;*/
}
</style>