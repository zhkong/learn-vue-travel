<template>
  <div>
    <div
      v-for="(item, index) in list"
      :key="index"
      class="item-title border-bottom"
    >
      <span class="item-title-icon"></span>
      <span class="item-title-text">{{ item.title }}</span>
      <div v-if="item.children">
        <detail-list
          :list="item.children"
          class="item-children border-bottom"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailList',
  props: {
    list: Array
  }
}
</script>

<style scoped>
.item-title {
  padding: 0 0.3rem;
  line-height: 0.64rem;
}

.item-title-icon {
  display: inline-block;
  height: 0.36rem;
  width: 0.36rem;
  background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -0.45rem
    no-repeat;
  background-size: 0.4rem;
  line-height: 0.36rem;
}

.item-title-icon::before {
  content: 'content';
  font-size: 0;
}

.item-title-text {
  display: inline-block;
  height: 0.36rem;
  line-height: 0.36rem;
  padding-left: 0.1rem;
}

.item-children {
  padding-left: 0.05rem;
}
</style>
