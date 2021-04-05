<template>
  <div>
    <HomeHeader />
    <HomeSwiper :swiperList="swiperList" />
    <HomeIcons :iconList="iconList" />
    <HomeDiscount :discountList="discountList" />
    <HomeRecommend :recommendList="recommendList" />
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeDiscount from './components/Discount'
import HomeRecommend from './components/Recommend'

import axios from 'axios'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeDiscount,
    HomeRecommend
  },
  data() {
    return {
      city: '',
      swiperList: [],
      iconList: [],
      discountList: [],
      recommendList: []
    }
  },
  methods: {
    getHomeData() {
      axios.get('/api/index.json').then(res => this.getHomeDataSucc(res.data))
    },
    getHomeDataSucc(res) {
      if (res.ret) {
        let data = res.data
        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.discountList = data.discountList
        this.recommendList = data.recommendList
      }
    }
  },
  mounted() {
    this.getHomeData()
  }
}
</script>
