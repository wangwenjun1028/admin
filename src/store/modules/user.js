import { getToken, setToken, removeToken } from '@/utils/validata.js';
import { login, getInfo } from '@/api/user.js'

const state = {
    token: getToken(),
    name: '',
    avatar: '',
    introduction: '',
    roles: []
}

const getters = {
    roles: state => state.roles,
    avatar: state => state.avatar
}

const mutations = {
    SET_TOKEN: (state, token) => {
        state.token = token;
    },
    SET_NAME: (state, name) => {
        state.name = name;
    },
    SET_AVATAR: (state, avatar) => {
        state.avatar = avatar;
    },
    SET_INTRODUCTION: (state, introduction) => {
        state.introduction = introduction;
    },
    SET_ROLES: (state, roles) => {
        state.roles = roles;
    }
}
const actions = {
    login({ commit }, userinfo) {
        return new Promise((resolve, reject) => {
            const { username, password } = userinfo;
            login({ username: username.trim(), password: password.trim() }).then(response => {
                // 请求成功的token存放客户端
                commit('SET_TOKEN', response.data)
                setToken(response.data);
                resolve();
            }).catch(err => {
                reject(err)
            })

        })
    },
    getInfo({ commit }) {
        let role = getToken()
        getInfo(role).then((response) => {
            return new Promise((resolve, reject) => {
                let { name, avatar, introduction, roles } = response;
                commit('SET_NAME', name);
                commit('SET_AVATAR', avatar)
                commit('SET_INTRODUCTION', introduction)
                commit('SET_ROLES', roles)
                resolve();
            }).catch(err => {
                reject(err)
            })

        })

    }
}

const user = {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}

export default user;