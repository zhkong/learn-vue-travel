<template>
  <div>
    <div class="recommend-title">
      <svg
        t="1617540294534"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="3579"
        width="19"
        height="19"
      >
        <path
          d="M709.12 196.266667A250.453333 250.453333 0 0 0 512 292.053333 250.88 250.88 0 0 0 64 448c0 187.093333 448 465.066667 448 465.066667S960 635.093333 960 448A251.093333 251.093333 0 0 0 709.12 196.266667z"
          fill="#F44336"
          p-id="3580"
        /></svg
      >猜你喜欢
    </div>
      <div
        tag="div"
        class="recommend-root border-bottom"
        v-for="item of recommendList"
        :key="item.id"
        :to="'/detail/' + item.id"
        @click="handleJumpDetail(item.id)"
      >
        <router-link :to="'/detail/' + item.id" custom v-slot="{ navigate }">
        <div class="recommend" @click="navigate">
          <div class="recommend-image">
            <div class="recommend-bookable" v-if="item.bookable">可定明日</div>
            <img :src="item.imageUrl" alt />
          </div>
          <div class="recommend-plan">{{ item.plan }}</div>
          <div class="recommend-comment">{{ item.comment }}</div>
          <div class="recommend-introduction">
            <span class="rmb">¥</span>
            <span class="recommend-price">{{ item.price }}</span
            >起
            <span class="recommend-location">{{ item.location }}</span>
          </div>
        </div>
        </router-link>
      </div>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    recommendList: Array
  },
  methods: {
    handleJumpDetail(id) {
      console.log(id)
    }
  }
}
</script>

<style scoped>
svg {
  padding: 0 0.1rem 0 0;
  vertical-align: bottom;
}

.recommend-title {
  padding: 0.25rem;
  margin: 0.2rem 0;
  font-size: 1.2em;
  font-weight: bold;
  background: #f1f1f1;
}

.recommend-root {
  height: 2.4rem;
}
.recommend-root .recommend {
  height: 2rem;
}
.recommend-root .recommend .recommend-image {
  height: 2rem;
  float: left;
  margin: 0.2rem;
}
.recommend-root .recommend .recommend-image img {
  height: 100%;
}
.recommend-root .recommend .recommend-plan {
  font-size: 0.32rem;
  font-weight: bold;
  padding: 0.4rem 0 0.2rem 0.5rem;
}
.recommend-root .recommend .recommend-comment {
  font-size: 0.21rem;
  color: #454;
  padding: 0.2rem 0.5rem;
}
.recommend-root .recommend .recommend-introduction {
  margin: 0.15rem 0.3rem;
}
.recommend-root .recommend .recommend-introduction .recommend-price {
  font-size: 0.4rem;
  color: #ff8300;
}
.recommend-root .recommend .recommend-introduction .recommend-location {
  float: right;
  font-size: 0.2rem;
}

.recommend-bookable {
  background-image: url('https://img1.qunarzz.com/piao/fusion/1802/52/b9080e45b69b4f02.png');
  background-repeat: no-repeat;
  background-size: 100%;
  position: absolute;
  color: #fff;
  font-size: 0.2rem;
  height: 0.5rem;
  padding: 0.05rem 0 0 0.02rem;
}

.rmb {
  color: #ff8300;
}
</style>
