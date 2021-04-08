import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    city: '锡林郭勒盟'
  },
  // actions: {
  //   changeCity(ctx, city) {
  //     ctx.commit('cc', city)
  //   }
  // },
  mutations: {
    cc(state, city) {
      state.city = city
    }
  }
})
