<template>
  <div>
    <div class="gallery-header" @click="handleImageShown">
      <div class="header-image">
        <img :src="imageList[0]" />
      </div>
      <div class="gallery-header-text">
        <span class="text">大连圣亚海洋世界(AAAA景区) </span>
        <span class="image-count iconfont"
          >&#xe612; {{ imageList.length }}</span
        >
      </div>
    </div>
    <gallery
      v-show="isShown"
      :isShown="isShown"
      :imageList="imageList"
      @close="handleImageShown"
    ></gallery>
  </div>
</template>

<script>
import Gallery from 'common/gallery/Gallery'
export default {
  name: 'Detail',
  components: {
    Gallery
  },
  data() {
    return {
      isShown: false,
      imageList: [
        'http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg',
        'http://img1.qunarzz.com/sight/p0/1709/76/7691528bc7d7ad3ca3.img.png_800x800_9ef05ee7.png',
        'https://imgs.qunarzz.com/p/tts7/1705/67/181f8b7a20d74602.jpg_r_390x260x95_6e2fe1ed.jpg'
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

<style scoped>
.gallery-header {
  width: 100%;
  height: 55vw;
  position: relative;
  color: #fff;
}

.gallery-header img {
  width: 100%;
}

.gallery-header-text {
  position: absolute;
  bottom: 0.15rem;
  left: 0;
  right: 0;
  display: flex;
}

.gallery-header-text .text {
  flex: 1;
  padding-left: 0.2rem;
}
.gallery-header-text .image-count {
  padding: 0.05rem 0.2rem;
  background: rgba(23, 23, 23, 0.9);
  border-radius: 0.15rem 0 0 0.15rem;
}

.image-count {
  font-size: 0.3rem;
}
</style>
