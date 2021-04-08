<template>
  <ul class="alphabet-main">
    <li
      class="alphabet"
      v-for="item of citiesListAlphabet"
      :key="item"
      :ref="item"
      @touchmove="handleTouchMove"
    >
      {{ item }}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'ListAlphabet',
  props: {
    citiesListAlphabet: Array
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
      let clientY = e.touches[0].clientY
      let offsetTop = this.$refs['A'][0].offsetTop
      let index = Math.floor((clientY - 73 - offsetTop) / 16)
      if (index >= 0 && index <= 21) {
        this.$emit('change', this.citiesListAlphabet[index])
      }
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
