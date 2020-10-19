import Vue from "vue"
import Vuex from "vuex"
import mutations from "./mutations"
import actions from "./actions"
import getters from "./getters"

Vue.use(Vuex)

const state = {
    cartList:[],
}

const store = new Vuex.Store({
    state,
    // 唯一的目的就是修改state中的状态
    // 做的事情尽可能唯一
    mutations,
    actions,
    getters,
})

export default store;