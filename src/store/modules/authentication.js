import axios from 'axios'

const state = {
    userinfo: null
}

const getters = {
    userinfo: state => state.userinfo,
}

const actions = {
    loadUserData({
        commit
    }) {
        let userId = localStorage.getItem('userId')
        if (userId) {
            axios
                .get(`${process.env.VUE_APP_API}/user/${userId}`)
                .then(response => {
                    commit('SET_USERINFO', response.data)
                })

        }

    }
}


const mutations = {
    SET_USERINFO(state, data) {
        state.userinfo = data
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}