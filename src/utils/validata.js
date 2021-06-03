/**
 * params {string} str
 * params {boolean}
*/
export function validUsername(str) {
    let username = ['admin', 'editor']
    let result = username.some(item => {
        return item == str;
    })
    return result
}

const tokenKey = 'Admin-Token'
/**
 * params {string} token
*/
export function getToken() {
    return sessionStorage.getItem(tokenKey);
}

export function setToken(token) {
    sessionStorage.setItem(tokenKey, token)
}
export function clearToken() {
    sessionStorage.clear()
}