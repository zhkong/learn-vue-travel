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
import { mapState } from 'vuex'

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
      lastCity: '',
      swiperList: [],
      iconList: [],
      discountList: [],
      recommendList: []
    }
  },
  computed: {
    ...mapState(['city'])
  },
  methods: {
    getHomeData() {
      axios
        .get(`/api/index.json?city=${this.city}`)
        .then(res => this.getHomeDataSucc(res.data))
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
    this.lastCity = this.city
    this.getHomeData()
  },
  activated() {
    if (this.lastCity !== this.city) {
      this.lastCity = this.city
      this.getHomeData()
    }
  }
}
</script>
