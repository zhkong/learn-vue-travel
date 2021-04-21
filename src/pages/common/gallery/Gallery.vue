<template>
  <div class="gallery-extended" v-show="isShown" @click.self="handleImageClose">
    <swiper ref="gallery-swiper" :options="swiperOptions">
      <swiper-slide v-for="item of imageList" :key="item">
        <img :src="item" alt="gallery image" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'Gallery',
  props: {
    isShown: Boolean,
    imageList: Array
  },
  data() {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction'
      }
    }
  },
  methods: {
    handleImageClose() {
      this.$emit('close')
    }
  }
}
</script>

<style>
.gallery-extended {
  display: flex;
  align-items: center;
  position: absolute;
  z-index: 99;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  background: #000;
  height: 100%;
}
.gallery-extended img {
  width: 100vw;
  height: 100vw;
  object-fit: cover;
}
.swiper-pagination {
  color: #fff;
  position: absolute;
  /* bottom: 10%; */
}
</style>
