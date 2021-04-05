<template>
  <div class="city-header">
    <router-link to="/">
      <span class="iconfont">&#xe685;</span>
    </router-link>城市选择
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style>
.city-header {
  height: 0.86rem;
  background: #06b3d2;
  font-size: 0.32rem;
  text-align: center;
  color: #fff;
  line-height: 0.86rem;
  position: relative;
}
.city-header .iconfont {
  position: absolute;
  left: 0.2rem;
  color:#fff
}
</style>
