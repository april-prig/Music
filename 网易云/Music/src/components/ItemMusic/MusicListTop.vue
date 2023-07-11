<script setup>
import {onMounted} from "vue";
import store from "@/store";

const props = defineProps(['playlist'])




function changeCount(num){
  if (num>=10000000){
    return (num/100000).toFixed(2)+'亿'
  }else if(num>=10000){
    return (num/10000).toFixed(2)+'万'
  }else if (num>=1000){
    return num
  }else{
    return num = 0
  }
}

console.log('hello')

</script>

<template>
  <div class="wrapper">
    <div class="top">
      <img :src="props.playlist.coverImgUrl" alt="">
      <div class="topLeft">
        <svg class="icon" aria-hidden="true" @click="$router.go(-1)">
          <use xlink:href="#icon-zuojiantou"></use>
        </svg>
        <span>歌单</span>
      </div>
      <div class="topRight">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-sousuo1"></use>
        </svg>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-yuandiancaidan"></use>
        </svg>
      </div>
    </div>
    <div class="main" v-if="props.playlist.creator">
      <div class="maintop">
        <img :src="props.playlist.creator.backgroundUrl" alt="">
        <div class="info">
          <span>{{ props.playlist.name }}</span>
          <div class="creator">
            <img :src="props.playlist.creator.avatarUrl" alt="">
            <span class="creatorName">{{props.playlist.creator.nickname}}</span>
            <span>+关注</span>
          </div>
          <div class="tag">
            <span v-for="i in props.playlist.tags">{{ i }}></span>
          </div>
        </div>
      </div>
      <div class="description">
        <span>{{ props.playlist.description }}</span>
        <span>></span>
      </div>
      <div class="cz">
        <div>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-fenxiang1"></use>
          </svg>
          <span>{{ changeCount(props.playlist.shareCount) }}</span>
        </div>
        <div>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-liuyan"></use>
          </svg>
          <span>{{ changeCount(props.playlist.commentCount) }}</span>
        </div>
        <div>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-shoucangdaogedan"></use>
          </svg>
          <span>{{ changeCount(props.playlist.subscribedCount) }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.top{
  box-sizing: border-box;
  width: 100%;
  padding: 0.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  color: #fff;
}
.top .icon{
  width: 0.5rem;
  height: 0.5rem;
  fill: #fff;
}
.topLeft{
  width: 25%;
  height:100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.topLeft span{
  font-size: 0.4rem;
}
.topRight{
  width: 25%;
  height:100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.top img{
  width: 100%;
  position: absolute;
  left:0;
  top: 0;
  z-index: -1;
  filter: blur(0.2rem);
}
.main{
  width: 100%;
  padding: 0.3rem;
  margin-top: 0.1rem;
  color: #fff;
  box-sizing: border-box;
}
.main .info{
  width: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-size: 14px;
}
.main .maintop{
  display: flex;
}
.main .info{
  margin-left: 0.15rem;
  width: 55%;
}
.main .maintop img{
  width: 30%;
  border-radius: 0.2rem;
}
.main .maintop .creator{
  margin-top: 0.07rem;
  display: flex;
  /*justify-content: safe;*/
  align-items: center;
  font-size: 0.1rem;
  color: darkgray;
}
.main .maintop .creator span{
  padding-left: 0.05rem;
}
.main .maintop .creator span:last-child{
  margin-left: 0.05rem;
  font-size: 0.12rem;
  border-radius: 0.15rem;
  /*background-color: rgba(0,0,0,.2);*/
}
.main .creator img{
  width: 0.45rem;
  height: 0.45rem;
  border-radius: 50%;
}
.main .maintop .tag{
  margin-top: 0.07rem;
  font-size: 0.1rem;
}
.main .maintop .tag span{
  margin-right: 0.09rem;
}
.description{
  margin-top: 0.2rem;
  /*overflow: hidden;*/
  font-size: 0.1rem;
  display: flex;
  align-items: center;
}
.description span:first-child{
  display: block;
  width: 87%;
  overflow: hidden;
  color: darkgray;
  white-space: nowrap;
  margin-right: 0.09rem;
}
.main .cz{
  margin-top: 15px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  text-align: center;
}
.main .cz div{
  width: 30%;
  border: 1px solid black;
  border-radius: 0.25rem;
  font-size: 0.1rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}
.main .cz div:active{
  background-color: brown;
}
.main .cz div:last-child{
  background-color: brown;
}
.main .cz div span{
  text-align: center;
}
.main .cz .icon{
  width: 0.45rem;
  height: 0.45rem;
}
</style>