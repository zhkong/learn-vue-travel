<template>
  <div class="city-list" ref="wrapper">
    <div>
      <div class="current-city">
        <div class="small-title">当前城市</div>
        <div class="all-city-list">
          <div class="current-city-name list-city-button">
            {{ this.city }}
          </div>
        </div>
      </div>
      <div class="hot-city">
        <div class="small-title">热门城市</div>
        <div class="all-city-list">
          <div
            class="hot-city-name list-city-button"
            v-for="city in hotCitiesList"
            :key="city.id"
            @click="handleCityChange(city.name)"
          >
            {{ city.name }}
          </div>
        </div>
      </div>
      <div
        class="city-alphabet"
        v-for="(allItems, key) of citiesList"
        :key="key"
        :ref="key"
      >
        <div class="small-title">{{ key }}</div>
        <div class="all-city-list">
          <div
            class="all-city-name list-city-list border-bottom"
            v-for="item of allItems"
            :key="item.id"
            @click="handleCityChange(item.name)"
          >
            {{ item.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BetterScroll from 'better-scroll'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'CityList',
  props: {
    citiesList: Object,
    hotCitiesList: Array,
    letter: String
  },
  methods: {
    handleCityChange(city) {
      this.ChangeCity(city)
      this.$router.push('/')
    },
    ...mapMutations({
      ChangeCity: 'cc'
    })
  },
  watch: {
    letter() {
      let element = this.$refs[this.letter][0]
      this.scroll.scrollToElement(element)
    }
  },
  computed: {
    ...mapState(['city'])
  },
  mounted() {
    // this.$nextTick(function () {
    this.scroll = new BetterScroll(this.$refs.wrapper)
    // })
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
