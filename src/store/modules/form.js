import axios from 'axios'

const api = 'http://52.187.10.17/orange-it'
const get_colors = `${api}/color/list`
const get_categories = `${api}/category/list`
const get_specs = `${api}/spec/list`

const post_product = `${api}/product/add`
// const put_product = `${api}/product/update`
// const post_image = `${api}/image/add`
// const put_image = `${api}/image/update/`

const state = {
    colors: [],
    categories: [],
    specs: [],
    brands: [
        'Razer',
        'Logitech'
    ],
    setCategories: [],
}


const getters = {
    colors: state => state.colors,
    rootCategories: state => {
        return state.categories.filter((element) => element.parentId === null)
    },
    childCategories: state => (id) => {
        return state.categories.filter((element) => element.parentId === id)
    },
    setCategories: (state, getters) => {
        return getters.rootCategories.map((category) => {
            let upperId = category.id
            return {
                id: category.id,
                category: category.category,
                child: [state.categories.filter((category) => {
                    return category.parentId == upperId
                })],
                active: false
            }
        })
    },
    categories: state => state.categories,
    brands: state => state.brands,
    specs: state => state.specs
}

const actions = {
    loadDataForm({
        commit
    }) {
        axios
            .get(get_colors)
            .then(data => {
                let colors = data.data
                commit('SET_COLORS', colors)
            })
            .catch(error => {
                console.log(error)
            })
        axios
            .get(get_categories)
            .then(data => {
                let categories = data.data
                commit('SET_CATEGORIES', categories)
            })
            .catch(error => {
                console.log(error)
            })
        axios
            .get(get_specs)
            .then(data => {
                let specs = data.data
                commit('SET_SPECS', specs)
            })
            .catch(error => {
                console.log(error)
            })
    },

    addProduct(context, product) {
        axios
            .post(post_product, product)
            .then(response => {
                console.log("response: ", response)
            })
            .catch(error => {
                console.log(error)
            })
    }

}


const mutations = {
    SET_COLORS(state, payload) {
        state.colors = payload
    },
    SET_CATEGORIES(state, payload) {
        state.categories = payload
    },
    SET_SPECS(state, payload) {
        state.specs = payload
    },
    SET_SETCATEGORIES(state, payload) {
        state.setCategories = payload
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}