<template>
  <div>
    <div class="discount-title">当季热门度假</div>
    <div class="discount-root">
      <div class="discount" v-for="item of discountList" :key="item.id">
        <div class="discount-tail">
          <div class="discount-tail-info">
            <div class="discount-plan">{{ item.plan }}</div>
            <div class="discount-method">{{ item.method }}</div>
          </div>
          <img :src="item.imageUrl" alt="" />
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
  data () {
    return {
      discountList: [
        {
          id: '0001',
          plan: '九江-丽江',
          method: '5天自由行',
          content: '含往返机票+4晚住宿',
          price: '¥ 3110',
          imageUrl: 'https://imgs.qunarzz.com/p/p70/1809/e7/4941057a6aae702.jpg_256x160_9fee6ccb.jpg'
        },
        {
          id: '0002 ',
          plan: '九江-三亚',
          method: '6天跟团游',
          content: '含往返机票(含税)+5晚住宿',
          price: '¥ 2580',
          imageUrl: 'https://imgs.qunarzz.com/p/p67/1512/a2/0ebfcd965b9391f7.jpg_256x160_04d5813d.jpg'
        },
        {
          id: '0003',
          plan: '九江-张家界',
          method: '5天跟团行',
          content: '含往返火车票+4晚住宿',
          price: '¥ 2370',
          imageUrl: 'https://imgs.qunarzz.com/sight/p0/1612/14/14bef79602a7780a3.water.jpg_256x160_3424b8ae.jpg'
        },
        {
          id: '0004',
          plan: '九江-武汉',
          method: '6天跟团行',
          content: '含往返火车票+5晚住宿',
          price: '¥ 2029',
          imageUrl: 'https://imgs.qunarzz.com/p/p3/1809/e5/59de4bd338291802.jpg_256x160_98c152cd.jpg'
        }
      ],
      testData: {
        id: '0001',
        plan: '九江-丽江',
        method: '5天自由行',
        content: '含往返机票+4晚住宿',
        price: '¥3110',
        imageUrl: 'https://imgs.qunarzz.com/p/p70/1809/e7/4941057a6aae702.jpg_256x160_9fee6ccb.jpg'
      }
    }
  }
}
</script>

<style scoped>
.discount-title{
  padding:.25rem;
  margin:.2rem 0;
  font-size:1.2em;
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
  height: 0.75rem;
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
