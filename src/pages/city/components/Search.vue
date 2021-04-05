<template>
  <div class="city-search">
    <input type="text" class="city-input" placeholder="请输入城市名称" />
  </div>
</template>

<script>
export default {
  name: 'CitySearch'
}
</script>

<style scoped>
.city-search {
  background: #06b3d2;
  height: 0.6rem;
  padding:0 .12rem;
}
.city-search .city-input {
  width: 100%;
  height: 0.5rem;
  line-height: 0.5rem;
  text-align: center;
  border-radius: 0.1rem;
  color:#666;
}
</style>