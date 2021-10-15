import axios from 'axios'

const api = process.env.VUE_APP_API
const get_list = `${api}/product/list`
const get_by_category = `${api}/product/getByCategory`
const get_categories = `${api}/category/list`
// const get_product_by_name = `${api}/getByName/`

// const get_images = `${api}/image/get/`

const state = {
    products: [],
    categoriesForUser: [],
}

const getters = {
    products: state => state.products,
    categoriesForUser: state => state.categoriesForUser,
    rootCategoriesForUser: state => {
        return state.categoriesForUser.filter((element) => element.parentId === null)
    },
}

const actions = {
    async loadProducts({commit}) {
        axios
            .get(get_list)
            .then(res => {
                let products = res.data
                commit('SET_PRODUCTS', products)
            })
            .catch(error => {
                console.log(error)
            })
        axios
            .get(get_categories)
            .then(res => {
                let categoriesForUser = res.data
                commit('SET_CATEGORIESFORUSER', categoriesForUser)
            })
            .catch(error => {
                console.log(error)
            })
    },
    async loadProductsByCategory({commit},category){
        axios
            .get(`${get_by_category}/${category}`)
            .then(res => {
                let products = res.data
                commit('SET_PRODUCTS', products)
            })
            .catch(error => {
                console.log(error)
            })
    }
}


const mutations = {
    SET_PRODUCTS(state, payload) {
        state.products = payload
    },
    SET_CATEGORIESFORUSER(state, payload) {
        state.categoriesForUser = payload
    },

}

export default {
    state,
    getters,
    actions,
    mutations
}