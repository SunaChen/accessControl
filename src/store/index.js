import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state ={
  roles:''

}

const actions ={
  addRoles({commite},{roles}){
    commite('addRoles',{roles})
  }

}

const mutations ={
  addRoles(state,{roles}){
    state.roles = roles
  }

}

const getters = {
  gettersRoles(state){
    state.roles
  }

}





export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})
