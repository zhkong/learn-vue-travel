<template>
  <swiper :options="swiperOption">
    <swiper-slide v-for="(list, index) of presentList" :key="index">
      <div class="icons">
        <div class="icon" v-for="item in list" :key="item.id">
          <img :src="item.imageUrl" class="icon-image" alt="icon image" />
          <div class="icon-content">
            {{ item.iconContent }}
          </div>
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script>
export default {
  name: 'HomeIcons',
  data () {
    return {
      swiperOption: {
        // autoplay: 3000,
        pagination: '.swiper-pagination',
        loop: false
      },
      iconList: [
        {
          id: '0001',
          imageUrl: 'https://s.qunarzz.com/homenode/images/touchheader/hotel.png',
          iconContent: '酒店'
        },
        {
          id: '0002',
          imageUrl: 'https://s.qunarzz.com/homenode/images/touchheader/train.png',
          iconContent: '火车票'
        },
        {
          id: '0003',
          imageUrl: 'https://s.qunarzz.com/homenode/images/touchheader/flight.png',
          iconContent: '机票'
        },
        {
          id: '0004',
          imageUrl: 'https://s.qunarzz.com/homenode/images/touchheader/package.png',
          iconContent: '度假'
        },
        {
          id: '0005',
          imageUrl: 'https://s.qunarzz.com/homenode/images/touchheader/piao.png',
          iconContent: '景点门票'
        },
        {
          id: '0006',
          imageUrl: 'https://s.qunarzz.com/homenode/images/touchheader/flight.png',
          iconContent: '机票'
        },
        {
          id: '0007',
          imageUrl: 'https://s.qunarzz.com/homenode/images/touchheader/package.png',
          iconContent: '度假'
        },
        {
          id: '0008',
          imageUrl: 'https://s.qunarzz.com/homenode/images/touchheader/piao.png',
          iconContent: '景点门票'
        }
      ]
    }
  },
  computed: {
    presentList () {
      let tempList = []
      this.iconList.forEach((item, index) => {
        if (index % 5 === 0) {
          tempList.push([])
        }
        tempList[Math.floor(index / 5)].push(item)
      })
      return tempList
    }
  }
}
</script>

<style scoped>
.icons {
  margin: 0 auto;
  width: 96%;
  height: 25vw;
  /* overflow: hidden;
  padding-bottom: 25%; */
  /* background: #eee; */
  display: flex;
  text-align: center;
  align-items: center;
  font-size: 0.12rem;
}

.icons .icon {
  margin: 0 0.22rem;
}

.icons .icon-image {
  height: 1rem;
  margin: 0.12rem 0;
}
</style>
