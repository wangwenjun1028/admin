import request from '@/utils/request.js';
/**
 * params {object} data 登录请求
*/
export function login(data) {
    return request({
        url: '/user/login',
        method: 'post',
        data
    })
}

/**
 * params {string} role 角色
*/
export function getInfo(role) {
    return request({
        url: 'user/getUserInfos',
        method: 'get',
        params: { role }
    })
}