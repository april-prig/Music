<script setup>

</script>

<template>
  <div class="topNav">
    <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-caidan"></use>
    </svg>
    <div class="content">
      <span>我的</span>
      <span class="active">发现</span>
      <span>云村</span>
      <span>视频</span>
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