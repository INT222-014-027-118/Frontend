import axios from 'axios'

// const url = 'http://localhost:5000/products';
const url = 'http://52.187.10.17/orange-it/product/list'
// const get_images = `${api}/image/get/`

const state = {
    products: []
}

const getters = {
    products: state => state.products,
}

const actions = {
    async loadProducts({
        commit
    }) {
        try {
            const response = await axios.get(url)
            commit('SET_PRODUCTS', response.data)
        } catch (error) {
            console.log(error);
        }

        // axios
        //     .get(url)
        //     .then(data => {
        //         let products = data.data
        //         commit('SET_PRODUCTS', products)
        //     })
        //     .catch(error => {
        //         console.log(error)
        //     })
    }
}


const mutations = {
    SET_PRODUCTS(state, payload) {
        state.products = payload
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}