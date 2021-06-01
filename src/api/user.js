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