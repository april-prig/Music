<script setup>

</script>

<template>
  <div class="iconList">
    <div class="iconItem">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-meirituijian"></use>
      </svg>
      <span>每日推荐</span>
    </div>
    <div class="iconItem">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-shouyinji"></use>
      </svg>
      <span>私人漫游</span>
    </div>
    <div class="iconItem">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-ziyuan20"></use>
      </svg>
      <span>歌单</span>
    </div>
    <div class="iconItem">
    <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-paihangbang"></use>
    </svg>
    <span>排行榜</span>
  </div>
    <div class="iconItem">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-shu"></use>
      </svg>
      <span>有声书</span>
    </div>
  </div>
</template>

<style scoped>
.icon {
  width: 0.6rem;
  height: 0.6rem;
  text-align: center;
}
.iconList{
  width: 100%;
  display: flex;
  margin-top: 5px;
  justify-content: space-around;
  align-items: center;
  text-align: center;
}
.iconList .iconItem{
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 0.25rem;
}
.iconList .iconItem span{
  margin-top: 5px;
}
</style>