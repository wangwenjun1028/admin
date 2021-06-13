import { constantRoutes } from '@/router/index.js'
const state = {
    constantRoutes
}
const getters = {
    getConstRoute: state => state.constantRoutes
}
const mutations = {


}
const actions = {}
const permisstion = {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
export default permisstion