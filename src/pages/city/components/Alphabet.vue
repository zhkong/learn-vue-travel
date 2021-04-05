<template>
  <ul class="alphabet-main">
    <li class="alphabet">A</li>
    <!-- <li class="alphabet">A</li>
    <li class="alphabet">A</li>
    <li class="alphabet">A</li>
    <li class="alphabet">A</li>
    <li class="alphabet">A</li>
    <li class="alphabet">A</li>
    <li class="alphabet">A</li>
    <li class="alphabet">A</li>
    <li class="alphabet">A</li>
    <li class="alphabet">A</li>
    <li class="alphabet">A</li> -->
  </ul>
</template>

<script>
export default {
  name: 'ListAlphabet'
}
</script>

<style scoped>
.alphabet-main {
  position: absolute;
  right: 0.1rem;
  top: 50%;
  transform: translateY(-50%);
}

.alphabet{
  font-size:.2rem;
  margin:.06rem 0;
  color:rgb(68, 178, 197);
}
</style>
