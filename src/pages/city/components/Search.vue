<template>
  <div>
    <div class="city-search">
      <input
        type="text"
        class="city-input"
        placeholder="请输入城市名称"
        v-model="inputValue"
      />
    </div>
    <div class="search-result" v-show="inputValue" ref="result">
      <ul>
        <li
          class="border-bottom"
          v-for="item in searchResult"
          :key="item.id"
          @click="handleCityChange(item.name)"
        >
          {{ item.name }}
        </li>
        <li v-show="hasNoData">未找到该城市</li>
      </ul>
    </div>
  </div>
</template>

<script>
import BetterScroll from 'better-scroll'
export default {
  name: 'CitySearch',
  props: {
    citiesList: Object
  },
  data() {
    return {
      inputValue: '',
      searchResult: [],
      timer: null
    }
  },
  methods: {
    handleCityChange(city) {
      this.$store.commit('cc', city)
      this.$router.push('/')
    }
  },
  computed: {
    hasNoData() {
      return this.searchResult.length === 0
    }
  },
  watch: {
    inputValue() {
      let result = []
      if (this.timer) {
        clearTimeout(this.timer)
      }
      this.timer = setTimeout(() => {
        for (let item in this.citiesList) {
          this.citiesList[item].forEach(city => {
            if (
              city.spell.indexOf(this.inputValue) !== -1 ||
              city.name.indexOf(this.inputValue) !== -1
            ) {
              result.push(city)
            }
          })
        }
      }, 100)
      this.searchResult = result
    }
  },
  mounted() {
    this.scroll = new BetterScroll(this.$refs.result)
  }
}
</script>

<style scoped>
.city-search {
  background: #06b3d2;
  height: 0.6rem;
  padding: 0 0.12rem;
}
.city-search .city-input {
  width: 100%;
  height: 0.5rem;
  line-height: 0.5rem;
  text-align: center;
  border-radius: 0.1rem;
  color: #666;
}
.search-result {
  position: absolute;
  z-index: 1;
  background: #ebebeb;
  top: 1.46rem;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
}
.search-result li {
  background: #fff;
  color: #666;
  line-height: 0.62rem;
  padding: 0 0.2rem;
}
</style>
