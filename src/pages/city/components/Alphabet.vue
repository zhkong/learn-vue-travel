<template>
  <ul class="alphabet-main">
    <li
      class="alphabet"
      v-for="item of citiesListAlphabet"
      :key="item"
      :ref="item"
      @click="handleClick"
      @touchmove="handleTouchMove"
    >
      {{ item }}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'ListAlphabet',
  data() {
    return {
      offsetTop: 0,
      timer: null
    }
  },
  props: {
    citiesListAlphabet: Array
  },
  updated() {
    this.offsetTop = this.$refs['A'][0].offsetTop
  },
  methods: {
    handleClick(e) {
      let letter = e.target.innerText
      this.$emit('change', letter)
    },
    // handleTouchStart() {
    //   console.log('start')
    // },
    handleTouchMove(e) {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      // 防抖？？
      this.timer = setTimeout(() => {
        let clientY = e.touches[0].clientY
        let index = Math.floor((clientY - 73 - this.offsetTop) / 16)
        if (index >= 0 && index <= 21) {
          this.$emit('change', this.citiesListAlphabet[index])
        }
      }, 10)
    }
    // handleTouchEnd() {
    //   console.log('end')
    // }
  }
}
</script>

<style scoped>
.alphabet-main {
  position: absolute;
  top: 1.46rem;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.alphabet {
  width: 0.5rem;
  padding: 0 0.04rem;
  font-size: 0.2rem;
  color: rgb(68, 178, 197);
  line-height: 0.32rem;
}
</style>
