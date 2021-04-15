<template>
  <div class="gallery-banner" @click="handleImageShown">
    <div class="banner-image">
      <img :src="imageList[0]" />
    </div>
    <div class="gallery-banner-text">
      <span class="text">大连圣亚海洋世界(AAAA景区) </span>
      <span class="image-count iconfont">&#xe612; {{ imageList.length }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Banner',
  props: {
    imageList: Array
  },
  methods: {
    handleImageShown() {
      this.$emit('shown')
    }
  }
}
</script>

<style scoped>
.gallery-banner {
  width: 100%;
  height: 55vw;
  position: relative;
  color: #fff;
}

.gallery-banner img {
  width: 100%;
}

.gallery-banner-text {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  padding: 0.15rem 0;
  background: linear-gradient(top, transparent, rgba(0, 0, 0, 0.9));
}

.gallery-banner-text .text {
  flex: 1;
  padding-left: 0.2rem;
}
.gallery-banner-text .image-count {
  padding: 0.05rem 0.2rem;
  background: rgba(23, 23, 23, 0.9);
  border-radius: 0.15rem 0 0 0.15rem;
}

.image-count {
  font-size: 0.3rem;
}
</style>
