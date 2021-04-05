<template>
  <div class="city-list" ref="wrapper">
    <div>
      <div class="current-city">
        <div class="small-title">当前城市</div>
        <div class="all-city-list">
          <div class="current-city-name list-city-button">北京</div>
        </div>
      </div>
      <div class="hot-city">
        <div class="small-title">热门城市</div>
        <div class="all-city-list">
          <div class="hot-city-name list-city-button">北京</div>
        </div>
      </div>
      <div class="city-alphabet">
        <div class="small-title">A</div>
        <div class="all-city-list">
          <div class="all-city-name list-city-list border-bottom">阿拉尔</div>
          <!-- <div class="all-city-name list-city-list border-bottom">阿拉尔</div>
          <div class="all-city-name list-city-list border-bottom">阿拉尔</div>
          <div class="all-city-name list-city-list border-bottom">阿拉尔</div>
          <div class="all-city-name list-city-list border-bottom">阿拉尔</div>
          <div class="all-city-name list-city-list border-bottom">阿拉尔</div>
          <div class="all-city-name list-city-list border-bottom">阿拉尔</div>
          <div class="all-city-name list-city-list border-bottom">阿拉尔</div>
          <div class="all-city-name list-city-list border-bottom">阿拉尔</div>
          <div class="all-city-name list-city-list border-bottom">阿拉尔</div>
          <div class="all-city-name list-city-list border-bottom">阿拉尔</div>
          <div class="all-city-name list-city-list border-bottom">阿拉尔</div>
          <div class="all-city-name list-city-list border-bottom">阿拉尔</div>
          <div class="all-city-name list-city-list border-bottom">阿拉尔</div>
          <div class="all-city-name list-city-list border-bottom">阿拉尔</div>
          <div class="all-city-name list-city-list border-bottom">阿拉尔</div>
          <div class="all-city-name list-city-list border-bottom">阿拉尔</div>
          <div class="all-city-name list-city-list border-bottom">阿拉尔</div>
          <div class="all-city-name list-city-list border-bottom">阿拉尔</div>
          <div class="all-city-name list-city-list border-bottom">阿拉尔</div>
          <div class="all-city-name list-city-list border-bottom">阿拉尔</div>
          <div class="all-city-name list-city-list border-bottom">阿拉尔</div>
          <div class="all-city-name list-city-list border-bottom">阿拉尔</div>
          <div class="all-city-name list-city-list border-bottom">阿拉尔</div>
          <div class="all-city-name list-city-list border-bottom">阿拉尔</div>
          <div class="all-city-name list-city-list border-bottom">阿拉尔</div>
          <div class="all-city-name list-city-list border-bottom">阿拉尔</div>
          <div class="all-city-name list-city-list border-bottom">阿拉尔</div>
          <div class="all-city-name list-city-list border-bottom">阿拉尔</div>
          <div class="all-city-name list-city-list border-bottom">阿拉尔</div>
          <div class="all-city-name list-city-list border-bottom">阿拉尔</div>
          <div class="all-city-name list-city-list border-bottom">阿拉尔</div>
          <div class="all-city-name list-city-list border-bottom">阿拉尔</div>
          <div class="all-city-name list-city-list border-bottom">阿拉尔</div>
          <div class="all-city-name list-city-list border-bottom">阿拉尔</div>
          <div class="all-city-name list-city-list border-bottom">阿拉尔</div>
          <div class="all-city-name list-city-list border-bottom">阿拉尔</div>
          <div class="all-city-name list-city-list border-bottom">阿拉尔</div>
          <div class="all-city-name list-city-list border-bottom">阿拉尔</div>
          <div class="all-city-name list-city-list border-bottom">阿拉尔</div>
          <div class="all-city-name list-city-list border-bottom">阿拉尔</div>
          <div class="all-city-name list-city-list border-bottom">阿拉尔</div>
          <div class="all-city-name list-city-list border-bottom">阿拉尔</div>
          <div class="all-city-name list-city-list border-bottom">阿拉尔</div>
          <div class="all-city-name list-city-list border-bottom">阿拉尔</div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BetterScroll from 'better-scroll'
export default {
  name: 'CityList',
  mounted() {
    this.scroll = new BetterScroll(this.$refs.wrapper)
  }
}
</script>

<style scoped>
.city-list {
  overflow: hidden;
  position: absolute;
  left: 0;
  right: 0;
  top: 1.46rem;
  bottom: 0;
}
.small-title {
  background: #edf5f9;
  line-height: 0.4rem;
  font-size: 0.18rem;
  color: #777;
  font-weight: bold;
  padding-left: 0.2rem;
}

.current-city .small-title {
  line-height: 0.6rem;
}
.hot-city .small-title {
  line-height: 0.6rem;
}

.list-city-list {
  color: #555;
  line-height: 0.75rem;
  padding-left: 0.2rem;
}

.list-city-button {
  color: #555;
  line-height: 0.5rem;
  width: 25%;
  border: 1px #d2dde2 solid;
  text-align: center;
  margin: 0.1rem;
  display: inline-block;
  border-radius: 0.05rem;
}

.all-city-list {
  padding-left: 0.2rem;
  margin: 0.2rem 0;
}
</style>
