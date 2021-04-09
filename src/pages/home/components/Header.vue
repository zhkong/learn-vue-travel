<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont">&#xe685;</span>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe67d;</span>
      输入城市/游玩主题
    </div>
    <router-link to="/city">
      <div class="header-right">
        {{ this.city }}
        <span class="iconfont">&#xe688;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'HomeHeader',
  computed: {
    ...mapState(['city'])
  }
}
</script>

<style>
/* scoped ?*/
html {
  --main-color: #06b3d2;
}

.header {
  color: #fff;
  line-height: 0.86rem;
  background-color: var(--main-color);
  display: flex;
}
.header .header-input {
  margin: auto 0.1rem;
  background: #fff;
  color: #ccc;
  flex: 1;
  border-radius: 0.1rem;
  height: 0.64rem;
  line-height: 0.6rem;
  align-items: center;
  padding-left: 0.2rem;
}
.header .header-left {
  width: 0.64rem;
  float: left;
  display: block;
  text-align: center;
}
.header .header-right {
  min-width: 1.04rem;
  padding: 0 0.1rem;
  float: right;
  text-align: center;
  color: #fff;
  /* white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis; */
}
</style>
