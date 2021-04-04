<template>
  <div>
    <HomeHeader />
    <HomeSwiper />
    <HomeIcons />
    <HomeDiscount />
    <HomeRecommend />
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeDiscount from './components/Discount'
import HomeRecommend from './components/Recommend'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeDiscount,
    HomeRecommend
  }
}
</script>
