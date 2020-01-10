import Vue from 'vue'
import Vuex from 'vuex'

import baseMap from './modules/baseMap'

Vue.use(Vuex)

// 创建store
const store = new Vuex.Store({
    modules: {
        baseMap
    }
})

export default store