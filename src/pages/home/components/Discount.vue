<template>
  <div>
    <div class="discount-title">当季热门度假</div>
    <div class="discount-root">
      <div class="discount" v-for="item of discountList" :key="item.id">
        <div class="discount-tail">
          <div class="discount-tail-info">
            <div class="discount-plan">{{ item.plan }}</div>
          </div>
          <img :src="item.imageUrl" alt />
        </div>
        <div class="discount-info">
          <div class="discount-content">{{ item.content }}</div>
          <div class="discount-price">{{ item.price }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeDiscount',
  props: {
    discountList: Array
  }
}
</script>

<style scoped>
.discount-title {
  padding: 0.25rem;
  margin: 0.2rem 0;
  font-size: 1.2em;
  font-weight: bold;
  background: #f1f1f1;
}

.discount-root {
  display: flex;
  width: 98%;
  flex-wrap: wrap;
  margin: auto;
}

.discount {
  width: 47vw;
  margin: 0 auto;
}
.discount .discount-tail {
  width: 100%;
  position: relative;
}
.discount .discount-tail .discount-tail-info {
  background: rgba(0, 0, 0, 0.75);
  position: absolute;
  display: block;
  flex-direction: column;
  width: 1.75rem;
  height: 0.45rem;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
}
.discount .discount-tail .discount-tail-info .discount-plan {
  color: white;
  font-size: 0.28rem;
  margin: 0.06rem 0;
}
.discount .discount-tail .discount-tail-info .discount-method {
  color: #ffde00;
  font-size: 0.24rem;
}
.discount .discount-tail img {
  width: 100%;
  border-radius: 0.15rem;
}
.discount .discount-info {
  padding-left: 0.12rem;
}
.discount .discount-info .discount-content {
  margin: 0.1rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.discount .discount-info .discount-price {
  font-size: 0.36rem;
  font-weight: bold;
  color: #ff7400;
}
</style>
