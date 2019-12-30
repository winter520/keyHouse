import Vue from 'vue'
import Vuex from 'vuex'
/**
 * @description cookies设置
 */
import cookies from '@/libs/cookies'
/**
 * @description 配置文件
 */
import config from '@etc/js/config'
/**
 * @description web3文件
 */
import web3 from '@/libs/web3Util'
// import wallet from './store-wallet.js'
// import exchange from './store-exchange.js'
Vue.use(Vuex)
// console.log(cookies)
// let langEn = require('@/assets/js/language/en')
// console.log(config.modeInit)
const store = new Vuex.Store({
  state: {
    eNode: '',
    address: '',
    token: '',
    safeMode: config.modeInit,
    dayAndNight: '',
    wallet: '',
    language: '',
    serverRPC: ''
    // coininfoArr: [],
    // network: {},
    // coinDollarArr: '',
  },
  modules: {
    // wallet,
    // exchange
  },
  mutations: {
    setEnode (state, data) {
      state.eNode = data
    },
    setAddress (state, data) {
      let info = data.info ? data.info.toString() : ''
      state.address = info
      if (!data.type) {
        cookies.setCookies(config.cookies.address, info)
      }
    },
    setToken (state, data) {
      let info = data.info ? data.info.toString() : ''
      state.token = info
      if (!data.type) {
        cookies.setCookies(config.cookies.token, info)
      }
    },
    setSafeMode (state, data) {
      let info = data.info ? data.info.toString() : config.modeInit
      state.safeMode = info
      if (!data.type) {
        cookies.setCookies(config.cookies.safeMode, info)
      }
    },
    setDayAndNight (state, data) {
      let info = data.info ? data.info.toString() : config.dayAndNight
      // console.log(data)
      // console.log(info)
      state.dayAndNight = info
      if (!data.type) {
        // console.log(info)
        cookies.setCookies('dayAndNight', info, 7)
      }
    },
    setWallet (state, data) {
      // state.wallet = data
      let info = data.info ? data.info : ''
      state.wallet = info
      if (!data.type) {
        cookies.setCookies('wallet', info, 0.1)
      }
    },
    setLanguage (state, data) {
      let info = data.info ? data.info : ''
      state.language = info
      if (!data.type) {
        cookies.setCookies('language', info, 30)
      }
    },
    setServerRPC (state, data) {
      let info = data.info ? data.info : ''
      state.serverRPC = info
      if (!data.type) {
        cookies.setCookies('serverRPC', info, 30)
      }
    },
  },
  actions: {
    getEnode ({commit}) {
      // console.log(this)
      try {
        if (this.state.serverRPC) {
          web3.getEnode().then(res => {
            // console.log(res)
            commit('setEnode', res)
          })
        }
      } catch (error) {
        commit('setEnode', '')
      }
    },
    getAddress ({commit}) {
      cookies.getCookies(config.cookies.address).then(res => {
        // console.log(res)
        let data = { type: 1, info: res}
        commit('setAddress', data)
      })
    },
    getToken ({commit}) {
      cookies.getCookies(config.cookies.token).then(res => {
        // console.log(res)
        let data = { type: 1, info: res}
        commit('setToken', data)
      })
    },
    getSafeMode ({commit}) {
      cookies.getCookies(config.cookies.safeMode).then(res => {
        // console.log(res)
        let data = { type: 1, info: res}
        commit('setSafeMode', data)
      })
    },
    getDayAndNight ({commit}) {
      cookies.getCookies('dayAndNight').then(res => {
        // console.log(res)
        let data = { type: 1, info: res}
        commit('setDayAndNight', data)
      })
    },
    getWallet ({commit}) {
      cookies.getCookies('wallet').then(res => {
        // console.log(res)
        let data = { type: 1, info: res}
        commit('setWallet', data)
      })
    },
    getLanguage ({commit}) {
      cookies.getCookies('language').then(res => {
        // console.log(res)
        let data = { type: 1, info: res}
        commit('setLanguage', data)
      })
    },
    getServerRPC ({commit}) {
      cookies.getCookies('serverRPC').then(res => {
        // console.log(res)
        let url = res ? res : config.serverRPC
        let data = { type: 1, info: url}
        commit('setServerRPC', data)
      })
    }
  }
})

export default store
