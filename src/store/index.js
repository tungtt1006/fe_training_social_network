import Vue from 'vue'
import Vuex from 'vuex'

// Import modules
import auth from './auth/'

Vue.use(Vuex)

const storeData = {
    modules: {
        auth
    }
}
const store = new Vuex.Store(storeData)

export default store
