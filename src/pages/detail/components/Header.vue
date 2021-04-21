<template>
  <div>
    <div class="header-back-static iconfont" :style="backOpacityStyle">
      &#xe685;
    </div>
    <div class="header" :style="headerOpacityStyle">
      <router-link to="/" v-slot="{ navigate }" custom>
        <span class="header-back-icon iconfont" @click="navigate"
          >&#xe685;</span
        >
      </router-link>
      <span class="header-text">景点详情</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      headerOpacityStyle: {
        opacity: 0
      },
      backOpacityStyle: {
        opacity: 1
      },
      isShown: true,
      delayTime: null
    }
  },
  methods: {
    handleScroll() {
      if (this.delayTime) {
        clearTimeout(this.delayTime)
      }
      let top = document.documentElement.scrollTop
      this.delayTime = setTimeout(() => {
        if (top > 60) {
          let opacity = top / 140 < 1 ? top / 140 : 1
          this.headerOpacityStyle.opacity = opacity
          this.backOpacityStyle.opacity = 0
        } else {
          this.headerOpacityStyle.opacity = 0
          this.backOpacityStyle.opacity = 1
        }
      }, 16)
    }
  },
  activated() {
    window.addEventListener('scroll', this.handleScroll)
  }
}
</script>

<style scoped>
.header {
  position: fixed;
  color: #fff;
  background: #06b3d2;
  text-align: center;
  line-height: 0.86rem;
  height: 0.86rem;
  left: 0;
  right: 0;
  z-index: 10;
  opacity: 0;
}
.header-back-icon {
  position: absolute;
  left: 0.35rem;
}

.header-back-static {
  position: fixed;
  z-index: 12;
  left: 0.2rem;
  top: 0.2rem;
  padding: 0.15rem;
  border-radius: 0.3rem;
  color: #fff;
  background: rgba(0, 0, 0, 0.6);
}
</style>
