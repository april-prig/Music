<template>
  <div class="my-swipe">
    <van-swipe class="van-swipe"  :autoplay="3000" lazy-render>
      <van-swipe-item v-for="image in state.images" :key="image.alg">
        <img :src="image.pic" />
      </van-swipe-item>
    </van-swipe>
  </div>

</template>

<script setup>
import {getBanners} from "@/network/home";

import {onMounted, reactive} from "vue";

const state = reactive({
  images:[
    'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
    'https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg',
  ]
})

onMounted(  ()=>{
  getBanners().then((res)=>{
    state.images = res.banners
  })
})
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.my-swipe{
  width: 100%;
}
.my-swipe .van-swipe{
  width: 100%;
  overflow: hidden;
}

.my-swipe .van-swipe img{
  width: 100%;
  border-radius: 0.15rem;
}
.my-swipe .van-swipe .van-swipe-item{
  padding: 0.2rem;
}
</style>