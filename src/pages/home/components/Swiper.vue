<template>
  <div class="swiper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item of swiperList" :key="item.id"
        ><img class="image-swiper" :src="item.imageUrl" />\
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        autoplay: 3000,
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList: [
        {
          id: '001',
          imageUrl: 'https://source.qunarzz.com/site/images/wns/20210316_qunar_dujia_homepage_750x192_2.jpg'
        },
        {
          id: '002',
          imageUrl: 'https://source.qunarzz.com/site/images/wns/20210319_qunar_dujia_homepage_750_192_3.jpg'
        },
        {
          id: '003',
          imageUrl: 'https://source.qunarzz.com/site/images/wns/20210313_qunar_dujia_750x192_6.jpg'
        }
      ]
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
  padding-bottom: 25.6%;
  background: #eee;
}

.image-swiper {
  width: 100%;
}
</style>
