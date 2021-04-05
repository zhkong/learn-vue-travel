<template>
  <div class="swiper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="image-swiper" :src="item.imageUrl" />\
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    swiperList: Array
  },
  data() {
    return {
      swiperOption: {
        autoplay: 3000,
        pagination: '.swiper-pagination',
        loop: true
      }
    }
  }
}
</script>

<style scoped>
.swiper {
  width: 100%;
  /* height:25.6vw; 防止图片没有加载成功后面内容抖动。删除以下内容他用这个也可以*/
  height: 0;
  overflow: hidden;
  padding-bottom: 31.25%;
  background: #eee;
}

.image-swiper {
  width: 100%;
}
</style>
