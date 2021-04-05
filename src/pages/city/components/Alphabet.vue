<template>
  <div class="alphabet-main">
    <div class="alphabet" v-for="(item, key) of citiesList" :key="key">
      {{ key }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListAlphabet',
  props: {
    citiesList: Object
  }
}
</script>

<style scoped>
.alphabet-main {
  position: absolute;
  right: 0.1rem;
  top: 50%;
  transform: translateY(-50%);
}

.alphabet {
  font-size: 0.2rem;
  margin: 0.06rem 0;
  color: rgb(68, 178, 197);
}
</style>
