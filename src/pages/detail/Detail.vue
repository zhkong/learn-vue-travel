<template>
  <div>
    <detail-header />
    <detail-banner :imageList="imageList" @shown="handleImageShown" />
    <gallery
      v-show="isShown"
      :isShown="isShown"
      :imageList="imageList"
      @close="handleImageShown"
    />
    <detail-list :list="list" />
    <div style="color: gray; height: 40rem"></div>
  </div>
</template>

<script>
import Gallery from 'common/gallery/Gallery'
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
export default {
  name: 'Detail',
  components: {
    Gallery,
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data() {
    return {
      isShown: false,
      imageList: [
        'http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg',
        'http://img1.qunarzz.com/sight/p0/1709/76/7691528bc7d7ad3ca3.img.png_800x800_9ef05ee7.png',
        'https://imgs.qunarzz.com/p/tts7/1705/67/181f8b7a20d74602.jpg_r_390x260x95_6e2fe1ed.jpg'
      ],
      list: [
        {
          title: '成人票',
          children: [
            {
              title: '成人三馆联票',
              children: [
                {
                  title: '成人三馆联票 - a场地'
                },
                {
                  title: '成人三馆联票 - b场地'
                }
              ]
            },
            {
              title: '成人五馆联票'
            }
          ]
        },
        {
          title: '学生票',
          children: [
            {
              title: '学生三馆联票'
            },
            {
              title: '学生五馆联票'
            }
          ]
        },
        { title: '儿童票' },
        { title: '特价票' }
      ]
    }
  },
  methods: {
    handleImageShown() {
      this.isShown = !this.isShown
    }
  }
}
</script>

<style scoped></style>
