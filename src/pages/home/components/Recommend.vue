<template>
  <div class="recommend-root">
    <div class="recommend" v-for="item of recommendList" :key="item.id">
      <div class="recommend-tail">
        <div class="recommend-tail-info">
          <div class="recommend-plan">{{ item.plan }}</div>
          <div class="recommend-method">{{ item.method }}</div>
        </div>
        <img :src="item.imageUrl" alt="" />
      </div>
      <div class="recommend-info">
        <div class="recommend-content">{{ item.content }}</div>
        <div class="recommend-price">{{ item.price }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      recommendList: [
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
/* @import './temp.css'; */
.recommend-root {
  display: flex;
  width: 98%;
  flex-wrap: wrap;
  margin: auto;
}

.recommend {
  width: 47vw;
  margin: 0 auto;
}
.recommend .recommend-tail {
  width: 100%;
  position: relative;
}
.recommend .recommend-tail .recommend-tail-info {
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
.recommend .recommend-tail .recommend-tail-info .recommend-plan {
  color: white;
  font-size: 0.28rem;
  margin: 0.06rem 0;
}
.recommend .recommend-tail .recommend-tail-info .recommend-method {
  color: #ffde00;
  font-size: 0.24rem;
}
.recommend .recommend-tail img {
  width: 100%;
  border-radius: 0.15rem;
}
.recommend .recommend-info {
  padding-left: 0.12rem;
}
.recommend .recommend-info .recommend-content {
  margin: 0.1rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.recommend .recommend-info .recommend-price {
  font-size: 0.36rem;
  font-weight: bold;
  color: #ff7400;
}
</style>
