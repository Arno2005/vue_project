import Vue from 'vue'
import Vuex from 'vuex';
import products from "./modules/products";
import auth from "./modules/auth";
Vue.use(Vuex);

export default new Vuex.Store({
    state: {},
    actions: {},
    getters: {},
    mutations: {},
    modules: {
        auth: auth,
        products: products
    }
})
