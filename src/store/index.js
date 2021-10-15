import Vuex from 'vuex';
import products from './modules/products';
import form from './modules/form';
import authentication from './modules/authentication.js';

export default new Vuex.Store({
  modules: {
    products,
    form,
    authentication
  },
  state: {
    itemTest: [],
    cart: [],
    showAccountPage: true,
    changeMode: false,
  },
  mutations: {
    addCartItem(state, item) {
      state.cart.push(item);
    },
    setShowAccountPage(state, value = !state.showAccountPage) {
      state.showAccountPage = value
    },
    setChangeMode(state, value = !state.changeMode) {
      state.changeMode = value
    }
  },
  actions: {
    addCartItem(context, item) {
      context.commit('addCartItem', item)
    },
  },
  getters: {
    itemTest: state => state.itemTest,
    cart: state => state.cart,
    totalInCart: state => state.cart.length,
    showAccountPage: state => state.showAccountPage,
    changeMode: state => state.changeMode,

  }
});